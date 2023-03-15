// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

console.log(visitsCountMap.get(john));
console.log(visitsCountMap);