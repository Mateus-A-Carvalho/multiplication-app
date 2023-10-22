const scoreHeading = document.querySelector("#score")
const calculationHeading = document.querySelector("#calculation")
const inputEl = document.querySelector("#input")
const btnEl = document.querySelector("#btn")
const formEl = document.querySelector("#form");
const scoreEl = document.querySelector("#score");

const number1 = Math.ceil(Math.random()*10)
const number2 = Math.ceil(Math.random()*10)
const correctAnswer = number1 * number2;

let score = JSON.parse(localStorage.getItem("score"));
if(!score) {
  score = 0;
}

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  if(userAnswer === correctAnswer) {
    score++;
    updateLocalStorage()
  } else {
    score--
    updateLocalStorage()
  }
})

function updateScore() {
  scoreHeading.innerHTML = `SCORE: ${score}`
}

function getRandomNumbers(text) {
 return calculationHeading.innerText = `${number1} x ${number2} = ?`
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}

getRandomNumbers(calculationHeading);