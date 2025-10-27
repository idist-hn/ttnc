const readline = require('readline');
const BruteForce = require('./algorithms/bruteForce');
const AlphaSkipSearch = require('./algorithms/alphaSkipSearch');
const BoyerMoore = require('./algorithms/boyerMoore');
const Horspool = require('./algorithms/horspool');
const QuickSearch = require('./algorithms/quickSearch');
const KMP = require('./algorithms/kmp');
const MorrisPratt = require('./algorithms/morrisPratt');
const KarpRabin = require('./algorithms/karpRabin');
const ShiftOr = require('./algorithms/shiftOr');
const Raita = require('./algorithms/raita');
const NotSoNaive = require('./algorithms/notSoNaive');
const SkipSearch = require('./algorithms/skipSearch');
const Colussi = require('./algorithms/colussi');
const TunedBoyerMoore = require('./algorithms/tunedBoyerMoore');
const ReverseColussi = require('./algorithms/reverseColussi');
const GalilGiancarlo = require('./algorithms/galilGiancarlo');
const TurboBM = require('./algorithms/turboBM');
const ApostolicoCrochemore = require('./algorithms/apostolicoCrochemore');
const ApostolicoGiancarlo = require('./algorithms/apostolicoGiancarlo');
const ZhuTakaoka = require('./algorithms/zhuTakaoka');
const BerryRavindran = require('./algorithms/berryRavindran');
const Smith = require('./algorithms/smith');
const KmpSkipSearch = require('./algorithms/kmpSkipSearch');
const OptimalMismatch = require('./algorithms/optimalMismatch');
const MaximalShift = require('./algorithms/maximalShift');
const Simon = require('./algorithms/simon');
const StringMatchingOnOrderedAlphabets = require('./algorithms/stringMatchingOnOrderedAlphabets');
const TwoWay = require('./algorithms/twoWay');
const ReverseFactor = require('./algorithms/reverseFactor');
const TurboReverseFactor = require('./algorithms/turboReverseFactor');
const ForwardDAWGMatching = require('./algorithms/forwardDAWGMatching');
const BackwardOracleMatching = require('./algorithms/backwardOracleMatching');
const GalilSeiferas = require('./algorithms/galilSeiferas');
const SearchWithAutomaton = require('./algorithms/searchWithAutomaton');

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
 * Chạy thuật toán Boyer-Moore và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runBoyerMoore(source, target) {
    console.log("=== Bắt đầu thuật toán Boyer-Moore ===");

    const startTime = process.hrtime.bigint();
    const result = BoyerMoore.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Boyer-Moore ---");
    if (result.exist) {
        console.log(`Boyer-Moore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Boyer-Moore: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Boyer-Moore: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Boyer-Moore ===\n");
}

/**
 * Chạy thuật toán Horspool và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runHorspool(source, target) {
    console.log("=== Bắt đầu thuật toán Horspool ===");

    const startTime = process.hrtime.bigint();
    const result = Horspool.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Horspool ---");
    if (result.exist) {
        console.log(`Horspool: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Horspool: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Horspool: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Horspool ===\n");
}

/**
 * Chạy thuật toán Quick Search và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runQuickSearch(source, target) {
    console.log("=== Bắt đầu thuật toán Quick Search ===");

    const startTime = process.hrtime.bigint();
    const result = QuickSearch.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Quick Search ---");
    if (result.exist) {
        console.log(`Quick Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Quick Search: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Quick Search: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Quick Search ===\n");
}

/**
 * Chạy thuật toán KMP và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runKMP(source, target) {
    console.log("=== Bắt đầu thuật toán Knuth-Morris-Pratt ===");

    const startTime = process.hrtime.bigint();
    const result = KMP.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả KMP ---");
    if (result.exist) {
        console.log(`KMP: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("KMP: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`KMP: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Knuth-Morris-Pratt ===\n");
}

/**
 * Chạy thuật toán Morris-Pratt và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runMorrisPratt(source, target) {
    console.log("=== Bắt đầu thuật toán Morris-Pratt ===");

    const startTime = process.hrtime.bigint();
    const result = MorrisPratt.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Morris-Pratt ---");
    if (result.exist) {
        console.log(`Morris-Pratt: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Morris-Pratt: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Morris-Pratt: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Morris-Pratt ===\n");
}

/**
 * Chạy thuật toán Karp-Rabin và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runKarpRabin(source, target) {
    console.log("=== Bắt đầu thuật toán Karp-Rabin ===");

    const startTime = process.hrtime.bigint();
    const result = KarpRabin.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Karp-Rabin ---");
    if (result.exist) {
        console.log(`Karp-Rabin: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Karp-Rabin: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Karp-Rabin: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Karp-Rabin ===\n");
}

/**
 * Chạy thuật toán Shift-Or và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runShiftOr(source, target) {
    console.log("=== Bắt đầu thuật toán Shift-Or ===");

    const startTime = process.hrtime.bigint();
    const result = ShiftOr.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Shift-Or ---");
    if (result.exist) {
        console.log(`Shift-Or: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Shift-Or: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Shift-Or: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Shift-Or ===\n");
}

/**
 * Chạy thuật toán Raita và đo thời gian
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runRaita(source, target) {
    console.log("=== Bắt đầu thuật toán Raita ===");

    const startTime = process.hrtime.bigint();
    const result = Raita.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Raita ---");
    if (result.exist) {
        console.log(`Raita: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Raita: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Raita: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Raita ===\n");
}

/**
 * Chạy thuật toán Not-So-Naive
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runNotSoNaive(source, target) {
    console.log("=== Bắt đầu thuật toán Not-So-Naive ===");

    const startTime = process.hrtime.bigint();
    const result = NotSoNaive.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Not-So-Naive ---");
    if (result.exist) {
        console.log(`Not-So-Naive: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Not-So-Naive: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Not-So-Naive: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Not-So-Naive ===\n");
}

/**
 * Chạy thuật toán Skip Search
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runSkipSearch(source, target) {
    console.log("=== Bắt đầu thuật toán Skip Search ===");

    const startTime = process.hrtime.bigint();
    const result = SkipSearch.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Skip Search ---");
    if (result.exist) {
        console.log(`Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Skip Search: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Skip Search: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Skip Search ===\n");
}

/**
 * Chạy thuật toán Colussi
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runColussi(source, target) {
    console.log("=== Bắt đầu thuật toán Colussi ===");

    const startTime = process.hrtime.bigint();
    const result = Colussi.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Colussi ---");
    if (result.exist) {
        console.log(`Colussi: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Colussi: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Colussi: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Colussi ===\n");
}

/**
 * Chạy thuật toán Tuned Boyer-Moore
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runTunedBoyerMoore(source, target) {
    console.log("=== Bắt đầu thuật toán Tuned Boyer-Moore ===");

    const startTime = process.hrtime.bigint();
    const result = TunedBoyerMoore.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Tuned Boyer-Moore ---");
    if (result.exist) {
        console.log(`Tuned Boyer-Moore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Tuned Boyer-Moore: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Tuned Boyer-Moore: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Tuned Boyer-Moore ===\n");
}

/**
 * Chạy thuật toán Reverse Colussi
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runReverseColussi(source, target) {
    console.log("=== Bắt đầu thuật toán Reverse Colussi ===");

    const startTime = process.hrtime.bigint();
    const result = ReverseColussi.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Reverse Colussi ---");
    if (result.exist) {
        console.log(`Reverse Colussi: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Reverse Colussi: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Reverse Colussi: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Reverse Colussi ===\n");
}

/**
 * Chạy thuật toán Galil-Giancarlo
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runGalilGiancarlo(source, target) {
    console.log("=== Bắt đầu thuật toán Galil-Giancarlo ===");

    const startTime = process.hrtime.bigint();
    const result = GalilGiancarlo.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Galil-Giancarlo ---");
    if (result.exist) {
        console.log(`Galil-Giancarlo: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Galil-Giancarlo: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Galil-Giancarlo: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Galil-Giancarlo ===\n");
}

/**
 * Chạy thuật toán Turbo BM
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runTurboBM(source, target) {
    console.log("=== Bắt đầu thuật toán Turbo BM ===");

    const startTime = process.hrtime.bigint();
    const result = TurboBM.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Turbo BM ---");
    if (result.exist) {
        console.log(`Turbo BM: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Turbo BM: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Turbo BM: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Turbo BM ===\n");
}

/**
 * Chạy thuật toán Apostolico-Crochemore
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runApostolicoCrochemore(source, target) {
    console.log("=== Bắt đầu thuật toán Apostolico-Crochemore ===");

    const startTime = process.hrtime.bigint();
    const result = ApostolicoCrochemore.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Apostolico-Crochemore ---");
    if (result.exist) {
        console.log(`Apostolico-Crochemore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Apostolico-Crochemore: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Apostolico-Crochemore: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Apostolico-Crochemore ===\n");
}

/**
 * Chạy thuật toán Apostolico-Giancarlo
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runApostolicoGiancarlo(source, target) {
    console.log("=== Bắt đầu thuật toán Apostolico-Giancarlo ===");

    const startTime = process.hrtime.bigint();
    const result = ApostolicoGiancarlo.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Apostolico-Giancarlo ---");
    if (result.exist) {
        console.log(`Apostolico-Giancarlo: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Apostolico-Giancarlo: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Apostolico-Giancarlo: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Apostolico-Giancarlo ===\n");
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
 * Chạy thuật toán Zhu-Takaoka
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runZhuTakaoka(source, target) {
    console.log("=== Bắt đầu thuật toán Zhu-Takaoka ===");

    const startTime = process.hrtime.bigint();
    const result = ZhuTakaoka.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Zhu-Takaoka ---");
    if (result.exist) {
        console.log(`Zhu-Takaoka: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Zhu-Takaoka: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Zhu-Takaoka: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Zhu-Takaoka ===\n");
}

/**
 * Chạy thuật toán Berry-Ravindran
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runBerryRavindran(source, target) {
    console.log("=== Bắt đầu thuật toán Berry-Ravindran ===");

    const startTime = process.hrtime.bigint();
    const result = BerryRavindran.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Berry-Ravindran ---");
    if (result.exist) {
        console.log(`Berry-Ravindran: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Berry-Ravindran: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Berry-Ravindran: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Berry-Ravindran ===\n");
}

/**
 * Chạy thuật toán Smith
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runSmith(source, target) {
    console.log("=== Bắt đầu thuật toán Smith ===");

    const startTime = process.hrtime.bigint();
    const result = Smith.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Smith ---");
    if (result.exist) {
        console.log(`Smith: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Smith: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Smith: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Smith ===\n");
}

/**
 * Chạy thuật toán KMP Skip Search
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runKmpSkipSearch(source, target) {
    console.log("=== Bắt đầu thuật toán KMP Skip Search ===");

    const startTime = process.hrtime.bigint();
    const result = KmpSkipSearch.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả KMP Skip Search ---");
    if (result.exist) {
        console.log(`KMP Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("KMP Skip Search: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`KMP Skip Search: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán KMP Skip Search ===\n");
}

/**
 * Chạy thuật toán Optimal Mismatch
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runOptimalMismatch(source, target) {
    console.log("=== Bắt đầu thuật toán Optimal Mismatch ===");

    const startTime = process.hrtime.bigint();
    const result = OptimalMismatch.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Optimal Mismatch ---");
    if (result.exist) {
        console.log(`Optimal Mismatch: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Optimal Mismatch: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Optimal Mismatch: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Optimal Mismatch ===\n");
}

/**
 * Chạy thuật toán Maximal Shift
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runMaximalShift(source, target) {
    console.log("=== Bắt đầu thuật toán Maximal Shift ===");

    const startTime = process.hrtime.bigint();
    const result = MaximalShift.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Maximal Shift ---");
    if (result.exist) {
        console.log(`Maximal Shift: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Maximal Shift: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Maximal Shift: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Maximal Shift ===\n");
}

/**
 * Chạy thuật toán Simon
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runSimon(source, target) {
    console.log("=== Bắt đầu thuật toán Simon ===");

    const startTime = process.hrtime.bigint();
    const result = Simon.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Simon ---");
    if (result.exist) {
        console.log(`Simon: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Simon: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Simon: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Simon ===\n");
}

/**
 * Chạy thuật toán String Matching on Ordered Alphabets
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runStringMatchingOnOrderedAlphabets(source, target) {
    console.log("=== Bắt đầu thuật toán String Matching on Ordered Alphabets ===");

    const startTime = process.hrtime.bigint();
    const result = StringMatchingOnOrderedAlphabets.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả String Matching on Ordered Alphabets ---");
    if (result.exist) {
        console.log(`String Matching on Ordered Alphabets: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("String Matching on Ordered Alphabets: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`String Matching on Ordered Alphabets: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán String Matching on Ordered Alphabets ===\n");
}

/**
 * Chạy thuật toán Two Way
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runTwoWay(source, target) {
    console.log("=== Bắt đầu thuật toán Two Way ===");

    const startTime = process.hrtime.bigint();
    const result = TwoWay.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Two Way ---");
    if (result.exist) {
        console.log(`Two Way: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Two Way: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Two Way: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Two Way ===\n");
}

/**
 * Chạy thuật toán Reverse Factor
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runReverseFactor(source, target) {
    console.log("=== Bắt đầu thuật toán Reverse Factor ===");

    const startTime = process.hrtime.bigint();
    const result = ReverseFactor.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Reverse Factor ---");
    if (result.exist) {
        console.log(`Reverse Factor: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Reverse Factor: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Reverse Factor: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Reverse Factor ===\n");
}

/**
 * Chạy thuật toán Turbo Reverse Factor
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runTurboReverseFactor(source, target) {
    console.log("=== Bắt đầu thuật toán Turbo Reverse Factor ===");

    const startTime = process.hrtime.bigint();
    const result = TurboReverseFactor.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000; // Convert to milliseconds

    console.log("--- Kết quả Turbo Reverse Factor ---");
    if (result.exist) {
        console.log(`Turbo Reverse Factor: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Turbo Reverse Factor: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Turbo Reverse Factor: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Turbo Reverse Factor ===\n");
}

/**
 * Chạy thuật toán Forward DAWG Matching
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runForwardDAWGMatching(source, target) {
    console.log("=== Bắt đầu thuật toán Forward DAWG Matching ===");

    const startTime = process.hrtime.bigint();
    const result = ForwardDAWGMatching.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000;

    console.log("--- Kết quả Forward DAWG Matching ---");
    if (result.exist) {
        console.log(`Forward DAWG Matching: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Forward DAWG Matching: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Forward DAWG Matching: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Forward DAWG Matching ===\n");
}

/**
 * Chạy thuật toán Backward Oracle Matching
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runBackwardOracleMatching(source, target) {
    console.log("=== Bắt đầu thuật toán Backward Oracle Matching ===");

    const startTime = process.hrtime.bigint();
    const result = BackwardOracleMatching.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000;

    console.log("--- Kết quả Backward Oracle Matching ---");
    if (result.exist) {
        console.log(`Backward Oracle Matching: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Backward Oracle Matching: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Backward Oracle Matching: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Backward Oracle Matching ===\n");
}

/**
 * Chạy thuật toán Galil-Seiferas
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runGalilSeiferas(source, target) {
    console.log("=== Bắt đầu thuật toán Galil-Seiferas ===");

    const startTime = process.hrtime.bigint();
    const result = GalilSeiferas.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000;

    console.log("--- Kết quả Galil-Seiferas ---");
    if (result.exist) {
        console.log(`Galil-Seiferas: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Galil-Seiferas: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Galil-Seiferas: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Galil-Seiferas ===\n");
}

/**
 * Chạy thuật toán Search with Automaton
 * @param {string} source - Chuỗi nguồn
 * @param {string} target - Chuỗi đích
 */
function runSearchWithAutomaton(source, target) {
    console.log("=== Bắt đầu thuật toán Search with Automaton ===");

    const startTime = process.hrtime.bigint();
    const result = SearchWithAutomaton.search(source, target);
    const endTime = process.hrtime.bigint();

    const executionTime = Number(endTime - startTime) / 1000000;

    console.log("--- Kết quả Search with Automaton ---");
    if (result.exist) {
        console.log(`Search with Automaton: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí ${result.index}`);
    } else {
        console.log("Search with Automaton: Chuỗi target không tồn tại trong chuỗi source");
    }

    console.log(`Search with Automaton: Thời gian chạy ${executionTime.toFixed(3)} ms`);
    console.log("=== Kết thúc thuật toán Search with Automaton ===\n");
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

        // Chạy thuật toán Boyer-Moore
        runBoyerMoore(source, target);

        // Chạy thuật toán Horspool
        runHorspool(source, target);

        // Chạy thuật toán Quick Search
        runQuickSearch(source, target);

        // Chạy thuật toán KMP
        runKMP(source, target);

        // Chạy thuật toán Morris-Pratt
        runMorrisPratt(source, target);

        // Chạy thuật toán Karp-Rabin
        runKarpRabin(source, target);

        // Chạy thuật toán Shift-Or
        runShiftOr(source, target);

        // Chạy thuật toán Raita
        runRaita(source, target);

        // Chạy thuật toán Not-So-Naive
        runNotSoNaive(source, target);

        // Chạy thuật toán Skip Search
        runSkipSearch(source, target);

        // Chạy thuật toán Colussi
        runColussi(source, target);

        // Chạy thuật toán Tuned Boyer-Moore
        runTunedBoyerMoore(source, target);

        // Chạy thuật toán Reverse Colussi
        runReverseColussi(source, target);

        // Chạy thuật toán Galil-Giancarlo
        runGalilGiancarlo(source, target);

        // Chạy thuật toán Turbo BM
        runTurboBM(source, target);

        // Chạy thuật toán Apostolico-Crochemore
        runApostolicoCrochemore(source, target);

        // Chạy thuật toán Apostolico-Giancarlo
        runApostolicoGiancarlo(source, target);

        // Chạy thuật toán Zhu-Takaoka
        runZhuTakaoka(source, target);

        // Chạy thuật toán Berry-Ravindran
        runBerryRavindran(source, target);

        // Chạy thuật toán Smith
        runSmith(source, target);

        // Chạy thuật toán KMP Skip Search
        runKmpSkipSearch(source, target);

        // Chạy thuật toán Optimal Mismatch
        runOptimalMismatch(source, target);

        // Chạy thuật toán Maximal Shift
        runMaximalShift(source, target);

        // Chạy thuật toán Simon
        runSimon(source, target);

        // Chạy thuật toán String Matching on Ordered Alphabets
        runStringMatchingOnOrderedAlphabets(source, target);

        // Chạy thuật toán Two Way
        runTwoWay(source, target);

        // Chạy thuật toán Reverse Factor
        runReverseFactor(source, target);

        // Chạy thuật toán Turbo Reverse Factor
        runTurboReverseFactor(source, target);

        // Chạy thuật toán Forward DAWG Matching
        runForwardDAWGMatching(source, target);

        // Chạy thuật toán Backward Oracle Matching
        runBackwardOracleMatching(source, target);

        // Chạy thuật toán Galil-Seiferas
        runGalilSeiferas(source, target);

        // Chạy thuật toán Search with Automaton
        runSearchWithAutomaton(source, target);

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
