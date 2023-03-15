// GET AVERAGE AGE
// Write the function getAverageAge(users) that gets an array 
// of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

let john = {
    name: "John",
    age: 25
};
let pete = {
    name: "Pete",
    age: 30
};
let mary = {
    name: "Mary",
    age: 29
};

let arr = [john, pete, mary];


function getAverageAge(arr) {
    let average = 0;

    arr.map((el) => {
        average += el.age;
        return average;
    });

    return average / arr.length;
}


// https://javascript.info/array-methods#transform-an-array
function getAverageAgeMusterloesung(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(arr);
console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28