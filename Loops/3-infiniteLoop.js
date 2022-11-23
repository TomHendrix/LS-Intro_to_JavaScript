// The following code causes an infinite loop ( a loop that never stops iterating). Why?

let counter = 0;

while (counter =/*==*/ 1) {
    console.log(counter);
    counter +=1;

    if (counter > 2) {
        break;
    }
}

// 'while (counter = 1)' is assigning the value of 1 to the variable counter, not checking for equivalency. Each loop the value of counter is set back to 1 and the loop
// repeats infinitely
// variable assignments always return the value that is being assigned. In this case the value of '1' is being returned since it is the value that is assigned to counter
// a return value of '1' is a 'truthy' value and results in the expressions evaluating as TRUE