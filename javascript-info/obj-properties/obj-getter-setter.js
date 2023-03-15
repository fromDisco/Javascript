"use strict"

let userGet = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

};

console.log(userGet.fullName); // John Smith
// userGet.fullName = "John"; //  Cannot set property fullName of #<Object> which has only a getter

let userSet = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(args) {
        [this.name, this.surname] = args.split(" ");
    }

};

console.log(userSet); // {name: 'John', surname: 'Smith'}

userSet.fullName = "Michel Holzky";
console.log(userSet); // {name: 'Michel', surname: 'Holzky'}


// use get/set to update values
// keep values untouched
let user = {

    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...