const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newyears = "1 January 2024";

function countdown() {
  const newyearsdate = new Date(newyears);
  const currentdate = new Date();

  const totalseconds = (newyearsdate - currentdate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = format(hours);
  minutesEl.innerHTML = format(minutes);
  secondsEl.innerHTML = format(seconds);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

// Update countdown every second
setInterval(countdown, 1000);
