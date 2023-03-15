// STORE READ DATES
// we need to store the date, when the message was read
// and it should only remain in memory 
// until the message is garbage collected.

// P.S. Dates can be stored as objects of built-in 
// Date class, that we’ll cover later.

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

const timeStamp = new WeakMap();

function tellMeWhen(message, time, map) {
    map.set(message, time);
}

function getMessageInfo(message, map) {
    return map.get(message);
}


tellMeWhen(messages[1], new Date(), timeStamp);


console.log(getMessageInfo(messages[1], timeStamp));