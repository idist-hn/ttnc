<?php

require_once __DIR__ . '/../algorithms/BruteForce.php';

use Algorithms\BruteForce;

/**
 * Simple test runner for Brute Force algorithm in PHP
 */
class BruteForceTest
{
    private int $passed = 0;
    private int $failed = 0;
    private array $tests = [];
    
    public function test(string $name, callable $testFunction): void
    {
        $this->tests[] = ['name' => $name, 'function' => $testFunction];
    }
    
    public function assertEqual($actual, $expected, string $message = ''): void
    {
        if ($actual !== $expected) {
            throw new Exception("Expected " . json_encode($expected) . ", got " . json_encode($actual) . ". $message");
        }
    }
    
    public function run(): void
    {
        echo "🧪 Running Brute Force Tests...\n\n";
        
        foreach ($this->tests as $test) {
            try {
                $test['function']();
                echo "✅ {$test['name']}\n";
                $this->passed++;
            } catch (Exception $e) {
                echo "❌ {$test['name']}: {$e->getMessage()}\n";
                $this->failed++;
            }
        }
        
        echo "\n📊 Test Results: {$this->passed} passed, {$this->failed} failed\n";
        
        if ($this->failed === 0) {
            echo "🎉 All tests passed!\n";
        }
    }
}

// Create test runner
$runner = new BruteForceTest();

// Test cases
$runner->test('Basic search - found', function() use ($runner) {
    $result = BruteForce::search('hello world', 'world');
    $runner->assertEqual($result, ['exist' => true, 'index' => 6]);
});

$runner->test('Basic search - not found', function() use ($runner) {
    $result = BruteForce::search('hello world', 'xyz');
    $runner->assertEqual($result, ['exist' => false, 'index' => -1]);
});

$runner->test('Empty target', function() use ($runner) {
    $result = BruteForce::search('hello', '');
    $runner->assertEqual($result, ['exist' => true, 'index' => 0]);
});

$runner->test('Target longer than source', function() use ($runner) {
    $result = BruteForce::search('hi', 'hello');
    $runner->assertEqual($result, ['exist' => false, 'index' => -1]);
});

$runner->test('Exact match', function() use ($runner) {
    $result = BruteForce::search('test', 'test');
    $runner->assertEqual($result, ['exist' => true, 'index' => 0]);
});

$runner->test('Search at beginning', function() use ($runner) {
    $result = BruteForce::search('programming', 'prog');
    $runner->assertEqual($result, ['exist' => true, 'index' => 0]);
});

$runner->test('Search at end', function() use ($runner) {
    $result = BruteForce::search('programming', 'ming');
    $runner->assertEqual($result, ['exist' => true, 'index' => 7]);
});

$runner->test('Search all positions', function() use ($runner) {
    $result = BruteForce::searchAll('abababab', 'ab');
    $runner->assertEqual($result, [0, 2, 4, 6]);
});

$runner->test('Search all - no matches', function() use ($runner) {
    $result = BruteForce::searchAll('hello', 'xyz');
    $runner->assertEqual($result, []);
});

$runner->test('Count occurrences', function() use ($runner) {
    $result = BruteForce::count('abababab', 'ab');
    $runner->assertEqual($result, 4);
});

$runner->test('Count - no occurrences', function() use ($runner) {
    $result = BruteForce::count('hello', 'xyz');
    $runner->assertEqual($result, 0);
});

$runner->test('Overlapping patterns', function() use ($runner) {
    $result = BruteForce::searchAll('aaaa', 'aa');
    $runner->assertEqual($result, [0, 1, 2]);
});

$runner->test('Single character search', function() use ($runner) {
    $result = BruteForce::search('hello', 'l');
    $runner->assertEqual($result, ['exist' => true, 'index' => 2]);
});

$runner->test('Case sensitive search', function() use ($runner) {
    $result = BruteForce::search('Hello', 'hello');
    $runner->assertEqual($result, ['exist' => false, 'index' => -1]);
});

$runner->test('Unicode support', function() use ($runner) {
    $result = BruteForce::search('Xin chào thế giới', 'chào');
    $runner->assertEqual($result, ['exist' => true, 'index' => 4]);
});

$runner->test('Special characters', function() use ($runner) {
    $result = BruteForce::search('test@example.com', '@example');
    $runner->assertEqual($result, ['exist' => true, 'index' => 4]);
});

// Run all tests
$runner->run();
