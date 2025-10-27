/**
 * Simon - Thuật toán tìm kiếm chuỗi con bằng Simon
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Simon là cải tiến của KMP
 * So sánh theo thứ tự cụ thể, sử dụng Simon's algorithm để tối ưu hóa
 */

class Simon {
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

        // Tính Simon's shift table
        // Lưu vị trí cuối cùng của mỗi ký tự trong pattern
        const lastPos = new Map();
        for (let i = 0; i < targetLen; i++) {
            lastPos.set(target[i], i);
        }

        // Bắt đầu tìm kiếm
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

            // Nếu chưa khớp hoàn toàn, kiểm tra xem có thể skip không
            if (j < targetLen && i < sourceLen) {
                if (lastPos.has(source[i])) {
                    // Nếu ký tự xuất hiện trong pattern, có thể skip
                    if (lastPos.get(source[i]) < j) {
                        // Ký tự nằm trước vị trí hiện tại, có thể reset
                        j = 0;
                    }
                }
            }
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

module.exports = Simon;

