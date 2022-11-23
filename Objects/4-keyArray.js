// Create an array from the keys of the object obj below, with all of they keys converted to uppercase.
// Your implementation must not mutate obj.

let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let keyArray = Object.keys(obj);

let upperKey = keyArray.map(key => key.toUpperCase());

console.log(upperKey);
console.log(obj);