package main

import (
	"fmt"
	"sources/algorithms"
	"time"
)

func runBruteForce(source, target string) {
	fmt.Println("=== Bắt đầu thuật toán Brute Force ===")
	start := time.Now()
	exist, index := algorithms.BruteForce(source, target)
	elapsed := time.Since(start)
	if exist {
		fmt.Println("Bruteforce: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí", index)
	} else {
		fmt.Println("Bruteforce: Chuỗi target không tồn tại trong chuỗi source")
	}
	fmt.Println("Bruteforce: Thời gian chạy", elapsed)
	fmt.Println("=== Kết thúc thuật toán Brute Force ===")
}

func main() {
	// nhập giá trị của chuỗi source và chuỗi target từ bàn phím
	var source, target string
	fmt.Println("Nhập chuỗi source:")
	fmt.Scanln(&source)
	fmt.Println("Nhập chuỗi target:")
	fmt.Scanln(&target)
	fmt.Println()

	// Đo thời gian thực thi của thuật toán Brute Force
	runBruteForce(source, target)
	fmt.Println()
	// Đo thời gian thực thi của thuật toán KMP

	// Đo thời gian thực thi của thuật toán Boyer-Moore

	fmt.Println("Kết thúc")
}
