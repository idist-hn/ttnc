<?php

namespace Algorithms;

/**
 * Colussi - Thuật toán tìm kiếm chuỗi con bằng Colussi
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho bảng shift và failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Colussi là cải tiến của KMP
 * Sử dụng hai bảng: shift table và failure function
 * Shift table giúp bỏ qua các vị trí không cần kiểm tra
 * Failure function giúp xác định vị trí tiếp theo khi không khớp
 */
class Colussi
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Colussi
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

        // Bắt đầu tìm kiếm
        $j = 0;
        for ($i = 0; $i < $sourceLen; $i++) {
            while ($j >= 0 && $source[$i] !== $target[$j]) {
                $i += $shift[$j];
                $j = $failure[$j];
                if ($j < 0) {
                    $j = 0;
                }
            }

            if ($j < 0) {
                $j = 0;
            }

            $j++;

            // Nếu j == targetLen, tìm thấy match
            if ($j === $targetLen) {
                $exist = true;
                $index = $i - $targetLen + 1;
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

