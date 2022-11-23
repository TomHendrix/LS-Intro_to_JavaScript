// What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

/*
trees[trees.length - 1]; // Returns the last element of the array (length of 4 - 1 = 3. Value at index 3): 'palm tree'
trees.pop(); // Removes the last element of the array - Returns the element that is removed: 'palm tree'
trees[trees.length - 1]; //Returns the new last element in the array (length 3 - 1 = 2. Value at index 2): 'sequoia'
*/

// Code above commented out so that it can be printed to the console in order below:
console.log(trees[trees.length - 1]);
console.log(trees.pop());
console.log(trees[trees.length - 1]);

// The last index in an array will always be arry.length - 1. This is because arrays use zero-based indexing.