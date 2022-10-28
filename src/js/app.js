const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector(".line-width");
const color = document.querySelector(".color");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const modeBtn = document.querySelector(".mode-btn");
const destoryBtn = document.querySelector(".destory-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const fileInput = document.querySelector(".file");
const textInput = document.querySelector(".text");
const saveBtn = document.querySelector(".save");
const fontSize = document.querySelector(".font-size");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
context.lineWidth = lineWidth.value;

context.lineCap = "round";

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];
let isPainting = false;
let isFilling = false;
const handleMouseMove = (event) => {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    return;
  }
  context.moveTo(event.offsetX, event.offsetY);
};
const startPainting = () => {
  isPainting = true;
};
const cancelPainting = () => {
  isPainting = false;
  context.beginPath();
};

const onLineWidthChange = (event) => {
  context.lineWidth = event.target.value;
};
const onColorChange = (event) => {
  context.strokeStyle = event.target.value;
  context.fillStyle = event.target.value;
};
const onColorClick = (event) => {
  const colorValue = event.target.dataset.color;
  context.fillStyle = colorValue;
  context.strokeStyle = colorValue;
  color.value = colorValue;
};
const onModeBtnClick = (event) => {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
};
const onCanvasClick = (event) => {
  if (isFilling) {
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};
const onDestoryClick = (event) => {
  context.fillStyle = "white";
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};
const onEraserClick = (event) => {
  context.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
  // context.lineTo(event.offsetX, event.offsetY);
  // context.stroke();
};
const onFileChange = (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    context.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
};
const onDoubleClick = (event) => {
  const text = textInput.value;
  if (text !== "") {
    context.save();
    context.lineWidth = 1;
    // context.font = "48px serif";
    context.font = `${fontSize.value}px serif`;
    context.fillText(text, event.offsetX, event.offsetY);
    context.restore();
  }
};
const onSaveClick = (event) => {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
};
const onFontSizeClick = (event) => {
  context.font = event.target.value;
  // console.log(event.target.value);
};

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeBtnClick);
destoryBtn.addEventListener("click", onDestoryClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
fontSize.addEventListener("change", onFontSizeClick);
