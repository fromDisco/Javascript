/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::

WHAT IS A CLASS?

So, what exactly is a class? That’s not an entirely 
new language-level entity, as one might think.

Let’s unveil any magic and see what a class really is. 
That’ll help in understanding many complex aspects.

In JavaScript, a class is a kind of function.

But its not only syntactic sugar:
1. Classes have to be called with "new"
2. Class-methods are NON-ENUMERABLE, 
   flag is set for all methods
3. Class use "strict-mode"
4. Classes are not hoisted. Unlike Functions that
   can only be called after they are defined.
   This is because even the classes are hoisted, their
   values are not initialized
::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

class User {
    constructor(name, surName) {

        /* 
        ::::::::::::::::::::::::::::::::::::::::::::::::::::::
        
        IMPORTANT
        Properties have, by convention the same name
        as "getter/setter" methods
        so the properties MUST BE NAMED DIFFERENT 

        its common to use "_" (underscore) for differantiation
        ::::::::::::::::::::::::::::::::::::::::::::::::::::::
        */
        this._name = name;
        this._surName = surName;
    }


    // ____________________________________
    // Methods are stored in User.prototype


    ['say' + 'Hi']() { // computed methods are also possible
        console.log(this.name);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

// class must be called with "new ..."
const user = new User("Diddy", "Licious");

// proof: User is a function
console.log(typeof User); // function
console.log(user.name); //
user.name = "Michel";
user.sayHi(); //



/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLASS EXPRESSION

like function expressions it is possible to define a 
class in another expression
::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

// named class expression => naming is optional
let User2 = class MyClass {
    sayHi() {
        console.log(MyClass); // MyClass name is visible only inside the class
    }
};

new User2().sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class




class Button {
    constructor(value) {
        this.value = value;
    }

    // "click" (without this.) is a Class field
    // they are not added to the prototype
    // each object get its own field with "this" 
    // referencing this specific object
    click = () => {
        console.log(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello