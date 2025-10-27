# 📊 Bảng phân loại thuật toán String Matching

## 🎯 Phân loại theo 2 hướng: Nhóm thuật toán và Độ khó

### 📋 Bảng tổng hợp (Sắp xếp theo độ khó từ dễ đến khó)

| # | Thuật toán | Hướng tìm kiếm | Độ khó (0-100) | Độ phức tạp thời gian | Độ phức tạp không gian | Trạng thái |
|---|-----------|----------------|----------------|----------------------|------------------------|------------|
| 1 | **Brute Force** | ➡️ Left to Right | 10 | O(n×m) | O(1) | ✅ Hoàn thành |
| 2 | **Horspool** | ⬅️ Right to Left | 25 | O(n×m) | O(σ) | ✅ Hoàn thành |
| 3 | **Quick Search** | ⬅️ Right to Left | 28 | O(n×m) | O(σ) | ✅ Hoàn thành |
| 4 | **Not So Naive** | ➡️ Left to Right | 30 | O(n×m) | O(1) | ✅ Hoàn thành |
| 5 | **Shift-Or** | ➡️ Left to Right | 35 | O(n×m) | O(1) | ✅ Hoàn thành |
| 6 | **Raita** | ⬅️ Right to Left | 38 | O(n×m) | O(σ) | ✅ Hoàn thành |
| 7 | **Skip Search** | 🎯 Specific Order | 40 | O(n×m) | O(σ) | ✅ Hoàn thành |
| 8 | **Karp-Rabin** | ➡️ Left to Right | 45 | O(n+m) | O(1) | ✅ Hoàn thành |
| 9 | **Morris-Pratt** | ➡️ Left to Right | 50 | O(n+m) | O(m) | ✅ Hoàn thành |
| 10 | **Boyer-Moore** | ⬅️ Right to Left | 55 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 11 | **Knuth-Morris-Pratt** | ➡️ Left to Right | 60 | O(n+m) | O(m) | ✅ Hoàn thành |
| 12 | **Colussi** | ➡️ Left to Right | 70 | O(n+m) | O(m) | ✅ Hoàn thành |
| 13 | **Tuned Boyer-Moore** | ⬅️ Right to Left | 72 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 14 | **Reverse Colussi** | ⬅️ Right to Left | 73 | O(n+m) | O(m) | ✅ Hoàn thành |
| 15 | **Galil-Giancarlo** | ➡️ Left to Right | 75 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 16 | **Turbo BM** | ⬅️ Right to Left | 76 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 17 | **Apostolico-Crochemore** | ➡️ Left to Right | 78 | O(n+m) | O(m) | ✅ Hoàn thành |
| 18 | **Apostolico-Giancarlo** | ⬅️ Right to Left | 80 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 19 | **Zhu-Takaoka** | ⬅️ Right to Left | 82 | O(n+m) | O(σ²+m) | ✅ Hoàn thành |
| 20 | **Berry-Ravindran** | ⬅️ Right to Left | 83 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 21 | **Smith** | ⬅️ Right to Left | 84 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 22 | **KMP Skip Search** | 🎯 Specific Order | 85 | O(n+m) | O(m) | ✅ Hoàn thành |
| 23 | **Optimal Mismatch** | 🎯 Specific Order | 86 | O(n+m) | O(m) | ✅ Hoàn thành |
| 24 | **Maximal Shift** | 🎯 Specific Order | 87 | O(n+m) | O(m) | ✅ Hoàn thành |
| 25 | **Simon** | 🎯 Specific Order | 88 | O(n+m) | O(m) | ✅ Hoàn thành |
| 26 | **String Matching on Ordered Alphabets** | 🎯 Specific Order | 89 | O(n+m) | O(σ) | ✅ Hoàn thành |
| 27 | **Alpha Skip Search** | 🎯 Specific Order | 90 | O(n+m) | O(σ+m) | ✅ Hoàn thành |
| 28 | **Two Way** | 🔀 Any Order | 92 | O(n+m) | O(1) | ✅ Hoàn thành |
| 29 | **Reverse Factor** | 🔀 Any Order | 93 | O(n+m) | O(m) | ✅ Hoàn thành |
| 30 | **Turbo Reverse Factor** | 🔀 Any Order | 94 | O(n+m) | O(m) | ✅ Hoàn thành |
| 31 | **Forward DAWG Matching** | ➡️ Left to Right | 95 | O(n+m) | O(m) | ✅ Hoàn thành |
| 32 | **Backward Oracle Matching** | ⬅️ Right to Left | 96 | O(n+m) | O(m) | ✅ Hoàn thành |
| 33 | **Galil-Seiferas** | 🔀 Any Order | 97 | O(n+m) | O(m) | ✅ Hoàn thành |
| 34 | **Search with Automaton** | ➡️ Left to Right | 98 | O(n+m) | O(m) | ✅ Hoàn thành |
| 31 | **Forward DAWG Matching** | 🔀 Any Order | 95 | O(n+m) | O(m) | 🔄 Đang phát triển |
| 32 | **Backward Oracle Matching** | 🔀 Any Order | 96 | O(n+m) | O(m) | 🔄 Đang phát triển |
| 33 | **Galil-Seiferas** | 🔀 Any Order | 98 | O(n+m) | O(1) | 🔄 Đang phát triển |
| 34 | **Search with Automaton** | 🔀 Any Order | 99 | O(n+m) | O(m) | 🔄 Đang phát triển |

