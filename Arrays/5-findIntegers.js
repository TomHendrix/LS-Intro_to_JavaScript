// Write a findIntegers function that takes an array argument and returns an arry that contains on the integers from the input array. Use the filter method in your function

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);

// Whoops... didnt read and didn't use the filter method in my function
/*
function findIntegers(arr) {
    for (i = 0; i < arr.length; i += 1){
        if (Number.isInteger(arr[i])) {
            integers.push(arr[i]);
        }
    }
}
*/

function findIntegers(array) {
    return array.filter(function(element) {
        return Number.isInteger(element);
    });
}