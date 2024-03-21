// Fat Arrow Function
const sum = () => {
    let a = 5; b = 6;
    let sum = a + b;
    return `Sum = ${sum}`
}
console.log(sum());

// Simgle Line Fat Arrow Function
const total = () => `Sum of two numbers is ${(a = 5) + (b = 6)}`;
console.log(total());