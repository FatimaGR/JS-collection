const body = document.querySelector("body");
const darkMode = document.querySelector("#mode-button");

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});