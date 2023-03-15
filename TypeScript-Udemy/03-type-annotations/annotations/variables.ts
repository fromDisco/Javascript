let apples = 5;
let speed: string = "ten mph";
let hasName: boolean = true;

let notMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Array
let stringNumbers: string[] = ["one", "two"]; 
let numbers: number[] = [1, 3, 4];
let truths: boolean[] = [true, false];

// Classes
class Cars {

}

let car: Cars = new Cars();

// object literal 
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
}


// Functions
// this is only the descripton of the function: '(el: number) => void ='
let logVar: (el: number) => void = (el: number) => {
    console.log(el);
}

/* 
*******************************************************
TypeScript inference
- most of the time TypeScript is doing a great job
*******************************************************
 */

// TypeScript is defining the annotations automatically
let exampleNumber = 4;
// exampleNumber = "four"; // error


/* 
*******************************************************
When to use annotations
*******************************************************
*/
const json = '{"x": 10, "y": 20}';

// 1. Function that returns 'any' type
// here TS doesn't know whats going on
// its not possible for TS to check for errors
const coordinates = JSON.parse(json);

// better: with annotations
const coordinates2: { x: number, y: number} = JSON.parse(json);


// 2. declaring a variable one line
// and initializing it later. => foundWord
const colors = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'bluee') foundWord = true;
}


// 3. variables whose type cannot be inferred correctly
const nums = [-1, 10, -3];
let found: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        found = nums[i];
    }
}

console.log(found);