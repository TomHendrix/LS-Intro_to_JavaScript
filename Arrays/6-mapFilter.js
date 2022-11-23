// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLength(arr));

function oddLength(array) {
    let lengthArray = [];
    let oddLengths = [];

    lengthArray = array.map(element => element.length);
    oddLengths = lengthArray.filter(element => element % 2 === 1);

    return oddLengths;
}