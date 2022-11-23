// The following code uses a 'randomNumberBetween' functio nto generate a number between its first and second arguments. It uses a while to to try
// and generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10.
// Do not chnge the arguements you pass to randomNumberBetween.

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
    result = randomNumberBetween(1, 6);
    tries += 1;
}
*/

let goal = 3;
let tries = 0;
let result;

do {
    result = randomNumberBetween(1, 6);
    tries += 1;
} while (result <= goal);



console.log('It took ' + String(tries) + ' tries to get a number greater than ' + String(goal));