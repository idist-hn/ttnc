/**
 * Shift-Or (Baeza-Yates-Gonnet) - Thuật toán tìm kiếm chuỗi con bằng Shift-Or
 * 
 * Độ phức tạp thời gian: O(n*m/w) trong trường hợp xấu nhất, O(n) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(σ) cho bảng bit của các ký tự
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet, w là word size
 * 
 * Shift-Or sử dụng bit manipulation để tìm kiếm pattern
 * Thay vì so sánh từng ký tự, ta sử dụng bit vectors để theo dõi trạng thái khớp
 * Mỗi bit trong vector đại diện cho một vị trí trong pattern
 * 
 * Ưu điểm: Rất nhanh cho patterns ngắn (m <= 32 hoặc 64)
 * Nhược điểm: Chỉ tốt cho patterns ngắn, không tốt cho patterns dài
 */

class ShiftOr {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Shift-Or
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

        // Chỉ hoạt động tốt với patterns ngắn (tối đa 32 ký tự)
        if (targetLen > 32) {
            const BruteForce = require('./bruteForce');
            return BruteForce.search(source, target);
        }

        // Shift-Or: Tạo bảng bit cho mỗi ký tự
        const charBit = new Map();
        for (let i = 0; i < targetLen; i++) {
            const char = target[i];
            if (!charBit.has(char)) {
                charBit.set(char, 0);
            }
            charBit.set(char, charBit.get(char) | (1 << i));
        }

        // Bắt đầu tìm kiếm từ trái sang phải
        let state = 0; // Khởi tạo tất cả bit là 0 (không khớp)

        for (let i = 0; i < sourceLen; i++) {
            const char = source[i];
            const charBitValue = charBit.has(char) ? charBit.get(char) : 0;

            // Cập nhật state: shift left, OR với 1, AND với charBit
            state = ((state << 1) | 1) & charBitValue;

            // Kiểm tra nếu bit tại vị trí targetLen-1 là 1 (match)
            if ((state & (1 << (targetLen - 1))) !== 0) {
                exist = true;
                index = i - targetLen + 1;
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

        if (targetLen > 32) {
            const BruteForce = require('./bruteForce');
            return BruteForce.searchWithProgress(source, target, onProgress);
        }

        const charBit = new Map();
        for (let i = 0; i < targetLen; i++) {
            const char = target[i];
            if (!charBit.has(char)) {
                charBit.set(char, 0);
            }
            charBit.set(char, charBit.get(char) | (1 << i));
        }

        let state = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;

        for (let i = 0; i < sourceLen; i++) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }

            const char = source[i];
            const charBitValue = charBit.has(char) ? charBit.get(char) : 0;

            state = ((state << 1) | 1) & charBitValue;

            if ((state & (1 << (targetLen - 1))) !== 0) {
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

module.exports = ShiftOr;
