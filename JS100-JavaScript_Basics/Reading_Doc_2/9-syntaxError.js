// The below code raises a SyntaxError. If you run the code, you'll see the following error message:
// SytaxError: Unexpected token &&
// Find and read the documentation about this error on MDN. Then, fix the code.

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
    console.log('"People are so bad at driving cars ' + 
    'that conputers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token
// The JavaScript exceptions "unexpected token" occur when a specific language construct was expected, but something else was provided.
// In this case an argument was already passed to the if statement in parenthesis. This fulfilled the requirement for the if statement
// and the program expected the start of the next argument, but it encountered '&&'
// To fix this, an extra set of parenthesis was put around the whole argument so that the program did not thing that the first set of parenthesis
// was all that the if statement was testing for