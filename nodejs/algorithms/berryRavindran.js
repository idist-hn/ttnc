/**
 * BerryRavindran - Thuật toán tìm kiếm chuỗi con bằng Berry-Ravindran
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ+m) cho bảng bad character và good suffix
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet
 * 
 * Berry-Ravindran là cải tiến của Boyer-Moore
 * Sử dụng Bad Character và Good Suffix heuristics
 * So sánh từ phải sang trái với tối ưu hóa
 */

class BerryRavindran {
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

        // Tạo bảng bad character
        const badChar = new Map();
        for (let i = 0; i < targetLen; i++) {
            badChar.set(target[i], targetLen - 1 - i);
        }

        // Tạo bảng good suffix
        const goodSuffix = new Array(targetLen + 1).fill(targetLen);

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

        // Tính good suffix table
        j = failure[targetLen - 1];
        for (let i = targetLen - 1; i >= 0; i--) {
            if (i === targetLen - 1 || target[i + 1] !== target[j]) {
                goodSuffix[i + 1] = targetLen - 1 - i;
            }
            if (i > 0) {
                j = failure[i - 1];
            }
        }

        // Bắt đầu tìm kiếm
        let i = 0;
        while (i <= sourceLen - targetLen) {
            j = targetLen - 1;

            // So sánh từ phải sang trái
            while (j >= 0 && source[i + j] === target[j]) {
                j--;
            }

            // Nếu j < 0, tìm thấy match
            if (j < 0) {
                exist = true;
                index = i;
                return { exist, index };
            }

            // Tính shift
            let shift = 1;
            if (badChar.has(source[i + j])) {
                const badCharShift = badChar.get(source[i + j]);
                shift = badCharShift - (targetLen - 1 - j);
                if (shift < 1) {
                    shift = 1;
                }
            } else {
                shift = targetLen - j;
            }

            // So sánh với good suffix shift
            if (j + 1 < targetLen) {
                const goodSuffixShift = goodSuffix[j + 1];
                if (goodSuffixShift > shift) {
                    shift = goodSuffixShift;
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

module.exports = BerryRavindran;

