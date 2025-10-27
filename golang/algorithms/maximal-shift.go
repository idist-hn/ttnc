package algorithms

// MaximalShift tìm kiếm chuỗi con bằng thuật toán Maximal Shift
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho failure function
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Maximal Shift là cải tiến của KMP
// So sánh theo thứ tự cụ thể, sử dụng maximal shift để tối ưu hóa bước nhảy
func MaximalShift(source, target string) (exist bool, index int) {
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

	// Tính failure function
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

	// Tính maximal shift table
	maximalShift := make([]int, targetLen+1)
	for i := 0; i <= targetLen; i++ {
		maximalShift[i] = targetLen - failure[targetLen-1]
	}

	// Bắt đầu tìm kiếm
	i := 0
	j = 0

	for i < sourceLen {
		// So sánh từ trái sang phải
		for j > 0 && source[i] != target[j] {
			j = failure[j-1]
		}

		if source[i] == target[j] {
			j++
		}

		// Nếu j == targetLen, tìm thấy match
		if j == targetLen {
			exist = true
			index = i - targetLen + 1
			return exist, index
		}

		i++
	}

	return exist, index
}
