// PROTOTYPAL INHERITANCE

// every object in JS has a hidden property named [[Prototype]].
// Its either "null" or another object called a prototype
// This prototype inherits its methods (properties) to its children

// The property [[Prototype]] is internal and hidden, 
// but there are many ways to set it.

// One of them is to use the special name __proto__, like this:
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

// prototype chain
let longEar = {
  earLength: 10,
  __proto__: rabbit // this takes rabbit as proto
};


// rabbit.__proto__ = animal; // its possible to declare __proto__ ecternally 

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
rabbit.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)
longEar.walk(); // Animal walk


// __proto__ or Object.getPrototypeOf/Object.setPrototypeOpf are only
// for reading properties.
// Setting/Writing methods is always directly on the prototype-object 


// _______________________________________________
// Methods are shared, but the object state is not
// animal has methods
let animal2 = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit2 = {
  name: "White Rabbit2",
  __proto__: animal2
};

// modifies rabbit2.isSleeping
rabbit2.sleep();

console.log(rabbit2.isSleeping); // true

// .sleep() is only called for rabbit
// "animal2" is not affected
console.log(animal2.isSleeping); // undefined (no such property in the prototype)

