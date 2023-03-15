function Bike() {
    this.name = "Trek",
    this.color = "green"
}

Bike.prototype.wheels = 2;
let myPrecious = new Bike();


Bike.prototype = {
    constructor: Bike, // removes the constructor for previous prototype-declarations 
    purpose: "Fun, sports, commuting",
    isFast() {
        console.log("wooosh");
    }
}

let sexy = new Bike();

console.log(Bike.prototype.isPrototypeOf(myPrecious));
console.log(sexy);

// every Object has a prototype from which it inherits its property
// hasOwnProperty is defined in Object.prototype, which can be accessed
// in Bike.prototype
console.log(Object.prototype.isPrototypeOf(Bike.prototype)); // true