# 🔍 String Matching Algorithms

Dự án này triển khai và so sánh hiệu suất của các thuật toán tìm kiếm chuỗi con (string matching algorithms) được viết bằng ngôn ngữ Go.

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
- **Knuth-Morris-Pratt** - `kunth-morris-pratt.go`
- **Morris-Pratt** - `morris-pratt.go`
- **Karp-Rabin** - `karp-rabin.go`
- **Shift-Or** - `shift-or.go`
- **Colussi** - `colussi.go`
- **Galil-Giancarlo** - `galil-giancarlo.go`
- **Apostolico-Crochemore** - `apostolico-crochemore.go`
- **Not So Naive** - `not-so-naive.go`

### ⬅️ From Right to Left (Từ phải sang trái)
*Thuật toán so sánh ký tự từ cuối pattern về đầu*

- **Boyer-Moore** - `boyer-moore.go`
- **Horspool** - `horspool.go`
- **Quick Search** - `quick-search.go`
- **Tuned Boyer-Moore** - `tuned-boyer-moore.go`
- **Zhu-Takaoka** - `zhu-takaoka.go`
- **Berry-Ravindran** - `berry-ravindran.go`
- **Smith** - `smith.go`
- **Raita** - `raita.go`
- **Reverse Colussi** - `reverse-colussi.go`
- **Turbo BM** - `turbo-bm.go`
- **Apostolico-Giancarlo** - `apostolico-giancarlo.go`

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

### 🚧 Trạng thái triển khai:
- ✅ **Brute Force**: Hoàn thành (Go, PHP, Node.js)
- ✅ **Alpha-Skip Search**: Hoàn thành (Go, PHP, Node.js)
- 🔄 **31 thuật toán khác**: Đang trong quá trình triển khai (skeleton code đã sẵn sàng)

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
   cd sources
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
