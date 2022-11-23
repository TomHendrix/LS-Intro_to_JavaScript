// Write a while loop that logs all odd natural numbers between 1 and 40

let num = 1;

while (num <= 40) {
    if (num % 2 !== 0) {
        console.log(num);
    }

    num += 1;
}

// Alternatively, the whole if statement can be skipped if num is incremented by 2 - effectively skipping over the even numbers
/*

let num = 1;

while (num <= 40) {
    console.log(num);
    num += 2;
}

*/
