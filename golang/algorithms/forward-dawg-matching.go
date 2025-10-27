package algorithms

// ForwardDawgMatching tìm kiếm chuỗi con bằng thuật toán Forward Dawg Matching
// Độ phức tạp thời gian: O(n+m)
// Độ phức tạp không gian: O(m)
// Forward DAWG Matching sử dụng Directed Acyclic Word Graph để tối ưu hóa tìm kiếm
func ForwardDawgMatching(source, target string) (exist bool, index int) {
	exist = false
	index = -1

	sourceLen := len(source)
	targetLen := len(target)

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
