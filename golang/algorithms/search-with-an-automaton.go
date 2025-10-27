package algorithms

// SearchWithAnAutomaton tìm kiếm chuỗi con bằng thuật toán Search with an Automaton
// Độ phức tạp thời gian: O(n+m)
// Độ phức tạp không gian: O(m)
// Search with an Automaton sử dụng finite automaton để tối ưu hóa tìm kiếm
func SearchWithAnAutomaton(source, target string) (exist bool, index int) {
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

	// Tính failure function (giống KMP)
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

	// Xây dựng automaton transition table
	// automaton[state][char] = next_state
	automaton := make(map[int]map[byte]int)
	for state := 0; state <= targetLen; state++ {
		automaton[state] = make(map[byte]int)
	}

	// Tính transition cho mỗi state
	for state := 0; state < targetLen; state++ {
		for c := byte(0); c < 128; c++ {
			// Tìm next state
			nextState := state
			for nextState > 0 && target[nextState] != c {
				nextState = failure[nextState-1]
			}
			if target[nextState] == c {
				nextState++
			}
			automaton[state][c] = nextState
		}
	}

	// Bắt đầu tìm kiếm
	i := 0
	j = 0

	for i < sourceLen {
		// Sử dụng automaton để tìm next state
		if nextState, ok := automaton[j][source[i]]; ok {
			j = nextState
		} else {
			// Fallback nếu không có transition
			for j > 0 && source[i] != target[j] {
				j = failure[j-1]
			}
			if source[i] == target[j] {
				j++
			}
		}

		// Nếu j == targetLen, tìm thấy match
		if j == targetLen {
			exist = true
			index = i - targetLen + 1
			return exist, index
		}

		i++
	}

	return exist, index
}
