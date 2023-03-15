// SORT BY FIELD

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// The usual way to do that would be:

// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

console.log(users);



// __________________
// Exercise
// Can we make it even less verbose, like this?


let usersEx = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(prop) {
    
    // "prev" and "el" are provided by sort()
    return (prev, el) => prev[prop] > el[prop] ? 1 : -1; 

}


// by name (Ann, John, Pete)
console.log(usersEx.sort(byField('age')));

// by age (Pete, Ann, John)
// console.log(usersEx.sort(byField('name')));