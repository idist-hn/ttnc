package algorithms

// BruteForce tìm kiếm chuỗi con bằng thuật toán Brute Force
// Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(1)
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
// Thuật toán Brute Force là thuật toán tìm kiếm chuỗi con đơn giản nhất, nó sẽ so sánh từng ký tự của chuỗi target với chuỗi source một cách tuần tự
// Tìm giá trị của chuỗi target trong chuỗi source bằng thuật toán Brute Force, trả về true nếu tìm thấy, false nếu không tìm thấy
func BruteForce(source, target string) (exist bool, index int) {
	for i := 0; i < len(source); i++ {
		if i+len(target) <= len(source) && source[i] == target[0] {
			// Tìm thấy một khớp, có thể đặt vào vị trí hiện tại
			exist = true
			index = i
			for j := 1; j < len(target); j++ {
				if source[i+j] != target[j] {
					// Không khớp, không thể đặt vào vị trí hiện tại
					exist = false
					index = -1
					break
				}
			}
		} else {
			// Không khớp, không thể đặt vào vị trí hiện tại
			exist = false
			index = -1
		}
		if exist {
			// Tìm thấy chuỗi target
			break
		}
	}
	return exist, index
}
