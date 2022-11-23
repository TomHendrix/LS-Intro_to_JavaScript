// Look up the MDN decumentation for the typeof operator. What is its return value? Determine what the following statements will return:

typeof 23.5; // number
typeof 'Call me Ishmael.'; // string
typeof false; // boolean
typeof 0; // number
typeof null; // object -- this is a bug in JavaScript
typeof undefined; // undefined

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// Typeof returns a string indicating the type of the operand's value.

console.log(typeof 23.5);
console.log(typeof 'Call me Ishmael.');
console.log(typeof false);
console.log(typeof 0);
console.log(typeof null);
console.log(typeof undefined);
