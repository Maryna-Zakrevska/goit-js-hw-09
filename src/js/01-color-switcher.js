const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const bodyRef = document.querySelector("body");

let timerId = null;
stopButton.setAttribute("disabled", true);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener("click", () => {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    startButton.setAttribute("disabled", true);
    stopButton.removeAttribute("disabled");
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled", true);
});