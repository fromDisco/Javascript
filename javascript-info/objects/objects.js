let action = "Hobby";

let user = {
    name: "Michel",
    age: 43, // comma is optional, but saver if new properties are added
    ["favorite" + action]: "cycling", // computed properties
};

// Add a property
user.admin = true;
// or
user["likes bikes"] = true; // multiwords are possible
// with brakets its possible, to a the property via a variable
let prop = "feels anxios";
user[prop] = true;


// remove a property
delete user.admin;


// ________________________
// Property value shorthand
// long declaration
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ... 
    }
}

let user2 = makeUser("Michel", 43);

// short declaration
// if properties have the same name as the variables its possible to shorten this.
function makeUserShort(name, age) {
    return {
        name, // same as name
        age, // same as age
        // ...
    }
}


// While variable-names are cannot have names equal to language reserverd words like: let, for, ...
// objects are not bound to this restriction
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  

// accessing non-existant property doesn't produce an error. it just returns undefined.
let thing = {};
// console.log(thing.noSuchProperty);


// check if property is existant in an object
let key = "name";
// console.log(key in user);

// list object-keys
console.log(Object.keys(user));


// ____________________________
// "for ... in" loop
// iterate over an object
for (key in user) {
    // console.log(key);
    // console.log(user[key]);
}


// finger exercises
// _________________________________

// check if object is empty
console.log("___________________");

let schedule = {};
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

function isEmpty(isEmptyOrNot) {
    for (const key in isEmptyOrNot) {
        return false;
    }

    return true;
}

// sum saleries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(sumSaleries(salaries));

function sumSaleries(salerieObj) {
    let sum = 0;
    for (let key in salerieObj) {
        sum += salerieObj[key];
    }

    return sum;
}


// multiply numeric property values by 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

function multiplyNumeric(menuObj) {
    for (let prop in menuObj) {
        if (typeof menuObj[prop] !== "number") continue;
        menuObj[prop] *= 2;
    }
}


// Object.freeze stops Object from being modified
const vehicle = {
    type: "bike",
    brand: "trek",
    model: "checkpoint",
}
Object.freeze(vehicle);
vehicle.type = "car";
console.log(vehicle.type); // bike


// destructuring Assignment to Extract Values from Objects
// instead of assigning every single value to an variable
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
// method before ES6
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// ES6 alternative – destructuring Assignment to Extract Values from Objects
const { today, tomorrow } = HIGH_TEMPERATURES;

// assigning new variable-names
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES.today;

// assigning nested values
const userNest = {
    johnDoe: { 
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
const { johnDoe: { age: userAge, email: userEmail } } = userNest;


// Object Literal Declarations Using Object Property Shorthand
// long method
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// short way
const getMousePositionShort = (x, y) => ({x, y});
console.log(getMousePositionShort(93, 29));

