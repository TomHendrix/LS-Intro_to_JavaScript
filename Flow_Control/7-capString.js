// Write a function that takes a string as an argument and returns an all-caps version of the string when it is longer than 10 characters.
// Otherwise, it should return the original strong.
// Example: change 'hello world' to 'HELLO WORLD', but dont change 'goodbye'

let rlSync = require('readline-sync');

function capString(chars) {
    if (chars.length > 10) {
        console.log(chars.toUpperCase());
        //return chars.toUpperCase(); //Alternate return instead of console.log()
    } else {
        console.log(chars);
        //return chars; //Alternate return instead of console.log()
    }
}

let givenString = rlSync.question("Please provide a string to analyze: ");

capString(givenString);