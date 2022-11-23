// The following code keeps looping forever. (You can hit Ctrl + C to stop it). Why is that? Also modify it so that it stops after the first iteration.

for (let i = 0; i < 1; i += 1) {
    console.log('and on');
}

// The for loop iterates forver, because it is missing the stop parameter in the second argument
// Adding a stop parameter of i < 1 allow the for loop to iterate a single time while the initial i is 0 and then stops on the next iteration when i = 1. 
// for (let i = 0; ; i += 1) {

// Alternatively, the break statement can be used to break out of the for loop
//for (let i = 0; ; i += 1) {
//    console.log("and on");
//    break;
//}