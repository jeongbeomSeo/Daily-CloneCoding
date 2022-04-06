const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const targetDay = new Date();
targetDay.setDate(targetDay.getDate() + 12);

let count = setInterval(function () {
  const desDay = targetDay - new Date();
  const days = Math.floor(desDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((desDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((desDay % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((desDay % (1000 * 60)) / 1000);
  //  그냥 나누면 안된다는 것 익혀두기.

  console.log("time");

  day.innerHTML = getTrueNumber(days);
  hour.innerHTML = getTrueNumber(hours);
  minute.innerHTML = getTrueNumber(minutes);
  second.innerHTML = getTrueNumber(seconds);
}, 1000);

function getTrueNumber(x) {
  if (x < 10) return "0" + x;
  else return x;
}
