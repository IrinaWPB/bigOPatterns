// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

function separatePositive(arr) {
  let index = 0
  let count = 0
  while (count < arr.length ) {
    if (arr[index] < 0) {
      const negative = arr[index]
      arr.splice(index, 1)
      arr.push(negative)
    } else {
      index++
    }
    count ++
  }
  return arr
}

separatePositive([2,4,-4,-3,3,2])
separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]