# 🟨 Node.js Implementation - String Matching Algorithms

## 📋 Mô tả

Implementation của các thuật toán string matching bằng Node.js, tối ưu hóa cho JavaScript ecosystem và modern web development.

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống:
- Node.js 14.0.0 hoặc cao hơn
- npm hoặc yarn

### Cài đặt dependencies:

```bash
npm install
# hoặc
yarn install
```

### Chạy chương trình:

```bash
# Sử dụng npm scripts
npm start

# Hoặc chạy trực tiếp
node main.js

# Development mode với nodemon
npm run dev
```

### Chạy tests:

```bash
npm test
# hoặc
node test/bruteForce.test.js
```

## 🔧 Sử dụng

### Import module:

```javascript
const BruteForce = require('./algorithms/bruteForce');
// hoặc ES6 modules
import BruteForce from './algorithms/bruteForce.js';
```

### Tìm kiếm cơ bản:

```javascript
const result = BruteForce.search('hello world', 'world');
// Returns: {exist: true, index: 6}

if (result.exist) {
    console.log(`Tìm thấy tại vị trí: ${result.index}`);
} else {
    console.log('Không tìm thấy');
}
```

### Tìm tất cả vị trí:

```javascript
const positions = BruteForce.searchAll('abababab', 'ab');
// Returns: [0, 2, 4, 6]

console.log(`Tìm thấy tại các vị trí: ${positions.join(', ')}`);
```

### Tìm kiếm với progress tracking:

```javascript
const result = BruteForce.searchWithProgress('long text here', 'text', 
    (current, total) => {
        const percentage = (current / total * 100).toFixed(1);
        console.log(`Progress: ${percentage}%`);
    }
);
```

## 📊 API Reference

### Class `BruteForce`

#### `search(source, target)`
- **Mô tả**: Tìm kiếm lần xuất hiện đầu tiên của chuỗi con
- **Tham số**:
  - `source` (string): Chuỗi nguồn để tìm kiếm
  - `target` (string): Chuỗi đích cần tìm
- **Trả về**: `{exist: boolean, index: number}`

#### `searchAll(source, target)`
- **Mô tả**: Tìm tất cả vị trí xuất hiện của chuỗi con
- **Trả về**: `number[]` - mảng các vị trí

#### `count(source, target)`
- **Mô tả**: Đếm số lần xuất hiện của chuỗi con
- **Trả về**: `number`

#### `searchWithProgress(source, target, onProgress)`
- **Mô tả**: Tìm kiếm với callback để theo dõi tiến độ
- **Tham số**:
  - `onProgress` (function): `(current, total) => void`
- **Trả về**: `{exist: boolean, index: number}`

## ✨ Tính năng đặc biệt

### 🚀 Async/Await Support
```javascript
// Có thể wrap trong Promise cho async operations
const searchAsync = (source, target) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BruteForce.search(source, target));
        }, 0);
    });
};

const result = await searchAsync('hello world', 'world');
```

### 📊 Progress Tracking
```javascript
// Real-time progress cho chuỗi dài
BruteForce.searchWithProgress(longText, pattern, (current, total) => {
    updateProgressBar(current / total * 100);
});
```

### 🔧 Modern JavaScript Features
- ES6+ syntax support
- Module system compatibility
- TypeScript ready (với type definitions)

## 🧪 Testing

Chạy comprehensive test suite:

```bash
npm test
```

Test features:
- ✅ Basic search functionality
- ✅ Edge cases handling
- ✅ Performance validation
- ✅ Progress callback testing
- ✅ Unicode string support
- ✅ Memory leak prevention

## 📈 Performance

- **Time Complexity**: O(n×m) worst case, O(n+m) best case
- **Space Complexity**: O(1)
- **Optimized for**: 
  - V8 JavaScript engine
  - Large text processing
  - Real-time applications

### Benchmarking:

```javascript
const { performance } = require('perf_hooks');

const start = performance.now();
const result = BruteForce.search(largeText, pattern);
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
```

## 🌐 Integration Examples

### Express.js API:

```javascript
const express = require('express');
const BruteForce = require('./algorithms/bruteForce');

app.post('/search', (req, res) => {
    const { source, target } = req.body;
    const result = BruteForce.search(source, target);
    res.json(result);
});
```

### React Component:

```javascript
import { useState } from 'react';
import BruteForce from './algorithms/bruteForce';

function SearchComponent() {
    const [result, setResult] = useState(null);
    
    const handleSearch = (source, target) => {
        const searchResult = BruteForce.search(source, target);
        setResult(searchResult);
    };
    
    return (
        // JSX component
    );
}
```

## 🔮 Roadmap

- [ ] TypeScript definitions
- [ ] Web Workers support
- [ ] Streaming search for large files
- [ ] React/Vue.js components
- [ ] Performance optimization with WebAssembly
- [ ] Browser compatibility testing

## 📦 Package Information

- **Name**: string-matching-algorithms
- **Version**: 1.0.0
- **License**: MIT
- **Author**: Idist-hn

## 📝 Examples

Xem file `main.js` để có ví dụ chi tiết về cách sử dụng trong các scenarios khác nhau.
