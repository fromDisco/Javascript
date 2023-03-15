const sum = (...args) => {
    const argArr = args;
    return argArr.reduce((a, b) => a + b, 0);
}

console.log(sum(1,3,5,2,7,3));

