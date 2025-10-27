/**
 * Raita Algorithm - String Matching
 * 
 * Raita là biến thể của Boyer-Moore sử dụng thêm một ký tự để tối ưu hóa
 * So sánh: ký tự cuối cùng -> ký tự đầu tiên -> các ký tự còn lại
 * 
 * Time Complexity: O(n+m) best case, O(n×m) worst case
 * Space Complexity: O(σ) where σ is alphabet size
 */

class Raita {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Raita
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
            // Raita: So sánh theo thứ tự: cuối -> đầu -> giữa
            // 1. So sánh ký tự cuối cùng
            if (target[targetLen - 1] !== source[shift + targetLen - 1]) {
                // Nếu ký tự cuối không khớp, skip
                const badCharShift = this.getBadCharacterShift(badChar, source[shift + targetLen - 1], targetLen - 1);
                shift += badCharShift;
                continue;
            }
            
            // 2. So sánh ký tự đầu tiên
            if (target[0] !== source[shift]) {
                // Nếu ký tự đầu không khớp, skip
                const badCharShift = this.getBadCharacterShift(badChar, source[shift], 0);
                shift += badCharShift;
                continue;
            }
            
            // 3. So sánh các ký tự còn lại từ trái sang phải
            let j = 1;
            while (j < targetLen - 1 && target[j] === source[shift + j]) {
                j++;
            }
            
            // Nếu tất cả ký tự khớp
            if (j === targetLen - 1) {
                exist = true;
                index = shift;
                return { exist, index };
            }
            
            // Nếu không khớp, tính shift dựa trên ký tự không khớp
            const badCharShift = this.getBadCharacterShift(badChar, source[shift + j], j);
            shift += badCharShift;
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
        
        const badChar = this.buildBadCharacterTable(target);
        
        let shift = 0;
        let comparisons = 0;
        const maxComparisons = sourceLen - targetLen + 1;
        
        while (shift <= sourceLen - targetLen) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            // Raita: So sánh theo thứ tự: cuối -> đầu -> giữa
            if (target[targetLen - 1] !== source[shift + targetLen - 1]) {
                const badCharShift = this.getBadCharacterShift(badChar, source[shift + targetLen - 1], targetLen - 1);
                shift += badCharShift;
                comparisons++;
                continue;
            }
            
            if (target[0] !== source[shift]) {
                const badCharShift = this.getBadCharacterShift(badChar, source[shift], 0);
                shift += badCharShift;
                comparisons++;
                continue;
            }
            
            let j = 1;
            while (j < targetLen - 1 && target[j] === source[shift + j]) {
                j++;
            }
            
            if (j === targetLen - 1) {
                exist = true;
                index = shift;
                if (onProgress) {
                    onProgress(maxComparisons, maxComparisons);
                }
                return { exist, index };
            }
            
            const badCharShift = this.getBadCharacterShift(badChar, source[shift + j], j);
            shift += badCharShift;
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
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
            // Nếu shift > position, chỉ shift 1 để tránh shift lùi
            if (shift > position) {
                return 1;
            }
            return shift;
        }
        // Nếu ký tự không có trong pattern, shift toàn bộ pattern
        return position + 1;
    }
}

module.exports = Raita;

