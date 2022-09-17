/** @type {CanvasRenderingContext2D} */

let image = new Image();

image.onload = function() {
    // ctx.drawImage(image, 10, 10, 80, 80);
    setInterval(move, 50);
}

image.src = 'https://cs13.pikabu.ru/avatars/3154/x3154129-710062910.png';

let x = 10;
let toRight = true;
const step = 5;

function move() {
    /*
    if (x < 200) {
        x += 2;
    } else {
        x = 10;
    }
    */

    if (toRight) {
        x += step;
        if (x >= 200) {
            toRight = false;
        }
    } else {
        x -= step;
        if (x <= 10) {
            toRight = true;
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, x, 10, 80, 80);
}