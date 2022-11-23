// Use object literal sytax (e.g., { key: value, ...} notation) to create an object that behaves as an array in a for statement.
// The object should contains at least 3 elements. You should place your code between the braces in the let statement:
// Hint: arrays use prositive integers starting with 0 as indexes. An array must also have a length property.

let myArray = {
    0 : 'index 0',
    1 : 'index 1',
    2 : 'index 2',
    3 : 'index 3',
    length : 4,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Our array-like object isnt a prefect mimic of a JS array, however. In particular, it doesnt modify the length property
// when you add or delete elements. It also doesnt support methods like forEach, filter, and push.