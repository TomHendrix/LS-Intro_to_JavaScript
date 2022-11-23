function foo() {
    function bar() {
        console.log("BAR");
    }
    
    bar(); //=> BAR
    bar(); //=> BAR
}

foo();
//bar(); //RefernceError: bar is not defined