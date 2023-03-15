function rot13(str) {
    let deEnCode = [...str].map((element) => {
        let ascii = element.charCodeAt(0);
        let capitalLetter = 'A'.charCodeAt(0);
        let smallLetter = 'a'.charCodeAt(0);

        if (/[A-Z]/.test(element)) {
            return String.fromCodePoint(
                capitalLetter + ((ascii - capitalLetter + 13) % 26)
            );
        } else if (/[a-z]/.test(element)) {
            return String.fromCodePoint(
                smallLetter + ((ascii - smallLetter + 13) % 26)
            );
        } else {
            return element;
        }
    });

    return deEnCode.join('');
}

// **************************
// Solution from codewars.com
// **************************
function rot13CwCom(str) {
    return str
        .split('')
        .map(function (e) {
            return /[A-Ma-m]/.test(e)
                ? String.fromCharCode(e.charCodeAt(0) + 13)
                : /[N-Zn-z]/.test(e)
                ? String.fromCharCode(e.charCodeAt(0) - 13)
                : e;
        })
        .join('');
}

console.log(rot13('EBG13 rknzcyr.')); // "ROT13 example."
console.log(rot13('This is my first ROT13 excercise!')); // "Guvf vf zl svefg EBG13 rkprepvfr!"
