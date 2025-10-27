const ZhuTakaoka = require('./algorithms/zhuTakaoka');
const BerryRavindran = require('./algorithms/berryRavindran');
const Smith = require('./algorithms/smith');

const source = 'The quick brown fox jumps over the lazy dog. String matching is a fundamental problem in computer science. It involves finding occurrences of a pattern within a text. Many algorithms have been developed to solve this problem efficiently. The Boyer-Moore algorithm is one of the most popular string matching algorithms. It uses two heuristics: the bad character rule and the good suffix rule. These heuristics allow the algorithm to skip characters in the text, making it faster than naive approaches. The Knuth-Morris-Pratt algorithm is another important string matching algorithm. It uses a failure function to avoid unnecessary comparisons. The Rabin-Karp algorithm uses hashing to speed up the matching process. Each algorithm has its own advantages and disadvantages. The choice of algorithm depends on the specific requirements of the application. For example, if the pattern is very long, the Boyer-Moore algorithm might be more efficient. If the pattern is short, a simpler algorithm might be sufficient. String matching algorithms are used in many applications, including text editors, search engines, and bioinformatics. Understanding these algorithms is important for any programmer who works with text processing. The performance of string matching algorithms can be measured in terms of time complexity and space complexity. Most modern string matching algorithms have a time complexity of O(n+m), where n is the length of the text and m is the length of the pattern. This is much better than the naive approach, which has a time complexity of O(n*m). The space complexity of most algorithms is O(m) or O(m+sigma), where sigma is the size of the alphabet. Some algorithms, like the Boyer-Moore algorithm, have a space complexity of O(m+sigma). Others, like the Knuth-Morris-Pratt algorithm, have a space complexity of O(m). The choice of algorithm should consider both time and space complexity. In practice, the Boyer-Moore algorithm is often the fastest for most applications. However, the Knuth-Morris-Pratt algorithm is more predictable in terms of performance. The Rabin-Karp algorithm is useful when multiple patterns need to be searched for in the same text. String matching is a rich field with many interesting algorithms and techniques. Researchers continue to develop new algorithms and improve existing ones. The study of string matching algorithms is an important part of computer science education. It teaches fundamental concepts like dynamic programming, hashing, and automata theory. These concepts are useful in many other areas of computer science. String matching algorithms are also used in DNA sequence analysis and other bioinformatics applications. The field of string matching continues to evolve with new challenges and opportunities. As computers become faster and more powerful, new algorithms and techniques are being developed to handle larger and more complex data. The future of string matching algorithms is bright, with many exciting developments on the horizon.';
const target = 'comparisons';

console.log('=== Testing Zhu-Takaoka ===');
const result1 = ZhuTakaoka.search(source, target);
console.log('Zhu-Takaoka: ' + (result1.exist ? 'Found at ' + result1.index : 'Not found'));

console.log('\n=== Testing Berry-Ravindran ===');
const result2 = BerryRavindran.search(source, target);
console.log('Berry-Ravindran: ' + (result2.exist ? 'Found at ' + result2.index : 'Not found'));

console.log('\n=== Testing Smith ===');
const result3 = Smith.search(source, target);
console.log('Smith: ' + (result3.exist ? 'Found at ' + result3.index : 'Not found'));

