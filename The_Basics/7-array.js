//Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:
let foo = ['a', 'b', 'c'];
console.log(foo.length); // => 3
console.log(foo[3]); // Will this result in an error

//No, the index value of 3 does not exist because the array extends from index 0 to index 2
//The result for [3] will be undefined
//[0] = 'a'
//[1] = 'b'
//[2] = 'c'
//[3] = undefined
//[4] = undefined

