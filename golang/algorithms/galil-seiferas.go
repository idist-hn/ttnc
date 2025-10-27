package algorithms

// GalilSeiferas tìm kiếm chuỗi con bằng thuật toán Galil-Seiferas
// Độ phức tạp thời gian: O(n+m)
// Độ phức tạp không gian: O(m)
// Galil-Seiferas là cải tiến của Two-Way algorithm với Galil's optimization
func GalilSeiferas(source, target string) (exist bool, index int) {
	exist = false
	index = -1

	sourceLen := len(source)
	targetLen := len(target)

	if targetLen == 0 {
		return true, 0
	}

	if targetLen > sourceLen {
		return false, -1
	}

	// Tính failure function
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

	// Tìm critical factorization
	period := 1
	for period < targetLen && target[period] == target[0] {
		period++
	}

	// Bắt đầu tìm kiếm
	i := 0
	galilShift := 0

	for i <= sourceLen-targetLen {
		// So sánh phần đầu (từ trái sang phải)
		j := 0
		for j < period && i+j < sourceLen && source[i+j] == target[j] {
			j++
		}

		// Nếu không khớp phần đầu
		if j < period {
			i += j + 1
			galilShift = 0
			continue
		}

		// So sánh phần sau (từ phải sang trái) với Galil's optimization
		j = period
		for j < targetLen && j >= galilShift && i+j < sourceLen && source[i+j] == target[j] {
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
			for k := 0; k < period && k < j; k++ {
				if source[i+j] == target[k] {
					shift = j - k
					break
				}
			}
		}

		galilShift = targetLen - shift
		i += shift
	}

	return exist, index
}
