// a primitive variable is stored as a value;
let message = "Hello";
let greeting = message;
greeting = "Hello my friend";

console.log(message); // "Hello";
console.log(greeting); // "Hello my friend"
// the actual value of greeting is modified. 
// but the value of message is untouched


// objects are different
// a variable only holds the reference of an object
let user = {name: "Michel"};
let admin = user;
admin.name = "not Michel";
// even if the object is copied to another variable the reference is the same

console.log(admin); // "not Michel";

let a = {};
let b = a; // copy the reference
console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true

let c = {};
let d = {}; // two independent objects
console.log( c == d ); // false


// cloning an object
let friend = {
    name: "John",
    age: 30,
}

let clone = {}; // new object
for (const key in friend) {
    clone[key] = friend[key];
}
clone.name = "Computer";

console.log(friend.name); // "John"
console.log(clone.name); // "Computer"


// ______________________________________________
// its also possible use the Object.assign method
let human = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(human, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(human);


// ________________________________________________________
// COPYING NESTED OBJECTS VIA OBJECT.ASSIGN IS NOT POSSIBLE
// BECAUSE ONLY THE REFERENCE IS COPIED. NOT THE OBJECT ITSELF
// so that the old and the new object would share the same property reference.

// cloning via JSON.parse
let newBike = JSON.parse(JSON.stringify(bike));
newBike.usedFor.race = true;

console.log(bike.usedFor.race == newBike.usedFor.race); // false
// .............................................................


// existing properties can be overwritten
Object.assign(human, {name: "Mike"});

// assign can also be used for cloning
let android = Object.assign({}, human);


// ______________________________________________
// object properties can also contain new objects
let bike = {
    name: "trek",
    color: "green",
    usedFor: {
        road: true,
        gravel: true,
        bikepacking: true,
        race: false,
    }
}

