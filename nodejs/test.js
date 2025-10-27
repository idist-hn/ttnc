const ForwardDAWGMatching = require('./algorithms/forwardDAWGMatching');
const BackwardOracleMatching = require('./algorithms/backwardOracleMatching');
const GalilSeiferas = require('./algorithms/galilSeiferas');
const SearchWithAutomaton = require('./algorithms/searchWithAutomaton');

const source = "String matching algorithms are fundamental components in computer science and software engineering. The Boyer-Moore algorithm uses bad character and good suffix heuristics to skip characters efficiently during pattern matching. The Knuth-Morris-Pratt algorithm preprocesses the pattern to create a failure function that avoids unnecessary character comparisons. Alpha-Skip Search combines the best features of both approaches, using a skip table to jump over impossible match positions. These algorithms significantly outperform naive brute force methods, especially when dealing with large text documents or when the pattern occurs infrequently in the source text.";

const target = "comparisons";

console.log("Source:", source);
console.log("Target:", target);
console.log("");

// Test Forward DAWG Matching
console.log("=== Forward DAWG Matching ===");
let result = ForwardDAWGMatching.search(source, target);
console.log("Result:", result.exist ? `Found at position ${result.index}` : "Not found");
console.log("");

// Test Backward Oracle Matching
console.log("=== Backward Oracle Matching ===");
result = BackwardOracleMatching.search(source, target);
console.log("Result:", result.exist ? `Found at position ${result.index}` : "Not found");
console.log("");

// Test Galil-Seiferas
console.log("=== Galil-Seiferas ===");
result = GalilSeiferas.search(source, target);
console.log("Result:", result.exist ? `Found at position ${result.index}` : "Not found");
console.log("");

// Test Search with Automaton
console.log("=== Search with Automaton ===");
result = SearchWithAutomaton.search(source, target);
console.log("Result:", result.exist ? `Found at position ${result.index}` : "Not found");
console.log("");

console.log("All tests completed!");

