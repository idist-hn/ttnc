# 📝 Test Data cho String Matching Algorithms

## 🇻🇳 Văn bản tiếng Việt

### Test Case 1: Văn bản về thuật toán
```
Source: "Thuật toán tìm kiếm chuỗi con là một phần quan trọng trong khoa học máy tính. Các thuật toán như Brute Force, Boyer-Moore, Knuth-Morris-Pratt và Alpha-Skip Search đều có những ưu điểm riêng. Brute Force đơn giản nhưng chậm, trong khi Boyer-Moore và Alpha-Skip Search sử dụng kỹ thuật skip để tăng tốc độ tìm kiếm. Việc lựa chọn thuật toán phù hợp phụ thuộc vào độ dài của chuỗi nguồn và chuỗi đích cần tìm kiếm."

Target options:
- "từ" (xuất hiện nhiều lần)
- "thuật toán" (xuất hiện nhiều lần)
- "tìm kiếm" (xuất hiện nhiều lần)
- "Alpha-Skip Search" (xuất hiện 2 lần)
- "Boyer-Moore" (xuất hiện 2 lần)
- "xyz" (không xuất hiện)
```

### Test Case 2: Văn bản văn học
```
Source: "Trên đỉnh núi cao, ánh sáng mặt trời chiếu xuống tạo nên những tia sáng vàng óng. Cây cối xanh tươi, chim chóc hót líu lo, tạo nên một bức tranh thiên nhiên tuyệt đẹp. Gió nhẹ thổi qua, lá cây xào xạc như tiếng nhạc du dương. Đây là nơi mà tâm hồn con người tìm được sự bình yên và thanh thản."

Target options:
- "ánh sáng" (xuất hiện 1 lần)
- "tạo nên" (xuất hiện 2 lần)
- "cây" (xuất hiện 2 lần)
- "con người" (xuất hiện 1 lần)
- "không có" (không xuất hiện)
```

### Test Case 3: Văn bản kỹ thuật
```
Source: "Trong lập trình, việc tối ưu hóa thuật toán là rất quan trọng. Độ phức tạp thời gian O(n) tốt hơn O(n²), và O(log n) tốt hơn O(n). Các cấu trúc dữ liệu như mảng, danh sách liên kết, cây nhị phân đều có ưu nhược điểm riêng. Lập trình viên cần hiểu rõ để lựa chọn phù hợp."

Target options:
- "O(n)" (xuất hiện 2 lần)
- "thuật toán" (xuất hiện 1 lần)
- "lập trình" (xuất hiện 2 lần - "lập trình" và "Lập trình")
- "cấu trúc dữ liệu" (xuất hiện 1 lần)
- "Python" (không xuất hiện)
```

## 🔤 Văn bản tiếng Anh

### Test Case 4: Technical English
```
Source: "String matching algorithms are fundamental in computer science. The Boyer-Moore algorithm uses bad character and good suffix heuristics to skip characters efficiently. The Knuth-Morris-Pratt algorithm preprocesses the pattern to avoid unnecessary comparisons. Both algorithms have better average-case performance than naive string matching."

Target options:
- "algorithm" (xuất hiện nhiều lần)
- "Boyer-Moore" (xuất hiện 1 lần)
- "Knuth-Morris-Pratt" (xuất hiện 1 lần)
- "string matching" (xuất hiện 2 lần)
- "Python" (không xuất hiện)
```

### Test Case 5: Mixed case sensitivity
```
Source: "The Quick Brown Fox Jumps Over The Lazy Dog. the quick brown fox jumps over the lazy dog."

Target options:
- "the" (xuất hiện 2 lần - chú ý case sensitivity)
- "The" (xuất hiện 2 lần)
- "fox" (xuất hiện 2 lần)
- "Fox" (xuất hiện 1 lần)
- "cat" (không xuất hiện)
```

## 🔢 Test Cases đặc biệt

### Test Case 6: Overlapping patterns
```
Source: "aaaaaaaaaa"
Target: "aaa"
Expected: Tìm thấy tại các vị trí 0, 1, 2, 3, 4, 5, 6, 7
```

### Test Case 7: Edge cases
```
Source: ""
Target: "test"
Expected: Không tìm thấy

Source: "test"
Target: ""
Expected: Tìm thấy tại vị trí 0

Source: "a"
Target: "a"
Expected: Tìm thấy tại vị trí 0

Source: "short"
Target: "very long pattern"
Expected: Không tìm thấy
```

### Test Case 8: Performance test (Large text)
```
Source: [Lặp lại văn bản dài 1000 lần]
Target: "pattern ở cuối"
Purpose: Test hiệu suất của các thuật toán
```

## 🎯 Recommended Test Sequence

1. **Basic functionality**: Test Case 1 với "từ"
2. **Multiple occurrences**: Test Case 1 với "thuật toán"
3. **Not found**: Test Case 1 với "xyz"
4. **Case sensitivity**: Test Case 5 với "the" vs "The"
5. **Overlapping**: Test Case 6
6. **Edge cases**: Test Case 7
7. **Performance**: Test Case 8

## 📊 Expected Results Analysis

Khi chạy test, bạn nên quan sát:
- **Correctness**: Kết quả có đúng không?
- **Performance**: Alpha-Skip Search có nhanh hơn Brute Force không?
- **Edge cases**: Thuật toán xử lý các trường hợp đặc biệt như thế nào?
- **Unicode support**: Tiếng Việt có được xử lý đúng không?
