const secondHand = document.querySelector(".second-hand");
const secondHand = document.querySelector(".second-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getSeconds();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getSeconds();
  const hourDegrees = (seconds / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  setInterval(setDate, 1000); // equal to 1s

  setDate();
}
