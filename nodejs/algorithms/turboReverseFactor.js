/**
 * TurboReverseFactor - Thuật toán tìm kiếm chuỗi con bằng Turbo Reverse Factor
 * 
 * Độ phức tạp thời gian: O(n+m)
 * Độ phức tạp không gian: O(m)
 * 
 * Turbo Reverse Factor là cải tiến của Reverse Factor
 * So sánh từ phải sang trái, sử dụng turbo optimization để tránh so sánh lại các ký tự đã khớp
 */

class TurboReverseFactor {
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

        // Tính factor table
        const factor = new Array(targetLen + 1).fill(0);
        factor[0] = 1;
        j = 0;

        for (let i = 1; i <= targetLen; i++) {
            while (j >= 0 && (j === targetLen || target[i - 1] !== target[j])) {
                factor[i] = i - j;
                j = failure[j];
                if (j < 0) {
                    j = 0;
                }
            }
            j++;
        }

        // Bắt đầu tìm kiếm
        let i = 0;
        let turboShift = 0;

        while (i <= sourceLen - targetLen) {
            j = targetLen - 1;

            // So sánh từ phải sang trái
            // Turbo optimization: bỏ qua các ký tự đã khớp từ lần trước
            while (j >= 0 && j >= turboShift && source[i + j] === target[j]) {
                j--;
            }

            // Nếu j < turboShift, tìm thấy match
            if (j < turboShift) {
                exist = true;
                index = i;
                return { exist, index };
            }

            // Nếu j < 0, tìm thấy match
            if (j < 0) {
                exist = true;
                index = i;
                return { exist, index };
            }

            // Tính shift sử dụng factor table
            const shift = factor[j + 1];
            turboShift = targetLen - shift;
            i += shift;
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

module.exports = TurboReverseFactor;

