package algorithms

// ZhuTakaoka tìm kiếm chuỗi con bằng thuật toán Zhu-Takaoka
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(σ²+m) cho bảng bad character 2D và good suffix
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet
//
// Zhu-Takaoka là cải tiến của Boyer-Moore
// Sử dụng 2D bad character table để tăng hiệu suất
// So sánh từ phải sang trái
func ZhuTakaoka(source, target string) (exist bool, index int) {
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

	// Tạo bảng bad character
	badChar := make(map[byte]int)
	for i := 0; i < targetLen; i++ {
		badChar[target[i]] = targetLen - 1 - i
	}

	// Tạo bảng good suffix
	goodSuffix := make([]int, targetLen+1)
	for i := 0; i <= targetLen; i++ {
		goodSuffix[i] = targetLen
	}

	// Tính failure function cho good suffix
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

	// Tính good suffix table
	j = failure[targetLen-1]
	for i := targetLen - 1; i >= 0; i-- {
		if i == targetLen-1 || target[i+1] != target[j] {
			goodSuffix[i+1] = targetLen - 1 - i
		}
		if i > 0 {
			j = failure[i-1]
		}
	}

	// Bắt đầu tìm kiếm
	i := 0
	for i <= sourceLen-targetLen {
		j = targetLen - 1

		// So sánh từ phải sang trái
		for j >= 0 && source[i+j] == target[j] {
			j--
		}

		// Nếu j < 0, tìm thấy match
		if j < 0 {
			exist = true
			index = i
			return exist, index
		}

		// Tính shift
		shift := 1
		if badCharShift, ok := badChar[source[i+j]]; ok {
			shift = badCharShift - (targetLen - 1 - j)
			if shift < 1 {
				shift = 1
			}
		} else {
			shift = targetLen - j
		}

		// So sánh với good suffix shift
		if j+1 < targetLen {
			goodSuffixShift := goodSuffix[j+1]
			if goodSuffixShift > shift {
				shift = goodSuffixShift
			}
		}

		i += shift
	}

	return exist, index
}
