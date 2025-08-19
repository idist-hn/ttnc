const readline = require('readline');
const BruteForce = require('./algorithms/bruteForce');
const AlphaSkipSearch = require('./algorithms/alphaSkipSearch');

/**
 * Chương trình chính để test thuật toán Brute Force
 */

// Tạo interface để đọc input từ console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Chương trình tìm kiếm chuỗi con bằng Node.js ===");
console.log("Thuật toán: Brute Force\n");

/**
 * Chạy thuật toán Brute Force và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runBruteForce(source, target) {
    console.log("=== Bắt đầu thuật toán Brute Force ===");

    const startTime = process.hrtime.bigint();
    const result = BruteForce.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Brute Force ---");
    if (result.exist) {
        console.log(`Brute Force: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Brute Force: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Brute Force: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Brute Force ===\n");
}

/**
 * Chạy thuật toán Alpha-Skip Search và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runAlphaSkipSearch(source, target) {
    console.log("=== Bắt đầu thuật toán Alpha-Skip Search ===");

    const startTime = process.hrtime.bigint();
    const result = AlphaSkipSearch.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Alpha-Skip Search ---");
    if (result.exist) {
        console.log(`Alpha-Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Alpha-Skip Search: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Alpha-Skip Search: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Alpha-Skip Search ===\n");
}

/**
 * Chạy các test bổ sung
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runAdditionalTests(source, target) {
    console.log("=== Test bổ sung ===");
    
    // Tìm tất cả vị trí
    const allPositions = BruteForce.searchAll(source, target);
    console.log(`Tất cả vị trí tìm thấy: ${allPositions.length === 0 ? "Không có" : allPositions.join(", ")}`);
    
    // Đếm số lần xuất hiện
    const count = BruteForce.count(source, target);
    console.log(`Số lần xuất hiện: ${count}`);
    
    console.log("=== Kết thúc test bổ sung ===\n");
}

/**
 * Chạy test với progress callback
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runProgressTest(source, target) {
    console.log("=== Test với progress tracking ===");
    
    const result = BruteForce.searchWithProgress(source, target, (current, total) => {
        const percentage = ((current + 1) / total * 100).toFixed(1);
        process.stdout.write(`\rTiến độ: ${percentage}% (${current + 1}/${total})`);
    });
    
    console.log(); // New line after progress
    console.log(`Kết quả: ${result.exist ? `Tìm thấy tại vị trí ${result.index}` : "Không tìm thấy"}`);
    console.log("=== Kết thúc test progress ===\n");
}

/**
 * Chạy demo với dữ liệu mẫu
 */
function runDemo() {
    console.log("=== Demo với dữ liệu mẫu ===");
    const demoSource = "hello world programming";
    const demoTarget = "world";
    
    console.log(`Source: '${demoSource}'`);
    console.log(`Target: '${demoTarget}'\n`);
    
    runBruteForce(demoSource, demoTarget);
    runAdditionalTests(demoSource, demoTarget);
    runProgressTest(demoSource, demoTarget);
}

/**
 * Hàm chính để nhận input và chạy thuật toán
 */
async function main() {
    try {
        // Nhập source string
        const source = await new Promise((resolve) => {
            rl.question("Nhập chuỗi source: ", resolve);
        });
        
        // Nhập target string
        const target = await new Promise((resolve) => {
            rl.question("Nhập chuỗi target: ", resolve);
        });
        
        console.log();
        
        // Chạy thuật toán chính
        runBruteForce(source, target);

        // Chạy thuật toán Alpha-Skip Search
        runAlphaSkipSearch(source, target);

        // Chạy test bổ sung
        runAdditionalTests(source, target);
        
        // Chạy test với progress
        if (source.length > 10) {
            runProgressTest(source, target);
        }
        
        // Chạy demo
        runDemo();
        
        console.log("Kết thúc chương trình Node.js");
        
    } catch (error) {
        console.error("Lỗi:", error.message);
    } finally {
        rl.close();
    }
}

// Chạy chương trình chính
main();
