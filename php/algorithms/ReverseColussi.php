<?php

namespace Algorithms;

/**
 * ReverseColussi - Thuật toán tìm kiếm chuỗi con bằng Reverse Colussi
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho bảng shift và failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Reverse Colussi là biến thể của Colussi nhưng so sánh từ phải sang trái
 * Sử dụng hai bảng: shift table và failure function (tính từ phải sang trái)
 * Shift table giúp bỏ qua các vị trí không cần kiểm tra
 * Failure function giúp xác định vị trí tiếp theo khi không khớp
 */
class ReverseColussi
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Reverse Colussi
     * 
     * @param string $source - Chuỗi nguồn để tìm kiếm
     * @param string $target - Chuỗi đích cần tìm
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

        // Tính failure function (giống KMP)
        $failure = array_fill(0, $targetLen, 0);
        $failure[0] = 0;
        $j = 0;

        for ($i = 1; $i < $targetLen; $i++) {
            while ($j > 0 && $target[$i] !== $target[$j]) {
                $j = $failure[$j - 1];
            }
            if ($target[$i] === $target[$j]) {
                $j++;
            }
            $failure[$i] = $j;
        }

        // Tính shift table
        $shift = array_fill(0, $targetLen + 1, 0);
        $shift[0] = 1;
        $j = 0;

        for ($i = 1; $i <= $targetLen; $i++) {
            while ($j >= 0 && ($j === $targetLen || $target[$i - 1] !== $target[$j])) {
                $shift[$i] = $i - $j;
                $j = $failure[$j];
                if ($j < 0) {
                    $j = 0;
                }
            }
            $j++;
        }

        // Bắt đầu tìm kiếm từ phải sang trái (reverse direction)
        // Nhưng vẫn sử dụng logic tương tự Colussi
        $j = 0;
        for ($i = $sourceLen - 1; $i >= 0; $i--) {
            // So sánh từ phải sang trái
            $k = $targetLen - 1;
            while ($k >= 0 && $source[$i - $targetLen + 1 + $k] === $target[$k]) {
                $k--;
            }

            // Nếu k < 0, tìm thấy match
            if ($k < 0) {
                $exist = true;
                $index = $i - $targetLen + 1;
                return ['exist' => $exist, 'index' => $index];
            }

            // Bỏ qua vị trí không cần kiểm tra
            $i -= $shift[$targetLen - $k];
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

