/**
 * Not-So-Naive - Thuật toán tìm kiếm chuỗi con bằng Not-So-Naive
 * 
 * Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(1)
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Not-So-Naive là tối ưu hóa của Brute Force
 * Thay vì so sánh từ trái sang phải, ta so sánh ký tự đầu và cuối trước
 * Nếu ký tự đầu hoặc cuối không khớp, ta có thể bỏ qua vị trí đó ngay
 */

class NotSoNaive {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Not-So-Naive
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
        
        // Lấy ký tự đầu và cuối của pattern
        const firstChar = target[0];
        const lastChar = target[targetLen - 1];
        
        // Bắt đầu tìm kiếm từ trái sang phải
        for (let i = 0; i <= sourceLen - targetLen; i++) {
            // Kiểm tra ký tự đầu
            if (source[i] !== firstChar) {
                continue;
            }
            
            // Kiểm tra ký tự cuối
            if (source[i + targetLen - 1] !== lastChar) {
                continue;
            }
            
            // Nếu ký tự đầu và cuối khớp, so sánh toàn bộ pattern
            let match = true;
            for (let j = 1; j < targetLen - 1; j++) {
                if (source[i + j] !== target[j]) {
                    match = false;
                    break;
                }
            }
            
            // Nếu tất cả ký tự khớp
            if (match) {
                exist = true;
                index = i;
                return { exist, index };
            }
        }
        
        return { exist, index };
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
        
        let offset = 0;
        while (offset <= sourceLen - targetLen) {
            const substring = source.substring(offset);
            const result = this.search(substring, target);
            
            if (result.exist) {
                positions.push(offset + result.index);
                offset += result.index + 1;
            } else {
                break;
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
        
        const firstChar = target[0];
        const lastChar = target[targetLen - 1];
        
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;
        
        for (let i = 0; i <= sourceLen - targetLen; i++) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            if (source[i] !== firstChar) {
                comparisons++;
                continue;
            }
            
            if (source[i + targetLen - 1] !== lastChar) {
                comparisons++;
                continue;
            }
            
            let match = true;
            for (let j = 1; j < targetLen - 1; j++) {
                if (source[i + j] !== target[j]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                exist = true;
                index = i;
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

module.exports = NotSoNaive;

