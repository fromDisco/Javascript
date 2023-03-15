// Setup
const contacts = [{
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let isName = 0;
    let isProp = 0;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].firstName === name ||
            contacts[i].lastName === name) {
            isName += 1;
            isProp += contacts[i].hasOwnProperty(prop) ? 1 : 0;
        }

        if ((contacts[i].firstName === name ||
                contacts[i].lastName === name) &&
            contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
    }

    if (isName == 0) {
        return "No such contact";
    } else if (isProp == 0) {
        return "No such property";
    }
    // Only change code above this line
}

// lookUpProfile("Akira", "likes");
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));




const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) {
        usersObj[user].online ? count++ : "";
    }
    return count;
    // Only change code above this line
  }
  
  console.log(countOnline(users));


  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));