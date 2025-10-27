/**
 * ReverseColussi - Thuật toán tìm kiếm chuỗi con bằng Reverse Colussi
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho bảng shift và failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Reverse Colussi là biến thể của Colussi nhưng so sánh từ phải sang trái
 * Sử dụng hai bảng: shift table và failure function (tính từ phải sang trái)
 * Shift table giúp bỏ qua các vị trí không cần kiểm tra
 * Failure function giúp xác định vị trí tiếp theo khi không khớp
 */

class ReverseColussi {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Reverse Colussi
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

        // Tính failure function (giống KMP)
        const failure = new Array(targetLen).fill(0);
        failure[0] = 0;
        let j = 0;

        for (let i = 1; i < targetLen; i++) {
            while (j > 0 && target[i] !== target[j]) {
                j = failure[j - 1];
            }
            if (target[i] === target[j]) {
                j++;
            }
            failure[i] = j;
        }

        // Tính shift table
        const shift = new Array(targetLen + 1).fill(0);
        shift[0] = 1;
        j = 0;

        for (let i = 1; i <= targetLen; i++) {
            while (j >= 0 && (j === targetLen || target[i - 1] !== target[j])) {
                shift[i] = i - j;
                j = failure[j];
                if (j < 0) {
                    j = 0;
                }
            }
            j++;
        }

        // Bắt đầu tìm kiếm từ phải sang trái (reverse direction)
        // Nhưng vẫn sử dụng logic tương tự Colussi
        j = 0;
        for (let i = sourceLen - 1; i >= 0; i--) {
            // So sánh từ phải sang trái
            let k = targetLen - 1;
            while (k >= 0 && source[i - targetLen + 1 + k] === target[k]) {
                k--;
            }

            // Nếu k < 0, tìm thấy match
            if (k < 0) {
                exist = true;
                index = i - targetLen + 1;
                return { exist, index };
            }

            // Bỏ qua vị trí không cần kiểm tra
            i -= shift[targetLen - k];
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

        // Tính failure function (giống KMP)
        const failure = new Array(targetLen).fill(0);
        failure[0] = 0;
        let j = 0;

        for (let i = 1; i < targetLen; i++) {
            while (j > 0 && target[i] !== target[j]) {
                j = failure[j - 1];
            }
            if (target[i] === target[j]) {
                j++;
            }
            failure[i] = j;
        }

        // Tính shift table
        const shift = new Array(targetLen + 1).fill(0);
        shift[0] = 1;
        j = 0;

        for (let i = 1; i <= targetLen; i++) {
            while (j >= 0 && (j === targetLen || target[i - 1] !== target[j])) {
                shift[i] = i - j;
                j = failure[j];
                if (j < 0) {
                    j = 0;
                }
            }
            j++;
        }

        // Bắt đầu tìm kiếm từ phải sang trái (reverse direction)
        // Nhưng vẫn sử dụng logic tương tự Colussi
        j = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;

        for (let i = sourceLen - 1; i >= 0; i--) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }

            // So sánh từ phải sang trái
            let k = targetLen - 1;
            while (k >= 0 && source[i - targetLen + 1 + k] === target[k]) {
                k--;
            }

            // Nếu k < 0, tìm thấy match
            if (k < 0) {
                exist = true;
                index = i - targetLen + 1;
                if (onProgress) {
                    onProgress(maxComparisons, maxComparisons);
                }
                return { exist, index };
            }

            // Bỏ qua vị trí không cần kiểm tra
            i -= shift[targetLen - k];
            comparisons++;
        }

        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }

        return { exist, index };
    }
}

module.exports = ReverseColussi;

