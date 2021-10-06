const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function moveSecondHand(date) {
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function moveMinuteHand(date) {
  const minutes = date.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

function moveHourHand(date) {
  const hours = date.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setDate() {
  const now = new Date();
  moveSecondHand(now);
  moveMinuteHand(now);
  moveHourHand(now);
}

setInterval(setDate, 1000);