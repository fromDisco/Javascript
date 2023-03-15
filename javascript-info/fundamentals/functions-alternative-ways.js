function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAgeShort(age) {
    return ((age >= 18) ? true : confirm('Did parents allow you?'));
}
// console.log(checkAgeShort(17));


function checkAgeShortCondOr(age) {
    return ((age >= 18) || confirm('Did parents allow you?'));
}
// console.log(checkAgeShortCondOr(17));


// Gib die kleinste Nummer zurück
function leastNum(a, b) {
    return a > b ? b : a;
}
console.log(leastNum(1, 1));


function pow(basis, exp) {
    return Math.pow(basis, exp);
}
console.log(pow(2, 4));

function powBetter(basis, exp) {
    return basis ** exp;
}
console.log(powBetter(2, 4));