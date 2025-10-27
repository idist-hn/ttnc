/**
 * BackwardOracleMatching - Thuật toán tìm kiếm chuỗi con bằng Backward Oracle Matching
 * 
 * Độ phức tạp thời gian: O(n+m)
 * Độ phức tạp không gian: O(m)
 * 
 * Backward Oracle Matching sử dụng oracle automaton
 * để tối ưu hóa tìm kiếm từ phải sang trái
 */

class BackwardOracleMatching {
    static search(source, target) {
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

        // Bắt đầu tìm kiếm từ phải sang trái
        let i = 0;
        j = 0;

        while (i < sourceLen) {
            // So sánh từ trái sang phải
            while (j > 0 && source[i] !== target[j]) {
                j = failure[j - 1];
            }

            if (source[i] === target[j]) {
                j++;
            }

            // Nếu j == targetLen, tìm thấy match
            if (j === targetLen) {
                exist = true;
                index = i - targetLen + 1;
                return { exist, index };
            }

            i++;
        }

        return { exist, index };
    }

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

    static count(source, target) {
        return this.searchAll(source, target).length;
    }
}

module.exports = BackwardOracleMatching;

