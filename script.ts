const pomodoroTimer = document.querySelector(".timer__clock") as HTMLParagraphElement;
const timerStart = document.querySelector(".timer__start") as HTMLButtonElement;
const timerPause = document.querySelector(".timer__pause") as HTMLButtonElement;
const timerReset = document.querySelector(".timer__reset") as HTMLButtonElement;
const breakTime = document.querySelector(".timer__breakTime") as HTMLButtonElement;
const mediumTime = document.querySelector(".timer__mediumTime") as HTMLButtonElement;
const fullTimeButton = document.querySelector(".timer__fullTime") as HTMLButtonElement;
const pomodoroTimerProgress = document.querySelector(".timer__progress-bar") as HTMLDivElement;
let timerMinutes;
let fullTime = timerMinutes * 60;
let remainingTime = fullTime;
let intervId;
let isCountingDown = false;

let min = Math.floor(fullTime / 60);
const sec = fullTime % 60

const seconds = `${sec < 10 ? "0" : ''}${sec}`;
const minutes = `${min < 10 ? "0" : ''}${min}`;

pomodoroTimer.innerText = `${minutes}:${seconds}`;

let progress = ((remainingTime - fullTime) / remainingTime) * 100;
  pomodoroTimerProgress.style.width = `${progress}%`;

function countdown() {
  if (!isCountingDown || fullTime < 0) {
    return;
  }
  let min = Math.floor(fullTime / 60);
  const sec = fullTime % 60

  const seconds = `${sec < 10 ? "0" : ''}${sec}`;
  const minutes = `${min < 10 ? "0" : ''}${min}`;

  pomodoroTimer.innerText = `${minutes}:${seconds}`;

  let progress = ((remainingTime - fullTime) / remainingTime) * 100;
  pomodoroTimerProgress.style.width = `${progress}%`;
  fullTime--;
}

function pauseCountdown() {
  isCountingDown = false;
  clearInterval(intervId);
  timerPause.setAttribute('disabled', '');
  timerStart.removeAttribute('disabled')
};

timerStart.addEventListener("click", function () {
  if (!isCountingDown) {
    isCountingDown = true;
    intervId = setInterval(countdown, 1000);
    timerStart.setAttribute('disabled', '');
    timerPause.removeAttribute('disabled');
  };
});

timerPause.addEventListener("click", pauseCountdown);

timerReset.addEventListener("click", function() {
  isCountingDown=true
  fullTime = timerMinutes * 60
  countdown();
  pauseCountdown();
  timerPause.removeAttribute('disabled')
});

breakTime.addEventListener("click", function() {
  isCountingDown=true
  timerMinutes = 5;
  fullTime = timerMinutes * 60
  countdown();
  pauseCountdown();
  timerPause.removeAttribute('disabled');
});

mediumTime.addEventListener("click", function() {
  isCountingDown=true
  timerMinutes = 10;
  fullTime = timerMinutes * 60
  countdown();
  pauseCountdown();
  timerPause.removeAttribute('disabled');
});

fullTimeButton.addEventListener("click", function() {
  isCountingDown=true
  timerMinutes = 25;
  fullTime = timerMinutes * 60
  countdown();
  pauseCountdown();
  timerPause.removeAttribute('disabled');
});