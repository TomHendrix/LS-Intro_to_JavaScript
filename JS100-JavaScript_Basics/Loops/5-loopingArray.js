// Using the code below as a starting point, write a while loop that logs the elements of array at each index,
// and terminates after logging the last element of the array

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
    console.log(array[index]);
    index += 1;
}

// Further exploration: What would the code output if array was empty? Why is that?
// Nothing as the index is never smaller than array.length (0). The while loop never executes and nothing is printed to the console.
