<?php

namespace Algorithms;

/**
 * Raita Algorithm - String Matching
 * 
 * Raita là biến thể của Boyer-Moore sử dụng thêm một ký tự để tối ưu hóa
 * So sánh: ký tự cuối cùng -> ký tự đầu tiên -> các ký tự còn lại
 * 
 * Time Complexity: O(n+m) best case, O(n×m) worst case
 * Space Complexity: O(σ) where σ is alphabet size
 */
class Raita
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Raita
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
        
        // Bắt đầu tìm kiếm
        $shift = 0;
        
        while ($shift <= $sourceLen - $targetLen) {
            // Raita: So sánh theo thứ tự: cuối -> đầu -> giữa
            // 1. So sánh ký tự cuối cùng
            if ($target[$targetLen - 1] !== $source[$shift + $targetLen - 1]) {
                // Nếu ký tự cuối không khớp, skip
                $badCharShift = self::getBadCharacterShift($badChar, $source[$shift + $targetLen - 1], $targetLen - 1);
                $shift += $badCharShift;
                continue;
            }
            
            // 2. So sánh ký tự đầu tiên
            if ($target[0] !== $source[$shift]) {
                // Nếu ký tự đầu không khớp, skip
                $badCharShift = self::getBadCharacterShift($badChar, $source[$shift], 0);
                $shift += $badCharShift;
                continue;
            }
            
            // 3. So sánh các ký tự còn lại từ trái sang phải
            $j = 1;
            while ($j < $targetLen - 1 && $target[$j] === $source[$shift + $j]) {
                $j++;
            }
            
            // Nếu tất cả ký tự khớp
            if ($j === $targetLen - 1) {
                $exist = true;
                $index = $shift;
                return ['exist' => $exist, 'index' => $index];
            }
            
            // Nếu không khớp, tính shift dựa trên ký tự không khớp
            $badCharShift = self::getBadCharacterShift($badChar, $source[$shift + $j], $j);
            $shift += $badCharShift;
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
            // Nếu shift > position, chỉ shift 1 để tránh shift lùi
            if ($shift > $position) {
                return 1;
            }
            return $shift;
        }
        // Nếu ký tự không có trong pattern, shift toàn bộ pattern
        return $position + 1;
    }
}

