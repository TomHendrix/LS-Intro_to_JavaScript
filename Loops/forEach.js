let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// passing an anonymous function as a function expression
names.forEach(function(name) {
    console.log(name);
});

console.log('');

// utilizing arrow functions
names.forEach(x => console.log(x));