<?php

namespace Algorithms;

/**
 * SkipSearch - Thuật toán tìm kiếm chuỗi con bằng Skip Search
 * 
 * Độ phức tạp thời gian: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(σ) cho bảng skip của các ký tự
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet
 * 
 * Skip Search là biến thể của Alpha-Skip Search
 * So sánh từ phải sang trái, sử dụng bảng skip để bỏ qua các vị trí không khả thi
 */
class SkipSearch
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Skip Search
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
        
        // Tạo bảng skip: lưu vị trí cuối cùng của mỗi ký tự trong pattern
        $skipTable = [];
        for ($i = 0; $i < $targetLen - 1; $i++) {
            $skipTable[$target[$i]] = $targetLen - 1 - $i;
        }
        
        // Bắt đầu tìm kiếm từ vị trí targetLen-1
        $i = $targetLen - 1;
        
        while ($i < $sourceLen) {
            // So sánh từ phải sang trái
            $j = $targetLen - 1;
            $k = $i;
            
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
            if (isset($skipTable[$source[$i]])) {
                $i += $skipTable[$source[$i]];
            } else {
                // Nếu ký tự không có trong pattern, nhảy toàn bộ độ dài pattern
                $i += $targetLen;
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

