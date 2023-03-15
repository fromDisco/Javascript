const coinSide = Math.round(Math.random());
const guess = prompt("Kopf oder Zahl");

const guessToNumber = guess == "Kopf" ? 0 : 1;

if (guessToNumber === coinSide) {
    alert("Glückspilz");
} else {
    alert("Leider nein");
}

