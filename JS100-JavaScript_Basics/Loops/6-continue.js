// Take a moment to read the MDN documentation on the continue statement.
// Then write a for loop that loops over the elements of the array 'cities' and logs the length of each string to the console.
// If the element is null, skip forward to the next iteration without logging anything to the console

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
    if (cities[index]) {
        console.log(cities[index].length);
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
// The continue statement is not needed. The if statement checks the city at the given index for a truthy value. 
// Null values are not truthy and are skipped
// All array elements that have truthy values are printed to the console (all non null values in this case)