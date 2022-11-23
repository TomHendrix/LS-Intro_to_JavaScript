//Exercise 4 - Explain why the code logs '510' instead of 15.
console.log('5' + 10);

//The code logs 510 because '5' is a string. An expression that has a string operand
//produces a string result no matter what the other operand is. The number 10 gets
//coerced to a String and then get concatenated to the String '5' which produced '510'


//Exercise 5 - Refactor the code from the previous exercise to use explicit coercion, so that it logs 15 instead.
console.log(Number('5') + 10);