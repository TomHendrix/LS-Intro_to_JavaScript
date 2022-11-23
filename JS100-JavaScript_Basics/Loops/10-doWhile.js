// What is the difference between the following two code snippets? Check the MDN documentation on 'while' and 'do...while'

// Snippet 1
console.log('Snippet 1');
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// A while loop checks the conditions before performing the first loop. The counter does not meet the conditions of the while loop,
// so nothing will be printed to the console

// Snippet 2
console.log('Snippet 2');
let counter2 = 0;

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);

// A do...while loop performs the first iteration before checking the condition at the end to determine whether or not to iterate through again
// The do...while loop will print 'Wooooot!' before checking whether or not the conditions to interate again are met - they aren't and the loop stops.