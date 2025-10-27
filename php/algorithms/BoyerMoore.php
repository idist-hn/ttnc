<?php

namespace Algorithms;

/**
 * BoyerMoore - Thuật toán tìm kiếm chuỗi con bằng Boyer-Moore
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ+m) với σ là kích thước bảng chữ cái, m là độ dài pattern
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Boyer-Moore sử dụng hai heuristic:
 * 1. Bad Character Heuristic: Skip dựa trên ký tự không khớp
 * 2. Good Suffix Heuristic: Skip dựa trên suffix đã khớp
 */
class BoyerMoore
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Boyer-Moore
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
        
        // Tạo Bad Character Table
        $badChar = self::buildBadCharacterTable($target);
        
        // Tạo Good Suffix Table
        $goodSuffix = self::buildGoodSuffixTable($target);
        
        // Bắt đầu tìm kiếm
        $shift = 0;
        
        while ($shift <= $sourceLen - $targetLen) {
            $j = $targetLen - 1;
            
            // So sánh từ phải sang trái
            while ($j >= 0 && $target[$j] === $source[$shift + $j]) {
                $j--;
            }
            
            // Nếu pattern được tìm thấy
            if ($j < 0) {
                $exist = true;
                $index = $shift;
                return ['exist' => $exist, 'index' => $index];
            }
            
            // Tính toán shift dựa trên cả hai heuristic
            $badCharShift = self::getBadCharacterShift($badChar, $source[$shift + $j], $j);
            $goodSuffixShift = $goodSuffix[$j];
            
            // Chọn shift lớn hơn
            $shift += max($badCharShift, $goodSuffixShift);
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tạo bảng Bad Character
     */
    private static function buildBadCharacterTable(string $pattern): array
    {
        $badChar = [];
        $patternLen = strlen($pattern);
        
        // Khởi tạo tất cả ký tự với giá trị mặc định
        for ($i = 0; $i < $patternLen; $i++) {
            $badChar[$pattern[$i]] = $patternLen - 1 - $i;
        }
        
        return $badChar;
    }
    
    /**
     * Tính toán shift dựa trên Bad Character Heuristic
     */
    private static function getBadCharacterShift(array $badChar, string $char, int $position): int
    {
        if (isset($badChar[$char])) {
            $shift = $badChar[$char];
            if ($shift > $position) {
                return 1;
            }
            return $shift;
        }
        // Nếu ký tự không có trong pattern, shift toàn bộ pattern
        return $position + 1;
    }
    
    /**
     * Tạo bảng Good Suffix
     */
    private static function buildGoodSuffixTable(string $pattern): array
    {
        $patternLen = strlen($pattern);
        $goodSuffix = array_fill(0, $patternLen, $patternLen);
        
        // Tính toán border array
        $border = array_fill(0, $patternLen + 1, 0);
        self::computeBorderArray($pattern, $border);
        
        // Case 1: Pattern không xuất hiện lại trong chính nó
        $j = 0;
        for ($i = $patternLen; $i > 0; $i--) {
            if ($border[$i] === $i) {
                while ($j < $patternLen - $i) {
                    if ($goodSuffix[$j] === $patternLen) {
                        $goodSuffix[$j] = $patternLen - $i;
                    }
                    $j++;
                }
            }
        }
        
        // Case 2: Pattern có suffix xuất hiện lại
        for ($i = 0; $i <= $patternLen - 1; $i++) {
            $goodSuffix[$patternLen - 1 - $border[$i]] = $patternLen - 1 - $i;
        }
        
        return $goodSuffix;
    }
    
    /**
     * Tính toán border array cho Good Suffix
     */
    private static function computeBorderArray(string $pattern, array &$border): void
    {
        $patternLen = strlen($pattern);
        $border[$patternLen] = $patternLen + 1;
        $i = $patternLen;
        $j = $patternLen + 1;
        
        while ($i > 0) {
            while ($j <= $patternLen && $pattern[$i - 1] !== $pattern[$j - 1]) {
                if ($border[$j] === 0) {
                    $border[$j] = $j - $i;
                }
                $j = $border[$j];
            }
            $i--;
            $j--;
            $border[$i] = $j;
        }
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
