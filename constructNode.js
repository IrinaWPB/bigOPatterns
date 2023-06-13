//Write a function called constructNote, which accepts two strings, a message and some letters. 
//The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

function constructNote(message, letters) {
  if (message.length > letters.length) return false
  const messageObj = getFrequencies(message)
  const lettersObj = getFrequencies(letters)
  for (let char in messageObj) {
    if ((!lettersObj[char]) || (lettersObj[char] < messageObj[char])) return false
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
  
console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) //true