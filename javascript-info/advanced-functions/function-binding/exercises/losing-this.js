// Fix a function that loses "this"
/* 

The call to askPassword() in the code below should 
check the password and then call user.loginOk/loginFail 
depending on the answer.

But it leads to an error. Why?

Fix the highlighted line for everything to start working right 
(other lines are not to be changed). 

*/

/* 
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); 
*/

/* 
function askPassword2(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user2 = {
    name: 'Michel',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
 */
// askPassword2( user2.login.bind(user2, true) , user2.login.bind(user2, false) ); // ?


let user3 = {
    firstName: "John",
    sayHi(arg) {
        
        console.log(`Hello, ${this.firstName} ${arg}!`);
        this.sayHi();
    }
};

let sayHi = user3.sayHi.bind(user3);
setTimeout(sayHi, 1000, "blume"); // Hello, John!

user3.sayHi = () => console.log("Another user in setTimeout!");
user3.firstName = "Michel";

setTimeout(function() {
    sayHi("Jane");
}, 2000); // Hello, John!
