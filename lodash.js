// Lodash
//
// Write a simple program that makes use of lodash's shuffle function.
// Look through the lodash documentation for another function that is interesting to you, write a program that makes use of it.


// Lodash shuffle
const _ = require("lodash");

let fruits = ["Apple", "Banana", "Orange", "Pear", "Pineapple", "Strawberry"];
let shuffledFruits = _.shuffle(fruits);

console.log("Fruits array: ", fruits);
console.log("Shuffled fruits array: ", shuffledFruits);

// Lodash remove (code below removes even numbers)
let array = [1, 2, 3, 4];
console.log("Numbers array: ", array);

let evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log("Just the even numbers: ", evens);
console.log("Numbers array after removing even numbers: ", array);
