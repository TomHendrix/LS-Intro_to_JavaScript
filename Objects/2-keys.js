// Which of the following  values are valid keys for an object?
// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'

// Solution:
// All the values listed are valid keys. Note, though, that JavaScript coerces the non-string key values to strings. Given the listed values, 1 and '1' represent the same key,
// as do true and 'true'. The equivalency will bite you at some point; it's inevitable, so be ready

let myObj = {};
myObj[true] = 'hello';
myObj['true'] = 'world';
console.log(myObj[true]);