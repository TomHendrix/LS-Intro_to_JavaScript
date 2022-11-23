// What does the code output to the console?

function isArrayEmpty(arr) {
    if (arr) {
        console.log('Not Empty');
    } else {
        console.log('Empty');
    }
}

isArrayEmpty([]);

// The output is 'Not Empty' since, while the array is empty -- it has no elements and the 'length' property is '0' -- it isnt fasly
// Thus, JavaScript execustes the first branch of the if statement