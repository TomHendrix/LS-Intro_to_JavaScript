// Given the following tweet:

let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What will the following statements evaluate to?

tweet.split(' ');
// This first statement will split the string at each space (' ') and return each new string as an element in an array

tweet.split(' ').reverse();
// This second statement will take the newly created array and reverse the order of the element in the array

tweet.split(' ').reverse().join(' ');
// This third statement will join all of the elements of the array back together and add a space (' ') between each element of the array that is joined

// Reference the documentation to learn about the return value of each method

console.log(tweet.split(' '));
console.log(tweet.split(' ').reverse());
console.log(tweet.split(' ').reverse().join(' '));
