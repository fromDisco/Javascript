// WEAKMAP

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// normal Maps accept primitives as keys
let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object
// console.log(weakMap);


// normally a object is in the memory, 
// as long as there is a reference to it
// e.g. the obj. is referenced in a variable and also in an object

// IN WEAKMAPS THE OBJECT IS DELETED IF THE ONLY REFERENCE 
// IS IN THE KEY FROM THE WEAKMAP
let person = { name: "John", registerDate: new Date()}
weakMap.set(person, "...");
// console.log(weakMap);

person = null; // deletes the object, even there is a reference in weakMap
// console.log(weakMap);


// _______________________
// Whats the problem with
// visitcounter as Map()
function countUser(user) {
    count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

const visitCountMap = new Map();
let user1 = {name: "Robot"};
let user2 = {name: "Robot2"};

countUser(user1);
countUser(user1);
countUser(user2);
user2 = null; 

// because visitCountMap is a map, 
// it holds a reference to user2 even if it was deleted
console.log("______Map()________");
console.log(visitCountMap); // Map(2) {{…} => 2, {…} => 1}


// Better use a weakMap()
function countUserWeak(user) {
    let count = visitCountWeakMap.get(user) || 0;
    visitCountWeakMap.set(user, count + 1);
}

const visitCountWeakMap = new WeakMap();
let user3 = {name: "Robot3"};
let user4 = {name: "Robot4"};

countUserWeak(user3);
countUserWeak(user4);
countUserWeak(user4);
user4 = null;
console.log(visitCountWeakMap.get(user4));
console.log("______WeakMap()________")
console.log(visitCountWeakMap);