function solution(list) {
    let tmpRange = [];
    let output = '';

    for (let i = 0; i < list.length; i++) {
        // check if act is prev + 1
        if (list[i] + 1 === list[i + 1]) {
            tmpRange.push(list[i], list[i + 1]);
            i++;
        } else {
            // read length of temp Array
            if (tmpRange.length >= 3) {
                // create range and add to output
                output += `${tmpRange[0]}-${tmpRange[tmpRange.length - 1]}`;
            } else {
                // add content of temp Array to string
                output += tmpRange.join(',') + list[i];
            }
            tmpRange = [];
        }
    }
    // if not
    // if > 3
    // if < 3
    // if yes, save in temp Array
    return output;
}

console.log(
    solution([
        -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
    ])
); // "-6,-3-1,3-5,7-11,14,15,17-20")
