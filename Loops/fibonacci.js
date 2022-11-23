// Fibonacci Sequence: Each number is this sequence is the sum of the previous two numbers in the sequence:
// fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

//let rlSync = require('readline-sync');

function fibonacci(number) {
    if (number < 2 ) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(20));

//let response = Number(rlSync.question("Enter a number in the Fibonacci sequence: "));

//fibonacci(response);