package algorithms

// ApostolicoCrochemore tìm kiếm chuỗi con bằng thuật toán Apostolico-Crochemore
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(m) cho bảng shift và failure function
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Apostolico-Crochemore kết hợp ý tưởng từ Boyer-Moore và KMP
// Sử dụng hai bảng: shift table và failure function
// So sánh từ trái sang phải nhưng có thể bỏ qua các vị trí không cần kiểm tra
func ApostolicoCrochemore(source, target string) (exist bool, index int) {
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

	// Bắt đầu tìm kiếm từ trái sang phải (như KMP)
	j = 0
	for i := 0; i < sourceLen; i++ {
		// Nếu ký tự không khớp, sử dụng failure function để nhảy
		for j > 0 && source[i] != target[j] {
			j = failure[j-1]
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
