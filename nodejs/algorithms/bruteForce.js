/**
 * BruteForce - Thuật toán tìm kiếm chuỗi con bằng Brute Force
 * 
 * Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(1) - không sử dụng thêm bộ nhớ
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Thuật toán Brute Force là thuật toán tìm kiếm chuỗi con đơn giản nhất,
 * nó sẽ so sánh từng ký tự của chuỗi target với chuỗi source một cách tuần tự
 */

class BruteForce {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Brute Force
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {Object} {exist: boolean, index: number}
     *                   exist: true nếu tìm thấy, false nếu không
     *                   index: vị trí bắt đầu của chuỗi con (hoặc -1 nếu không tìm thấy)
     */
    static search(source, target) {
        let exist = false;
        let index = -1;
        
        const sourceLength = source.length;
        const targetLength = target.length;
        
        // Kiểm tra trường hợp đặc biệt
        if (targetLength === 0) {
            return { exist: true, index: 0 };
        }
        
        if (targetLength > sourceLength) {
            return { exist: false, index: -1 };
        }
        
        // Tìm kiếm chuỗi target trong source
        for (let i = 0; i <= sourceLength - targetLength; i++) {
            if (source[i] === target[0]) {
                // Tìm thấy ký tự đầu tiên khớp
                exist = true;
                index = i;
                
                // Kiểm tra các ký tự tiếp theo
                for (let j = 1; j < targetLength; j++) {
                    if (source[i + j] !== target[j]) {
                        // Không khớp, reset và tiếp tục
                        exist = false;
                        index = -1;
                        break;
                    }
                }
                
                // Nếu tìm thấy hoàn toàn, thoát khỏi vòng lặp
                if (exist) {
                    break;
                }
            }
        }
        
        return { exist, index };
    }
    
    /**
     * Tìm kiếm tất cả các vị trí xuất hiện của chuỗi con
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {number[]} Mảng các vị trí tìm thấy
     */
    static searchAll(source, target) {
        const positions = [];
        const sourceLength = source.length;
        const targetLength = target.length;
        
        if (targetLength === 0 || targetLength > sourceLength) {
            return positions;
        }
        
        for (let i = 0; i <= sourceLength - targetLength; i++) {
            let match = true;
            
            for (let j = 0; j < targetLength; j++) {
                if (source[i + j] !== target[j]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                positions.push(i);
            }
        }
        
        return positions;
    }
    
    /**
     * Đếm số lần xuất hiện của chuỗi con
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @returns {number} Số lần xuất hiện
     */
    static count(source, target) {
        return this.searchAll(source, target).length;
    }
    
    /**
     * Tìm kiếm với callback để theo dõi quá trình
     * 
     * @param {string} source - Chuỗi nguồn để tìm kiếm
     * @param {string} target - Chuỗi đích cần tìm
     * @param {Function} onProgress - Callback được gọi mỗi khi kiểm tra một vị trí
     * @returns {Object} {exist: boolean, index: number}
     */
    static searchWithProgress(source, target, onProgress) {
        let exist = false;
        let index = -1;
        
        const sourceLength = source.length;
        const targetLength = target.length;
        
        if (targetLength === 0) {
            return { exist: true, index: 0 };
        }
        
        if (targetLength > sourceLength) {
            return { exist: false, index: -1 };
        }
        
        for (let i = 0; i <= sourceLength - targetLength; i++) {
            // Gọi callback để báo cáo tiến độ
            if (onProgress) {
                onProgress(i, sourceLength - targetLength + 1);
            }
            
            if (source[i] === target[0]) {
                exist = true;
                index = i;
                
                for (let j = 1; j < targetLength; j++) {
                    if (source[i + j] !== target[j]) {
                        exist = false;
                        index = -1;
                        break;
                    }
                }
                
                if (exist) {
                    break;
                }
            }
        }
        
        return { exist, index };
    }
}

module.exports = BruteForce;
