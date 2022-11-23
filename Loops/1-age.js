//Write a program named 'age.js' that includes someone's age and then calculates and reports the future age in 10, 20, 30, and 40 years.
//Below is the output for someone 20 years old.
//You are 20 years old.
//In 10 years, you will be 30 years old.
//In 20 years, you will be 40 years old.
//In 30 years, you will be 50 years old.
//In 40 years, you will be 60 years old.

//Modify the age.js program you wrote in the exercises for the Input/Output chapter. The update code should use a for loop to display the future ages.

let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));

console.log(`You are currently ${age} years old.`)

for (index = 10; index <= 40; index += 10) {
    console.log(`In ${index} years, you will be ${index + age} years old.`);
}

/*
console.log(`You are currently ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
*/