// Original method - Running through the array more than once with the push method results in continually adding more and more values to the array
// The array needs to be cleared each time to prevent from continually adding more varaibles to it
let numbers = [1, 2, 3 ,4];
let squares = [];

numbers.forEach(num => squares.push(num * num));
console.log('Push Iteration 1');
console.log(squares);
console.log(numbers);

numbers.forEach(num => squares.push(num * num));
console.log('Push Iteration 2');
console.log(squares);
console.log(numbers);

// map can be used instead of push. Map returns a new array that contains one element for each element in numbers

let squaresMap = [];
squaresMap = numbers.map(num => num * num);
console.log('Map Iteration 1')
console.log(squaresMap);