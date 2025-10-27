package algorithms

// MorrisPratt tìm kiếm chuỗi con bằng thuật toán Morris-Pratt
// Độ phức tạp thời gian: O(n+m) trong cả trường hợp tốt nhất và xấu nhất
// Độ phức tạp không gian: O(m) cho prefix function array
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Morris-Pratt là tiền thân của KMP, sử dụng prefix function
// Khác với KMP ở cách xử lý mismatch: MP sử dụng prefix[j-1] thay vì prefix[j]
// Điều này làm cho MP đơn giản hơn nhưng có thể kém hiệu quả hơn KMP trong một số trường hợp
func MorrisPratt(source, target string) (exist bool, index int) {
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

	// Tạo prefix function (failure function)
	prefixFunc := buildMPPrefixFunction(target)

	// Bắt đầu tìm kiếm
	j := 0 // Index cho target

	for i := 0; i < sourceLen; i++ {
		// Nếu ký tự không khớp, sử dụng prefix function để nhảy
		// Morris-Pratt: sử dụng prefixFunc[j-1] khi j > 0
		for j > 0 && source[i] != target[j] {
			j = prefixFunc[j-1]
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

// buildMPPrefixFunction tạo prefix function cho pattern
// Prefix function[i] = độ dài của prefix dài nhất của pattern[0..i]
// mà cũng là suffix của pattern[0..i]
func buildMPPrefixFunction(pattern string) []int {
	patternLen := len(pattern)
	prefixFunc := make([]int, patternLen)

	// prefixFunc[0] luôn là 0
	prefixFunc[0] = 0

	j := 0
	for i := 1; i < patternLen; i++ {
		// Nếu ký tự không khớp, sử dụng prefix function để nhảy
		for j > 0 && pattern[i] != pattern[j] {
			j = prefixFunc[j-1]
		}

		// Nếu ký tự khớp, tăng j
		if pattern[i] == pattern[j] {
			j++
		}

		// Gán giá trị prefix function
		prefixFunc[i] = j
	}

	return prefixFunc
}
