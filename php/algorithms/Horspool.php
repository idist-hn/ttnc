<?php

namespace Algorithms;

/**
 * Horspool - Thuật toán tìm kiếm chuỗi con bằng Horspool
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Horspool là phiên bản đơn giản hóa của Boyer-Moore
 * Chỉ sử dụng Bad Character Heuristic (không sử dụng Good Suffix)
 * So sánh từ phải sang trái, nhưng luôn skip dựa trên ký tự cuối cùng của pattern
 */
class Horspool
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Horspool
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
            
            // Horspool: Luôn sử dụng ký tự cuối cùng của pattern để tính shift
            $lastCharShift = $badChar[$target[$targetLen - 1]];
            $shift += $lastCharShift;
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tạo bảng Bad Character cho Horspool
     */
    private static function buildBadCharacterTable(string $pattern): array
    {
        $badChar = [];
        $patternLen = strlen($pattern);
        
        // Khởi tạo tất cả ký tự với giá trị mặc định (độ dài pattern)
        for ($i = 0; $i < $patternLen; $i++) {
            $badChar[$pattern[$i]] = $patternLen - $i;
        }
        
        return $badChar;
    }
    
    /**
     * Tính toán shift dựa trên Bad Character Heuristic
     */
    private static function getCharShift(array $badChar, string $char, int $position): int
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
