<?php

namespace Algorithms;

/**
 * Karp-Rabin - Thuật toán tìm kiếm chuỗi con bằng Karp-Rabin
 * 
 * Độ phức tạp thời gian: O(n+m) trong trường hợp tốt nhất, O(n*m) trong trường hợp xấu nhất
 * Độ phức tạp không gian: O(1) không tính hash table
 * Trong đó n là độ dài của chuỗi source, m là độ dài của chuỗi target
 * 
 * Karp-Rabin sử dụng rolling hash để so sánh pattern
 * Thay vì so sánh từng ký tự, ta tính hash của pattern và các substring của source
 * Nếu hash khớp, ta kiểm tra lại từng ký tự để tránh hash collision
 * 
 * Ưu điểm: Tốt cho multiple pattern matching, DNA sequence matching
 * Nhược điểm: Hash collision có thể làm chậm thuật toán
 */
class KarpRabin
{
    // Prime number cho rolling hash
    private const PRIME = 101;
    // Base cho rolling hash (số ký tự trong alphabet)
    private const BASE = 256;

    /**
     * Tìm kiếm chuỗi con bằng thuật toán Karp-Rabin
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
        
        // Tính hash của pattern
        $patternHash = self::calculateHash($target, $targetLen);
        
        // Tính hash của substring đầu tiên của source
        $windowHash = self::calculateHash($source, $targetLen);
        
        // Tính pow = base^(targetLen-1) % prime
        $pow = 1;
        for ($i = 0; $i < $targetLen - 1; $i++) {
            $pow = ($pow * self::BASE) % self::PRIME;
        }
        
        // Bắt đầu tìm kiếm
        for ($i = 0; $i <= $sourceLen - $targetLen; $i++) {
            // Nếu hash khớp, kiểm tra từng ký tự
            if ($windowHash === $patternHash) {
                // Kiểm tra lại từng ký tự để tránh hash collision
                $match = true;
                for ($j = 0; $j < $targetLen; $j++) {
                    if ($source[$i + $j] !== $target[$j]) {
                        $match = false;
                        break;
                    }
                }
                
                if ($match) {
                    $exist = true;
                    $index = $i;
                    return ['exist' => $exist, 'index' => $index];
                }
            }
            
            // Tính hash cho window tiếp theo
            if ($i < $sourceLen - $targetLen) {
                // Xóa ký tự đầu tiên của window hiện tại
                $windowHash = (self::BASE * ($windowHash - ord($source[$i]) * $pow) + ord($source[$i + $targetLen])) % self::PRIME;
                
                // Đảm bảo hash không âm
                if ($windowHash < 0) {
                    $windowHash = $windowHash + self::PRIME;
                }
            }
        }
        
        return ['exist' => $exist, 'index' => $index];
    }
    
    /**
     * Tính hash của một chuỗi
     */
    private static function calculateHash(string $str, int $len): int
    {
        $hash = 0;
        for ($i = 0; $i < $len; $i++) {
            $hash = ($hash * self::BASE + ord($str[$i])) % self::PRIME;
        }
        return $hash;
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
        
        $patternHash = self::calculateHash($target, $targetLen);
        $windowHash = self::calculateHash($source, $targetLen);
        
        $pow = 1;
        for ($i = 0; $i < $targetLen - 1; $i++) {
            $pow = ($pow * self::BASE) % self::PRIME;
        }
        
        for ($i = 0; $i <= $sourceLen - $targetLen; $i++) {
            if ($windowHash === $patternHash) {
                $match = true;
                for ($j = 0; $j < $targetLen; $j++) {
                    if ($source[$i + $j] !== $target[$j]) {
                        $match = false;
                        break;
                    }
                }
                
                if ($match) {
                    $positions[] = $i;
                }
            }
            
            if ($i < $sourceLen - $targetLen) {
                $windowHash = (self::BASE * ($windowHash - ord($source[$i]) * $pow) + ord($source[$i + $targetLen])) % self::PRIME;
                
                if ($windowHash < 0) {
                    $windowHash = $windowHash + self::PRIME;
                }
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
