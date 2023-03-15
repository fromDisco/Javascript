function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));



function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    return arr.map(el => [...el][0].toUpperCase() + el.slice(1)).join(" ");
}

console.log(titleCase("I'm a little tea pot"));


// ___________________________
// solution from freecodecamp using replace and charAt()
function titleCaseAlt(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st]
            .toLowerCase()
            .replace(newTitle[st].charAt(0), newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}

// ___________________________
// solution from freecodecamp using replace and RegEx
function titleCaseAlt2(str) {
    return str
        .toLowerCase()
        // replace() accepts a function as second argument
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}