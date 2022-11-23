// Add a 'qux' propety with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

//Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//Snippet 2
for (let key in myObj) {
    console.log(key);
}

// Without running this code, can you determine whether these two snippets produce the same output? Why?
// Snippet 1 iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype
// Snippet 2 iterated over all of the object's keys, including those in the protoype object, myProtoObj