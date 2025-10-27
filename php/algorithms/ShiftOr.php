<?php

namespace Algorithms;

/**
 * Shift-Or (Baeza-Yates-Gonnet) - Thuật toán tìm kiếm chuỗi con bằng Shift-Or
 * 
 * Độ phức tạp thời gian: O(n*m/w) trong trường hợp xấu nhất, O(n) trong trường hợp tốt nhất
 * Độ phức tạp không gian: O(σ) cho bảng bit của các ký tự
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target, σ là kích thước alphabet, w là word size
 * 
 * Shift-Or sử dụng bit manipulation để tìm kiếm pattern
 * Thay vì so sánh từng ký tự, ta sử dụng bit vectors để theo dõi trạng thái khớp
 * Mỗi bit trong vector đại diện cho một vị trí trong pattern
 * 
 * Ưu điểm: Rất nhanh cho patterns ngắn (m <= 32 hoặc 64)
 * Nhược điểm: Chỉ tốt cho patterns ngắn, không tốt cho patterns dài
 */
class ShiftOr
{
    /**
     * Tìm kiếm chuỗi con bằng thuật toán Shift-Or
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

        // Chỉ hoạt động tốt với patterns ngắn (tối đa 32 ký tự trong PHP)
        if ($targetLen > 32) {
            return BruteForce::search($source, $target);
        }

        // Shift-Or: Tạo bảng bit cho mỗi ký tự
        $charBit = [];
        for ($i = 0; $i < $targetLen; $i++) {
            $char = $target[$i];
            if (!isset($charBit[$char])) {
                $charBit[$char] = 0;
            }
            $charBit[$char] |= (1 << $i);
        }

        // Bắt đầu tìm kiếm từ trái sang phải
        $state = 0; // Khởi tạo tất cả bit là 0 (không khớp)

        for ($i = 0; $i < $sourceLen; $i++) {
            $char = $source[$i];
            $charBitValue = isset($charBit[$char]) ? $charBit[$char] : 0;

            // Cập nhật state: shift left, OR với 1, AND với charBit
            $state = (($state << 1) | 1) & $charBitValue;

            // Kiểm tra nếu bit tại vị trí targetLen-1 là 1 (match)
            if (($state & (1 << ($targetLen - 1))) !== 0) {
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
