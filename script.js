setInterval(update, 1000);

const secondElement = document.querySelector(".second");
const minuteElement = document.querySelector(".minute");
const hourElement = document.querySelector(".hour");

function update() {
  const date = new Date();
  const sec = date.getSeconds();
  const minute = date.getMinutes() + sec / 60;
  const hour = date.getHours() + minute / 60;
  const secAngle = sec * 6;
  const minuteAngle = minute * 6;
  const hourAngle = hour * 30;
  setAngle(secondElement, secAngle);
  setAngle(minuteElement, minuteAngle);
  setAngle(hourElement, hourAngle);
}

function setAngle(element, angle) {
  element.style.setProperty("--angle", `${angle}deg`);
}
