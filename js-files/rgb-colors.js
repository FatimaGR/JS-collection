const color = document.getElementById("rgb-color");

const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const numRed = document.getElementById("r-num");
const numGreen = document.getElementById("g-num");
const numBlue = document.getElementById("b-num");

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

numRed.innerText = red;
numGreen.innerText = green;
numBlue.innerText = blue;

function updateColor(red, green, blue){
  const result = `rgb(${red}, ${green}, ${blue})`;
  color.style.backgroundColor = result;
}

inputRed.addEventListener("change", (e) => {
  red = e.target.value;
  numRed.innerText = red;
  updateColor(red, green, blue);
})

inputGreen.addEventListener("change", (e) => {
  green = e.target.value;
  numGreen.innerText = green;
  updateColor(red, green, blue);
})

inputBlue.addEventListener("change", (e) => {
  blue = e.target.value;
  numBlue.innerText = blue;
  updateColor(red, green, blue);
})