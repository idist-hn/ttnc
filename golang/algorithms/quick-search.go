package algorithms

// QuickSearch tìm kiếm chuỗi con bằng thuật toán Quick Search
// Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
// Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Quick Search là phiên bản đơn giản hóa của Boyer-Moore
// Chỉ sử dụng Bad Character Heuristic dựa trên ký tự ngay sau pattern
// So sánh từ phải sang trái, nhưng xem xét ký tự tại vị trí shift+m (ngay sau pattern)
func QuickSearch(source, target string) (exist bool, index int) {
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

	// Tạo Quick Search Table (dựa trên ký tự ngay sau pattern)
	qsTable := buildQuickSearchTable(target)

	// Bắt đầu tìm kiếm
	shift := 0

	for shift <= sourceLen-targetLen {
		j := targetLen - 1

		// So sánh từ phải sang trái
		for j >= 0 && target[j] == source[shift+j] {
			j--
		}

		// Nếu pattern được tìm thấy
		if j < 0 {
			exist = true
			index = shift
			return exist, index
		}

		// Quick Search: Xem xét ký tự ngay sau pattern
		// Nếu shift+targetLen < sourceLen, xem ký tự tại vị trí đó
		if shift+targetLen < sourceLen {
			nextChar := source[shift+targetLen]
			if qsShift, exists := qsTable[nextChar]; exists {
				shift += qsShift
			} else {
				shift += targetLen + 1
			}
		} else {
			// Nếu không có ký tự sau pattern, shift toàn bộ pattern
			shift += targetLen + 1
		}
	}

	return exist, index
}

// buildQuickSearchTable tạo bảng Quick Search
func buildQuickSearchTable(pattern string) map[byte]int {
	qsTable := make(map[byte]int)
	patternLen := len(pattern)

	// Khởi tạo tất cả ký tự trong pattern
	// Distance = patternLen - i (từ cuối pattern)
	for i := 0; i < patternLen; i++ {
		qsTable[pattern[i]] = patternLen - i
	}

	return qsTable
}
