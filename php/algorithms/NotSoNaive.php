<?php

namespace Algorithms;

/**
 * Not-So-Naive - Thuật toán tìm kiếm chuỗi con bằng Not-So-Naive
 * 
 * Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(1)
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Not-So-Naive là tối ưu hóa của Brute Force
 * Thay vì so sánh từ trái sang phải, ta so sánh ký tự đầu và cuối trước
 * Nếu ký tự đầu hoặc cuối không khớp, ta có thể bỏ qua vị trí đó ngay
 */
class NotSoNaive
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Not-So-Naive
     * 
     * @param string $source Chuỗi nguồn để tìm kiếm
     * @param string $target Chuỗi đích cần tìm
     * @return array ['exist' => bool, 'index' => int]
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
        
        // Lấy ký tự đầu và cuối của pattern
        $firstChar = $target[0];
        $lastChar = $target[$targetLen - 1];
        
        // Bắt đầu tìm kiếm từ trái sang phải
        for ($i = 0; $i <= $sourceLen - $targetLen; $i++) {
            // Kiểm tra ký tự đầu
            if ($source[$i] !== $firstChar) {
                continue;
            }
            
            // Kiểm tra ký tự cuối
            if ($source[$i + $targetLen - 1] !== $lastChar) {
                continue;
            }
            
            // Nếu ký tự đầu và cuối khớp, so sánh toàn bộ pattern
            $match = true;
            for ($j = 1; $j < $targetLen - 1; $j++) {
                if ($source[$i + $j] !== $target[$j]) {
                    $match = false;
                    break;
                }
            }
            
            // Nếu tất cả ký tự khớp
            if ($match) {
                $exist = true;
                $index = $i;
                return ['exist' => $exist, 'index' => $index];
            }
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tìm kiếm tất cả các vị trí xuất hiện của chuỗi con
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
                $offset += $result['index'] + 1;
            } else {
                break;
            }
        }
        
        return $positions;
    }
    
    /**
     * Đếm số lần xuất hiện của chuỗi con
     */
    public static function count(string $source, string $target): int
    {
        return count(self::searchAll($source, $target));
    }
}

