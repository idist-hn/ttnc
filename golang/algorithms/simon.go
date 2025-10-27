package algorithms

// Simon tìm kiếm chuỗi con bằng thuật toán Simon
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho failure function
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Simon là cải tiến của KMP
// So sánh theo thứ tự cụ thể, sử dụng Simon's algorithm để tối ưu hóa
func Simon(source, target string) (exist bool, index int) {
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

	// Tính Simon's shift table
	// Lưu vị trí cuối cùng của mỗi ký tự trong pattern
	lastPos := make(map[byte]int)
	for i := 0; i < targetLen; i++ {
		lastPos[target[i]] = i
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

		// Nếu chưa khớp hoàn toàn, kiểm tra xem có thể skip không
		if j < targetLen && i < sourceLen {
			if pos, found := lastPos[source[i]]; found {
				// Nếu ký tự xuất hiện trong pattern, có thể skip
				if pos < j {
					// Ký tự nằm trước vị trí hiện tại, có thể reset
					j = 0
				}
			}
		}
	}

	return exist, index
}
