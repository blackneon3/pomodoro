var pomodoroTimer = document.querySelector(".timer__clock");
var timerStart = document.querySelector(".timer__start");
var timerPause = document.querySelector(".timer__pause");
var timerReset = document.querySelector(".timer__reset");
var breakTime = document.querySelector(".timer__breakTime");
var mediumTime = document.querySelector(".timer__mediumTime");
var fullTimeButton = document.querySelector(".timer__fullTime");
var pomodoroTimerProgress = document.querySelector(".timer__progress-bar");
var timerMinutes;
var fullTime = timerMinutes * 60;
var remainingTime = fullTime;
var intervId;
var isCountingDown = false;
var min = Math.floor(fullTime / 60);
var sec = fullTime % 60;
var seconds = "".concat(sec < 10 ? "0" : '').concat(sec);
var minutes = "".concat(min < 10 ? "0" : '').concat(min);
pomodoroTimer.innerText = "".concat(minutes, ":").concat(seconds);
function countdown() {
    if (!isCountingDown || fullTime < 0) {
        return;
    }
    var min = Math.floor(fullTime / 60);
    var sec = fullTime % 60;
    var seconds = "".concat(sec < 10 ? "0" : '').concat(sec);
    var minutes = "".concat(min < 10 ? "0" : '').concat(min);
    pomodoroTimer.innerText = "".concat(minutes, ":").concat(seconds);
    var progress = ((remainingTime - fullTime) / remainingTime) * 100;
    pomodoroTimerProgress.style.width = "".concat(progress, "%");
    fullTime--;
    console.log(progress);
}
function pauseCountdown() {
    isCountingDown = false;
    clearInterval(intervId);
    timerPause.setAttribute('disabled', '');
    timerStart.removeAttribute('disabled');
}
;
timerStart.addEventListener("click", function () {
    if (!isCountingDown) {
        isCountingDown = true;
        intervId = setInterval(countdown, 1000);
        timerStart.setAttribute('disabled', '');
        timerPause.removeAttribute('disabled');
    }
    ;
});
timerPause.addEventListener("click", pauseCountdown);
timerReset.addEventListener("click", function () {
    isCountingDown = true;
    fullTime = timerMinutes * 60;
    countdown();
    pauseCountdown();
    timerPause.removeAttribute('disabled');
});
breakTime.addEventListener("click", function () {
    isCountingDown = true;
    timerMinutes = 5;
    fullTime = timerMinutes * 60;
    remainingTime = fullTime;
    countdown();
    pauseCountdown();
    timerPause.removeAttribute('disabled');
});
mediumTime.addEventListener("click", function () {
    isCountingDown = true;
    timerMinutes = 10;
    fullTime = timerMinutes * 60;
    remainingTime = fullTime;
    countdown();
    pauseCountdown();
    timerPause.removeAttribute('disabled');
});
fullTimeButton.addEventListener("click", function () {
    isCountingDown = true;
    timerMinutes = 25;
    fullTime = timerMinutes * 60;
    remainingTime = fullTime;
    countdown();
    pauseCountdown();
    timerPause.removeAttribute('disabled');
});
