const hexColor = document.getElementById("hex-color");
const hexNum = document.getElementById("hex-num");
const cbutton = document.getElementById("cbutton");

function generateHexColor(){
  let digits = "0123456789ABCDEF";
  let newColor = "#";

  for(let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * 16);
    newColor += digits[index];
  }
  return newColor;
}

cbutton.addEventListener("click", function(){
  let result = generateHexColor();
  hexNum.textContent = result;
  hexColor.style.backgroundColor = result;
})