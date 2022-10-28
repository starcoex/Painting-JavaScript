const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const fill = document.getElementById("fill");
const stroke = document.getElementById("stroke");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
let isPainting = false;
let isFilling = false;

const onMove = (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
};
const startPainting = (event) => {
  isPainting = true;
};
const cancelPainting = () => {
  isPainting = false;
  if (isFilling) {
    ctx.fill();
  }
  ctx.beginPath();
};
const onColorChange = (event) => {
  const colorValue = event.target.value;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
};
const onFillClick = () => {
  isFilling = true;
  console.log("Filling");
};
const onStorkeClick = () => {
  isFilling = false;
};
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
color.addEventListener("change", onColorChange);
fill.addEventListener("click", onFillClick);
stroke.addEventListener("click", onStorkeClick);
