const canvas = document.getElementById("canvasId");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
ctx.moveTo(50, 70);
ctx.lineTo(100, 50);
ctx.stroke();