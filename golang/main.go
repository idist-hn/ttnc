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

	// Đo thời gian thực thi của thuật toán KMP

	// Đo thời gian thực thi của thuật toán Boyer-Moore

	fmt.Println("Kết thúc")
}
