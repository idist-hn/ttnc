package algorithms

func BruteForce(source, target string) (exist bool, index int) { // Tìm giá trị của chuỗi target trong chuỗi source bằng thuật toán Brute Force, trả về true nếu tìm thấy, false nếu không tìm thấy
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
