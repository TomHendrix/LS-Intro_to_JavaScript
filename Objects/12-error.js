// Consider the following code:

function foo(bar) {
    console.log(bar, bar, bar);
}

//Added the line below this comment
let bar = foo;

foo("Hello"); // should print 'hello hello hello'
bar("Hi"); // should print 'hi hi hi'

// As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code to work as intended


