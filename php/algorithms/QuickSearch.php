<?php

namespace Algorithms;

/**
 * QuickSearch - Thuật toán tìm kiếm chuỗi con bằng Quick Search
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n×m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ) với σ là kích thước bảng chữ cái
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Quick Search là phiên bản đơn giản hóa của Boyer-Moore
 * Chỉ sử dụng Bad Character Heuristic dựa trên ký tự ngay sau pattern
 * So sánh từ phải sang trái, nhưng xem xét ký tự tại vị trí shift+m (ngay sau pattern)
 */
class QuickSearch
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Quick Search
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
        
        // Tạo Quick Search Table
        $qsTable = self::buildQuickSearchTable($target);
        
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
            
            // Quick Search: Xem xét ký tự ngay sau pattern
            if ($shift + $targetLen < $sourceLen) {
                $nextChar = $source[$shift + $targetLen];
                if (isset($qsTable[$nextChar])) {
                    $shift += $qsTable[$nextChar];
                } else {
                    $shift += $targetLen + 1;
                }
            } else {
                // Nếu không có ký tự sau pattern, shift toàn bộ pattern
                $shift += $targetLen + 1;
            }
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tạo bảng Quick Search
     */
    private static function buildQuickSearchTable(string $pattern): array
    {
        $qsTable = [];
        $patternLen = strlen($pattern);
        
        // Khởi tạo tất cả ký tự trong pattern
        // Distance = patternLen - i (từ cuối pattern)
        for ($i = 0; $i < $patternLen; $i++) {
            $qsTable[$pattern[$i]] = $patternLen - $i;
        }
        
        return $qsTable;
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
