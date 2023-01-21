const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

let canvas = document.getElementById("game-canvas");
canvas.height = HEIGHT;
canvas.width = WIDTH;

let ctx = canvas.getContext('2d');

ctx.fillStyle = "#AD8E70";
ctx.fillRect(0,0,WIDTH, HEIGHT);


let word = "REVOLUTION"

ctx.strokeStyle = "#243763";
ctx.lineWidth = 2;
ctx.fillStyle = "#FFEBB7";
ctx.roundRect(100,100, (word.length*8) + 20,28,8);
ctx.fill();
ctx.stroke();
ctx.textAlign = "center";
ctx.font = "bolder 16px monospace"
ctx.fillStyle = "green";
ctx.fillText(word.slice(0,3) + new Array(word.length - 3).fill(' ').join(''), 100 + (word.length*8 + 20)/2, 100 + 40/2);
ctx.fillStyle = "grey";
ctx.fillText(new Array(3).fill(' ').join('') + word.slice(3), 100 + (word.length*8 + 20)/2, 100 + 40/2);