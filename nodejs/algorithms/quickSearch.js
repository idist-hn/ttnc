/**
 * QuickSearch - Thuật toán tìm kiếm chuỗi con bằng Quick Search
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Quick Search là phiên bản đơn giản hóa của Boyer-Moore
 * Chỉ sử dụng Bad Character Heuristic dựa trên ký tự ngay sau pattern
 * So sánh từ phải sang trái, nhưng xem xét ký tự tại vị trí shift+m (ngay sau pattern)
 */

class QuickSearch {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Quick Search
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
        
        // Tạo Quick Search Table
        const qsTable = this.buildQuickSearchTable(target);
        
        // Bắt đầu tìm kiếm
        let shift = 0;
        
        while (shift <= sourceLen - targetLen) {
            let j = targetLen - 1;
            
            // So sánh từ phải sang trái
            while (j >= 0 && target[j] === source[shift + j]) {
                j--;
            }
            
            // Nếu pattern được tìm thấy
            if (j < 0) {
                exist = true;
                index = shift;
                return { exist, index };
            }
            
            // Quick Search: Xem xét ký tự ngay sau pattern
            if (shift + targetLen < sourceLen) {
                const nextChar = source[shift + targetLen];
                if (qsTable.has(nextChar)) {
                    shift += qsTable.get(nextChar);
                } else {
                    shift += targetLen + 1;
                }
            } else {
                // Nếu không có ký tự sau pattern, shift toàn bộ pattern
                shift += targetLen + 1;
            }
        }
        
        return { exist, index };
    }
    
    /**
     * Tạo bảng Quick Search
     */
    static buildQuickSearchTable(pattern) {
        const qsTable = new Map();
        const patternLen = pattern.length;
        
        // Khởi tạo tất cả ký tự trong pattern
        // Distance = patternLen - i (từ cuối pattern)
        for (let i = 0; i < patternLen; i++) {
            qsTable.set(pattern[i], patternLen - i);
        }
        
        return qsTable;
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
        
        const qsTable = this.buildQuickSearchTable(target);
        
        let shift = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;
        
        while (shift <= sourceLen - targetLen) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            let j = targetLen - 1;
            
            while (j >= 0 && target[j] === source[shift + j]) {
                j--;
            }
            
            if (j < 0) {
                exist = true;
                index = shift;
                if (onProgress) {
                    onProgress(maxComparisons, maxComparisons);
                }
                return { exist, index };
            }
            
            if (shift + targetLen < sourceLen) {
                const nextChar = source[shift + targetLen];
                if (qsTable.has(nextChar)) {
                    shift += qsTable.get(nextChar);
                } else {
                    shift += targetLen + 1;
                }
            } else {
                shift += targetLen + 1;
            }
            
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
}

module.exports = QuickSearch;
