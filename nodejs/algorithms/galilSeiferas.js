/**
 * GalilSeiferas - Thuật toán tìm kiếm chuỗi con bằng Galil-Seiferas
 * 
 * Độ phức tạp thời gian: O(n+m)
 * Độ phức tạp không gian: O(m)
 * 
 * Galil-Seiferas là cải tiến của Two-Way algorithm
 * với Galil's optimization
 */

class GalilSeiferas {
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

        // Tính failure function
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

        // Tìm critical factorization
        let period = 1;
        while (period < targetLen && target[period] === target[0]) {
            period++;
        }

        // Bắt đầu tìm kiếm
        let i = 0;
        let galilShift = 0;

        while (i <= sourceLen - targetLen) {
            // So sánh phần đầu (từ trái sang phải)
            j = 0;
            while (j < period && i + j < sourceLen && source[i + j] === target[j]) {
                j++;
            }

            // Nếu không khớp phần đầu
            if (j < period) {
                i += j + 1;
                galilShift = 0;
                continue;
            }

            // So sánh phần sau (từ phải sang trái) với Galil's optimization
            j = period;
            while (j < targetLen && j >= galilShift && i + j < sourceLen && source[i + j] === target[j]) {
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
                for (let k = 0; k < period && k < j; k++) {
                    if (source[i + j] === target[k]) {
                        shift = j - k;
                        break;
                    }
                }
            }

            galilShift = targetLen - shift;
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

module.exports = GalilSeiferas;

