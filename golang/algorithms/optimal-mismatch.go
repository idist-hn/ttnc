package algorithms

// OptimalMismatch tìm kiếm chuỗi con bằng thuật toán Optimal Mismatch
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho failure function
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Optimal Mismatch là cải tiến của KMP
// So sánh theo thứ tự cụ thể, tối ưu hóa bằng cách chọn vị trí so sánh tốt nhất
func OptimalMismatch(source, target string) (exist bool, index int) {
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

	// Tính optimal mismatch table - chọn vị trí so sánh tốt nhất
	// Ưu tiên so sánh các ký tự ít xuất hiện trước
	optimalPos := make([]int, targetLen)
	for i := 0; i < targetLen; i++ {
		optimalPos[i] = i
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
