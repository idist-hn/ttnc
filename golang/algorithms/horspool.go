package algorithms

// Horspool tìm kiếm chuỗi con bằng thuật toán Horspool
// Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
// Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Horspool là phiên bản đơn giản hóa của Boyer-Moore
// Chỉ sử dụng Bad Character Heuristic (không sử dụng Good Suffix)
// So sánh từ phải sang trái, nhưng luôn skip dựa trên ký tự cuối cùng của pattern
func Horspool(source, target string) (exist bool, index int) {
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

	// Tạo Bad Character Table
	badChar := buildHorsPoolBadCharTable(target)

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

		// Horspool: Luôn sử dụng ký tự cuối cùng của pattern để tính shift
		// Điều này khác với Boyer-Moore, nơi sử dụng ký tự không khớp
		lastCharShift := badChar[target[targetLen-1]]
		shift += lastCharShift
	}

	return exist, index
}

// buildHorsPoolBadCharTable tạo bảng Bad Character cho Horspool
func buildHorsPoolBadCharTable(pattern string) map[byte]int {
	badChar := make(map[byte]int)
	patternLen := len(pattern)

	// Khởi tạo tất cả ký tự với giá trị mặc định (độ dài pattern)
	for i := 0; i < patternLen; i++ {
		badChar[pattern[i]] = patternLen - i
	}

	return badChar
}

// getHorsPoolCharShift tính toán shift dựa trên Bad Character Heuristic
func getHorsPoolCharShift(badChar map[byte]int, char byte, position int) int {
	if shift, exists := badChar[char]; exists {
		// Nếu shift > position, chỉ shift 1 để tránh shift lùi
		if shift > position {
			return 1
		}
		return shift
	}
	// Nếu ký tự không có trong pattern, shift toàn bộ pattern
	return position + 1
}
