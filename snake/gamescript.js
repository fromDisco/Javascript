let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let cellHeight = 30;
let cellWidth = 30;
let cols = canvas.width / cellWidth;
let rows = canvas.height / cellHeight;
let snake = [{
    x: 5,
    y: 4
}];
let food;
let direction = "left";
let foodCollected = false;

document.addEventListener("keydown", keyDown);
placeFood();
setInterval(gameLoop, 500);

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";

    // draw snake
    snake.forEach(part => add(part.x, part.y));


    // place food
    context.fillStyle = "lightgreen";
    add(food.x, food.y);

    requestAnimationFrame(draw);
}
draw();

function add(x, y) {
    context.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}

function keyDown(e) {
    switch (e.keyCode) {
        case 37:
            direction = "left";
            break;
        case 38:
            direction = "up";
            break;
        case 39:
            direction = "right";
            break;
        case 40:
            direction = "down";
            break;
        default:
            break;
    }
}

function shiftSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        const part = snake[i];
        const lastPart = snake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }
}

function gameLoop() {
    if(foodCollected) {
        snake = [{
            x : snake[0].x,
            y : snake[0].y
        }, ...snake];
        foodCollected = false;
    }
    shiftSnake();

    switch (direction) {
        case "left":
            snake[0].x--;
            break;
        case "right":
            snake[0].x++;
            break;
        case "down":
            snake[0].y++;
            break;
        case "up":
            snake[0].y--;
            break;

        default:
            break;
    }
    
    if(food.x === snake[0].x && food.y === snake[0].y) {
        foodCollected = true;
        placeFood();
    }
}

function placeFood() {
    let foodX = Math.floor(Math.random() * cols);
    let foodY = Math.floor(Math.random() * rows);
    food = {x: foodX, y: foodY};
}