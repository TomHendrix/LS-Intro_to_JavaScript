//Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);