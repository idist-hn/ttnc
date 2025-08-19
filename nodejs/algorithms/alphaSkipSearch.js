/**
 * AlphaSkipSearch - Thuật toán tìm kiếm chuỗi con bằng Alpha-Skip Search
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái (alphabet size)
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Alpha-Skip Search là một cải tiến của thuật toán Boyer-Moore, sử dụng bảng skip
 * để tăng tốc quá trình tìm kiếm bằng cách bỏ qua các vị trí không khả thi
 */

class AlphaSkipSearch {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Alpha-Skip Search
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {Object} {exist: boolean, index: number}
     *                   exist: true nếu tìm thấy, false nếu không
     *                   index: vị trí bắt đầu của chuỗi con (hoặc -1 nếu không tìm thấy)
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
        
        // Tạo bảng skip cho các ký tự
        const skipTable = new Map();
        
        // Khởi tạo bảng skip: với mỗi ký tự trong target,
        // tính khoảng cách từ vị trí đó đến cuối pattern
        for (let i = 0; i < targetLen - 1; i++) {
            skipTable.set(target[i], targetLen - 1 - i);
        }
        
        // Bắt đầu tìm kiếm từ vị trí targetLen-1
        let i = targetLen - 1;
        
        while (i < sourceLen) {
            // So sánh từ phải sang trái (như Boyer-Moore)
            let j = targetLen - 1;
            let k = i;
            
            // So sánh các ký tự từ cuối pattern
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
            // Sử dụng ký tự tại vị trí i trong source để quyết định skip
            if (i < sourceLen) {
                if (skipTable.has(source[i])) {
                    // Nếu ký tự có trong bảng skip, nhảy theo giá trị đó
                    i += skipTable.get(source[i]);
                } else {
                    // Nếu ký tự không có trong pattern, nhảy toàn bộ độ dài pattern
                    i += targetLen;
                }
            } else {
                break;
            }
        }
        
        return { exist, index };
    }
    
    /**
     * Tìm kiếm tất cả các vị trí xuất hiện của chuỗi con
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {number[]} Mảng các vị trí tìm thấy
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
                offset += result.index + 1; // Tìm tiếp từ vị trí sau match
            } else {
                break;
            }
        }
        
        return positions;
    }
    
    /**
     * Đếm số lần xuất hiện của chuỗi con
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {number} Số lần xuất hiện
     */
    static count(source, target) {
        return this.searchAll(source, target).length;
    }
    
    /**
     * Tìm kiếm với callback để theo dõi quá trình
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @param {Function} onProgress - Callback được gọi mỗi khi kiểm tra một vị trí
     * @returns {Object} {exist: boolean, index: number}
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
            // Báo cáo tiến độ
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
            
            if (i < sourceLen) {
                if (skipTable.has(source[i])) {
                    i += skipTable.get(source[i]);
                } else {
                    i += targetLen;
                }
            } else {
                break;
            }
            
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
    
    /**
     * So sánh hiệu suất với Brute Force
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {Object} Thông tin so sánh hiệu suất
     */
    static benchmark(source, target) {
        const BruteForce = require('./bruteForce');
        
        // Test Alpha-Skip Search
        const startAlpha = process.hrtime.bigint();
        const alphaResult = this.search(source, target);
        const endAlpha = process.hrtime.bigint();
        const alphaTime = Number(endAlpha - startAlpha) / 1000000; // Convert to ms
        
        // Test Brute Force để so sánh
        const startBrute = process.hrtime.bigint();
        const bruteResult = BruteForce.search(source, target);
        const endBrute = process.hrtime.bigint();
        const bruteTime = Number(endBrute - startBrute) / 1000000; // Convert to ms
        
        return {
            alphaSkipSearch: {
                result: alphaResult,
                timeMs: alphaTime
            },
            bruteForce: {
                result: bruteResult,
                timeMs: bruteTime
            },
            speedup: bruteTime > 0 ? bruteTime / alphaTime : 1
        };
    }
}

module.exports = AlphaSkipSearch;
