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
├── sources/
│   ├── go.mod
│   ├── main.go
│   └── algorithms/
│       └── brute-force.go
```

### Mô tả các thư mục:

- **`sources/`**: Chứa mã nguồn chính của dự án
- **`sources/algorithms/`**: Chứa các thuật toán tìm kiếm chuỗi
- **`docs/`**: Tài liệu dự án
- **`README.md`**: File mô tả dự án này

## 🧮 Thuật toán đã triển khai

### ✅ Brute Force Algorithm
- **Mô tả**: Thuật toán tìm kiếm đơn giản, so sánh từng ký tự một cách tuần tự
- **Độ phức tạp thời gian**: O(n×m) trong trường hợp xấu nhất
- **Độ phức tạp không gian**: O(1)
- **File**: `sources/algorithms/brute-force.go`

### 🚧 Thuật toán đang phát triển:
- **KMP (Knuth-Morris-Pratt)**: Đang trong quá trình triển khai
- **Boyer-Moore**: Đang trong quá trình triển khai

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

**Mô tả**: Tìm kiếm chuỗi con bằng thuật toán Brute Force

**Tham số**:
- `source`: Chuỗi nguồn để tìm kiếm
- `target`: Chuỗi đích cần tìm

**Trả về**:
- `exist`: `true` nếu tìm thấy, `false` nếu không tìm thấy
- `index`: Vị trí bắt đầu của chuỗi con (hoặc -1 nếu không tìm thấy)

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Để đóng góp:

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📊 Roadmap

- [x] Triển khai thuật toán Brute Force
- [ ] Triển khai thuật toán KMP
- [ ] Triển khai thuật toán Boyer-Moore
- [ ] Thêm tính năng so sánh hiệu suất
- [ ] Thêm unit tests
- [ ] Thêm benchmark tests
- [ ] Tối ưu hóa hiệu suất

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 👥 Tác giả

- **Tên tác giả** - *Phát triển ban đầu*

## 🙏 Acknowledgments

- Cảm ơn các tài liệu tham khảo về thuật toán string matching
- Cảm ơn cộng đồng Go developers
