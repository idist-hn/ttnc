# 📊 Bảng phân loại thuật toán String Matching

## 🎯 Phân loại theo 2 hướng: Nhóm thuật toán và Độ khó

### 📋 Bảng tổng hợp

| Thuật toán | Hướng tìm kiếm | Độ khó | Độ phức tạp thời gian | Độ phức tạp không gian | Trạng thái |
|------------|----------------|--------|----------------------|------------------------|------------|
| **Brute Force** | ➡️ Left to Right | 🟢 Dễ | O(n×m) | O(1) | ✅ Hoàn thành |
| **Knuth-Morris-Pratt** | ➡️ Left to Right | 🟡 Trung bình | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Morris-Pratt** | ➡️ Left to Right | 🟡 Trung bình | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Karp-Rabin** | ➡️ Left to Right | 🟡 Trung bình | O(n+m) | O(1) | 🔄 Đang phát triển |
| **Shift-Or** | ➡️ Left to Right | 🟡 Trung bình | O(n×m) | O(1) | 🔄 Đang phát triển |
| **Colussi** | ➡️ Left to Right | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Galil-Giancarlo** | ➡️ Left to Right | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Apostolico-Crochemore** | ➡️ Left to Right | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Not So Naive** | ➡️ Left to Right | 🟡 Trung bình | O(n×m) | O(1) | 🔄 Đang phát triển |
| **Boyer-Moore** | ⬅️ Right to Left | 🟡 Trung bình | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Horspool** | ⬅️ Right to Left | 🟢 Dễ | O(n×m) | O(σ) | 🔄 Đang phát triển |
| **Quick Search** | ⬅️ Right to Left | 🟢 Dễ | O(n×m) | O(σ) | 🔄 Đang phát triển |
| **Tuned Boyer-Moore** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Zhu-Takaoka** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(σ²+m) | 🔄 Đang phát triển |
| **Berry-Ravindran** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Smith** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Raita** | ⬅️ Right to Left | 🟡 Trung bình | O(n×m) | O(σ) | 🔄 Đang phát triển |
| **Reverse Colussi** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Turbo BM** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Apostolico-Giancarlo** | ⬅️ Right to Left | 🔴 Khó | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Optimal Mismatch** | 🎯 Specific Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Maximal Shift** | 🎯 Specific Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Skip Search** | 🎯 Specific Order | 🟡 Trung bình | O(n×m) | O(σ) | 🔄 Đang phát triển |
| **KMP Skip Search** | 🎯 Specific Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Alpha Skip Search** | 🎯 Specific Order | 🔴 Khó | O(n+m) | O(σ+m) | 🔄 Đang phát triển |
| **Simon** | 🎯 Specific Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **String Matching on Ordered Alphabets** | 🎯 Specific Order | 🔴 Khó | O(n+m) | O(σ) | 🔄 Đang phát triển |
| **Two Way** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(1) | 🔄 Đang phát triển |
| **Reverse Factor** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Turbo Reverse Factor** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Forward DAWG Matching** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Backward Oracle Matching** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Search with Automaton** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(m) | 🔄 Đang phát triển |
| **Galil-Seiferas** | 🔀 Any Order | 🔴 Khó | O(n+m) | O(1) | 🔄 Đang phát triển |

---

## 📈 Thống kê theo độ khó

### 🟢 Dễ (3 thuật toán)
- **Brute Force** ✅
- **Horspool** 
- **Quick Search**

### 🟡 Trung bình (6 thuật toán)
- **Knuth-Morris-Pratt**
- **Morris-Pratt** 
- **Karp-Rabin**
- **Shift-Or**
- **Not So Naive**
- **Boyer-Moore**
- **Raita**
- **Skip Search**

### 🔴 Khó (24 thuật toán)
- **Colussi**, **Galil-Giancarlo**, **Apostolico-Crochemore**
- **Tuned Boyer-Moore**, **Zhu-Takaoka**, **Berry-Ravindran**
- **Smith**, **Reverse Colussi**, **Turbo BM**, **Apostolico-Giancarlo**
- **Optimal Mismatch**, **Maximal Shift**, **KMP Skip Search**
- **Alpha Skip Search**, **Simon**, **String Matching on Ordered Alphabets**
- **Two Way**, **Reverse Factor**, **Turbo Reverse Factor**
- **Forward DAWG Matching**, **Backward Oracle Matching**
- **Search with Automaton**, **Galil-Seiferas**

---

## 🔄 Thống kê theo hướng tìm kiếm

### ➡️ From Left to Right (9 thuật toán)
- 🟢 Dễ: 1 thuật toán
- 🟡 Trung bình: 5 thuật toán  
- 🔴 Khó: 3 thuật toán

### ⬅️ From Right to Left (11 thuật toán)
- 🟢 Dễ: 2 thuật toán
- 🟡 Trung bình: 2 thuật toán
- 🔴 Khó: 7 thuật toán

### 🎯 In a Specific Order (7 thuật toán)
- 🟢 Dễ: 0 thuật toán
- 🟡 Trung bình: 1 thuật toán
- 🔴 Khó: 6 thuật toán

### 🔀 In Any Order (7 thuật toán)
- 🟢 Dễ: 0 thuật toán
- 🟡 Trung bình: 0 thuật toán
- 🔴 Khó: 7 thuật toán

---

## 📝 Ghi chú

**Ký hiệu:**
- `n`: Độ dài chuỗi nguồn (source)
- `m`: Độ dài chuỗi đích (target/pattern)
- `σ`: Kích thước bảng chữ cái (alphabet size)

**Độ khó được đánh giá dựa trên:**
- 🟢 **Dễ**: Thuật toán đơn giản, dễ hiểu và triển khai
- 🟡 **Trung bình**: Cần hiểu biết về cấu trúc dữ liệu và kỹ thuật tối ưu cơ bản
- 🔴 **Khó**: Yêu cầu kiến thức sâu về lý thuyết thuật toán và kỹ thuật tối ưu nâng cao

**Trạng thái:**
- ✅ **Hoàn thành**: Đã triển khai và test
- 🔄 **Đang phát triển**: Skeleton code đã sẵn sàng, chờ triển khai
