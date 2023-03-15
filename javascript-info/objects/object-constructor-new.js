// a constructor-funtion is named with capital-letter first
// they are executed with "new"-operator
function User(name, rights = false) {
    this.name = name;
    this.admin = rights;
}

let user = new User("Zappelphilipp");

// it is possible to check if the function is called with "new",
function UserAdd(name) {
    if (!new.target) {
        // check if function was called wie "new", 
        // if not, add automaticly
        return new User(name);
    }

    this.name = name;
}

let julia = UserAdd("Julia");
console.log("....")
console.log(julia.name);


// normally return isn't used in constructors
// but if return is uses is used with an object, this will return the object itself
function BigUser() {
    this.name = "John";

    return {
        name: "Godzilla"
    }; // <-- returns this object
}

console.log(new BigUser().name); // Godzilla, got that object


function SmallUser() {
    this.name = "John";
    this.size = "big";

    return; // <-- returns this
}

console.log(new SmallUser()); // John


// ____________________
// finger exercises


// by returning an object, two functions can be new A() == new B()
let obj = { name: "test" };

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;
console.log(a);
console.log( a == b ); // true


// create calculator for following code
/* 
let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() ); 
*/

function Calculator() {
    this.read = readNumbers;
    this.sum = function() { 
        return this.num1 + this.num2; 
    };
    this.mul = function() { 
        return this.num1 * this.num2; 
    };
}

function readNumbers() {
    this.num1 = 2;
    this.num2 = 4;
}

let calculator = new Calculator();
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());


// create Accumulator
// adds all userinputs
function Accumulator(add) {
    this.value = add;
    this.read = function(add) {
        this.value += +prompt("Welche Zahl?", 100);
        // return this;
    }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values