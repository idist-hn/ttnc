<?php

namespace Algorithms;

/**
 * Search with Automaton
 * 
 * Độ phức tạp thời gian: O(n+m)
 * Độ phức tạp không gian: O(m)
 * 
 * Search with Automaton sử dụng finite automaton
 * để tối ưu hóa tìm kiếm chuỗi con
 */
class SearchWithAutomaton
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

        // Bắt đầu tìm kiếm
        $i = 0;
        $j = 0;

        while ($i < $sourceLen) {
            // So sánh từ trái sang phải
            while ($j > 0 && $source[$i] !== $target[$j]) {
                $j = $failure[$j - 1];
            }

            if ($source[$i] === $target[$j]) {
                $j++;
            }

            // Nếu j == targetLen, tìm thấy match
            if ($j === $targetLen) {
                $exist = true;
                $index = $i - $targetLen + 1;
                return ['exist' => $exist, 'index' => $index];
            }

            $i++;
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

