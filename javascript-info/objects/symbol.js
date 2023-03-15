"use strict";

// not finished, console.log doesnt give the predicted output


let user = {
    name: "michel",
}

let user2 = {
    name: "julia",
}

let id = Symbol("id");
let id2 = Symbol("id2");
console.log(id == id2);
console.log(user);

user[id] = "eins";
user2[Symbol("id2")] = "eins";

user[id] = "eins2";
console.log(user);
console.log(user[id] === user2[id2]);
