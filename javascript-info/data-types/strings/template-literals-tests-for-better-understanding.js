function templateTest(strings, ...keys) {
    return function(...values) {
        values.forEach(element => {
            console.log(element);
            console.log(strings);
        });
    }
}

let temp = templateTest `Thats a ${0} Test for ${1}.`

console.log(temp("serious", "me"));