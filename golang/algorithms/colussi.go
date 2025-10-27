package algorithms

// Colussi tìm kiếm chuỗi con bằng thuật toán Colussi
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho bảng shift và failure function
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Colussi là cải tiến của KMP
// Sử dụng hai bảng: shift table và failure function
// Shift table giúp bỏ qua các vị trí không cần kiểm tra
// Failure function giúp xác định vị trí tiếp theo khi không khớp
func Colussi(source, target string) (exist bool, index int) {
	exist = false
	index = -1

	sourceLen := len(source)
	targetLen := len(target)

	// Kiểm tra trường hợp đặc biệt
	if targetLen == 0 {
		return true, 0
	}

	if targetLen > sourceLen {
		return false, -1
	}

	// Tính failure function (giống KMP)
	failure := make([]int, targetLen)
	failure[0] = 0
	j := 0

	for i := 1; i < targetLen; i++ {
		for j > 0 && target[i] != target[j] {
			j = failure[j-1]
		}
		if target[i] == target[j] {
			j++
		}
		failure[i] = j
	}

	// Tính shift table
	// shift[i] = số vị trí cần dịch khi không khớp tại vị trí i
	shift := make([]int, targetLen+1)
	shift[0] = 1
	j = 0

	for i := 1; i <= targetLen; i++ {
		for j >= 0 && (j == targetLen || target[i-1] != target[j]) {
			shift[i] = i - j
			j = failure[j]
			if j < 0 {
				j = 0
			}
		}
		j++
	}

	// Bắt đầu tìm kiếm
	j = 0
	for i := 0; i < sourceLen; i++ {
		for j >= 0 && source[i] != target[j] {
			i += shift[j]
			j = failure[j]
			if j < 0 {
				j = 0
			}
		}

		if j < 0 {
			j = 0
		}

		j++

		// Nếu j == targetLen, tìm thấy match
		if j == targetLen {
			exist = true
			index = i - targetLen + 1
			return exist, index
		}
	}

	return exist, index
}
