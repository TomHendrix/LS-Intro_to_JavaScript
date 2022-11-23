// How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

// It expects either 0 or 1 arguemnt. The argument passed to the join() method is the separator you want the method to use to join together
// elements in an array. If nothing is passed to the method, then all of the elements will be joined together using a comma
// Any excess arguments are ignored

let a = ["Wind", "Water", "Fire"];
console.log(a.join()); // 'Wind,Water,Fire'
console.log(a.join(", ")); // 'Wind, Water, Fire'
console.log(a.join(" + ")); // 'Wind + Water + Fire'
console.log(a.join("")); // 'WindWaterFire'
console.log(a.join(", ", "I'm ignored")); // 'Wind, Water, Fire'