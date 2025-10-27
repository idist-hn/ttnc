package algorithms

// KnuthMorrisPratt tìm kiếm chuỗi con bằng thuật toán Knuth-Morris-Pratt
// Độ phức tạp thời gian: O(n+m) trong cả trường hợp tốt nhất và xấu nhất
// Độ phức tạp không gian: O(m) cho failure function array
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// KMP là thuật toán tìm kiếm chuỗi con từ trái sang phải
// Sử dụng failure function (prefix function) để tránh so sánh lại các ký tự đã khớp
// Khi có mismatch, nhảy đến vị trí được xác định bởi failure function thay vì reset về đầu
func KnuthMorrisPratt(source, target string) (exist bool, index int) {
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

	// Tạo failure function (prefix function)
	failureFunc := buildFailureFunction(target)

	// Bắt đầu tìm kiếm
	j := 0 // Index cho target

	for i := 0; i < sourceLen; i++ {
		// Nếu ký tự không khớp, sử dụng failure function để nhảy
		for j > 0 && source[i] != target[j] {
			j = failureFunc[j-1]
		}

		// Nếu ký tự khớp, tăng j
		if source[i] == target[j] {
			j++
		}

		// Nếu đã khớp toàn bộ pattern
		if j == targetLen {
			exist = true
			index = i - targetLen + 1
			return exist, index
		}
	}

	return exist, index
}

// buildFailureFunction tạo failure function (prefix function) cho pattern
// Failure function[i] = độ dài của prefix dài nhất của pattern[0..i]
// mà cũng là suffix của pattern[0..i]
func buildFailureFunction(pattern string) []int {
	patternLen := len(pattern)
	failureFunc := make([]int, patternLen)

	// failureFunc[0] luôn là 0
	failureFunc[0] = 0

	j := 0
	for i := 1; i < patternLen; i++ {
		// Nếu ký tự không khớp, sử dụng failure function để nhảy
		for j > 0 && pattern[i] != pattern[j] {
			j = failureFunc[j-1]
		}

		// Nếu ký tự khớp, tăng j
		if pattern[i] == pattern[j] {
			j++
		}

		// Gán giá trị failure function
		failureFunc[i] = j
	}

	return failureFunc
}
