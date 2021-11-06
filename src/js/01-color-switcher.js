const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startButton.addEventListener('click', () => {timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor(); startButton.setAttribute("disabled", true)}, 1000)});


stopButton.addEventListener("click", () => {clearInterval(timerId); startButton.removeAttribute("disabled")});




