let task = ["müll rausbringen", "aufräumen", "lernen", "spielen"];
let stats = ["erledigt", "in Planung", "nicht gemacht"];

// let questionTask = prompt(task.forEach((el, index) => {return index + ". " + el}));
let questionTask = prompt(task);
let questionStatus = prompt(stats);

let taskStatus = task[questionTask] + " ist " + stats[questionStatus];

console.log(taskStatus);


// Destructuring Assignment to Assign Variables from Arrays
// like destruct. assignm. with objects
// use comma to reach the access value.
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


// _______________________
let aSwap = 8, bSwap = 6;
// Swap values of variables
[aSwap, bSwap] = [bSwap, aSwap];


// Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// using the spread operator
// const [a1, b1, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a1, b1);
// console.log(arr);


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);