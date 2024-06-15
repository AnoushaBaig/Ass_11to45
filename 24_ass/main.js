"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
let message1 = "Hello";
let message2 = "World";
console.log(message1 === message2);
console.log(message1 !== message2);
// Tests using the lower case function
const myName = "ANOUSHA";
const myName2 = "anousha";
console.log(myName.toLowerCase() === myName2);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const myNumber = 10;
const myNumber2 = 20;
console.log(myNumber === myNumber2);
console.log(myNumber !== myNumber2);
console.log(myNumber < myNumber2);
console.log(myNumber > myNumber2);
console.log(myNumber >= myNumber2);
console.log(myNumber <= myNumber2);
//  Tests using "and" and "or" operators
const a = 10;
const b = 20;
const c = 30;
console.log(a < b && b < c);
console.log(a > b || b < c);
//  Test whether an item is in a array
const number = [1, 2, 3, 4, 5, 6];
const number2 = 3;
console.log(number.indexOf(number2) !== -2);
// Test whether an item is not in a array
console.log(number.indexOf(10) === -1);
