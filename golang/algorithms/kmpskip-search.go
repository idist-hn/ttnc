package algorithms

// KmpSkipSearch tìm kiếm chuỗi con bằng thuật toán Kmp-Skip Search
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho failure function
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// KMP Skip Search kết hợp KMP với Skip Search
// So sánh theo thứ tự cụ thể, sử dụng failure function để bỏ qua các vị trí không khả thi
func KmpSkipSearch(source, target string) (exist bool, index int) {
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

	// Tạo bảng skip: lưu vị trí cuối cùng của mỗi ký tự trong pattern
	skipTable := make(map[byte]int)
	for i := 0; i < targetLen-1; i++ {
		skipTable[target[i]] = targetLen - 1 - i
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

		// Nếu chưa khớp hoàn toàn, sử dụng skip table để bỏ qua
		if j < targetLen && i < sourceLen {
			if shift, found := skipTable[source[i]]; found {
				// Có thể skip một số vị trí
				skipAmount := shift - (targetLen - j)
				if skipAmount > 0 {
					i += skipAmount
					j = 0
				}
			}
		}
	}

	return exist, index
}
