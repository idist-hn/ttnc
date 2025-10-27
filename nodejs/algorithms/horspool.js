/**
 * Horspool - Thuật toán tìm kiếm chuỗi con bằng Horspool
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Horspool là phiên bản đơn giản hóa của Boyer-Moore
 * Chỉ sử dụng Bad Character Heuristic (không sử dụng Good Suffix)
 * So sánh từ phải sang trái, nhưng luôn skip dựa trên ký tự cuối cùng của pattern
 */

class Horspool {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Horspool
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
            
            // Horspool: Luôn sử dụng ký tự cuối cùng của pattern để tính shift
            const lastCharShift = badChar.get(target[targetLen - 1]);
            shift += lastCharShift;
        }
        
        return { exist, index };
    }
    
    /**
     * Tạo bảng Bad Character cho Horspool
     */
    static buildBadCharacterTable(pattern) {
        const badChar = new Map();
        const patternLen = pattern.length;
        
        // Khởi tạo tất cả ký tự với giá trị mặc định (độ dài pattern)
        for (let i = 0; i < patternLen; i++) {
            badChar.set(pattern[i], patternLen - i);
        }
        
        return badChar;
    }
    
    /**
     * Tính toán shift dựa trên Bad Character Heuristic
     */
    static getCharShift(badChar, char, position) {
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
            
            const lastCharShift = badChar.get(target[targetLen - 1]);
            
            if (j >= 0) {
                const charShift = this.getCharShift(badChar, source[shift + j], j);
                shift += charShift;
            } else {
                shift += lastCharShift;
            }
            
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
}

module.exports = Horspool;
