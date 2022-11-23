let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
    if (names[index] === 'Naveed') {
        continue;
    }

    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
}

console.log(upperNames);


// same loop using a negated if conditional

names = ['Tom', 'Jessie', 'Jon', 'Lauren', 'David'];
upperNames = [];

for (let index = 0; index < names.length; index += 1) {
    if (names[index] !== 'Jon') {
        let upperCaseName = names[index].toUpperCase();
        upperNames.push(upperCaseName);
    }
}

console.log(upperNames);