package algorithms

// NotSoNaive tìm kiếm chuỗi con bằng thuật toán Not-So-Naive
// Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(1), không sử dụng thêm bộ nhớ nào
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Not-So-Naive là tối ưu hóa của Brute Force
// Thay vì so sánh từ trái sang phải, ta so sánh ký tự đầu và cuối trước
// Nếu ký tự đầu hoặc cuối không khớp, ta có thể bỏ qua vị trí đó ngay
// Điều này giúp giảm số lần so sánh các ký tự ở giữa
func NotSoNaive(source, target string) (exist bool, index int) {
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

	// Lấy ký tự đầu và cuối của pattern
	firstChar := target[0]
	lastChar := target[targetLen-1]

	// Bắt đầu tìm kiếm từ trái sang phải
	for i := 0; i <= sourceLen-targetLen; i++ {
		// Kiểm tra ký tự đầu
		if source[i] != firstChar {
			continue
		}

		// Kiểm tra ký tự cuối
		if source[i+targetLen-1] != lastChar {
			continue
		}

		// Nếu ký tự đầu và cuối khớp, so sánh toàn bộ pattern
		match := true
		for j := 1; j < targetLen-1; j++ {
			if source[i+j] != target[j] {
				match = false
				break
			}
		}

		// Nếu tất cả ký tự khớp
		if match {
			exist = true
			index = i
			return exist, index
		}
	}

	return exist, index
}
