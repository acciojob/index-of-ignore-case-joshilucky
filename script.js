function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}

// Test Cases
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
console.log(indexOfIgnoreCase("test", "aaa"));          // -1
console.log(indexOfIgnoreCase("", "a"));                // -1
console.log(indexOfIgnoreCase("abc", ""));              // 0 (JS behavior)
