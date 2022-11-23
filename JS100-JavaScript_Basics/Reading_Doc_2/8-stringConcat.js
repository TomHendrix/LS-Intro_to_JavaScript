// Find out how we can join two or more string together

console.log("String" + " " + "Concatenation");

// The "+" operator can be used to join strings together
// Alternatively, the concat() method can be used 

let string1 = "Max";
let string2 = "Verstappen";

console.log(string1.concat(' ', string2));
console.log(string2.concat(', ', string1));
console.log(''.concat(string1, ' ', string2));
