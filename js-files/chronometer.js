const secondsText = document.getElementById("seconds");
const minutesText = document.getElementById("minutes");
const hoursText = document.getElementById("hours");

const buttonPlayStop = document.getElementById("play-stop");
const buttonReset = document.getElementById("reset");

let [hours, minutes, seconds] = [0, 0, 0];
let timeInterval;
let chronometerStatus = "stopped";

function updateChronometer(){
  seconds++;
  if (seconds == 60){
    seconds = 0;
    minutes++;

    if (minutes == 60){
      minutes = 0;
      hours++;
    }
  }

  secondsText.innerText = seconds;
  minutesText.innerText = minutes;
  hoursText.innerText = hours;
}

buttonPlayStop.addEventListener("click", () => {
  if (chronometerStatus == "stopped"){
    timeInterval = window.setInterval(updateChronometer, 1000);
    buttonPlayStop.innerText = "Stop";
    chronometerStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    buttonPlayStop.innerText = "Play";
    chronometerStatus = "stopped";
  }
})

buttonReset.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  secondsText.innerText = 0;
  minutesText.innerText = 0;
  hoursText.innerText = 0;
  buttonPlayStop.innerText = "Play";
})