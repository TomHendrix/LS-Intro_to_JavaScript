// What does the following program log to the console? Why?

let foo = {
    a: 'hello',
    b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // => 'hi'  ---- maskes enough since. It is reassinged in line 11
console.log(qux); // => 'hello' ---- the variable is reassigned in line 12, but the original string isnt mutated

//Objects are mutable, strings and other primitives are not
// string qux is not mutable because it is passed as an argument in the function. If the function had
//qux = 'hi' instead, then it would reassign the varaible

