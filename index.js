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
let intervalId = startTimer(60);

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

    document.getElementById("timer").textContent =
      addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);

    --timer;

    if (timer < 0) {
      clearInterval(intervalId);
      document.getElementById("timer").textContent = "Tempo scaduto!";
    }
  }, 1000);

  return intervalId;
}

btnReset.onclick,
  (btnSave.onclick = function () {
    clearInterval(intervalId); // Interrompi il timer corrente
    timer.textContent = "00:00:00"; // Reimposta il timer a "00:00:00"
    intervalId = startTimer(60); // Avvia un nuovo timer
  });
