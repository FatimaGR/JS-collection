const author = document.getElementById("author");
const quote = document.getElementById("quote");
const button = document.getElementById("button");

function generateIndex(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function changeQuote() {
  let index = generateIndex(0, quotes.length);
  author.innerText = quotes[index].author;
  quote.innerText = `"${quotes[index].quote}"`;
  console.log("hola")
}

changeQuote();

button.addEventListener("click", changeQuote)