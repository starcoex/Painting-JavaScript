const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.fillRect(100 + 100, 100 + 100, 25, 150);
ctx.fillRect(140 + 100, 100 + 100, 100, 300);
ctx.fillRect(260 + 100, 100 + 100, 25, 150);

ctx.arc(290, 130, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(270, 110, 10, Math.PI, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(310, 110, 10, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(290, 130, 20, 0, 1 * Math.PI);
ctx.fill();
