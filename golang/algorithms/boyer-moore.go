package algorithms

// BoyerMoore tìm kiếm chuỗi con bằng thuật toán Boyer-Moore
// Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
// Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Boyer-Moore sử dụng Bad Character Heuristic:
// Skip dựa trên ký tự không khớp trong text
func BoyerMoore(source, target string) (exist bool, index int) {
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
	badChar := buildBadCharacterTable(target)

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

		// Tính toán shift dựa trên Bad Character Heuristic
		// Sử dụng ký tự không khớp trong text
		badCharShift := getBadCharacterShift(badChar, source[shift+j], j)
		shift += badCharShift
	}

	return exist, index
}

// buildBadCharacterTable tạo bảng Bad Character
func buildBadCharacterTable(pattern string) map[byte]int {
	badChar := make(map[byte]int)
	patternLen := len(pattern)

	// Khởi tạo tất cả ký tự với giá trị mặc định
	for i := 0; i < patternLen; i++ {
		badChar[pattern[i]] = patternLen - 1 - i
	}

	return badChar
}

// getBadCharacterShift tính toán shift dựa trên Bad Character Heuristic
func getBadCharacterShift(badChar map[byte]int, char byte, position int) int {
	if shift, exists := badChar[char]; exists {
		// shift là distance từ cuối pattern đến ký tự
		// Nếu shift > position, chỉ shift 1 để tránh shift lùi
		if shift > position {
			return 1
		}
		return shift
	}
	// Nếu ký tự không có trong pattern, shift toàn bộ pattern
	return position + 1
}
