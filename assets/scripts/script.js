const scoreHeading = document.querySelector("#score")
const calculationHeading = document.querySelector("#calculation")
const inputEl = document.querySelector("#input")
const btnEl = document.querySelector("#btn")
const formEl = document.querySelector("#form");
const scoreEl = document.querySelector("#score");

const number1 = Math.ceil(Math.random()*10)
const number2 = Math.ceil(Math.random()*10)
const correctAnswer = number1 * number2;


formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  
})

function getRandomNumbers(text) {
 return calculationHeading.innerText = `${number1} x ${number2} = ?`
}

// function getAnswer(inputValue) {
// }

getRandomNumbers(calculationHeading);