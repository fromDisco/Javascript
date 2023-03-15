// Rewrite switch into if-else
let browser = "Firefox";
switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}

// Rewrite switch into if-else
if (browser == "Edge") {
    console.log("You've got the Edge!");
} else if (browser == "Chrome" 
    || browser == "Safari" 
    || browser == "Firefox" 
    || browser == "Opera") {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}


// Rewrite if into switch
let answer = +prompt('a?', '');

// if (answer == 0) {
//   console.log( 0 );
// }
// if (answer == 1) {
//   console.log( 1 );
// }

// if (answer == 2 || a == 3) {
//   console.log( '2,3' );
// }

// Rewrite if into switch
switch (answer) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log(2 + "," + 3);
        break;

    default:
        break;
}