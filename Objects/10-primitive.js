// How many primitive values are there is the following expression? Identify them. How many objects are there in the expression? Identify those objects.

let example = [1, 2, ["a", ["b", false]], null, {}];

let rearranged = [
    1, //---------------------- Primitive: number
    2, //---------------------- Primitive: number
    ["a", ["b", false]], //---- Object: array ----- items in the array are [string, [array2]] and items in array2 are [string, boolean]
    null, //------------------- Primitive: null
    {} //---------------------- Object: empty object
];

/*
Total:
Primitive: 6 = 
    1 
    2 
    "a" 
    "b" 
    false 
    null
Objects: 4 = 
    [1, 2, ["a", ["b", false]], null, {}]
    ["a", ["b", false]]
    ["b", false]
    {}
*/