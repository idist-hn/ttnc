<?php

require_once 'algorithms/BruteForce.php';
require_once 'algorithms/ForwardDAWGMatching.php';
require_once 'algorithms/BackwardOracleMatching.php';
require_once 'algorithms/GalilSeiferas.php';
require_once 'algorithms/SearchWithAutomaton.php';

use Algorithms\BruteForce;
use Algorithms\ForwardDAWGMatching;
use Algorithms\BackwardOracleMatching;
use Algorithms\GalilSeiferas;
use Algorithms\SearchWithAutomaton;

$source = "String matching algorithms are fundamental components in computer science and software engineering. The Boyer-Moore algorithm uses bad character and good suffix heuristics to skip characters efficiently during pattern matching. The Knuth-Morris-Pratt algorithm preprocesses the pattern to create a failure function that avoids unnecessary character comparisons. Alpha-Skip Search combines the best features of both approaches, using a skip table to jump over impossible match positions. These algorithms significantly outperform naive brute force methods, especially when dealing with large text documents or when the pattern occurs infrequently in the source text.";

$target = "comparisons";

echo "Source: $source\n";
echo "Target: $target\n\n";

// Test Forward DAWG Matching
echo "=== Forward DAWG Matching ===\n";
$result = ForwardDAWGMatching::search($source, $target);
echo "Result: " . ($result['exist'] ? "Found at position " . $result['index'] : "Not found") . "\n\n";

// Test Backward Oracle Matching
echo "=== Backward Oracle Matching ===\n";
$result = BackwardOracleMatching::search($source, $target);
echo "Result: " . ($result['exist'] ? "Found at position " . $result['index'] : "Not found") . "\n\n";

// Test Galil-Seiferas
echo "=== Galil-Seiferas ===\n";
$result = GalilSeiferas::search($source, $target);
echo "Result: " . ($result['exist'] ? "Found at position " . $result['index'] : "Not found") . "\n\n";

// Test Search with Automaton
echo "=== Search with Automaton ===\n";
$result = SearchWithAutomaton::search($source, $target);
echo "Result: " . ($result['exist'] ? "Found at position " . $result['index'] : "Not found") . "\n\n";

echo "All tests completed!\n";

