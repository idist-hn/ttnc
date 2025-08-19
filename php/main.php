<?php

require_once 'algorithms/BruteForce.php';
require_once 'algorithms/AlphaSkipSearch.php';

use Algorithms\BruteForce;
use Algorithms\AlphaSkipSearch;

/**
 * Chương trình chính để test thuật toán Brute Force
 */

echo "=== Chương trình tìm kiếm chuỗi con bằng PHP ===\n";
echo "Thuật toán: Brute Force\n\n";

// Nhập dữ liệu từ người dùng
echo "Nhập chuỗi source: ";
$source = trim(fgets(STDIN));

echo "Nhập chuỗi target: ";
$target = trim(fgets(STDIN));

echo "\n";

/**
 * Chạy thuật toán Brute Force và đo thời gian
 */
function runBruteForce(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Brute Force ===\n";

    $startTime = microtime(true);
    $result = BruteForce::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Brute Force ---\n";
    if ($result['exist']) {
        echo "Brute Force: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Brute Force: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Brute Force: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Brute Force ===\n\n";
}

/**
 * Chạy thuật toán Alpha-Skip Search và đo thời gian
 */
function runAlphaSkipSearch(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Alpha-Skip Search ===\n";

    $startTime = microtime(true);
    $result = AlphaSkipSearch::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Alpha-Skip Search ---\n";
    if ($result['exist']) {
        echo "Alpha-Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Alpha-Skip Search: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Alpha-Skip Search: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Alpha-Skip Search ===\n\n";
}

/**
 * Chạy các test bổ sung
 */
function runAdditionalTests(string $source, string $target): void
{
    echo "=== Test bổ sung ===\n";
    
    // Tìm tất cả vị trí
    $allPositions = BruteForce::searchAll($source, $target);
    echo "Tất cả vị trí tìm thấy: " . (empty($allPositions) ? "Không có" : implode(", ", $allPositions)) . "\n";
    
    // Đếm số lần xuất hiện
    $count = BruteForce::count($source, $target);
    echo "Số lần xuất hiện: $count\n";
    
    echo "=== Kết thúc test bổ sung ===\n\n";
}

// Chạy thuật toán chính
runBruteForce($source, $target);

// Chạy thuật toán Alpha-Skip Search
runAlphaSkipSearch($source, $target);

// Chạy test bổ sung
runAdditionalTests($source, $target);

// Ví dụ demo
echo "=== Demo với dữ liệu mẫu ===\n";
$demoSource = "hello world programming";
$demoTarget = "world";

echo "Source: '$demoSource'\n";
echo "Target: '$demoTarget'\n\n";

runBruteForce($demoSource, $demoTarget);
runAdditionalTests($demoSource, $demoTarget);

echo "Kết thúc chương trình PHP\n";
