//given 2 strings check if they are anagrams

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false
  const obj1 = getFrequencies(str1)
  const obj2 = getFrequencies(str2)
  for (let char in obj1) {
    if ((!obj2[char]) || (obj1[char] !== obj2[char])) return false
  }
  return true
}

function getFrequencies(str) {
  const obj = {}
  for (let char of str) {
    obj[char] = (obj[char] + 1) || 1
  }
  return obj
}

console.log(validAnagram("", ""))
console.log(validAnagram("aaz", "zza"))
console.log(validAnagram("anagram", "nagaram"))
