// CLASS INHERITANCE


// this is the Parent Class
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");


// this is the child class
// it extends the parent-class
// "Animal" is prototype of "Rabbit"
class Rabbit extends Animal {

    /* 
    :::::::::::::::::::::::::::::::::::::::::::::::::

    OVERRIDING THE PARENT-CONSTRUCTOR

    simply overriding would lead to an error.
    Normally the extended class doesn't create 
    the object and assigning this.
    This job is done by the parent-Class.

    The child class has a special internal property
    for this: [[ConstructorKind]]:"derived"

    A derived constructor MUST call "super" to execute
    the parents constructor.

    Borrowing doesn't work with "super". 
    Because "super" always knows his [[HomeObject]]

    declaring methods like "eat: function() {}",
    doesn't work. [[HomeObject]] is not set.
    Instead use "eat() {}"
    :::::::::::::::::::::::::::::::::::::::::::::::::
    */
    constructor(name, earLength) {
        // "super"  calls the parents class constructor
        // with its arguments
        super(name); 

        // "this" can only be used after calling "super()"
        this.earLength = earLength;
    }


    hide() {
        console.log(`${this.name} hides!`);
    }

    /* 
    :::::::::::::::::::::::::::::::::::::::::::::::::

    OVERRIDING A METHOD AND THE "SUPER" KEYWORD

    if its necessary to extend the partent-method
    it is possible to replace this method in the
    child and call the parent method with
    "super.method"
    :::::::::::::::::::::::::::::::::::::::::::::::::
    */
    stop() {

        // because arrow-functions have no own super/this this works
        // setTimeout(() => super.stop(), 1000); // call parent stop after 1sec

        // but this doesn't work. Here this is referencing function()
        // setTimeout(function() { super.stop() }, 1000);

        super.stop();
        this.hide();
    }

}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!
rabbit.stop(); // White Rabbit hides!

console.log(Object.getPrototypeOf(rabbit)); // Animal {constructor: ƒ, hide: ƒ}

// "rabbit" has own properties that are assigned in parent Class
console.log(rabbit); // Rabbit {speed: 5, name: 'White Rabbit'}


/* 
:::::::::::::::::::::::::::::::::::::::::::::::::

ANY EXPRESSION IS ALLOWED AFTER "EXTENDS"

Class syntax allows to specify not just a class, 
but any expression after extends.

For instance, a function call that generates 
the parent class:
:::::::::::::::::::::::::::::::::::::::::::::::::
*/

function func(phrase) {
    return class Tired {
        sayHi() {
            console.log(phrase);
        }
    };
}

class User extends func("Hello") {}

new User().sayHi(); // Hello

