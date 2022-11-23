let rlSync = require('readline-sync');

function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log('The given number is even');
    } else {
        console.log('The given number is odd');
    }
}

let num = Number(rlSync.question("Please enter a number: "));

if (Number.isInteger(num) === true) {
    evenOrOdd(num);
} else {
    console.log('You did not enter a number');
}
