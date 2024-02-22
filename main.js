const body = document.querySelector("body");
const modeButton = document.querySelector(".mode-button");
const optionsButton = document.querySelector(".options-button");
const options = document.querySelector(".options");

load();

modeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  store(body.classList.contains('dark-mode'));
});

optionsButton.addEventListener("click", () => {
  options.classList.toggle("visible");
})

// dark mode in local storage
function load(){
  const darkMode = localStorage.getItem('dark-mode');

  if(!darkMode){
    store('false');
  } else if(darkMode == "true"){
    body.classList.add('dark-mode');
  }
}

function store(value){
  localStorage.setItem('dark-mode', value)
}