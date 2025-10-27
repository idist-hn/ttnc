<?php

require_once 'algorithms/BruteForce.php';
require_once 'algorithms/AlphaSkipSearch.php';
require_once 'algorithms/BoyerMoore.php';
require_once 'algorithms/Horspool.php';
require_once 'algorithms/QuickSearch.php';
require_once 'algorithms/KMP.php';
require_once 'algorithms/MorrisPratt.php';
require_once 'algorithms/KarpRabin.php';
require_once 'algorithms/ShiftOr.php';
require_once 'algorithms/Raita.php';
require_once 'algorithms/NotSoNaive.php';
require_once 'algorithms/SkipSearch.php';
require_once 'algorithms/Colussi.php';
require_once 'algorithms/TunedBoyerMoore.php';
require_once 'algorithms/ReverseColussi.php';
require_once 'algorithms/GalilGiancarlo.php';
require_once 'algorithms/TurboBM.php';
require_once 'algorithms/ApostolicoCrochemore.php';
require_once 'algorithms/ApostolicoGiancarlo.php';
require_once 'algorithms/ZhuTakaoka.php';
require_once 'algorithms/BerryRavindran.php';
require_once 'algorithms/Smith.php';
require_once 'algorithms/KmpSkipSearch.php';
require_once 'algorithms/OptimalMismatch.php';
require_once 'algorithms/MaximalShift.php';
require_once 'algorithms/Simon.php';
require_once 'algorithms/StringMatchingOnOrderedAlphabets.php';
require_once 'algorithms/TwoWay.php';
require_once 'algorithms/ReverseFactor.php';
require_once 'algorithms/TurboReverseFactor.php';
require_once 'algorithms/ForwardDAWGMatching.php';
require_once 'algorithms/BackwardOracleMatching.php';
require_once 'algorithms/GalilSeiferas.php';
require_once 'algorithms/SearchWithAutomaton.php';

use Algorithms\BruteForce;
use Algorithms\AlphaSkipSearch;
use Algorithms\BoyerMoore;
use Algorithms\Horspool;
use Algorithms\QuickSearch;
use Algorithms\KMP;
use Algorithms\MorrisPratt;
use Algorithms\KarpRabin;
use Algorithms\ShiftOr;
use Algorithms\Raita;
use Algorithms\NotSoNaive;
use Algorithms\SkipSearch;
use Algorithms\Colussi;
use Algorithms\TunedBoyerMoore;
use Algorithms\ReverseColussi;
use Algorithms\GalilGiancarlo;
use Algorithms\TurboBM;
use Algorithms\ApostolicoCrochemore;
use Algorithms\ApostolicoGiancarlo;
use Algorithms\ZhuTakaoka;
use Algorithms\BerryRavindran;
use Algorithms\Smith;
use Algorithms\KmpSkipSearch;
use Algorithms\OptimalMismatch;
use Algorithms\MaximalShift;
use Algorithms\Simon;
use Algorithms\StringMatchingOnOrderedAlphabets;
use Algorithms\TwoWay;
use Algorithms\ReverseFactor;
use Algorithms\TurboReverseFactor;
use Algorithms\ForwardDAWGMatching;
use Algorithms\BackwardOracleMatching;
use Algorithms\GalilSeiferas;
use Algorithms\SearchWithAutomaton;

/**
 * Chương trình chính để test thuật toán Brute Force
 */

echo "=== Chương trình tìm kiếm chuỗi con bằng PHP ===\n";
echo "Thuật toán: Brute Force\n\n";

// Nhập dữ liệu từ người dùng
echo "Nhập chuỗi source: ";
$source = trim(fgets(STDIN));

echo "Nhập chuỗi target: ";
$target = trim(fgets(STDIN));

echo "\n";

/**
 * Chạy thuật toán Brute Force và đo thời gian
 */