---

## 📈 Thống kê theo độ khó (Thang điểm 0-100)

### 🟢 Rất Dễ (Điểm 0-30)
- **Brute Force** (10) ✅
- **Horspool** (25) ✅
- **Quick Search** (28) ✅
- **Not So Naive** (30) ✅

### 🟡 Dễ-Trung bình (Điểm 31-50)
- **Shift-Or** (35) ✅
- **Raita** (38) ✅
- **Skip Search** (40) ✅
- **Karp-Rabin** (45) ✅
- **Morris-Pratt** (50) ✅

### 🟠 Trung bình-Khó (Điểm 51-75)
- **Boyer-Moore** (55) ✅
- **Knuth-Morris-Pratt** (60) ✅
- **Colussi** (70) ✅
- **Tuned Boyer-Moore** (72) ✅
- **Reverse Colussi** (73) ✅
- **Galil-Giancarlo** (75) ✅

### 🔴 Khó (Điểm 76-90)
- **Turbo BM** (76) ✅
- **Apostolico-Crochemore** (78) ✅
- **Apostolico-Giancarlo** (80) ✅
- **Zhu-Takaoka** (82) ✅
- **Berry-Ravindran** (83) ✅
- **Smith** (84) ✅
- **KMP Skip Search** (85) ✅
- **Optimal Mismatch** (86) ✅
- **Maximal Shift** (87) ✅
- **Simon** (88) ✅
- **String Matching on Ordered Alphabets** (89) ✅
- **Alpha Skip Search** (90) ✅

### 🔴 Rất Khó (Điểm 91-100)
- **Two Way** (92) ✅
- **Reverse Factor** (93) ✅
- **Turbo Reverse Factor** (94) ✅
- **Forward DAWG Matching** (95) ✅
- **Backward Oracle Matching** (96) ✅
- **Galil-Seiferas** (97) ✅
- **Search with Automaton** (98) ✅
- **Forward DAWG Matching** (95)
- **Backward Oracle Matching** (96)
- **Galil-Seiferas** (98)
- **Search with Automaton** (99)

---

## 🔄 Thống kê theo hướng tìm kiếm

### ➡️ From Left to Right (9 thuật toán)
- 🟢 Dễ: 1 thuật toán (1 ✅ hoàn thành)
- 🟡 Trung bình: 5 thuật toán (5 ✅ hoàn thành)
- 🔴 Khó: 3 thuật toán

### ⬅️ From Right to Left (11 thuật toán)
- 🟢 Dễ: 2 thuật toán (2 ✅ hoàn thành)
- 🟡 Trung bình: 2 thuật toán (1 ✅ hoàn thành)
- 🔴 Khó: 7 thuật toán

### 🎯 In a Specific Order (7 thuật toán)
- 🟢 Dễ: 0 thuật toán
- 🟡 Trung bình: 1 thuật toán (1 ✅ hoàn thành)
- 🔴 Khó: 6 thuật toán (1 ✅ hoàn thành)

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
- ✅ **Hoàn thành**: Đã triển khai và test (34/34 thuật toán - 100%)
  - **Rất Dễ (0-30)**: Brute Force, Horspool, Quick Search, Not So Naive
  - **Dễ-Trung bình (31-50)**: Shift-Or, Raita, Skip Search, Karp-Rabin, Morris-Pratt
  - **Trung bình-Khó (51-75)**: Boyer-Moore, Knuth-Morris-Pratt, Colussi, Tuned Boyer-Moore, Reverse Colussi, Galil-Giancarlo
  - **Khó (76-90)**: Turbo BM, Apostolico-Crochemore, Apostolico-Giancarlo, Zhu-Takaoka, Berry-Ravindran, Smith, KMP Skip Search, Optimal Mismatch, Maximal Shift, Simon, String Matching on Ordered Alphabets, Alpha Skip Search
  - **Rất Khó (91-100)**: Two Way, Reverse Factor, Turbo Reverse Factor, Forward DAWG Matching, Backward Oracle Matching, Galil-Seiferas, Search with Automaton
- 🎉 **Dự án hoàn thành**: Tất cả 34 thuật toán đã được triển khai thành công!
