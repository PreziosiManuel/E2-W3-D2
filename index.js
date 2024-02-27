const form = document.getElementById("form");
const input = document.getElementById("inputName");
const btnSave = document.getElementById("btn-save");
const btnReset = document.getElementById("btn-reset");

form.onsubmit = function (e) {
  e.preventDefault();
  const name = input.value;
  console.log(name);

  localStorage.setItem("name", JSON.stringify(input.value));
  input.value = "";
};

btnReset.onclick = function () {
  input.value = "";
  localStorage.removeItem("name");
};

// TIMER

const timer = document.getElementById("timer");
let intervalId;

function addLeadingZero(value) {
  return value < 10 ? "0" + value : value;
}

function startTimer(duration) {
  let timer = duration;
  let hours, minutes, seconds;

  const intervalId = setInterval(function () {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor((timer % 3600) / 60);
    seconds = timer % 60;

    timer.textContent = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);

    --timer;

    if (timer < 0) {
      clearInterval(intervalId);
      timer.textContent = "Time's up!";
    }
  }, 1000);

  return intervalId;
}

btnSave.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = startTimer;
});

btnReset.addEventListener("click", function () {
  clearInterval(intervalId);
});
startTimer(60);
