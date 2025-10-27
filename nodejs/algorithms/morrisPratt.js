/**
 * Morris-Pratt - Thuật toán tìm kiếm chuỗi con bằng Morris-Pratt
 * 
 * Độ phức tạp thời gian: O(n+m) trong cả trường hợp tốt nhất và xấu nhất
 * Độ phức tạp không gian: O(m) cho prefix function array
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Morris-Pratt là tiền thân của KMP, sử dụng prefix function
 * Khác với KMP ở cách xử lý mismatch: MP sử dụng prefix[j-1] thay vì prefix[j]
 * Điều này làm cho MP đơn giản hơn nhưng có thể kém hiệu quả hơn KMP trong một số trường hợp
 */

class MorrisPratt {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Morris-Pratt
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {Object} {exist: boolean, index: number}
     */
    static search(source, target) {
        let exist = false;
        let index = -1;
        
        const sourceLen = source.length;
        const targetLen = target.length;
        
        // Kiểm tra trường hợp đặc biệt
        if (targetLen === 0) {
            return { exist: true, index: 0 };
        }
        
        if (targetLen > sourceLen) {
            return { exist: false, index: -1 };
        }
        
        // Tạo prefix function
        const prefixFunc = this.buildMPPrefixFunction(target);
        
        // Bắt đầu tìm kiếm
        let j = 0; // Index cho target
        
        for (let i = 0; i < sourceLen; i++) {
            // Nếu ký tự không khớp, sử dụng prefix function để nhảy
            while (j > 0 && source[i] !== target[j]) {
                j = prefixFunc[j - 1];
            }
            
            // Nếu ký tự khớp, tăng j
            if (source[i] === target[j]) {
                j++;
            }
            
            // Nếu đã khớp toàn bộ pattern
            if (j === targetLen) {
                exist = true;
                index = i - targetLen + 1;
                return { exist, index };
            }
        }
        
        return { exist, index };
    }
    
    /**
     * Tạo prefix function cho pattern
     * Prefix function[i] = độ dài của prefix dài nhất của pattern[0..i]
     * mà cũng là suffix của pattern[0..i]
     */
    static buildMPPrefixFunction(pattern) {
        const patternLen = pattern.length;
        const prefixFunc = new Array(patternLen).fill(0);
        
        // prefixFunc[0] luôn là 0
        prefixFunc[0] = 0;
        
        let j = 0;
        for (let i = 1; i < patternLen; i++) {
            // Nếu ký tự không khớp, sử dụng prefix function để nhảy
            while (j > 0 && pattern[i] !== pattern[j]) {
                j = prefixFunc[j - 1];
            }
            
            // Nếu ký tự khớp, tăng j
            if (pattern[i] === pattern[j]) {
                j++;
            }
            
            // Gán giá trị prefix function
            prefixFunc[i] = j;
        }
        
        return prefixFunc;
    }
    
    /**
     * Tìm kiếm tất cả các vị trí xuất hiện của chuỗi con
     */
    static searchAll(source, target) {
        const positions = [];
        const sourceLen = source.length;
        const targetLen = target.length;
        
        if (targetLen === 0 || targetLen > sourceLen) {
            return positions;
        }
        
        const prefixFunc = this.buildMPPrefixFunction(target);
        let j = 0;
        
        for (let i = 0; i < sourceLen; i++) {
            while (j > 0 && source[i] !== target[j]) {
                j = prefixFunc[j - 1];
            }
            
            if (source[i] === target[j]) {
                j++;
            }
            
            if (j === targetLen) {
                positions.push(i - targetLen + 1);
                j = prefixFunc[j - 1];
            }
        }
        
        return positions;
    }
    
    /**
     * Đếm số lần xuất hiện của chuỗi con
     */
    static count(source, target) {
        return this.searchAll(source, target).length;
    }
    
    /**
     * Tìm kiếm với progress tracking
     */
    static searchWithProgress(source, target, onProgress) {
        let exist = false;
        let index = -1;
        
        const sourceLen = source.length;
        const targetLen = target.length;
        
        if (targetLen === 0) {
            return { exist: true, index: 0 };
        }
        
        if (targetLen > sourceLen) {
            return { exist: false, index: -1 };
        }
        
        const prefixFunc = this.buildMPPrefixFunction(target);
        
        let j = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen;
        
        for (let i = 0; i < sourceLen; i++) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            while (j > 0 && source[i] !== target[j]) {
                j = prefixFunc[j - 1];
            }
            
            if (source[i] === target[j]) {
                j++;
            }
            
            if (j === targetLen) {
                exist = true;
                index = i - targetLen + 1;
                if (onProgress) {
                    onProgress(maxComparisons, maxComparisons);
                }
                return { exist, index };
            }
            
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
}

module.exports = MorrisPratt;
