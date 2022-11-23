// Identify all of the variables, object property names, primitive values, and objects shown in the following code
// Assume the code has not been executed
// Dont panic if you miss a few items - this exercise is more challenging than it looks 

function hello(greeting, name) {
    return greeting + ' ' + name;
}

function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/* Solution
Variables:
    hello
    xyzzy
    greeting
    name
    howdy
    foo

Property Names:
    a
    b
    c
    d
    ** Index arrays are property names, so 0, 1, and 2 are property names for the [3, 4 , 5]

Primitive Values:
    ' '
    1
    2
    3
    4
    5
    'Hi'
    'Grace'
    * Property names are usually strings, and strings are primitive values*
    a
    b
    c
    d
    0
    1
    2

Objects:
    hello
    xyzzy
    { a: 1, b: 2, c: [3, 4, 5], d: {} }
    [3, 4, 5]
    {}

Since we didnt run the code, 'Hi Grace' is not one of the primitive values in this code. The primitive wont be created until we run the code.
*/