


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map( el => el.name );

console.log( names ); // John, Pete, Mary


// __________________________________________
// MAP TO OBJECTS
// You have an array of user objects, 
// each one has name, surname and id.
// Write the code to create another array from it, 
// of objects with id and fullName, where fullName is 
// generated from name and surname.

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map( (user) => {
    return {
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }
}); 

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped ) // 1
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith