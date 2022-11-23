// This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.
// Write a function similar to the oddLengths function from Exercise 6, but dont use map or filter.
// Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// Hint: Use an array as the accumulator. Ideally, you should be able to use the reutn value of reduce as the return value of the function.

function oddLengths(array) {
    return array.reduce((filteredNumbers, element) => {
        
        let length = element.length;
        
        if (length % 2 === 1) {
            filteredNumbers.push(length);
        }

        return filteredNumbers;

    }, []);
}