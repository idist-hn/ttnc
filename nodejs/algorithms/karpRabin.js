/**
 * Karp-Rabin - Thuật toán tìm kiếm chuỗi con bằng Karp-Rabin
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n*m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(1) không tính hash table
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Karp-Rabin sử dụng rolling hash để so sánh pattern
 * Thay vì so sánh từng ký tự, ta tính hash của pattern và các substring của source
 * Nếu hash khớp, ta kiểm tra lại từng ký tự để tránh hash collision
 * 
 * Ưu điểm: Tốt cho multiple pattern matching, DNA sequence matching
 * Nhược điểm: Hash collision có thể làm chậm thuật toán
 */

class KarpRabin {
    // Prime number cho rolling hash
    static PRIME = 101;
    // Base cho rolling hash (số ký tự trong alphabet)
    static BASE = 256;

    /**
     * Tìm kiếm chuỗi con bằng thuật toán Karp-Rabin
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
        
        // Tính hash của pattern
        const patternHash = this.calculateHash(target, targetLen);
        
        // Tính hash của substring đầu tiên của source
        let windowHash = this.calculateHash(source, targetLen);
        
        // Tính pow = base^(targetLen-1) % prime
        let pow = 1;
        for (let i = 0; i < targetLen - 1; i++) {
            pow = (pow * this.BASE) % this.PRIME;
        }
        
        // Bắt đầu tìm kiếm
        for (let i = 0; i <= sourceLen - targetLen; i++) {
            // Nếu hash khớp, kiểm tra từng ký tự
            if (windowHash === patternHash) {
                // Kiểm tra lại từng ký tự để tránh hash collision
                let match = true;
                for (let j = 0; j < targetLen; j++) {
                    if (source[i + j] !== target[j]) {
                        match = false;
                        break;
                    }
                }
                
                if (match) {
                    exist = true;
                    index = i;
                    return { exist, index };
                }
            }
            
            // Tính hash cho window tiếp theo
            if (i < sourceLen - targetLen) {
                // Xóa ký tự đầu tiên của window hiện tại
                windowHash = (this.BASE * (windowHash - source.charCodeAt(i) * pow) + source.charCodeAt(i + targetLen)) % this.PRIME;
                
                // Đảm bảo hash không âm
                if (windowHash < 0) {
                    windowHash = windowHash + this.PRIME;
                }
            }
        }
        
        return { exist, index };
    }
    
    /**
     * Tính hash của một chuỗi
     */
    static calculateHash(str, len) {
        let hash = 0;
        for (let i = 0; i < len; i++) {
            hash = (hash * this.BASE + str.charCodeAt(i)) % this.PRIME;
        }
        return hash;
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
        
        const patternHash = this.calculateHash(target, targetLen);
        let windowHash = this.calculateHash(source, targetLen);
        
        let pow = 1;
        for (let i = 0; i < targetLen - 1; i++) {
            pow = (pow * this.BASE) % this.PRIME;
        }
        
        for (let i = 0; i <= sourceLen - targetLen; i++) {
            if (windowHash === patternHash) {
                let match = true;
                for (let j = 0; j < targetLen; j++) {
                    if (source[i + j] !== target[j]) {
                        match = false;
                        break;
                    }
                }
                
                if (match) {
                    positions.push(i);
                }
            }
            
            if (i < sourceLen - targetLen) {
                windowHash = (this.BASE * (windowHash - source.charCodeAt(i) * pow) + source.charCodeAt(i + targetLen)) % this.PRIME;
                
                if (windowHash < 0) {
                    windowHash = windowHash + this.PRIME;
                }
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
        
        const patternHash = this.calculateHash(target, targetLen);
        let windowHash = this.calculateHash(source, targetLen);
        
        let pow = 1;
        for (let i = 0; i < targetLen - 1; i++) {
            pow = (pow * this.BASE) % this.PRIME;
        }
        
        let comparisons = 0;
        const maxComparisons = sourceLen;
        
        for (let i = 0; i <= sourceLen - targetLen; i++) {
            if (onProgress) {
                onProgress(comparisons, maxComparisons);
            }
            
            if (windowHash === patternHash) {
                let match = true;
                for (let j = 0; j < targetLen; j++) {
                    if (source[i + j] !== target[j]) {
                        match = false;
                        break;
                    }
                }
                
                if (match) {
                    exist = true;
                    index = i;
                    if (onProgress) {
                        onProgress(maxComparisons, maxComparisons);
                    }
                    return { exist, index };
                }
            }
            
            if (i < sourceLen - targetLen) {
                windowHash = (this.BASE * (windowHash - source.charCodeAt(i) * pow) + source.charCodeAt(i + targetLen)) % this.PRIME;
                
                if (windowHash < 0) {
                    windowHash = windowHash + this.PRIME;
                }
            }
            
            comparisons++;
        }
        
        if (onProgress) {
            onProgress(maxComparisons, maxComparisons);
        }
        
        return { exist, index };
    }
}

module.exports = KarpRabin;
