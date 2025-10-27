<?php

namespace Algorithms;

/**
 * Two Way
 * 
 * Độ phức tạp thời gian: O(n+m)
 * Độ phức tạp không gian: O(1)
 * 
 * Two-Way algorithm chia pattern thành hai phần và so sánh từ hai hướng
 * Sử dụng critical factorization để tìm điểm chia tối ưu
 */
class TwoWay
{
    /**
     * Tìm kiếm chuỗi con
     * @param string $source - Chuỗi nguồn
     * @param string $target - Chuỗi đích
     * @return array ['exist' => bool, 'index' => int]
     */
    public static function search(string $source, string $target): array
    {
        $exist = false;
        $index = -1;

        $sourceLen = strlen($source);
        $targetLen = strlen($target);

        if ($targetLen === 0) {
            return ['exist' => true, 'index' => 0];
        }

        if ($targetLen > $sourceLen) {
            return ['exist' => false, 'index' => -1];
        }

        // Tìm critical factorization
        // Chia pattern thành hai phần: target[0..period-1] và target[period..targetLen-1]
        $period = 1;
        while ($period < $targetLen && $target[$period] === $target[0]) {
            $period++;
        }

        // Bắt đầu tìm kiếm
        $i = 0;
        while ($i <= $sourceLen - $targetLen) {
            // So sánh phần đầu (từ trái sang phải)
            $j = 0;
            while ($j < $period && $i + $j < $sourceLen && $source[$i + $j] === $target[$j]) {
                $j++;
            }

            // Nếu không khớp phần đầu
            if ($j < $period) {
                $i += $j + 1;
                continue;
            }

            // So sánh phần sau (từ phải sang trái)
            $j = $period;
            while ($j < $targetLen && $i + $j < $sourceLen && $source[$i + $j] === $target[$j]) {
                $j++;
            }

            // Nếu khớp toàn bộ
            if ($j === $targetLen) {
                $exist = true;
                $index = $i;
                return ['exist' => $exist, 'index' => $index];
            }

            // Tính shift
            $shift = 1;
            if ($i + $j < $sourceLen) {
                // Tìm vị trí tiếp theo có thể khớp
                for ($k = 0; $k < $period && $k < $j; $k++) {
                    if ($source[$i + $j] === $target[$k]) {
                        $shift = $j - $k;
                        break;
                    }
                }
            }

            $i += $shift;
        }

        return ['exist' => $exist, 'index' => $index];
    }

    /**
     * Tìm tất cả vị trí xuất hiện của chuỗi con
     * @param string $source - Chuỗi nguồn
     * @param string $target - Chuỗi đích
     * @return array Mảng các vị trí
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
     * @param string $source - Chuỗi nguồn
     * @param string $target - Chuỗi đích
     * @return int Số lần xuất hiện
     */
    public static function count(string $source, string $target): int
    {
        return count(self::searchAll($source, $target));
    }
}

