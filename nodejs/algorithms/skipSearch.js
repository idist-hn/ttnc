/**
 * SkipSearch - Thuật toán tìm kiếm chuỗi con bằng Skip Search
 * 
 * Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(σ) cho bảng skip của các ký tự
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet
 * 
 * Skip Search là biến thể của Alpha-Skip Search
 * So sánh từ phải sang trái, sử dụng bảng skip để bỏ qua các vị trí không khả thi
 */

class SkipSearch {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Skip Search
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
        
        // Tạo bảng skip: lưu vị trí cuối cùng của mỗi ký tự trong pattern
        const skipTable = new Map();
        for (let i = 0; i < targetLen - 1; i++) {
            skipTable.set(target[i], targetLen - 1 - i);
        }
        
        // Bắt đầu tìm kiếm từ vị trí targetLen-1
        let i = targetLen - 1;
        
        while (i < sourceLen) {
            // So sánh từ phải sang trái
            let j = targetLen - 1;
            let k = i;
            
            while (j >= 0 && source[k] === target[j]) {
                j--;
                k--;
            }
            
            // Nếu j < 0 nghĩa là đã khớp hoàn toàn
            if (j < 0) {
                exist = true;
                index = k + 1;
                return { exist, index };
            }
            
            // Tính toán bước nhảy tiếp theo
            if (skipTable.has(source[i])) {
                i += skipTable.get(source[i]);
            } else {
                // Nếu ký tự không có trong pattern, nhảy toàn bộ độ dài pattern
                i += targetLen;
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
        
        const skipTable = new Map();
        for (let i = 0; i < targetLen - 1; i++) {
            skipTable.set(target[i], targetLen - 1 - i);
        }
        
        let i = targetLen - 1;
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;
        
        while (i < sourceLen) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            let j = targetLen - 1;
            let k = i;
            
            while (j >= 0 && source[k] === target[j]) {
                j--;
                k--;
            }
            
            if (j < 0) {
                exist = true;
                index = k + 1;
                if (onProgress) {
                    onProgress(maxComparisons, maxComparisons);
                }
                return { exist, index };
            }
            
            if (skipTable.has(source[i])) {
                i += skipTable.get(source[i]);
            } else {
                i += targetLen;
            }
            
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
}

module.exports = SkipSearch;

