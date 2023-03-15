const person = {
    firstName: 'John',
    lastName: 'Doe'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

// Here person is not an Argument, it is the this-Value of the call
let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);