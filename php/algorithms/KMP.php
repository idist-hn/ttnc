<?php

namespace Algorithms;

/**
 * KMP - Thuật toán tìm kiếm chuỗi con bằng Knuth-Morris-Pratt
 * 
 * Độ phức tạp thời gian: O(n+m) trong cả trường hợp tốt nhất và xấu nhất
 * Độ phức tạp không gian: O(m) cho failure function array
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * KMP là thuật toán tìm kiếm chuỗi con từ trái sang phải
 * Sử dụng failure function (prefix function) để tránh so sánh lại các ký tự đã khớp
 * Khi có mismatch, nhảy đến vị trí được xác định bởi failure function thay vì reset về đầu
 */
class KMP
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán KMP
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
        
        // Tạo failure function
        $failureFunc = self::buildFailureFunction($target);
        
        // Bắt đầu tìm kiếm
        $j = 0; // Index cho target
        
        for ($i = 0; $i < $sourceLen; $i++) {
            // Nếu ký tự không khớp, sử dụng failure function để nhảy
            while ($j > 0 && $source[$i] !== $target[$j]) {
                $j = $failureFunc[$j - 1];
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
     * Tạo failure function (prefix function) cho pattern
     * Failure function[i] = độ dài của prefix dài nhất của pattern[0..i]
     * mà cũng là suffix của pattern[0..i]
     */
    private static function buildFailureFunction(string $pattern): array
    {
        $patternLen = strlen($pattern);
        $failureFunc = array_fill(0, $patternLen, 0);
        
        // failureFunc[0] luôn là 0
        $failureFunc[0] = 0;
        
        $j = 0;
        for ($i = 1; $i < $patternLen; $i++) {
            // Nếu ký tự không khớp, sử dụng failure function để nhảy
            while ($j > 0 && $pattern[$i] !== $pattern[$j]) {
                $j = $failureFunc[$j - 1];
            }
            
            // Nếu ký tự khớp, tăng j
            if ($pattern[$i] === $pattern[$j]) {
                $j++;
            }
            
            // Gán giá trị failure function
            $failureFunc[$i] = $j;
        }
        
        return $failureFunc;
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
        
        $failureFunc = self::buildFailureFunction($target);
        $j = 0;
        
        for ($i = 0; $i < $sourceLen; $i++) {
            while ($j > 0 && $source[$i] !== $target[$j]) {
                $j = $failureFunc[$j - 1];
            }
            
            if ($source[$i] === $target[$j]) {
                $j++;
            }
            
            if ($j === $targetLen) {
                $positions[] = $i - $targetLen + 1;
                $j = $failureFunc[$j - 1];
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
