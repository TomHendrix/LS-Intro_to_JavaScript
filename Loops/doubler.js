let rlSync = require('readline-sync');

function doubler(number) {
    console.log(number);

    if (number <= 50) {
        doubler(number * 2);
    }
}

let defNotAScam = Number(rlSync.question("Doubling GP, 50 GP max: "));

if (defNotAScam > 50) {
    defNotAScam = 50;
    console.log('I said 50 gp max, noob');
}

doubler(defNotAScam);