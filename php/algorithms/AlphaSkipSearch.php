<?php

namespace Algorithms;

/**
 * AlphaSkipSearch - Thuật toán tìm kiếm chuỗi con bằng Alpha-Skip Search
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái (alphabet size)
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Alpha-Skip Search là một cải tiến của thuật toán Boyer-Moore, sử dụng bảng skip
 * để tăng tốc quá trình tìm kiếm bằng cách bỏ qua các vị trí không khả thi
 */
class AlphaSkipSearch
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Alpha-Skip Search
     * 
     * @param string $source Chuỗi nguồn để tìm kiếm
     * @param string $target Chuỗi đích cần tìm
     * @return array ['exist' => bool, 'index' => int] 
     *               exist: true nếu tìm thấy, false nếu không
     *               index: vị trí bắt đầu của chuỗi con (hoặc -1 nếu không tìm thấy)
     */
    public static function search(string $source, string $target): array
    {
        $exist = false;
        $index = -1;
        
        $sourceLen = strlen($source);
        $targetLen = strlen($target);
        
        // Kiểm tra trường hợp đặc biệt
        if ($targetLen === 0) {
            return ['exist' => true, 'index' => 0];
        }
        
        if ($targetLen > $sourceLen) {
            return ['exist' => false, 'index' => -1];
        }
        
        // Tạo bảng skip cho các ký tự
        $skipTable = [];
        
        // Khởi tạo bảng skip: với mỗi ký tự trong target, 
        // tính khoảng cách từ vị trí đó đến cuối pattern
        for ($i = 0; $i < $targetLen - 1; $i++) {
            $skipTable[$target[$i]] = $targetLen - 1 - $i;
        }
        
        // Bắt đầu tìm kiếm từ vị trí targetLen-1
        $i = $targetLen - 1;
        
        while ($i < $sourceLen) {
            // So sánh từ phải sang trái (như Boyer-Moore)
            $j = $targetLen - 1;
            $k = $i;
            
            // So sánh các ký tự từ cuối pattern
            while ($j >= 0 && $source[$k] === $target[$j]) {
                $j--;
                $k--;
            }
            
            // Nếu j < 0 nghĩa là đã khớp hoàn toàn
            if ($j < 0) {
                $exist = true;
                $index = $k + 1;
                return ['exist' => $exist, 'index' => $index];
            }
            
            // Tính toán bước nhảy tiếp theo
            // Sử dụng ký tự tại vị trí i trong source để quyết định skip
            if ($i < $sourceLen) {
                if (isset($skipTable[$source[$i]])) {
                    // Nếu ký tự có trong bảng skip, nhảy theo giá trị đó
                    $i += $skipTable[$source[$i]];
                } else {
                    // Nếu ký tự không có trong pattern, nhảy toàn bộ độ dài pattern
                    $i += $targetLen;
                }
            } else {
                break;
            }
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tìm kiếm tất cả các vị trí xuất hiện của chuỗi con
     * 
     * @param string $source Chuỗi nguồn để tìm kiếm
     * @param string $target Chuỗi đích cần tìm
     * @return array Mảng các vị trí tìm thấy
     */
    public static function searchAll(string $source, string $target): array
    {
        $positions = [];
        $sourceLen = strlen($source);
        $targetLen = strlen($target);
        
        if ($targetLen === 0 || $targetLen > $sourceLen) {
            return $positions;
        }
        
        $offset = 0;
        while ($offset <= $sourceLen - $targetLen) {
            $substring = substr($source, $offset);
            $result = self::search($substring, $target);
            
            if ($result['exist']) {
                $positions[] = $offset + $result['index'];
                $offset += $result['index'] + 1; // Tìm tiếp từ vị trí sau match
            } else {
                break;
            }
        }
        
        return $positions;
    }
    
    /**
     * Đếm số lần xuất hiện của chuỗi con
     * 
     * @param string $source Chuỗi nguồn để tìm kiếm
     * @param string $target Chuỗi đích cần tìm
     * @return int Số lần xuất hiện
     */
    public static function count(string $source, string $target): int
    {
        return count(self::searchAll($source, $target));
    }
    
    /**
     * So sánh hiệu suất với Brute Force
     * 
     * @param string $source Chuỗi nguồn để tìm kiếm
     * @param string $target Chuỗi đích cần tìm
     * @return array Thông tin so sánh hiệu suất
     */
    public static function benchmark(string $source, string $target): array
    {
        // Test Alpha-Skip Search
        $startTime = microtime(true);
        $alphaResult = self::search($source, $target);
        $alphaTime = (microtime(true) - $startTime) * 1000;
        
        // Test Brute Force để so sánh
        $startTime = microtime(true);
        $bruteResult = \Algorithms\BruteForce::search($source, $target);
        $bruteTime = (microtime(true) - $startTime) * 1000;
        
        return [
            'alpha_skip_search' => [
                'result' => $alphaResult,
                'time_ms' => $alphaTime
            ],
            'brute_force' => [
                'result' => $bruteResult,
                'time_ms' => $bruteTime
            ],
            'speedup' => $bruteTime > 0 ? $bruteTime / $alphaTime : 1
        ];
    }
}
