// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForThree(arr) {
    tempArr = [];
    tempArr = arr.filter(element => element === 3);

    if (tempArr.length > 0) {
        return console.log(`The array contains the number 3`);
    } else {
        return console.log(`The array does not contain the number 3`);
    }
}

console.log('My attempted answers:');
checkForThree(numbers1);
checkForThree(numbers2);
checkForThree(numbers3);

// The easier 'correct' answer from LaunchSchool

console.log('');
console.log('LaunchSchool Answers:');

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));