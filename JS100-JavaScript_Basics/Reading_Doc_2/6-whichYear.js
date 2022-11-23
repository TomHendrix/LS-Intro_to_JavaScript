// The MDN page for Date lists two methods to get the year of a date.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let today = new Date();

console.log(today.getYear());
console.log(today.getFullYear());

// getYear() has been depreciated and should not be used. A number representing the year of the given date, according to local time, minus 1900
// getFullYear() returns the year of the specified date according to local time
// TLDR: always use getFullYear()