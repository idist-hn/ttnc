package algorithms

// KarpRabin tìm kiếm chuỗi con bằng thuật toán Karp-Rabin
// Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n*m) trong trường hợp xấu nhất
// Độ phức tạp không gian: O(1) không tính hash table
// Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
//
// Karp-Rabin sử dụng rolling hash để so sánh pattern
// Thay vì so sánh từng ký tự, ta tính hash của pattern và các substring của source
// Nếu hash khớp, ta kiểm tra lại từng ký tự để tránh hash collision
//
// Ưu điểm: Tốt cho multiple pattern matching, DNA sequence matching
// Nhược điểm: Hash collision có thể làm chậm thuật toán
const (
	// Prime number cho rolling hash
	prime = 101
	// Base cho rolling hash (số ký tự trong alphabet)
	base = 256
)

func KarpRabin(source, target string) (exist bool, index int) {
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

	// Tính hash của pattern
	patternHash := calculateHash(target, targetLen)

	// Tính hash của substring đầu tiên của source
	windowHash := calculateHash(source, targetLen)

	// Tính pow = base^(targetLen-1) % prime
	pow := 1
	for i := 0; i < targetLen-1; i++ {
		pow = (pow * base) % prime
	}

	// Bắt đầu tìm kiếm
	for i := 0; i <= sourceLen-targetLen; i++ {
		// Nếu hash khớp, kiểm tra từng ký tự
		if windowHash == patternHash {
			// Kiểm tra lại từng ký tự để tránh hash collision
			match := true
			for j := 0; j < targetLen; j++ {
				if source[i+j] != target[j] {
					match = false
					break
				}
			}

			if match {
				exist = true
				index = i
				return exist, index
			}
		}

		// Tính hash cho window tiếp theo
		if i < sourceLen-targetLen {
			// Xóa ký tự đầu tiên của window hiện tại
			windowHash = (base*(windowHash-int(source[i])*pow) + int(source[i+targetLen])) % prime

			// Đảm bảo hash không âm
			if windowHash < 0 {
				windowHash = windowHash + prime
			}
		}
	}

	return exist, index
}

// calculateHash tính hash của một chuỗi
func calculateHash(str string, len int) int {
	hash := 0
	for i := 0; i < len; i++ {
		hash = (hash*base + int(str[i])) % prime
	}
	return hash
}
