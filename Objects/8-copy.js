// Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of they 
// keys that you want to copy. Do not mutate the original object.
// The function should let you omit the array of keys argument when calling the function. If you do not omit the argument, the function should copy 
// all of the existing keys from the object

let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
};
  
let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }
  
let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj(obj, arr) {
    tempObj = {};
    
    if (arr) {
        arr.forEach(function(key) {
            tempObj[key] = obj[key];
        });

    } else {
        //return obj; ---- This 'works' but doesnt necessarily accomplish what we want. It returns the original object, not the new object that is an exact copy
        Object.assign(tempObj, obj);
    }

    return tempObj;
}

console.log(objToCopy);