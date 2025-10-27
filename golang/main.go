package main

import (
	"fmt"
	"golang/algorithms"
	"time"
)

func runBruteForce(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Brute Force ===")
	start := time.Now()
	exist, index := algorithms.BruteForce(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Brute Force: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Brute Force: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Brute Force: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Brute Force ===")
}

func runAlphaSkipSearch(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Alpha-Skip Search ===")
	start := time.Now()
	exist, index := algorithms.AlphaSkipSearch(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Alpha-Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Alpha-Skip Search: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Alpha-Skip Search: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Alpha-Skip Search ===")
}

func runBoyerMoore(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Boyer-Moore ===")
	start := time.Now()
	exist, index := algorithms.BoyerMoore(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Boyer-Moore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Boyer-Moore: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Boyer-Moore: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Boyer-Moore ===")
}

func runHorspool(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Horspool ===")
	start := time.Now()
	exist, index := algorithms.Horspool(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Horspool: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Horspool: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Horspool: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Horspool ===")
}

func runQuickSearch(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Quick Search ===")
	start := time.Now()
	exist, index := algorithms.QuickSearch(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Quick Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Quick Search: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Quick Search: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Quick Search ===")
}

func runKMP(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Knuth-Morris-Pratt ===")
	start := time.Now()
	exist, index := algorithms.KnuthMorrisPratt(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("KMP: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("KMP: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("KMP: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Knuth-Morris-Pratt ===")
}

func runMorrisPratt(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Morris-Pratt ===")
	start := time.Now()
	exist, index := algorithms.MorrisPratt(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Morris-Pratt: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Morris-Pratt: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Morris-Pratt: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Morris-Pratt ===")
}

func runKarpRabin(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Karp-Rabin ===")
	start := time.Now()
	exist, index := algorithms.KarpRabin(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Karp-Rabin: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Karp-Rabin: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Karp-Rabin: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Karp-Rabin ===")
}

func runShiftOr(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Shift-Or ===")
	start := time.Now()
	exist, index := algorithms.ShiftOr(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Shift-Or: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Shift-Or: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Shift-Or: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Shift-Or ===")
}

func runRaita(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Raita ===")
	start := time.Now()
	exist, index := algorithms.Raita(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Raita: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Raita: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Raita: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Raita ===")
}

func runNotSoNaive(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Not-So-Naive ===")
	start := time.Now()
	exist, index := algorithms.NotSoNaive(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Not-So-Naive: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Not-So-Naive: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Not-So-Naive: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Not-So-Naive ===")
}

func runSkipSearch(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Skip Search ===")
	start := time.Now()
	exist, index := algorithms.SkipSearch(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Skip Search: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Skip Search: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Skip Search ===")
}

func runColussi(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Colussi ===")
	start := time.Now()
	exist, index := algorithms.Colussi(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Colussi: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Colussi: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Colussi: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Colussi ===")
}

func runTunedBoyerMoore(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Tuned Boyer-Moore ===")
	start := time.Now()
	exist, index := algorithms.TunedBoyerMoore(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Tuned Boyer-Moore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Tuned Boyer-Moore: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Tuned Boyer-Moore: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Tuned Boyer-Moore ===")
}

func runReverseColussi(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Reverse Colussi ===")
	start := time.Now()
	exist, index := algorithms.ReverseColussi(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Reverse Colussi: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Reverse Colussi: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Reverse Colussi: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Reverse Colussi ===")
}

func runGalilGiancarlo(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Galil-Giancarlo ===")
	start := time.Now()
	exist, index := algorithms.GalilGiancarlo(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Galil-Giancarlo: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Galil-Giancarlo: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Galil-Giancarlo: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Galil-Giancarlo ===")
}

func runTurboBM(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Turbo BM ===")
	start := time.Now()
	exist, index := algorithms.TurboBM(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Turbo BM: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Turbo BM: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Turbo BM: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Turbo BM ===")
}

func runApostolicoCrochemore(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Apostolico-Crochemore ===")
	start := time.Now()
	exist, index := algorithms.ApostolicoCrochemore(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Apostolico-Crochemore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Apostolico-Crochemore: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Apostolico-Crochemore: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Apostolico-Crochemore ===")
}

func runApostolicoGiancarlo(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Apostolico-Giancarlo ===")
	start := time.Now()
	exist, index := algorithms.ApostolicoGiancarlo(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Apostolico-Giancarlo: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Apostolico-Giancarlo: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Apostolico-Giancarlo: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Apostolico-Giancarlo ===")
}

func runZhuTakaoka(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Zhu-Takaoka ===")
	start := time.Now()
	exist, index := algorithms.ZhuTakaoka(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Zhu-Takaoka: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Zhu-Takaoka: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Zhu-Takaoka: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Zhu-Takaoka ===")
}

func runBerryRavindran(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Berry-Ravindran ===")
	start := time.Now()
	exist, index := algorithms.BerryRavindran(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Berry-Ravindran: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Berry-Ravindran: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Berry-Ravindran: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Berry-Ravindran ===")
}

func runSmith(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Smith ===")
	start := time.Now()
	exist, index := algorithms.Smith(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Smith: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Smith: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Smith: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Smith ===")
}

func runKmpSkipSearch(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán KMP Skip Search ===")
	start := time.Now()
	exist, index := algorithms.KmpSkipSearch(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("KMP Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("KMP Skip Search: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("KMP Skip Search: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán KMP Skip Search ===")
}

func runOptimalMismatch(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Optimal Mismatch ===")
	start := time.Now()
	exist, index := algorithms.OptimalMismatch(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Optimal Mismatch: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Optimal Mismatch: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Optimal Mismatch: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Optimal Mismatch ===")
}

func runMaximalShift(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Maximal Shift ===")
	start := time.Now()
	exist, index := algorithms.MaximalShift(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Maximal Shift: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Maximal Shift: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Maximal Shift: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Maximal Shift ===")
}

func runSimon(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Simon ===")
	start := time.Now()
	exist, index := algorithms.Simon(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Simon: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Simon: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Simon: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Simon ===")
}

func runStringMatchingOnOrderedAlphabets(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán String Matching on Ordered Alphabets ===")
	start := time.Now()
	exist, index := algorithms.StringMatchingOnOrderedAlphabets(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("String Matching on Ordered Alphabets: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("String Matching on Ordered Alphabets: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("String Matching on Ordered Alphabets: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán String Matching on Ordered Alphabets ===")
}

func runTwoWay(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Two Way ===")
	start := time.Now()
	exist, index := algorithms.TwoWay(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Two Way: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Two Way: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Two Way: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Two Way ===")
}

func runReverseFactor(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Reverse Factor ===")
	start := time.Now()
	exist, index := algorithms.ReverseFactor(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Reverse Factor: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Reverse Factor: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Reverse Factor: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Reverse Factor ===")
}

func runTurboReverseFactor(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Turbo Reverse Factor ===")
	start := time.Now()
	exist, index := algorithms.TurboReverseFactor(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Turbo Reverse Factor: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Turbo Reverse Factor: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Turbo Reverse Factor: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Turbo Reverse Factor ===")
}

func runForwardDAWGMatching(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Forward DAWG Matching ===")
	start := time.Now()
	exist, index := algorithms.ForwardDawgMatching(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Forward DAWG Matching: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Forward DAWG Matching: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Forward DAWG Matching: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Forward DAWG Matching ===")
}

func runBackwardOracleMatching(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Backward Oracle Matching ===")
	start := time.Now()
	exist, index := algorithms.BackwardOracleMatching(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Backward Oracle Matching: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Backward Oracle Matching: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Backward Oracle Matching: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Backward Oracle Matching ===")
}

func runGalilSeiferas(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Galil-Seiferas ===")
	start := time.Now()
	exist, index := algorithms.GalilSeiferas(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Galil-Seiferas: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Galil-Seiferas: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Galil-Seiferas: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Galil-Seiferas ===")
}

func runSearchWithAnAutomaton(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Search with an Automaton ===")
	start := time.Now()
	exist, index := algorithms.SearchWithAnAutomaton(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Search with an Automaton: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Search with an Automaton: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Search with an Automaton: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Search with an Automaton ===")
}

func main() {
	// nhập giá trị của chuỗi source và chuỗi target từ bàn phím
	var source, target string
	// fmt.Println("Nhập chuỗi source:")
	// fmt.Scanln(&source)
	// fmt.Println("Nhập chuỗi target:")
	// fmt.Scanln(&target)
	// fmt.Println()

	// Load test English text
	source = "String matching algorithms are fundamental components in computer science and software engineering. The Boyer-Moore algorithm uses bad character and good suffix heuristics to skip characters efficiently during pattern matching. The Knuth-Morris-Pratt algorithm preprocesses the pattern to create a failure function that avoids unnecessary character comparisons. Alpha-Skip Search combines the best features of both approaches, using a skip table to jump over impossible match positions. These algorithms significantly outperform naive brute force methods, especially when dealing with large text documents or when the pattern occurs infrequently in the source text."
	target = "comparisons"
	fmt.Println("Source:", source)
	fmt.Println("Target:", target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Alpha-Skip Search
	runAlphaSkipSearch(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Brute Force
	runBruteForce(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Boyer-Moore
	runBoyerMoore(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Horspool
	runHorspool(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Quick Search
	runQuickSearch(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Knuth-Morris-Pratt
	runKMP(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Morris-Pratt
	runMorrisPratt(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Karp-Rabin
	runKarpRabin(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Shift-Or
	runShiftOr(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Raita
	runRaita(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Not-So-Naive
	runNotSoNaive(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Skip Search
	runSkipSearch(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Colussi
	runColussi(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Tuned Boyer-Moore
	runTunedBoyerMoore(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Reverse Colussi
	runReverseColussi(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Galil-Giancarlo
	runGalilGiancarlo(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Turbo BM
	runTurboBM(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Apostolico-Crochemore
	runApostolicoCrochemore(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Apostolico-Giancarlo
	runApostolicoGiancarlo(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Zhu-Takaoka
	runZhuTakaoka(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Berry-Ravindran
	runBerryRavindran(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Smith
	runSmith(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán KMP Skip Search
	runKmpSkipSearch(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Optimal Mismatch
	runOptimalMismatch(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Maximal Shift
	runMaximalShift(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Simon
	runSimon(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán String Matching on Ordered Alphabets
	runStringMatchingOnOrderedAlphabets(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Two Way
	runTwoWay(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Reverse Factor
	runReverseFactor(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Turbo Reverse Factor
	runTurboReverseFactor(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Forward DAWG Matching
	runForwardDAWGMatching(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Backward Oracle Matching
	runBackwardOracleMatching(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Galil-Seiferas
	runGalilSeiferas(source, target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Search with an Automaton
	runSearchWithAnAutomaton(source, target)
	fmt.Println()

	fmt.Println("Kết thúc")
}
