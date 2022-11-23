let bar = 1;

function foo() {
    let bar = 2;
}

foo();
console.log(bar);

//The key to this is that that line 4 includes 'let' and declares a second "bar" variable with innter scope for the foo() function
//After the foo() function finished running, the 'new' 'let' varaible is deleted and bar is now equal to 1 again as in line 1