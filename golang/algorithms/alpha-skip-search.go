package algorithms


// AlphaSkipSearch tìm kiếm chuỗi con bằng thuật toán Alpha-Skip Search
// Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
// Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái (alphabet size)
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Alpha-Skip Search là một cải tiến của thuật toán Boyer-Moore, sử dụng bảng skip
// để tăng tốc quá trình tìm kiếm bằng cách bỏ qua các vị trí không khả thi
func AlphaSkipSearch(source, target string) (exist bool, index int) {
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

	// Tạo bảng skip cho các ký tự
	// Sử dụng map để lưu trữ khoảng cách skip cho mỗi ký tự
	skipTable := make(map[byte]int)

	// Khởi tạo bảng skip: mặc định skip = targetLen
	// Với mỗi ký tự trong target, tính khoảng cách từ vị trí đó đến cuối pattern
	for i := 0; i < targetLen-1; i++ {
		skipTable[target[i]] = targetLen - 1 - i
	}

	// Bắt đầu tìm kiếm từ vị trí targetLen-1
	i := targetLen - 1

	for i < sourceLen {
		// So sánh từ phải sang trái
		j := targetLen - 1
		k := i

		// So sánh các ký tự từ cuối pattern
		for j >= 0 && source[k] == target[j] {
			j--
			k--
		}

		// Nếu j < 0 nghĩa là đã khớp hoàn toàn
		if j < 0 {
			exist = true
			index = k + 1
			return exist, index
		}

		// Tính toán bước nhảy tiếp theo
		// Sử dụng ký tự tại vị trí i trong source để quyết định skip
		if i < sourceLen {
			if skipValue, found := skipTable[source[i]]; found {
				// Nếu ký tự có trong bảng skip, nhảy theo giá trị đó
				i += skipValue
			} else {
				// Nếu ký tự không có trong pattern, nhảy toàn bộ độ dài pattern
				i += targetLen
			}
		} else {
			break
		}
	}

	return exist, index
}
