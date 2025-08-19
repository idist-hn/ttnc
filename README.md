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
├── docs/
└── sources/
    ├── go.mod
    ├── main.go
    └── algorithms/
        ├── alpha-skip-search.go                    🔄 Đang phát triển
        ├── apostolico-crochemore.go                🔄 Đang phát triển
        ├── apostolico-giancarlo.go                 🔄 Đang phát triển
        ├── backward-oracle-matching.go             🔄 Đang phát triển
        ├── berry-ravindran.go                      🔄 Đang phát triển
        ├── boyer-moore.go                          🔄 Đang phát triển
        ├── brute-force.go                          ✅ Hoàn thành
        ├── colussi.go                              🔄 Đang phát triển
        ├── forward-dawg-matching.go                🔄 Đang phát triển
        ├── galil-giancarlo.go                      🔄 Đang phát triển
        ├── galil-seiferas.go                       🔄 Đang phát triển
        ├── horspool.go                             🔄 Đang phát triển
        ├── karp-rabin.go                           🔄 Đang phát triển
        ├── kmpskip-search.go                       🔄 Đang phát triển
        ├── kunth-morris-pratt.go                   🔄 Đang phát triển
        ├── maximal-shift.go                        🔄 Đang phát triển
        ├── morris-pratt.go                         🔄 Đang phát triển
        ├── not-so-naive.go                         🔄 Đang phát triển
        ├── optimal-mismatch.go                     🔄 Đang phát triển
        ├── quick-search.go                         🔄 Đang phát triển
        ├── raita.go                                🔄 Đang phát triển
        ├── reverse-colussi.go                      🔄 Đang phát triển
        ├── reverse-factor.go                       🔄 Đang phát triển
        ├── search-with-an-automaton.go             🔄 Đang phát triển
        ├── shift-or.go                             🔄 Đang phát triển
        ├── simon.go                                🔄 Đang phát triển
        ├── skip-search.go                          🔄 Đang phát triển
        ├── smith.go                                🔄 Đang phát triển
        ├── string-matching-on-ordered-alphabets.go 🔄 Đang phát triển
        ├── tuned-boyer-moore.go                    🔄 Đang phát triển
        ├── turbo-bm.go                             🔄 Đang phát triển
        ├── turbo-reverse-factor.go                 🔄 Đang phát triển
        ├── two-way.go                              🔄 Đang phát triển
        └── zhu-takaoka.go                          🔄 Đang phát triển
```

### Mô tả các thư mục:

- **`sources/`**: Chứa mã nguồn chính của dự án
- **`sources/algorithms/`**: Chứa các thuật toán tìm kiếm chuỗi
- **`docs/`**: Tài liệu dự án
- **`README.md`**: File mô tả dự án này

## 🧮 Thuật toán đã triển khai

### ✅ Brute Force Algorithm
- **Mô tả**: Thuật toán tìm kiếm đơn giản nhất, so sánh từng ký tự một cách tuần tự
- **Độ phức tạp thời gian**: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
- **Độ phức tạp không gian**: O(1) - không sử dụng thêm bộ nhớ
- **Trạng thái**: ✅ Đã triển khai hoàn chỉnh
- **File**: `sources/algorithms/brute-force.go`

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

### 🚧 Trạng thái triển khai:
- ✅ **Brute Force**: Hoàn thành
- 🔄 **32 thuật toán khác**: Đang trong quá trình triển khai (skeleton code đã sẵn sàng)

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống:
- Go 1.24.1 hoặc cao hơn

### Các bước cài đặt:

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd ttnc
   ```

2. **Chuyển vào thư mục sources:**
   ```bash
   cd sources
   ```

3. **Chạy chương trình:**
   ```bash
   go run main.go
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

### Package `algorithms`

#### `BruteForce(source, target string) (exist bool, index int)`

**Mô tả**: Tìm kiếm chuỗi con bằng thuật toán Brute Force - thuật toán tìm kiếm chuỗi con đơn giản nhất, so sánh từng ký tự của chuỗi target với chuỗi source một cách tuần tự.

**Độ phức tạp**:
- **Thời gian**: O(n×m) trong trường hợp xấu nhất, O(n+m) trong trường hợp tốt nhất
- **Không gian**: O(1) - không sử dụng thêm bộ nhớ, chỉ sử dụng các biến cục bộ

**Tham số**:
- `source`: Chuỗi nguồn để tìm kiếm (độ dài n)
- `target`: Chuỗi đích cần tìm (độ dài m)

**Trả về**:
- `exist`: `true` nếu tìm thấy, `false` nếu không tìm thấy
- `index`: Vị trí bắt đầu của chuỗi con (hoặc -1 nếu không tìm thấy)

**Đặc điểm**:
- Không sử dụng đệ quy
- Không sử dụng cấu trúc dữ liệu phức tạp
- Không sử dụng hàm gọi hàm
- Thuật toán đơn giản và dễ hiểu

### Các thuật toán khác

Tất cả 32 thuật toán còn lại đều có cùng signature:
```go
func AlgorithmName(source, target string) (exist bool, index int)
```

Mỗi thuật toán đều có documentation chi tiết về độ phức tạp và đặc điểm riêng.

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
