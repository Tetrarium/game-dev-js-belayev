const canvas = document.getElementById("canvasId");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

// 1.2
// ctx.moveTo(50, 70);
// ctx.lineTo(100, 50);
// ctx.stroke();

// 1.3 l-1
// canvas.width = 200;
// canvas.height = 90;
// ctx.strokeStyle = "green";
// ctx.fillStyle = "blue";
// ctx.shadowBlur = 10;
// ctx.shadowColor = "brown";

// ctx.rect(10, 30, 80, 40);
// ctx.fill();
// ctx.stroke();

// 1.3 l-2
// ctx.strokeText("Зигзаг", 10, 10);
// ctx.stroke();
// ctx.lineWidth = 10;
// ctx.strokeStyle = "#0000ff";
// let x = 40;
// let y = 40;
// ctx.moveTo(10, 80);
// ctx.beginPath();
// variant from tutorial
// for (let i = 0; i < 6; i++) {
// 	ctx.lineTo(x, y);
// 	x += 30;
// 	y = y === 40 ? 80 : 40;
// }
// ctx.stroke();

// my variant
// let counter = 0;
// const maxCount = 9;
// const intervalId = setInterval(() => {
// 	ctx.lineTo(x, y);
// 	x += 30;
// 	y = y === 40 ? 80 : 40;
// 	ctx.stroke();
// 	counter++;
// 	if (counter >= maxCount) {
// 		clearInterval(intervalId);
// 	}
// }, 200);

// 1.4 l-1
ctx.lineWidth = 5;
function square(param) {
	ctx.strokeStyle = param.color;
	ctx.strokeRect(param.x, 10, param.side, param.side);
	ctx.stroke();
}

square({ side: 15, x: 10, color: 'red' });
square({ side: 25, x: 50, color: 'green' });
square({ side: 35, x: 110, color: 'blue' });
square({ side: 45, x: 180, color: 'brown' });