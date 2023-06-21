let numbers = [3, 5, 8, 9, 2];

// Old way
function multiplyByTwo(number){
    return number * 2;
}

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers);              // prints out: 6, 10, 16, 18, 4

// Using ES6 arrow functions
const multiplyByTwo2 = number => number * 2;

let multiplyNumbers = numbers.map(multiplyByTwo2);

console.log(multiplyNumbers);              // prints out: 6, 10, 16, 18, 4