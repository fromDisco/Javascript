// Output the values of a list
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function recursiveListCrawler(obj) {

    let list = "";
    
    // base case
    // if object is a value return it
    // to add it to the string
    if (typeof obj === "number") {
        return obj;
    }

    // loop over properties an objects
    for (const key in obj) {
        list += recursiveListCrawler(obj[key]);
    }
    
    return list;
}

console.log(recursiveListCrawler(list));


function doWhileListCrawler(obj) {

    let list = "";

    // while object !null call
    // next() obect. Add value to list
    // and call next() Object
    while (obj /* === null */ ) {
        list += obj.value;
        obj = obj.next;
    };

    return list;

}

console.log(doWhileListCrawler(list));


// LIST BACKWARDS
function recursiveReverseListCrawler(obj) {
    
    // return [] when recursion hits the deepest level
    // declaring let list = [] at the top deletes the 
    // array with every removing step of the recursion
    if (obj === null) return [];

    else {

        let list = recursiveReverseListCrawler(obj.next);
        list.push(obj.value);
        // return list in recursion scope
        // otherwise it gets deleted on every cycle
        return list; 

    }
}

console.log(recursiveReverseListCrawler(list));