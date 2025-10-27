/**
 * TwoWay - Thuật toán tìm kiếm chuỗi con bằng Two Way
 * 
 * Độ phức tạp thời gian: O(n+m)
 * Độ phức tạp không gian: O(1)
 * 
 * Two-Way algorithm chia pattern thành hai phần và so sánh từ hai hướng
 * Sử dụng critical factorization để tìm điểm chia tối ưu
 */

class TwoWay {
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

        // Tìm critical factorization
        // Chia pattern thành hai phần: target[0..period-1] và target[period..targetLen-1]
        let period = 1;
        while (period < targetLen && target[period] === target[0]) {
            period++;
        }

        // Bắt đầu tìm kiếm
        let i = 0;
        while (i <= sourceLen - targetLen) {
            // So sánh phần đầu (từ trái sang phải)
            let j = 0;
            while (j < period && i + j < sourceLen && source[i + j] === target[j]) {
                j++;
            }

            // Nếu không khớp phần đầu
            if (j < period) {
                i += j + 1;
                continue;
            }

            // So sánh phần sau (từ phải sang trái)
            j = period;
            while (j < targetLen && i + j < sourceLen && source[i + j] === target[j]) {
                j++;
            }

            // Nếu khớp toàn bộ
            if (j === targetLen) {
                exist = true;
                index = i;
                return { exist, index };
            }

            // Tính shift
            let shift = 1;
            if (i + j < sourceLen) {
                // Tìm vị trí tiếp theo có thể khớp
                for (let k = 0; k < period && k < j; k++) {
                    if (source[i + j] === target[k]) {
                        shift = j - k;
                        break;
                    }
                }
            }

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

module.exports = TwoWay;

