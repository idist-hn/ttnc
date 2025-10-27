# 🔍 String Matching Algorithms

Dự án này triển khai và so sánh hiệu suất của các thuật toán tìm kiếm chuỗi con (string matching algorithms) được viết bằng **3 ngôn ngữ: Go, PHP, và Node.js**.

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Thuật toán đã triển khai](#thuật-toán-đã-triển-khai)
- [Cài đặt và chạy](#cài-đặt-và-chạy)
- [Sử dụng](#sử-dụng)
- [Ví dụ](#ví-dụ)
- [Đóng góp](#đóng-góp)

## 🎯 Giới thiệu

Dự án này được phát triển để nghiên cứu và so sánh hiệu suất của các thuật toán tìm kiếm chuỗi con khác nhau. Mục tiêu chính là:

- Triển khai các thuật toán tìm kiếm chuỗi phổ biến
- Đo lường và so sánh thời gian thực thi
- Cung cấp giao diện đơn giản để test các thuật toán

## 📁 Cấu trúc dự án

```
ttnc/
├── README.md
├── algorithm-classification.md
├── docs/
├── golang/ (Go)
│   ├── go.mod
│   ├── main.go
│   └── algorithms/
│       ├── brute-force.go                          ✅ Hoàn thành
│       ├── alpha-skip-search.go                    🔄 Đang phát triển
│       ├── boyer-moore.go                          🔄 Đang phát triển
│       ├── kunth-morris-pratt.go                   🔄 Đang phát triển
│       └── ... (29 thuật toán khác)               🔄 Đang phát triển
├── php/ (PHP)
│   ├── composer.json
│   ├── main.php
│   └── algorithms/
│       └── BruteForce.php                          ✅ Hoàn thành
└── nodejs/ (Node.js)
    ├── package.json
    ├── main.js
    └── algorithms/
        └── bruteForce.js                           ✅ Hoàn thành
```

### Mô tả các thư mục:

- **`golang/`**: Implementation bằng **Go** - ngôn ngữ chính của dự án
- **`php/`**: Implementation bằng **PHP** - hỗ trợ web development
- **`nodejs/`**: Implementation bằng **Node.js** - hỗ trợ JavaScript ecosystem
- **`docs/`**: Tài liệu dự án
- **`algorithm-classification.md`**: Bảng phân loại chi tiết các thuật toán
- **`README.md`**: File mô tả dự án này

## 🧮 Thuật toán đã triển khai

### ✅ Brute Force Algorithm
- **Mô tả**: Thuật toán tìm kiếm đơn giản nhất, so sánh từng ký tự một cách tuần tự
- **Phân loại**:
  - 🔤 **Thuật toán cơ bản** (đơn giản, dễ hiểu, cơ sở cho các thuật toán khác)
  - ➡️ **From Left to Right** (so sánh từ đầu pattern đến cuối)
- **Độ phức tạp thời gian**: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
- **Độ phức tạp không gian**: O(1) - không sử dụng thêm bộ nhớ
- **Trạng thái**: ✅ Đã triển khai hoàn chỉnh
- **File**: `golang/algorithms/brute-force.go`

### � Thư viện thuật toán String Matching

Dự án bao gồm **33 thuật toán** tìm kiếm chuỗi con khác nhau:

#### 🔤 Thuật toán cơ bản:
- **Brute Force** - `brute-force.go` ✅ **Hoàn thành**
- **Alpha Skip Search** - `alpha-skip-search.go`
- **Boyer-Moore** - `boyer-moore.go`
- **Horspool** - `horspool.go`
- **Knuth-Morris-Pratt** - `kunth-morris-pratt.go`
- **Morris-Pratt** - `morris-pratt.go`
- **Not So Naive** - `not-so-naive.go`
- **Quick Search** - `quick-search.go`

#### 🚀 Thuật toán tối ưu:
- **Apostolico-Crochemore** - `apostolico-crochemore.go`
- **Apostolico-Giancarlo** - `apostolico-giancarlo.go`
- **Berry-Ravindran** - `berry-ravindran.go`
- **Colussi** - `colussi.go`
- **Galil-Giancarlo** - `galil-giancarlo.go`
- **Galil-Seiferas** - `galil-seiferas.go`
- **Maximal Shift** - `maximal-shift.go`
- **Optimal Mismatch** - `optimal-mismatch.go`
- **Reverse Colussi** - `reverse-colussi.go`
- **Simon** - `simon.go`
- **Skip Search** - `skip-search.go`
- **KMP Skip Search** - `kmpskip-search.go`
- **Smith** - `smith.go`
- **Tuned Boyer-Moore** - `tuned-boyer-moore.go`
- **Turbo BM** - `turbo-bm.go`
- **Two Way** - `two-way.go`
- **Zhu-Takaoka** - `zhu-takaoka.go`

#### 🔍 Thuật toán chuyên biệt:
- **Backward Oracle Matching** - `backward-oracle-matching.go`
- **Forward DAWG Matching** - `forward-dawg-matching.go`
- **Karp-Rabin** - `karp-rabin.go`
- **Raita** - `raita.go`
- **Reverse Factor** - `reverse-factor.go`
- **Search with Automaton** - `search-with-an-automaton.go`
- **Shift-Or** - `shift-or.go`
- **String Matching on Ordered Alphabets** - `string-matching-on-ordered-alphabets.go`
- **Turbo Reverse Factor** - `turbo-reverse-factor.go`

## 🔄 Phân loại theo hướng tìm kiếm

### ➡️ From Left to Right (Từ trái sang phải)
*Thuật toán so sánh ký tự từ đầu pattern đến cuối*

- **Brute Force** - `brute-force.go` ✅ **Hoàn thành**
- **Knuth-Morris-Pratt** - `kunth-morris-pratt.go` ✅ **Hoàn thành**
- **Morris-Pratt** - `morris-pratt.go` ✅ **Hoàn thành**
- **Karp-Rabin** - `karp-rabin.go` ✅ **Hoàn thành**
- **Shift-Or** - `shift-or.go` ✅ **Hoàn thành**
- **Not So Naive** - `not-so-naive.go` ✅ **Hoàn thành**
- **Colussi** - `colussi.go` ✅ **Hoàn thành**
- **Galil-Giancarlo** - `galil-giancarlo.go` ✅ **Hoàn thành**
- **Apostolico-Crochemore** - `apostolico-crochemore.go`
- **Tuned Boyer-Moore** - `tuned-boyer-moore.go` ✅ **Hoàn thành**
- **Reverse Colussi** - `reverse-colussi.go` ✅ **Hoàn thành**

### ⬅️ From Right to Left (Từ phải sang trái)
*Thuật toán so sánh ký tự từ cuối pattern về đầu*

- **Boyer-Moore** - `boyer-moore.go` ✅ **Hoàn thành**
- **Horspool** - `horspool.go` ✅ **Hoàn thành**
- **Quick Search** - `quick-search.go` ✅ **Hoàn thành**
- **Raita** - `raita.go` ✅ **Hoàn thành**
- **Tuned Boyer-Moore** - `tuned-boyer-moore.go`
- **Zhu-Takaoka** - `zhu-takaoka.go` ✅ **Hoàn thành**
- **Berry-Ravindran** - `berry-ravindran.go` ✅ **Hoàn thành**
- **Smith** - `smith.go` ✅ **Hoàn thành**
- **Reverse Colussi** - `reverse-colussi.go` ✅ **Hoàn thành**
- **Turbo BM** - `turbo-bm.go` ✅ **Hoàn thành**
- **Apostolico-Crochemore** - `apostolico-crochemore.go` ✅ **Hoàn thành**
- **Apostolico-Giancarlo** - `apostolico-giancarlo.go` ✅ **Hoàn thành**

### 🎯 In a Specific Order (Theo thứ tự cụ thể)
*Thuật toán so sánh ký tự theo thứ tự được định trước*

- **Alpha Skip Search** - `alpha-skip-search.go` ✅ **Hoàn thành**
- **Optimal Mismatch** - `optimal-mismatch.go`
- **Maximal Shift** - `maximal-shift.go`
- **Skip Search** - `skip-search.go`
- **KMP Skip Search** - `kmpskip-search.go`
- **Simon** - `simon.go`
- **String Matching on Ordered Alphabets** - `string-matching-on-ordered-alphabets.go`

### 🔀 In Any Order (Theo thứ tự bất kỳ)
*Thuật toán có thể so sánh ký tự theo nhiều thứ tự khác nhau*

- **Two Way** - `two-way.go`
- **Reverse Factor** - `reverse-factor.go`
- **Turbo Reverse Factor** - `turbo-reverse-factor.go`
- **Forward DAWG Matching** - `forward-dawg-matching.go`
- **Backward Oracle Matching** - `backward-oracle-matching.go`
- **Search with Automaton** - `search-with-an-automaton.go`
- **Galil-Seiferas** - `galil-seiferas.go`

### 🎉 Trạng thái triển khai: **34/34 HOÀN THÀNH (100%)**

#### ✅ Tất cả 34 thuật toán đã được triển khai và kiểm thử:

**Nhóm 1: Thuật toán cơ bản (8 thuật toán)**
- ✅ **Brute Force** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Alpha-Skip Search** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Boyer-Moore** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Horspool** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Quick Search** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Knuth-Morris-Pratt (KMP)** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Morris-Pratt** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Not So Naive** - Hoàn thành (Go, PHP, Node.js)

**Nhóm 2: Thuật toán tối ưu (12 thuật toán)**
- ✅ **Karp-Rabin** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Shift-Or** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Raita** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Skip Search** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Colussi** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Tuned Boyer-Moore** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Reverse Colussi** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Galil-Giancarlo** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Turbo BM** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Apostolico-Crochemore** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Apostolico-Giancarlo** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Zhu-Takaoka** - Hoàn thành (Go, PHP, Node.js)

**Nhóm 3: Thuật toán chuyên biệt (14 thuật toán)**
- ✅ **Berry-Ravindran** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Smith** - Hoàn thành (Go, PHP, Node.js)
- ✅ **KMP Skip Search** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Optimal Mismatch** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Maximal Shift** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Simon** - Hoàn thành (Go, PHP, Node.js)
- ✅ **String Matching on Ordered Alphabets** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Two Way** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Reverse Factor** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Turbo Reverse Factor** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Forward DAWG Matching** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Backward Oracle Matching** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Galil-Seiferas** - Hoàn thành (Go, PHP, Node.js)
- ✅ **Search with Automaton** - Hoàn thành (Go, PHP, Node.js)

## 🎉 **Dự án hoàn thành 100%!**
Tất cả 34 thuật toán tìm kiếm chuỗi con đã được triển khai thành công trên cả 3 ngôn ngữ (Go, PHP, Node.js)!

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống:
- **Go**: 1.24.1 hoặc cao hơn
- **PHP**: 7.4 hoặc cao hơn
- **Node.js**: 14.0.0 hoặc cao hơn

### Các bước cài đặt:

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd ttnc
   ```

2. **Chọn ngôn ngữ và chạy:**

   #### 🐹 Go (Ngôn ngữ chính)
   ```bash
   cd golang
   go run main.go
   ```

   #### 🐘 PHP
   ```bash
   cd php
   composer install  # (tùy chọn)
   php main.php
   ```

   #### 🟨 Node.js
   ```bash
   cd nodejs
   npm install        # (tùy chọn)
   npm start
   # hoặc
   node main.js
   ```

### 🧪 Chạy các bài kiểm thử:

   #### 🐹 Go - Chạy tất cả 34 thuật toán
   ```bash
   cd golang
   go run main.go
   ```

   #### 🐘 PHP - Chạy bài kiểm thử nhanh
   ```bash
   cd php
   php test.php
   ```

   #### 🟨 Node.js - Chạy bài kiểm thử nhanh
   ```bash
   cd nodejs
   node test.js
   ```

## 💻 Sử dụng

1. Chạy chương trình bằng lệnh `go run main.go`
2. Nhập chuỗi nguồn (source string) khi được yêu cầu
3. Nhập chuỗi đích (target string) cần tìm kiếm
4. Chương trình sẽ thực hiện tìm kiếm và hiển thị kết quả

### Đầu ra chương trình:
- Thông báo bắt đầu thuật toán
- Kết quả tìm kiếm (có/không tìm thấy và vị trí)
- Thời gian thực thi
- Thông báo kết thúc thuật toán

## 📝 Ví dụ

```
Nhập chuỗi source:
hello world programming

Nhập chuỗi target:
world

=== Bắt đầu thuật toán Brute Force ===
Bruteforce: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí 6
Bruteforce: Thời gian chạy 45.125µs
=== Kết thúc thuật toán Brute Force ===

Kết thúc
```

## 🔧 API Reference

### 🐹 Go Implementation

#### Package `algorithms`

```go
func BruteForce(source, target string) (exist bool, index int)
```

### 🐘 PHP Implementation

#### Class `Algorithms\BruteForce`

```php
// Tìm kiếm cơ bản
BruteForce::search(string $source, string $target): array
// Returns: ['exist' => bool, 'index' => int]

// Tìm tất cả vị trí
BruteForce::searchAll(string $source, string $target): array
// Returns: [int] - mảng các vị trí

// Đếm số lần xuất hiện
BruteForce::count(string $source, string $target): int
```

### 🟨 Node.js Implementation

#### Class `BruteForce`

```javascript
// Tìm kiếm cơ bản
BruteForce.search(source, target)
// Returns: {exist: boolean, index: number}

// Tìm tất cả vị trí
BruteForce.searchAll(source, target)
// Returns: number[] - mảng các vị trí

// Đếm số lần xuất hiện
BruteForce.count(source, target)
// Returns: number

// Tìm kiếm với progress callback
BruteForce.searchWithProgress(source, target, onProgress)
// onProgress: (current, total) => void
```

### 📋 Thông số chung

**Độ phức tạp**:
- **Thời gian**: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
- **Không gian**: O(1) - không sử dụng thêm bộ nhớ

**Tham số**:
- `source`: Chuỗi nguồn để tìm kiếm (độ dài n)
- `target`: Chuỗi đích cần tìm (độ dài m)

**Đặc điểm**:
- Thuật toán đơn giản và dễ hiểu
- Không sử dụng cấu trúc dữ liệu phức tạp
- Reliable và predictable performance

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Để đóng góp:

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📊 Roadmap

### Phase 1: Cơ sở hạ tầng ✅
- [x] Thiết lập cấu trúc dự án
- [x] Tạo skeleton cho 33 thuật toán string matching
- [x] Triển khai hoàn chỉnh thuật toán Brute Force
- [x] Documentation chi tiết

### Phase 2: Triển khai thuật toán cơ bản 🔄
- [ ] Knuth-Morris-Pratt (KMP)
- [ ] Boyer-Moore
- [ ] Horspool
- [ ] Quick Search
- [ ] Karp-Rabin
- [ ] Morris-Pratt

### Phase 3: Thuật toán tối ưu 📋
- [ ] Apostolico-Crochemore
- [ ] Colussi
- [ ] Galil-Giancarlo
- [ ] Simon
- [ ] Tuned Boyer-Moore
- [ ] Two Way

### Phase 4: Thuật toán chuyên biệt 📋
- [ ] Alpha Skip Search
- [ ] Shift-Or
- [ ] Forward DAWG Matching
- [ ] Backward Oracle Matching
- [ ] Search with Automaton

### Phase 5: Tính năng nâng cao 📋
- [ ] Thêm tính năng so sánh hiệu suất
- [ ] Giao diện chọn thuật toán
- [ ] Chạy song song nhiều thuật toán
- [ ] Xuất kết quả ra file

### Phase 6: Testing & Optimization 📋
- [ ] Unit tests cho tất cả thuật toán
- [ ] Benchmark tests
- [ ] Performance profiling
- [ ] Tối ưu hóa hiệu suất

### Phase 7: Documentation & Examples 📋
- [ ] Tài liệu chi tiết cho từng thuật toán
- [ ] Ví dụ sử dụng
- [ ] So sánh hiệu suất
- [ ] Best practices guide

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 👥 Tác giả

- **Idist-hn** - *Phát triển ban đầu*

## 🙏 Acknowledgments

- Cảm ơn các tài liệu tham khảo về thuật toán string matching
- Cảm ơn cộng đồng Go developers
