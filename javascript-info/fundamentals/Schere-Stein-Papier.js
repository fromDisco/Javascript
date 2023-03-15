const rockPaperNumber = Math.ceil(Math.random()*3);
let outputElement = document.getElementsByTagName("h1")[0];
const checkboxes = document.getElementsByClassName("guess");
const userGuess = Array.from(checkboxes);
let userGuessNumber;

userGuess.forEach(box => {
    box.checked = false;
    box.addEventListener("change", didYouGuessRight); 
});

function convertGuessToNum(el) {
    switch (el.target.name) {
        case "schere":
            userGuessNumber = 1;
            break;
        case "stein":
            userGuessNumber = 2;
            break;
        case "papier":
            userGuessNumber = 3;
            break;
        default:
            break;
    }

    return userGuessNumber;
}

function didYouGuessRight(element) {
    let userGuessNumber = convertGuessToNum(element);

    if (rockPaperNumber == userGuessNumber) {
        outputElement.textContent = "Gewonnen";
    } else {
        outputElement.textContent = "Verloren";
    }
}