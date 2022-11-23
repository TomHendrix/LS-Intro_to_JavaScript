// Write a function that searches an array of string for every element that matches the regular expression given by its argument.
// The function should return all matching elements in an arry

// Example

let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(listWords, reg) {
    let matches = [];

    for (let index = 0; index < listWords.length; index += 1) {
        if (reg.test(listWords[index])) {
            matches.push(listWords[index]);
        }
    }

    return matches;
}