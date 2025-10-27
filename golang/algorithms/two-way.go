package algorithms

// TwoWay tìm kiếm chuỗi con bằng thuật toán Two-Way
// Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
// Độ phức tạp không gian: O(1), không sử dụng thêm bộ nhớ nào, chỉ sử dụng các biến cục bộ, không sử dụng đệ quy, không sử dụng cấu trúc dữ liệu, không sử dụng hàm gọi hàm
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Two-Way algorithm chia pattern thành hai phần và so sánh từ hai hướng
// Sử dụng critical factorization để tìm điểm chia tối ưu
func TwoWay(source, target string) (exist bool, index int) {
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

	// Tìm critical factorization
	// Chia pattern thành hai phần: target[0..period-1] và target[period..targetLen-1]
	period := 1
	for period < targetLen && target[period] == target[0] {
		period++
	}

	// Bắt đầu tìm kiếm
	i := 0
	for i <= sourceLen-targetLen {
		// So sánh phần đầu (từ trái sang phải)
		j := 0
		for j < period && i+j < sourceLen && source[i+j] == target[j] {
			j++
		}

		// Nếu không khớp phần đầu
		if j < period {
			i += j + 1
			continue
		}

		// So sánh phần sau (từ phải sang trái)
		j = period
		for j < targetLen && i+j < sourceLen && source[i+j] == target[j] {
			j++
		}

		// Nếu khớp toàn bộ
		if j == targetLen {
			exist = true
			index = i
			return exist, index
		}

		// Tính shift
		shift := 1
		if i+j < sourceLen {
			// Tìm vị trí tiếp theo có thể khớp
			for k := 0; k < period && k < j; k++ {
				if source[i+j] == target[k] {
					shift = j - k
					break
				}
			}
		}

		i += shift
	}

	return exist, index
}
