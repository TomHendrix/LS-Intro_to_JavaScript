let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
let filteredNumbers = [];

filteredNumbers = numbers.filter(num => num > 4)

console.log('Filtered array');
console.log(filteredNumbers);

console.log('\n Original array');
console.log(numbers);