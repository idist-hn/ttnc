<?php

namespace Algorithms;

/**
 * Morris-Pratt - Thuật toán tìm kiếm chuỗi con bằng Morris-Pratt
 * 
 * Độ phức tạp thời gian: O(n+m) trong cả trường hợp tốt nhất và xấu nhất
 * Độ phức tạp không gian: O(m) cho prefix function array
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Morris-Pratt là tiền thân của KMP, sử dụng prefix function
 * Khác với KMP ở cách xử lý mismatch: MP sử dụng prefix[j-1] thay vì prefix[j]
 * Điều này làm cho MP đơn giản hơn nhưng có thể kém hiệu quả hơn KMP trong một số trường hợp
 */
class MorrisPratt
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Morris-Pratt
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
        
        // Tạo prefix function
        $prefixFunc = self::buildMPPrefixFunction($target);
        
        // Bắt đầu tìm kiếm
        $j = 0; // Index cho target
        
        for ($i = 0; $i < $sourceLen; $i++) {
            // Nếu ký tự không khớp, sử dụng prefix function để nhảy
            while ($j > 0 && $source[$i] !== $target[$j]) {
                $j = $prefixFunc[$j - 1];
            }
            
            // Nếu ký tự khớp, tăng j
            if ($source[$i] === $target[$j]) {
                $j++;
            }
            
            // Nếu đã khớp toàn bộ pattern
            if ($j === $targetLen) {
                $exist = true;
                $index = $i - $targetLen + 1;
                return ['exist' => $exist, 'index' => $index];
            }
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tạo prefix function cho pattern
     * Prefix function[i] = độ dài của prefix dài nhất của pattern[0..i]
     * mà cũng là suffix của pattern[0..i]
     */
    private static function buildMPPrefixFunction(string $pattern): array
    {
        $patternLen = strlen($pattern);
        $prefixFunc = array_fill(0, $patternLen, 0);
        
        // prefixFunc[0] luôn là 0
        $prefixFunc[0] = 0;
        
        $j = 0;
        for ($i = 1; $i < $patternLen; $i++) {
            // Nếu ký tự không khớp, sử dụng prefix function để nhảy
            while ($j > 0 && $pattern[$i] !== $pattern[$j]) {
                $j = $prefixFunc[$j - 1];
            }
            
            // Nếu ký tự khớp, tăng j
            if ($pattern[$i] === $pattern[$j]) {
                $j++;
            }
            
            // Gán giá trị prefix function
            $prefixFunc[$i] = $j;
        }
        
        return $prefixFunc;
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
        
        $prefixFunc = self::buildMPPrefixFunction($target);
        $j = 0;
        
        for ($i = 0; $i < $sourceLen; $i++) {
            while ($j > 0 && $source[$i] !== $target[$j]) {
                $j = $prefixFunc[$j - 1];
            }
            
            if ($source[$i] === $target[$j]) {
                $j++;
            }
            
            if ($j === $targetLen) {
                $positions[] = $i - $targetLen + 1;
                $j = $prefixFunc[$j - 1];
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
