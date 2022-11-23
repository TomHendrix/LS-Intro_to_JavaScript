
/* My attempt

let givenValue = 4936;
let onesPlace = undefined;
let tensPlace = undefined;
let hundredsPlace = undefined;
let thousandsPlace = undefined;

onesPlace = givenValue % 10;
tensPlace = ((givenValue - onesPlace) / 10) % 10
hundredsPlace = ((givenValue - tensPlace - onesPlace) / 100) % 10
thousandsPlace = ((givenValue - hundredsPlace - tensPlace - onesPlace) / 1000) % 10

console.log('The given value is :' + givenValue);
console.log('The ones place is: ' + onesPlace);
console.log('The tens place is: ' + tensPlace);
console.log('The hundreds place is: ' + hundredsPlace);
console.log('The thousands place is: ' + thousandsPlace);

*/

// Solution from LaunchSchool below

let number = 4936;
console.log('The starting number is: ' + number);

let ones = number % 10;
console.log('The ones place is: ' + ones);

number = (number - ones) / 10;
// = 493

let tens = number % 10;
console.log('The tens place is: ' + tens);

number = (number - tens) / 10;
// = 49

let hundreds = number % 10;
console.log('The hundreds place is: ' + hundreds);

thousands = (number - hundreds) / 10;
// = 4

console.log('The thousands place is: ' + thousands);
