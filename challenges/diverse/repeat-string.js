function repeatStringNumTimes(str, num) {
    let strArr = [];
    while (strArr.length <= num - 1 && num >= 0) {
        strArr.push(str);
    }
    return strArr.join("");
}

repeatStringNumTimes("abc", 3);



function truncateString(str, num) {
    if (str.length > num) {
        return str.substring(0, num) + "...";
    }

    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));