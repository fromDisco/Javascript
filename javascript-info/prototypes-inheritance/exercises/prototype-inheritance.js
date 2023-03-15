// Why are both hamsters full?

// We have two hamsters: speedy and lazy inheriting from the 
// general hamster object.
// When we feed one of them, the other one is also full.
// Why? How can we fix it?

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

console.log(hamster)


// ______________________________
console.log("------------------");
// ______________________________

const Person = function (name) {
    this.name = name;
    this.age = 23;
}
Person.prototype.age = 24;
var person1 = new Person("Mike");

console.log(person1); // Person {name: 'Mike', age: 23}
console.log(Object.getPrototypeOf(person1)); // {age: 24, constructor: ƒ}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(person1)))); // null


// ___________________________________________________________
// [object].constructor references to its Constructor function
console.log(Person); // Function Person
// is equal to 
console.log(person1.constructor); // Function Person
// so if the constructor function is unknown, because 
// it is from a third party library, following method works
let person2 = new person1.constructor("Inge"); 


// BUT TAKE CARE
function Rabbit() {}

// it is possible to override the .prototype-method
Rabbit.prototype = {
    jumps: true
};
let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false

// instead add/remove properties one by one
Rabbit.prototype.jumps = true;

// create constructor manually
Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit,
};

console.log(Rabbit.prototype);