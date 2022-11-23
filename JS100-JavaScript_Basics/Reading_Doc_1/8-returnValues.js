// Consider the following code snippet:

let tweet = "I'm learning to program! Wooooot :-) #javascript #launchscool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

// What will the following statements return?

typeof tweet; // string
typeof words; // object - array
typeof isValid; // boolean

console.log(typeof tweet);
console.log(typeof words);
console.log(typeof isValid);
