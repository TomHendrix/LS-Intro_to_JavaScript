// In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how.
// Take a look at the MDN documentation on equality comparisons to read about how == and === differ

'8' == 8; // TRUE - The result is truthy because JavaScript coerces the number to a string.
'8' === 8; // FALSE - the result is false because one is a number and the other is a string.

// === looks for absolute equality: content and type must match exactly
// == looks for truthy equality: content must match. Javascript will attempt to coerce the type to see if the values match

console.log('8' == 8);
console.log('8' === 8);
