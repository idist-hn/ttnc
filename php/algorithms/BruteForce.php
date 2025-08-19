<?php

namespace Algorithms;

/**
 * BruteForce - Thuật toán tìm kiếm chuỗi con bằng Brute Force
 * 
 * Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(1) - không sử dụng thêm bộ nhớ
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Thuật toán Brute Force là thuật toán tìm kiếm chuỗi con đơn giản nhất,
 * nó sẽ so sánh từng ký tự của chuỗi target với chuỗi source một cách tuần tự
 */
class BruteForce
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Brute Force
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
        
        $sourceLength = strlen($source);
        $targetLength = strlen($target);
        
        // Kiểm tra trường hợp đặc biệt
        if ($targetLength === 0) {
            return ['exist' => true, 'index' => 0];
        }
        
        if ($targetLength > $sourceLength) {
            return ['exist' => false, 'index' => -1];
        }
        
        // Tìm kiếm chuỗi target trong source
        for ($i = 0; $i <= $sourceLength - $targetLength; $i++) {
            if ($source[$i] === $target[0]) {
                // Tìm thấy ký tự đầu tiên khớp
                $exist = true;
                $index = $i;
                
                // Kiểm tra các ký tự tiếp theo
                for ($j = 1; $j < $targetLength; $j++) {
                    if ($source[$i + $j] !== $target[$j]) {
                        // Không khớp, reset và tiếp tục
                        $exist = false;
                        $index = -1;
                        break;
                    }
                }
                
                // Nếu tìm thấy hoàn toàn, thoát khỏi vòng lặp
                if ($exist) {
                    break;
                }
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
        $sourceLength = strlen($source);
        $targetLength = strlen($target);
        
        if ($targetLength === 0 || $targetLength > $sourceLength) {
            return $positions;
        }
        
        for ($i = 0; $i <= $sourceLength - $targetLength; $i++) {
            $match = true;
            
            for ($j = 0; $j < $targetLength; $j++) {
                if ($source[$i + $j] !== $target[$j]) {
                    $match = false;
                    break;
                }
            }
            
            if ($match) {
                $positions[] = $i;
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
}
