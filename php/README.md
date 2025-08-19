# 🐘 PHP Implementation - String Matching Algorithms

## 📋 Mô tả

Implementation của các thuật toán string matching bằng PHP, tập trung vào hiệu suất và tính dễ sử dụng trong môi trường web development.

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống:
- PHP 7.4 hoặc cao hơn
- Composer (tùy chọn)

### Chạy chương trình:

```bash
# Chạy trực tiếp
php main.php

# Hoặc với Composer
composer install
composer run start
```

### Chạy tests:

```bash
# Chạy test trực tiếp
php tests/BruteForceTest.php

# Hoặc với Composer (nếu có PHPUnit)
composer run test
```

## 🔧 Sử dụng

### Tìm kiếm cơ bản:

```php
<?php
require_once 'algorithms/BruteForce.php';
use Algorithms\BruteForce;

$result = BruteForce::search('hello world', 'world');
// Returns: ['exist' => true, 'index' => 6]

if ($result['exist']) {
    echo "Tìm thấy tại vị trí: " . $result['index'];
} else {
    echo "Không tìm thấy";
}
?>
```

### Tìm tất cả vị trí:

```php
$positions = BruteForce::searchAll('abababab', 'ab');
// Returns: [0, 2, 4, 6]

echo "Tìm thấy tại các vị trí: " . implode(', ', $positions);
```

### Đếm số lần xuất hiện:

```php
$count = BruteForce::count('hello hello hello', 'hello');
// Returns: 3

echo "Số lần xuất hiện: $count";
```

## 📊 API Reference

### Class `Algorithms\BruteForce`

#### `search(string $source, string $target): array`
- **Mô tả**: Tìm kiếm lần xuất hiện đầu tiên của chuỗi con
- **Tham số**:
  - `$source`: Chuỗi nguồn để tìm kiếm
  - `$target`: Chuỗi đích cần tìm
- **Trả về**: `['exist' => bool, 'index' => int]`

#### `searchAll(string $source, string $target): array`
- **Mô tả**: Tìm tất cả vị trí xuất hiện của chuỗi con
- **Trả về**: Mảng các vị trí (int[])

#### `count(string $source, string $target): int`
- **Mô tả**: Đếm số lần xuất hiện của chuỗi con
- **Trả về**: Số lần xuất hiện

## ✨ Tính năng đặc biệt

### 🌐 Hỗ trợ Unicode
```php
$result = BruteForce::search('Xin chào thế giới', 'chào');
// Hoạt động tốt với tiếng Việt và các ký tự Unicode
```

### 🔍 Tìm kiếm linh hoạt
```php
// Tìm email
$result = BruteForce::search('Contact: user@example.com', '@example');

// Tìm URL
$result = BruteForce::search('Visit https://example.com', 'https://');
```

### ⚡ Hiệu suất cao
- Tối ưu hóa cho PHP engine
- Memory efficient với O(1) space complexity
- Phù hợp cho web applications

## 🧪 Testing

Chạy test suite để đảm bảo tính đúng đắn:

```bash
php tests/BruteForceTest.php
```

Test cases bao gồm:
- ✅ Tìm kiếm cơ bản
- ✅ Edge cases (chuỗi rỗng, không tìm thấy)
- ✅ Unicode support
- ✅ Overlapping patterns
- ✅ Performance validation

## 📈 Performance

- **Time Complexity**: O(n×m) worst case, O(n+m) best case
- **Space Complexity**: O(1)
- **Optimized for**: Web applications, text processing

## 🔮 Roadmap

- [ ] Implement KMP algorithm
- [ ] Add Boyer-Moore algorithm
- [ ] Performance benchmarking tools
- [ ] Integration with popular PHP frameworks
- [ ] Advanced pattern matching features

## 📝 Examples

Xem file `main.php` để có ví dụ chi tiết về cách sử dụng.
