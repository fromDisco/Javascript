function throttle(func, ms) {
    let funcInput;
    let oldInput;
    let mayIExecute = true;


    function throttleWrap() {

        // if execution is not allowed
        // collect data anyway
        if (!mayIExecute) {
            funcInput = arguments;
            funcThis = this;
            return;
        }

        // after first call close this path
        // also after every timeout, that sets 
        // myIEcecute to true
        mayIExecute = false;
        func.apply(this, arguments);

        setTimeout(() => {
            mayIExecute = true;
            if (funcInput) {
                throttleWrap.apply(funcThis, funcInput);
                funcInput = funcThis = null;
            }
        }, ms);

    };

    return throttleWrap;
}


let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x, y = 0;
let isMouseDown = false;

// assign drawLine to throttle-decorator
let draw = throttle(drawLine, 20);

canvas.onmousedown = getPosition; // get starting position
window.onmouseup = stopMousedown; // stop drawing
// canvas.onmousemove = drawLine;
canvas.onmousemove = draw; // call decorator

// set canvas styles
context.fillStyle = "orange";
context.fillRect(0, 0, canvas.width, canvas.height);


// get starting position for moveTo()
function getPosition(event) {
    isMouseDown = true;
    x = event.offsetX;
    y = event.offsetY;
}

function stopMousedown() {
    isMouseDown = false;
}

function drawLine(event) {
    if (isMouseDown) {

        // read actual mouse-position
        let clientX = event.offsetX;
        let clientY = event.offsetY;

        context.lineWidth = 3; // set thickness of stroke
        context.beginPath();
        context.moveTo(x, y); // set start to old end
        context.lineTo(clientX, clientY); // move to new point
        context.strokeStyle = "darkolivegreen"; // set color of stroke
        context.stroke(); // draw line between moveTo() and lineTo()

        // set new start coordinates to endpoint from (lineTo())
        x = clientX; 
        y = clientY;
    }
}