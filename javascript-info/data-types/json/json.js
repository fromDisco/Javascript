let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

// convert object into string
let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);

// parse string back into object
console.log(JSON.parse(json))