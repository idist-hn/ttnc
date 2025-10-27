package algorithms

// TurboReverseFactor tìm kiếm chuỗi con bằng thuật toán Turbo Reverse Factor
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho bảng shift
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Turbo Reverse Factor là cải tiến của Reverse Factor
// So sánh từ phải sang trái, sử dụng turbo optimization để tránh so sánh lại các ký tự đã khớp
func TurboReverseFactor(source, target string) (exist bool, index int) {
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

	// Tính factor table
	factor := make([]int, targetLen+1)
	factor[0] = 1
	j = 0

	for i := 1; i <= targetLen; i++ {
		for j > 0 && target[i-1] != target[j] {
			j = failure[j-1]
		}
		if target[i-1] == target[j] {
			j++
		}
		factor[i] = i - j
	}

	// Bắt đầu tìm kiếm
	i := 0

	for i <= sourceLen-targetLen {
		j = targetLen - 1

		// So sánh từ phải sang trái
		// Turbo optimization: bỏ qua các ký tự đã khớp từ lần trước
		for j >= 0 && source[i+j] == target[j] {
			j--
		}

		// Nếu j < 0, tìm thấy match
		if j < 0 {
			exist = true
			index = i
			return exist, index
		}

		// Tính shift sử dụng factor table
		shift := factor[j+1]
		if shift == 0 {
			shift = 1
		}
		i += shift
	}

	return exist, index
}
