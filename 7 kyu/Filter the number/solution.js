// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


var filterString = function(value) {
   let numbers= value.replace(/[a-zA-Z]/g,'');
   return parseInt(numbers)
  }

console.log(filterString("123"), 123, 'Just return the numbers');
console.log(filterString("a1b2c3"), 123, 'Just return the numbers');
console.log(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers');