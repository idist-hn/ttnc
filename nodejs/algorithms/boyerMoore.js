/**
 * BoyerMoore - Thuật toán tìm kiếm chuỗi con bằng Boyer-Moore
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ+m) với σ là kích thước bảng chữ cái, m là độ dài pattern
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Boyer-Moore sử dụng hai heuristic:
 * 1. Bad Character Heuristic: Skip dựa trên ký tự không khớp
 * 2. Good Suffix Heuristic: Skip dựa trên suffix đã khớp
 */

class BoyerMoore {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Boyer-Moore
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
        
        // Tạo Bad Character Table
        const badChar = this.buildBadCharacterTable(target);
        
        // Tạo Good Suffix Table
        const goodSuffix = this.buildGoodSuffixTable(target);
        
        // Bắt đầu tìm kiếm
        let shift = 0;
        
        while (shift <= sourceLen - targetLen) {
            let j = targetLen - 1;
            
            // So sánh từ phải sang trái
            while (j >= 0 && target[j] === source[shift + j]) {
                j--;
            }
            
            // Nếu pattern được tìm thấy
            if (j < 0) {
                exist = true;
                index = shift;
                return { exist, index };
            }
            
            // Tính toán shift dựa trên cả hai heuristic
            const badCharShift = this.getBadCharacterShift(badChar, source[shift + j], j);
            const goodSuffixShift = goodSuffix[j];
            
            // Chọn shift lớn hơn
            shift += Math.max(badCharShift, goodSuffixShift);
        }
        
        return { exist, index };
    }
    
    /**
     * Tạo bảng Bad Character
     */
    static buildBadCharacterTable(pattern) {
        const badChar = new Map();
        const patternLen = pattern.length;
        
        // Khởi tạo tất cả ký tự với giá trị mặc định
        for (let i = 0; i < patternLen; i++) {
            badChar.set(pattern[i], patternLen - 1 - i);
        }
        
        return badChar;
    }
    
    /**
     * Tính toán shift dựa trên Bad Character Heuristic
     */
    static getBadCharacterShift(badChar, char, position) {
        if (badChar.has(char)) {
            const shift = badChar.get(char);
            if (shift > position) {
                return 1;
            }
            return shift;
        }
        // Nếu ký tự không có trong pattern, shift toàn bộ pattern
        return position + 1;
    }
    
    /**
     * Tạo bảng Good Suffix
     */
    static buildGoodSuffixTable(pattern) {
        const patternLen = pattern.length;
        const goodSuffix = new Array(patternLen).fill(patternLen);
        
        // Tính toán border array
        const border = new Array(patternLen + 1).fill(0);
        this.computeBorderArray(pattern, border);
        
        // Case 1: Pattern không xuất hiện lại trong chính nó
        let j = 0;
        for (let i = patternLen; i > 0; i--) {
            if (border[i] === i) {
                while (j < patternLen - i) {
                    if (goodSuffix[j] === patternLen) {
                        goodSuffix[j] = patternLen - i;
                    }
                    j++;
                }
            }
        }
        
        // Case 2: Pattern có suffix xuất hiện lại
        for (let i = 0; i <= patternLen - 1; i++) {
            goodSuffix[patternLen - 1 - border[i]] = patternLen - 1 - i;
        }
        
        return goodSuffix;
    }
    
    /**
     * Tính toán border array cho Good Suffix
     */
    static computeBorderArray(pattern, border) {
        const patternLen = pattern.length;
        border[patternLen] = patternLen + 1;
        let i = patternLen;
        let j = patternLen + 1;
        
        while (i > 0) {
            while (j <= patternLen && pattern[i - 1] !== pattern[j - 1]) {
                if (border[j] === 0) {
                    border[j] = j - i;
                }
                j = border[j];
            }
            i--;
            j--;
            border[i] = j;
        }
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
        
        const badChar = this.buildBadCharacterTable(target);
        const goodSuffix = this.buildGoodSuffixTable(target);
        
        let shift = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;
        
        while (shift <= sourceLen - targetLen) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            let j = targetLen - 1;
            
            while (j >= 0 && target[j] === source[shift + j]) {
                j--;
            }
            
            if (j < 0) {
                exist = true;
                index = shift;
                if (onProgress) {
                    onProgress(maxComparisons, maxComparisons);
                }
                return { exist, index };
            }
            
            const badCharShift = this.getBadCharacterShift(badChar, source[shift + j], j);
            const goodSuffixShift = goodSuffix[j];
            
            shift += Math.max(badCharShift, goodSuffixShift);
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
}

module.exports = BoyerMoore;
