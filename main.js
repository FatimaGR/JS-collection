const body = document.querySelector("body");
const darkMode = document.querySelector(".mode-button");
const optionsButton = document.querySelector(".options-button");
const options = document.querySelector(".options");

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

optionsButton.addEventListener("click", () => {
  options.classList.toggle("visible");
})