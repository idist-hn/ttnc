<?php

namespace Algorithms;

/**
 * Smith - Thuật toán tìm kiếm chuỗi con bằng Smith
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(σ+m) cho bảng bad character và good suffix
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet
 * 
 * Smith là cải tiến của Boyer-Moore
 * Sử dụng Bad Character và Good Suffix heuristics
 * So sánh từ phải sang trái với tối ưu hóa
 */
class Smith {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Smith
     * 
     * @param string $source - Chuỗi nguồn để tìm kiếm
     * @param string $target - Chuỗi đích cần tìm
     * @returns array {exist: boolean, index: number}
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

        // Tạo bảng bad character
        $badChar = [];
        for ($i = 0; $i < $targetLen; $i++) {
            $badChar[$target[$i]] = $targetLen - 1 - $i;
        }

        // Tạo bảng good suffix
        $goodSuffix = array_fill(0, $targetLen + 1, $targetLen);

        // Tính failure function
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

        // Tính good suffix table
        $j = $failure[$targetLen - 1];
        for ($i = $targetLen - 1; $i >= 0; $i--) {
            if ($i === $targetLen - 1 || $target[$i + 1] !== $target[$j]) {
                $goodSuffix[$i + 1] = $targetLen - 1 - $i;
            }
            if ($i > 0) {
                $j = $failure[$i - 1];
            }
        }

        // Bắt đầu tìm kiếm
        $i = 0;
        while ($i <= $sourceLen - $targetLen) {
            $j = $targetLen - 1;

            // So sánh từ phải sang trái
            while ($j >= 0 && $source[$i + $j] === $target[$j]) {
                $j--;
            }

            // Nếu j < 0, tìm thấy match
            if ($j < 0) {
                $exist = true;
                $index = $i;
                return ['exist' => $exist, 'index' => $index];
            }

            // Tính shift
            $shift = 1;
            if (isset($badChar[$source[$i + $j]])) {
                $badCharShift = $badChar[$source[$i + $j]];
                $shift = $badCharShift - ($targetLen - 1 - $j);
                if ($shift < 1) {
                    $shift = 1;
                }
            } else {
                $shift = $targetLen - $j;
            }

            // So sánh với good suffix shift
            if ($j + 1 < $targetLen) {
                $goodSuffixShift = $goodSuffix[$j + 1];
                if ($goodSuffixShift > $shift) {
                    $shift = $goodSuffixShift;
                }
            }

            $i += $shift;
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

