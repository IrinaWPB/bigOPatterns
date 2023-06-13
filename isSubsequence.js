// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.isSubsequence('hello', 'hello world'); // true

function isSubsequence(subString, string) {
  let subIndex = 0
  let strIndex = 0
  while (strIndex < string.length) {
    if (string[strIndex] === subString[subIndex]) {
      subIndex ++
    }
    if (subIndex === subString.length) return true
    strIndex ++
  }
  return false
}
console.log(isSubsequence('hello', 'hello world')); // true)
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)