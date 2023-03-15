function mutation(arr) {
    let strToCheck = [...arr[1].toLowerCase()];
    let matrixStr = arr[0].toLowerCase();

    // using curly brackets requieres using "return"
    /* 
    let isTrue = strToCheck.every( (el) => {
        return [...arr[0]].includes(el);
    }); 
    */

    return strToCheck.every( el => matrixStr.includes(el));
}

console.log(mutation(["hello", "Hel"]));