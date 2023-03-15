// STORE "UNREAD" FLAGS

// There’s an array of messages:
// Your code can access it, but the messages are managed 
// by someone else’s code.

// Now, which data structure could you use to store information 
// about whether the message “has been read”? The structure must be 
// well-suited to give the answer “was it read?” for the given message object.

// P.S. When a message is removed from messages, 
// it should disappear from your structure as well.

// P.P.S. We shouldn’t modify message objects, add our properties to them. 
// As they are managed by someone else’s code, 
// that may lead to bad consequences.

let messages = [{
        text: "Hello",
        from: "John"
    },
    {
        text: "How goes?",
        from: "John"
    },
    {
        text: "See you soon",
        from: "Alice"
    }
];

// Map() to track if messages are read
const messagesMap = new WeakMap();


// _____________________________________________
// add messages to the Map() and set their value
function toReadAndNotToRead(obj, bool) {
    // new messages are always unread
    messagesMap.has(obj) || messagesMap.set(obj, false);

    // if arg bool is provided set obj value
    bool && messagesMap.set(obj, bool);
}


// _______________________________________
// return the status of a specific message
function getMessageStatus(obj) {
    return messagesMap.get(obj);
}


// read all messages
messages.forEach( val => toReadAndNotToRead(val));

// set Status of specific message
toReadAndNotToRead(messages[0], true);

// get status of specific message
console.log(getMessageStatus(messages[1]));

delete messages[2];
console.log(messages[2]);
console.log(messagesMap);


// ____________________________________
// ++++++++++++++++++++++++++++++++++++
// Map() to track if messages are read
const messagesSet = new WeakSet();


// _____________________________________________
// add messages to the Map() and set their value
function addToRead(obj) {

    messagesSet.add(obj);

}

addToRead(messages[0]);
addToRead(messages[1]);
console.log(messagesSet);
console.log(messagesSet.has(messages[2]));

