// Reduce Method
// It is used to flatten an array to convert 3d or 2d array into 1d array.
// Introduced in ES20
// The reduce() method executes a reducer function  (that you provide) on each element of the array, resulting in single output value.
// The reducer function takes 4 arguments: Accumulator, Current Value, Current Index, Source Array.

// Sum of an array
let arr = [3,5,7]
let sum = arr.reduce((accumulator, curElem, index, arr) => { debugger;return accumulator += curElem; },10);
console.log(sum);