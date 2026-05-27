// Given an array of numbers, print each number multiplied by 2.

const arr = [1,2,3]
const ans = arr.forEach((val) => val*2)
console.log(ans);
//incorrect

//key takeaway: forEach() never returns a new array.

//correct
const arr2 = [1,2,3]
arr2.forEach(val =>console.log(val*2))
