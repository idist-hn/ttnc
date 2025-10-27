<?php

namespace Algorithms;

/**
 * ApostolicoCrochemore - Thuật toán tìm kiếm chuỗi con bằng Apostolico-Crochemore
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho bảng shift và failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Apostolico-Crochemore kết hợp ý tưởng từ Boyer-Moore và KMP
 * Sử dụng hai bảng: shift table và failure function
 * So sánh từ trái sang phải nhưng có thể bỏ qua các vị trí không cần kiểm tra
 */
class ApostolicoCrochemore {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Apostolico-Crochemore
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

        // Tạo failure function (prefix function)
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

        // Bắt đầu tìm kiếm từ trái sang phải (như KMP)
        $j = 0;
        for ($i = 0; $i < $sourceLen; $i++) {
            // Nếu ký tự không khớp, sử dụng failure function để nhảy
            while ($j > 0 && $source[$i] !== $target[$j]) {
                $j = $failure[$j - 1];
            }

            // Nếu ký tự khớp, tăng j
            if ($source[$i] === $target[$j]) {
                $j++;
            }

            // Nếu đã khớp toàn bộ pattern
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

