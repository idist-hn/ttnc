/**
 * KmpSkipSearch - Thuật toán tìm kiếm chuỗi con bằng KMP Skip Search
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * KMP Skip Search kết hợp KMP với Skip Search
 * So sánh theo thứ tự cụ thể, sử dụng failure function để bỏ qua các vị trí không khả thi
 */

class KmpSkipSearch {
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

        // Tạo bảng skip: lưu vị trí cuối cùng của mỗi ký tự trong pattern
        const skipTable = new Map();
        for (let i = 0; i < targetLen - 1; i++) {
            skipTable.set(target[i], targetLen - 1 - i);
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

            // Nếu chưa khớp hoàn toàn, sử dụng skip table để bỏ qua
            if (j < targetLen && i < sourceLen) {
                if (skipTable.has(source[i])) {
                    // Có thể skip một số vị trí
                    const skipAmount = skipTable.get(source[i]) - (targetLen - j);
                    if (skipAmount > 0) {
                        i += skipAmount;
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

module.exports = KmpSkipSearch;

