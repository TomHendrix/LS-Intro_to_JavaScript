//What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//You get an error halfway through after printing Good morning, good afternoon, and good evening Victor to the console because you tried to reassign a constant variable

/*
let name = 'Victor';
console.log('Good Morning, ' + name);   // => Good Morning, Victor
console.log('Good Afternoon, ' + name); // => Good Afternoon, Victor
console.log('Good Evening, ' + name);   // => Good Evening, Victor

name = 'Joe';                           // no error!
console.log('Good Morning, ' + name);   // => Good Morning, Joe
console.log('Good Afternoon, ' + name); // => Good Afternoon, Joe
console.log('Good Evening, ' + name);   // => Good Evening, Joe
*/