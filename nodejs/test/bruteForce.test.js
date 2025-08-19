const BruteForce = require('../algorithms/bruteForce');

/**
 * Simple test runner for Brute Force algorithm
 */

class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }
    
    test(name, testFunction) {
        this.tests.push({ name, testFunction });
    }
    
    assertEqual(actual, expected, message = '') {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
            throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}. ${message}`);
        }
    }
    
    run() {
        console.log('🧪 Running Brute Force Tests...\n');
        
        for (const { name, testFunction } of this.tests) {
            try {
                testFunction();
                console.log(`✅ ${name}`);
                this.passed++;
            } catch (error) {
                console.log(`❌ ${name}: ${error.message}`);
                this.failed++;
            }
        }
        
        console.log(`\n📊 Test Results: ${this.passed} passed, ${this.failed} failed`);
        
        if (this.failed === 0) {
            console.log('🎉 All tests passed!');
        }
    }
}

// Create test runner
const runner = new TestRunner();

// Test cases
runner.test('Basic search - found', () => {
    const result = BruteForce.search('hello world', 'world');
    runner.assertEqual(result, { exist: true, index: 6 });
});

runner.test('Basic search - not found', () => {
    const result = BruteForce.search('hello world', 'xyz');
    runner.assertEqual(result, { exist: false, index: -1 });
});

runner.test('Empty target', () => {
    const result = BruteForce.search('hello', '');
    runner.assertEqual(result, { exist: true, index: 0 });
});

runner.test('Target longer than source', () => {
    const result = BruteForce.search('hi', 'hello');
    runner.assertEqual(result, { exist: false, index: -1 });
});

runner.test('Exact match', () => {
    const result = BruteForce.search('test', 'test');
    runner.assertEqual(result, { exist: true, index: 0 });
});

runner.test('Search at beginning', () => {
    const result = BruteForce.search('programming', 'prog');
    runner.assertEqual(result, { exist: true, index: 0 });
});

runner.test('Search at end', () => {
    const result = BruteForce.search('programming', 'ming');
    runner.assertEqual(result, { exist: true, index: 7 });
});

runner.test('Search all positions', () => {
    const result = BruteForce.searchAll('abababab', 'ab');
    runner.assertEqual(result, [0, 2, 4, 6]);
});

runner.test('Search all - no matches', () => {
    const result = BruteForce.searchAll('hello', 'xyz');
    runner.assertEqual(result, []);
});

runner.test('Count occurrences', () => {
    const result = BruteForce.count('abababab', 'ab');
    runner.assertEqual(result, 4);
});

runner.test('Count - no occurrences', () => {
    const result = BruteForce.count('hello', 'xyz');
    runner.assertEqual(result, 0);
});

runner.test('Overlapping patterns', () => {
    const result = BruteForce.searchAll('aaaa', 'aa');
    runner.assertEqual(result, [0, 1, 2]);
});

runner.test('Single character search', () => {
    const result = BruteForce.search('hello', 'l');
    runner.assertEqual(result, { exist: true, index: 2 });
});

runner.test('Case sensitive search', () => {
    const result = BruteForce.search('Hello', 'hello');
    runner.assertEqual(result, { exist: false, index: -1 });
});

runner.test('Progress callback test', () => {
    let progressCalls = 0;
    const result = BruteForce.searchWithProgress('hello world', 'world', () => {
        progressCalls++;
    });
    
    runner.assertEqual(result, { exist: true, index: 6 });
    // Should call progress callback for each position checked
    runner.assertEqual(progressCalls > 0, true, 'Progress callback should be called');
});

// Run all tests
runner.run();
