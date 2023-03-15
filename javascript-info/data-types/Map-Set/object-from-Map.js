// OBJECT FROM MAP
// Object.fromEntries creates an Object from an array of [key, value] pairs

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2
console.log(prices); // 2



let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
map.set(5 + 4, 'cleenUp')

let obj = Object.fromEntries(map.entries()); // make a plain object (*)
let objShort = Object.fromEntries(map); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(map); // Map(4) {'banana' => 1, 'orange' => 2, 'meat' => 4, 9 => 'cleenUp'}
console.log(obj); // {9: 'cleenUp', banana: 1, orange: 2, meat: 4}
console.log(obj.orange); // 2
