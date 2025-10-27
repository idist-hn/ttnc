package algorithms

// Raita tìm kiếm chuỗi con bằng thuật toán Raita
// Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
// Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Raita là biến thể của Boyer-Moore sử dụng thêm một ký tự để tối ưu hóa
// So sánh: ký tự cuối cùng -> ký tự đầu tiên -> các ký tự còn lại
// Điều này giúp loại bỏ các vị trí không khớp nhanh hơn
func Raita(source, target string) (exist bool, index int) {
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
	badChar := buildRaitaBadCharTable(target)

	// Bắt đầu tìm kiếm
	shift := 0

	for shift <= sourceLen-targetLen {
		// Raita: So sánh theo thứ tự: cuối -> đầu -> giữa
		// 1. So sánh ký tự cuối cùng
		if target[targetLen-1] != source[shift+targetLen-1] {
			// Nếu ký tự cuối không khớp, skip
			badCharShift := getRaitaBadCharShift(badChar, source[shift+targetLen-1], targetLen-1)
			shift += badCharShift
			continue
		}

		// 2. So sánh ký tự đầu tiên
		if target[0] != source[shift] {
			// Nếu ký tự đầu không khớp, skip
			badCharShift := getRaitaBadCharShift(badChar, source[shift], 0)
			shift += badCharShift
			continue
		}

		// 3. So sánh các ký tự còn lại từ trái sang phải
		j := 1
		for j < targetLen-1 && target[j] == source[shift+j] {
			j++
		}

		// Nếu tất cả ký tự khớp
		if j == targetLen-1 {
			exist = true
			index = shift
			return exist, index
		}

		// Nếu không khớp, tính shift dựa trên ký tự không khớp
		badCharShift := getRaitaBadCharShift(badChar, source[shift+j], j)
		shift += badCharShift
	}

	return exist, index
}

// buildRaitaBadCharTable tạo bảng Bad Character cho Raita
func buildRaitaBadCharTable(pattern string) map[byte]int {
	badChar := make(map[byte]int)
	patternLen := len(pattern)

	// Khởi tạo tất cả ký tự với giá trị mặc định
	for i := 0; i < patternLen; i++ {
		badChar[pattern[i]] = patternLen - 1 - i
	}

	return badChar
}

// getRaitaBadCharShift tính toán shift dựa trên Bad Character Heuristic
func getRaitaBadCharShift(badChar map[byte]int, char byte, position int) int {
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
