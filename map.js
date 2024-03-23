// Square Root of a given Array
// let arr = [25,36,49,64,81];

// let arrSqr = arr.map((curElem) => { return Math.sqrt(curElem)});
// console.log(arr);
// console.log(arrSqr);


// Return the value which is greater the 10 after multipling the given array by 2
let array = [2,3,4,6,8]

let newarray = array.map((curElem) => { return curElem * 2}).filter((curElem) => { return curElem > 10;})
console.log(array);
console.log(newarray);