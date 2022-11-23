// Run the following code

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
    console.log('Tweet is too long!');
}

// You will see that it raises an error:
// TypeError: tweet.length is not a function
// Check the documentation for both TypeError and length, in order to figure out what causes the error

// Simply remove the parenthesis at the end of length. This is because it is a string property, not a string method.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length