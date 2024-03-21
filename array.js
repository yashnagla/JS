var myFriend = ["Yash", "ramesh", "arjun", "viahal"];

// Length Property
// console.log(myFriend.length);

// Traversal in Array
// console.log(myFriend[1]);

// For Loop
// for(var i = 0; i < myFriend.length; i++){
//     console.log(myFriend[i]);
// }

// For In Loop
// for(let elements in myFriend){
//     console.log(elements);
// }

// For In Loop
// for(let elements of myFriend){
//     console.log(elements);
// }

// For Each Loop
// myFriend.forEach(function (element, index, array){
//     console.log(`${index} : ${element} => ${array}`);
// });

// For Each Loop using Fat Arrow Function
// myFriend.forEach((element, index, array) => {
//     console.log(`${index} : ${element} => ${array}`);
// });

// Array IndexOf
// console.log(myFriend.indexOf("Yash",2)); // Returns the first occurrence of Yash after position 2 or -1 if not found.

// Array LastIndexOf
// console.log(myFriend.lastIndexOf("Yash",3)); // it will return -1 because we are searching Yash from the first position and last

// Array Includes
// console.log(myFriend.includes("Rahul"));
// console.log(myFriend.includes("Yash"));

// Filtration in Array
const price = [100, 200, 300, 400, 500]
const result = price.filter(checkPrice);
function checkPrice(price){
    return price <= 400;
}
console.log(result);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);