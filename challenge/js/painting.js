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
let mode = 0;

const onMouseMove = (event) => {
  if (isPainting) {
    if (mode === 1 || mode === 2) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    } else {
      return;
    }
  }
  ctx.moveTo(event.offsetX, event.offsetY);
};

const startPainting = (event) => {
  isPainting = true;
  // if (mode === 2) {
  //   isFilling = true;
  // }
};

const cancelPainting = (event) => {
  isPainting = false;
  if (mode === 2) {
    isFilling = false;
    ctx.fill();
  }

  ctx.beginPath();
};

const onColorChange = (event) => {
  console.dir(event.path[0].value);
  let color = event.path[0].value;
  console.log(color);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};
const onClickStoke = () => {
  mode = 1;
};
const onClickFill = () => {
  mode = 2;
};
const onModeBtnClick = () => {};

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// canvas.addEventListener("click", onCanvasClick);
color.addEventListener("change", onColorChange);
stroke.addEventListener("click", onClickStoke);
fill.addEventListener("click", onClickFill);
// fill.addEventListener("click", onModeBtnClick);
