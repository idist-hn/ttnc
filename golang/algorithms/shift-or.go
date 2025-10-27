package algorithms

// ShiftOr tìm kiếm chuỗi con bằng thuật toán Shift-Or (Baeza-Yates-Gonnet)
// Độ phức tạp thời gian: O(n*m/w) trong trường hợp xấu nhất, O(n) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(σ) cho bảng bit của các ký tự
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet, w là word size
//
// Shift-Or sử dụng bit manipulation để tìm kiếm pattern
// So sánh từ trái sang phải, sử dụng bit vectors để theo dõi trạng thái khớp
// Mỗi bit trong vector đại diện cho một vị trí trong pattern
//
// Ưu điểm: Rất nhanh cho patterns ngắn (m <= 32 hoặc 64)
// Nhược điểm: Chỉ tốt cho patterns ngắn, không tốt cho patterns dài
func ShiftOr(source, target string) (exist bool, index int) {
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

	// Chỉ hoạt động tốt với patterns ngắn (tối đa 64 ký tự)
	if targetLen > 64 {
		return BruteForce(source, target)
	}

	// Shift-Or: So sánh từ trái sang phải
	// Sử dụng bit vectors để theo dõi trạng thái khớp

	// Tạo bảng bit cho mỗi ký tự
	// charBit[c] = bitmask với bit i được set nếu target[i] == c
	charBit := make(map[byte]uint64)
	for i := 0; i < targetLen; i++ {
		charBit[target[i]] |= 1 << uint(i)
	}

	// Bắt đầu tìm kiếm từ trái sang phải
	// state: bit i = 1 nếu target[0..i] khớp với source[pos-i..pos]
	//        bit i = 0 nếu không khớp
	state := uint64(0) // Khởi tạo tất cả bit là 0 (không khớp)

	for i := 0; i < sourceLen; i++ {
		// Lấy bit value của ký tự hiện tại
		charBitValue := uint64(0)
		if val, exists := charBit[source[i]]; exists {
			charBitValue = val
		}

		// Cập nhật state theo công thức Shift-Or:
		// state = ((state << 1) | 1) & charBit[source[i]]
		// - (state << 1): dịch trái để di chuyển trạng thái
		// - | 1: set bit 0 (ký tự mới bắt đầu khớp)
		// - & charBit: AND với charBit để cập nhật trạng thái khớp
		state = ((state << 1) | 1) & charBitValue

		// Kiểm tra nếu bit tại vị trí targetLen-1 là 1 (match)
		if (state & (1 << uint(targetLen-1))) != 0 {
			exist = true
			index = i - targetLen + 1
			return exist, index
		}
	}

	return exist, index
}
