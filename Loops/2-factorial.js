// Write a function that computes and returns the factorial of a number by using a for loop.
// The factorial of a positive integer 'n', signified by 'n!', is defined as the product of all integers between 1 and n, inclusive
// 1! = 1 = 1
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24

let rlSync = require('readline-sync');

function factorial(number) {
    let factorialTotal = 1;

    for (let counter = number; counter > 0 ; counter -= 1) {
        factorialTotal *= counter;
    }

    return factorialTotal;
}

let givenNumber = Number(rlSync.question('Please enter a number: '));

console.log(factorial(givenNumber));