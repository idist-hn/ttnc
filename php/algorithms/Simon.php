<?php

namespace Algorithms;

/**
 * Simon - Thuật toán tìm kiếm chuỗi con bằng Simon
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(m) cho failure function
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Simon là cải tiến của KMP
 * So sánh theo thứ tự cụ thể, sử dụng Simon's algorithm để tối ưu hóa
 */
class Simon {
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Simon
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

        // Tính Simon's shift table
        // Lưu vị trí cuối cùng của mỗi ký tự trong pattern
        $lastPos = [];
        for ($i = 0; $i < $targetLen; $i++) {
            $lastPos[$target[$i]] = $i;
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

            // Nếu chưa khớp hoàn toàn, kiểm tra xem có thể skip không
            if ($j < $targetLen && $i < $sourceLen) {
                if (isset($lastPos[$source[$i]])) {
                    // Nếu ký tự xuất hiện trong pattern, có thể skip
                    if ($lastPos[$source[$i]] < $j) {
                        // Ký tự nằm trước vị trí hiện tại, có thể reset
                        $j = 0;
                    }
                }
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

