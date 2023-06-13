// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  const str1 = num1.toString()
  const str2 = num2.toString()
  if (str1.length !== str2.length) return false
  const obj1 = getFrequencies(str1)
  const obj2 = getFrequencies(str2)
  for (let digit in obj1) {
    if ((!obj2[digit]) || (obj1[digit] !== obj2[digit])) return false
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

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false 