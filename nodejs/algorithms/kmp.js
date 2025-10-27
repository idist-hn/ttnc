/**
 * KMP - Thuật toán tìm kiếm chuỗi con bằng Knuth-Morris-Pratt
 * 
 * Độ phức tạp thời gian: O(n+m) trong cả trường hợp tốt nhất và xấu nhất
 * Độ phức tạp không gian: O(m) cho failure function array
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * KMP là thuật toán tìm kiếm chuỗi con từ trái sang phải
 * Sử dụng failure function (prefix function) để tránh so sánh lại các ký tự đã khớp
 * Khi có mismatch, nhảy đến vị trí được xác định bởi failure function thay vì reset về đầu
 */

class KMP {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán KMP
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
        
        // Tạo failure function
        const failureFunc = this.buildFailureFunction(target);
        
        // Bắt đầu tìm kiếm
        let j = 0; // Index cho target
        
        for (let i = 0; i < sourceLen; i++) {
            // Nếu ký tự không khớp, sử dụng failure function để nhảy
            while (j > 0 && source[i] !== target[j]) {
                j = failureFunc[j - 1];
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
     * Tạo failure function (prefix function) cho pattern
     * Failure function[i] = độ dài của prefix dài nhất của pattern[0..i]
     * mà cũng là suffix của pattern[0..i]
     */
    static buildFailureFunction(pattern) {
        const patternLen = pattern.length;
        const failureFunc = new Array(patternLen).fill(0);
        
        // failureFunc[0] luôn là 0
        failureFunc[0] = 0;
        
        let j = 0;
        for (let i = 1; i < patternLen; i++) {
            // Nếu ký tự không khớp, sử dụng failure function để nhảy
            while (j > 0 && pattern[i] !== pattern[j]) {
                j = failureFunc[j - 1];
            }
            
            // Nếu ký tự khớp, tăng j
            if (pattern[i] === pattern[j]) {
                j++;
            }
            
            // Gán giá trị failure function
            failureFunc[i] = j;
        }
        
        return failureFunc;
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
        
        const failureFunc = this.buildFailureFunction(target);
        let j = 0;
        
        for (let i = 0; i < sourceLen; i++) {
            while (j > 0 && source[i] !== target[j]) {
                j = failureFunc[j - 1];
            }
            
            if (source[i] === target[j]) {
                j++;
            }
            
            if (j === targetLen) {
                positions.push(i - targetLen + 1);
                j = failureFunc[j - 1];
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
        
        const failureFunc = this.buildFailureFunction(target);
        
        let j = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen;
        
        for (let i = 0; i < sourceLen; i++) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            while (j > 0 && source[i] !== target[j]) {
                j = failureFunc[j - 1];
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

module.exports = KMP;