function runBruteForce(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Brute Force ===\n";

    $startTime = microtime(true);
    $result = BruteForce::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Brute Force ---\n";
    if ($result['exist']) {
        echo "Brute Force: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Brute Force: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Brute Force: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Brute Force ===\n\n";
}

/**
 * Chạy thuật toán Alpha-Skip Search và đo thời gian
 */
function runAlphaSkipSearch(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Alpha-Skip Search ===\n";

    $startTime = microtime(true);
    $result = AlphaSkipSearch::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Alpha-Skip Search ---\n";
    if ($result['exist']) {
        echo "Alpha-Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Alpha-Skip Search: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Alpha-Skip Search: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Alpha-Skip Search ===\n\n";
}

/**
 * Chạy thuật toán Boyer-Moore và đo thời gian
 */
function runBoyerMoore(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Boyer-Moore ===\n";

    $startTime = microtime(true);
    $result = BoyerMoore::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Boyer-Moore ---\n";
    if ($result['exist']) {
        echo "Boyer-Moore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Boyer-Moore: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Boyer-Moore: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Boyer-Moore ===\n\n";
}

/**
 * Chạy thuật toán Horspool và đo thời gian
 */
function runHorspool(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Horspool ===\n";

    $startTime = microtime(true);
    $result = Horspool::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Horspool ---\n";
    if ($result['exist']) {
        echo "Horspool: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Horspool: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Horspool: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Horspool ===\n\n";
}

/**
 * Chạy thuật toán Quick Search và đo thời gian
 */
function runQuickSearch(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Quick Search ===\n";

    $startTime = microtime(true);
    $result = QuickSearch::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Quick Search ---\n";
    if ($result['exist']) {
        echo "Quick Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Quick Search: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Quick Search: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Quick Search ===\n\n";
}

/**
 * Chạy thuật toán KMP và đo thời gian
 */
function runKMP(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Knuth-Morris-Pratt ===\n";

    $startTime = microtime(true);
    $result = KMP::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả KMP ---\n";
    if ($result['exist']) {
        echo "KMP: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "KMP: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "KMP: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Knuth-Morris-Pratt ===\n\n";
}

/**
 * Chạy thuật toán Morris-Pratt và đo thời gian
 */
function runMorrisPratt(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Morris-Pratt ===\n";

    $startTime = microtime(true);
    $result = MorrisPratt::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Morris-Pratt ---\n";
    if ($result['exist']) {
        echo "Morris-Pratt: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Morris-Pratt: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Morris-Pratt: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Morris-Pratt ===\n\n";
}

/**
 * Chạy thuật toán Karp-Rabin và đo thời gian
 */
function runKarpRabin(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Karp-Rabin ===\n";

    $startTime = microtime(true);
    $result = KarpRabin::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Karp-Rabin ---\n";
    if ($result['exist']) {
        echo "Karp-Rabin: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Karp-Rabin: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Karp-Rabin: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Karp-Rabin ===\n\n";
}

/**
 * Chạy thuật toán Shift-Or và đo thời gian
 */
function runShiftOr(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Shift-Or ===\n";

    $startTime = microtime(true);
    $result = ShiftOr::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    echo "--- Kết quả Shift-Or ---\n";
    if ($result['exist']) {
        echo "Shift-Or: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí {$result['index']}\n";
    } else {
        echo "Shift-Or: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Shift-Or: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Shift-Or ===\n\n";
}

/**
 * Chạy thuật toán Raita
 */
function runRaita(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Raita ===\n";

    $startTime = microtime(true);
    $result = Raita::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Raita: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Raita: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Raita: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Raita ===\n\n";
}

/**
 * Chạy thuật toán Not-So-Naive
 */
function runNotSoNaive(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Not-So-Naive ===\n";

    $startTime = microtime(true);
    $result = NotSoNaive::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Not-So-Naive: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Not-So-Naive: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Not-So-Naive: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Not-So-Naive ===\n\n";
}

/**
 * Chạy thuật toán Skip Search
 */
function runSkipSearch(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Skip Search ===\n";

    $startTime = microtime(true);
    $result = SkipSearch::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Skip Search: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Skip Search: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Skip Search ===\n\n";
}

/**
 * Chạy thuật toán Colussi
 */
function runColussi(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Colussi ===\n";

    $startTime = microtime(true);
    $result = Colussi::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Colussi: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Colussi: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Colussi: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Colussi ===\n\n";
}

/**
 * Chạy thuật toán Tuned Boyer-Moore
 */
function runTunedBoyerMoore(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Tuned Boyer-Moore ===\n";

    $startTime = microtime(true);
    $result = TunedBoyerMoore::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Tuned Boyer-Moore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Tuned Boyer-Moore: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Tuned Boyer-Moore: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Tuned Boyer-Moore ===\n\n";
}

/**
 * Chạy thuật toán Reverse Colussi
 */
function runReverseColussi(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Reverse Colussi ===\n";

    $startTime = microtime(true);
    $result = ReverseColussi::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Reverse Colussi: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Reverse Colussi: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Reverse Colussi: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Reverse Colussi ===\n\n";
}

/**
 * Chạy thuật toán Galil-Giancarlo
 */
function runGalilGiancarlo(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Galil-Giancarlo ===\n";

    $startTime = microtime(true);
    $result = GalilGiancarlo::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Galil-Giancarlo: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Galil-Giancarlo: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Galil-Giancarlo: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Galil-Giancarlo ===\n\n";
}

/**
 * Chạy thuật toán Turbo BM
 */
function runTurboBM(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Turbo BM ===\n";

    $startTime = microtime(true);
    $result = TurboBM::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Turbo BM: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Turbo BM: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Turbo BM: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Turbo BM ===\n\n";
}

/**
 * Chạy thuật toán Apostolico-Crochemore
 */
function runApostolicoCrochemore(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Apostolico-Crochemore ===\n";

    $startTime = microtime(true);
    $result = ApostolicoCrochemore::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Apostolico-Crochemore: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Apostolico-Crochemore: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Apostolico-Crochemore: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Apostolico-Crochemore ===\n\n";
}

/**
 * Chạy thuật toán Apostolico-Giancarlo
 */
function runApostolicoGiancarlo(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Apostolico-Giancarlo ===\n";

    $startTime = microtime(true);
    $result = ApostolicoGiancarlo::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Apostolico-Giancarlo: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Apostolico-Giancarlo: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Apostolico-Giancarlo: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Apostolico-Giancarlo ===\n\n";
}

/**
 * Chạy thuật toán Zhu-Takaoka
 */
function runZhuTakaoka(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Zhu-Takaoka ===\n";

    $startTime = microtime(true);
    $result = ZhuTakaoka::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Zhu-Takaoka: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Zhu-Takaoka: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Zhu-Takaoka: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Zhu-Takaoka ===\n\n";
}

/**
 * Chạy thuật toán Berry-Ravindran
 */
function runBerryRavindran(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Berry-Ravindran ===\n";

    $startTime = microtime(true);
    $result = BerryRavindran::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Berry-Ravindran: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Berry-Ravindran: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Berry-Ravindran: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Berry-Ravindran ===\n\n";
}

/**
 * Chạy thuật toán Smith
 */
function runSmith(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Smith ===\n";

    $startTime = microtime(true);
    $result = Smith::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Smith: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Smith: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Smith: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Smith ===\n\n";
}

/**
 * Chạy thuật toán KMP Skip Search
 */
function runKmpSkipSearch(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán KMP Skip Search ===\n";

    $startTime = microtime(true);
    $result = KmpSkipSearch::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "KMP Skip Search: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "KMP Skip Search: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "KMP Skip Search: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán KMP Skip Search ===\n\n";
}

/**
 * Chạy thuật toán Optimal Mismatch
 */
function runOptimalMismatch(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Optimal Mismatch ===\n";

    $startTime = microtime(true);
    $result = OptimalMismatch::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Optimal Mismatch: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Optimal Mismatch: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Optimal Mismatch: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Optimal Mismatch ===\n\n";
}

/**
 * Chạy thuật toán Maximal Shift
 */
function runMaximalShift(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Maximal Shift ===\n";

    $startTime = microtime(true);
    $result = MaximalShift::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Maximal Shift: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Maximal Shift: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Maximal Shift: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Maximal Shift ===\n\n";
}

/**
 * Chạy thuật toán Simon
 */
function runSimon(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Simon ===\n";

    $startTime = microtime(true);
    $result = Simon::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Simon: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Simon: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Simon: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Simon ===\n\n";
}

/**
 * Chạy thuật toán String Matching on Ordered Alphabets
 */
function runStringMatchingOnOrderedAlphabets(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán String Matching on Ordered Alphabets ===\n";

    $startTime = microtime(true);
    $result = StringMatchingOnOrderedAlphabets::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "String Matching on Ordered Alphabets: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "String Matching on Ordered Alphabets: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "String Matching on Ordered Alphabets: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán String Matching on Ordered Alphabets ===\n\n";
}

/**
 * Chạy thuật toán Two Way
 */
function runTwoWay(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Two Way ===\n";

    $startTime = microtime(true);
    $result = TwoWay::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Two Way: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Two Way: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Two Way: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Two Way ===\n\n";
}

/**
 * Chạy thuật toán Reverse Factor
 */
function runReverseFactor(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Reverse Factor ===\n";

    $startTime = microtime(true);
    $result = ReverseFactor::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Reverse Factor: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Reverse Factor: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Reverse Factor: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Reverse Factor ===\n\n";
}

/**
 * Chạy thuật toán Turbo Reverse Factor
 */
function runTurboReverseFactor(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Turbo Reverse Factor ===\n";

    $startTime = microtime(true);
    $result = TurboReverseFactor::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000; // Convert to milliseconds

    if ($result['exist']) {
        echo "Turbo Reverse Factor: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Turbo Reverse Factor: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Turbo Reverse Factor: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Turbo Reverse Factor ===\n\n";
}

/**
 * Chạy thuật toán Forward DAWG Matching
 */
function runForwardDAWGMatching(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Forward DAWG Matching ===\n";

    $startTime = microtime(true);
    $result = ForwardDAWGMatching::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000;

    if ($result['exist']) {
        echo "Forward DAWG Matching: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Forward DAWG Matching: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Forward DAWG Matching: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Forward DAWG Matching ===\n\n";
}

/**
 * Chạy thuật toán Backward Oracle Matching
 */
function runBackwardOracleMatching(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Backward Oracle Matching ===\n";

    $startTime = microtime(true);
    $result = BackwardOracleMatching::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000;

    if ($result['exist']) {
        echo "Backward Oracle Matching: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Backward Oracle Matching: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Backward Oracle Matching: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Backward Oracle Matching ===\n\n";
}

/**
 * Chạy thuật toán Galil-Seiferas
 */
function runGalilSeiferas(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Galil-Seiferas ===\n";

    $startTime = microtime(true);
    $result = GalilSeiferas::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000;

    if ($result['exist']) {
        echo "Galil-Seiferas: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Galil-Seiferas: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Galil-Seiferas: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Galil-Seiferas ===\n\n";
}

/**
 * Chạy thuật toán Search with Automaton
 */
function runSearchWithAutomaton(string $source, string $target): void
{
    echo "=== Bắt đầu thuật toán Search with Automaton ===\n";

    $startTime = microtime(true);
    $result = SearchWithAutomaton::search($source, $target);
    $endTime = microtime(true);

    $executionTime = ($endTime - $startTime) * 1000;

    if ($result['exist']) {
        echo "Search with Automaton: Chuỗi target tồn tại trong chuỗi source, bắt đầu từ vị trí " . $result['index'] . "\n";
    } else {
        echo "Search with Automaton: Chuỗi target không tồn tại trong chuỗi source\n";
    }

    echo "Search with Automaton: Thời gian chạy " . number_format($executionTime, 3) . " ms\n";
    echo "=== Kết thúc thuật toán Search with Automaton ===\n\n";
}

/**
 * Chạy các test bổ sung
 */
function runAdditionalTests(string $source, string $target): void
{
    echo "=== Test bổ sung ===\n";

    // Tìm tất cả vị trí
    $allPositions = BruteForce::searchAll($source, $target);
    echo "Tất cả vị trí tìm thấy: " . (empty($allPositions) ? "Không có" : implode(", ", $allPositions)) . "\n";

    // Đếm số lần xuất hiện
    $count = BruteForce::count($source, $target);
    echo "Số lần xuất hiện: $count\n";

    echo "=== Kết thúc test bổ sung ===\n\n";
}

// Chạy thuật toán chính
runBruteForce($source, $target);

// Chạy thuật toán Alpha-Skip Search
runAlphaSkipSearch($source, $target);

// Chạy thuật toán Boyer-Moore
runBoyerMoore($source, $target);

// Chạy thuật toán Horspool
runHorspool($source, $target);

// Chạy thuật toán Quick Search
runQuickSearch($source, $target);

// Chạy thuật toán KMP
runKMP($source, $target);

// Chạy thuật toán Morris-Pratt
runMorrisPratt($source, $target);

// Chạy thuật toán Karp-Rabin
runKarpRabin($source, $target);

// Chạy thuật toán Shift-Or
runShiftOr($source, $target);

// Chạy thuật toán Raita
runRaita($source, $target);

// Chạy thuật toán Not-So-Naive
runNotSoNaive($source, $target);

// Chạy thuật toán Skip Search
runSkipSearch($source, $target);

// Chạy thuật toán Colussi
runColussi($source, $target);

// Chạy thuật toán Tuned Boyer-Moore
runTunedBoyerMoore($source, $target);

// Chạy thuật toán Reverse Colussi
runReverseColussi($source, $target);

// Chạy thuật toán Galil-Giancarlo
runGalilGiancarlo($source, $target);

// Chạy thuật toán Turbo BM
runTurboBM($source, $target);

// Chạy thuật toán Apostolico-Crochemore
runApostolicoCrochemore($source, $target);

// Chạy thuật toán Apostolico-Giancarlo
runApostolicoGiancarlo($source, $target);

// Chạy thuật toán Zhu-Takaoka
runZhuTakaoka($source, $target);

// Chạy thuật toán Berry-Ravindran
runBerryRavindran($source, $target);

// Chạy thuật toán Smith
runSmith($source, $target);

// Chạy thuật toán KMP Skip Search
runKmpSkipSearch($source, $target);

// Chạy thuật toán Optimal Mismatch
runOptimalMismatch($source, $target);

// Chạy thuật toán Maximal Shift
runMaximalShift($source, $target);

// Chạy thuật toán Simon
runSimon($source, $target);

// Chạy thuật toán String Matching on Ordered Alphabets
runStringMatchingOnOrderedAlphabets($source, $target);

// Chạy thuật toán Two Way
runTwoWay($source, $target);

// Chạy thuật toán Reverse Factor
runReverseFactor($source, $target);

// Chạy thuật toán Turbo Reverse Factor
runTurboReverseFactor($source, $target);

// Chạy thuật toán Forward DAWG Matching
runForwardDAWGMatching($source, $target);

// Chạy thuật toán Backward Oracle Matching
runBackwardOracleMatching($source, $target);

// Chạy thuật toán Galil-Seiferas
runGalilSeiferas($source, $target);

// Chạy thuật toán Search with Automaton
runSearchWithAutomaton($source, $target);

// Chạy test bổ sung
runAdditionalTests($source, $target);

// Ví dụ demo
echo "=== Demo với dữ liệu mẫu ===\n";
$demoSource = "hello world programming";
$demoTarget = "world";

echo "Source: '$demoSource'\n";
echo "Target: '$demoTarget'\n\n";

runBruteForce($demoSource, $demoTarget);
runAdditionalTests($demoSource, $demoTarget);

echo "Kết thúc chương trình PHP\n";
