// ARMY OF FUNCTIONS

// The following code creates an array of shooters.
// Every function is meant to output its number. But something is wrong…

// Why do all of the shooters show the same value?
// Fix the code so that they work as intended.


function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function () { // create a shooter function,
            console.log(i); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.


// ______________
function makeArmySolution() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        // when shooter(i) is called it watches for the inner
        // and outer scope (closure). Closure says i is 10. 
        // but block scope says, at the time you've been
        // pushed to array "e" actually was e.g 3
        let e = i; 

        function shooter() { // create a shooter function,
            console.log(e); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let armySolution = makeArmySolution();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
armySolution[0](); // 10 from the shooter number 0
armySolution[1](); // 10 from the shooter number 1
armySolution[2](); // 10 ...and so on.
// console.log(armySolution);


function add() {

    let arr = [];
    
    for (let i = 0; i < 10; i++) {
        let test = () => console.log(i);
        arr.push(test);
    }
    
    return arr;
}

let adding = add();

// add(): returns "arr".
// add()[i]: Get index[i] which is "function test()"
// add()[5](): executes the function
adding[6]();
console.log("------------------");
add()[5]();

// console.log(arr);


// Scope of "var"
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); // works
}

sayHi();
console.log(phrase); // ReferenceError: phrase is not defined