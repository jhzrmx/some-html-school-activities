const currentDate = new Date();
const isJanOne = currentDate.getMonth() === 0 && currentDate.getDate() === 1;
const nextYear = currentDate.getFullYear() + 1;
const countdown = document.getElementById("countdown");
const countDownDate = new Date("Jan 1, " + nextYear + " 00:00:00").getTime();

document.getElementById("next-year").innerHTML = isJanOne ? (nextYear-1) : nextYear;

const displayNewYear = () => {
  const audio = new Audio("hapinyoyir.aac");
  audio.loop = true;
  audio.play();
  new Audio("sound.aac").play();
  countdown.innerHTML = "Happy New Year!";
}

const currentInterval = setInterval(() => {
  if (isJanOne) {
    displayNewYear();
    clearInterval(currentInterval);
  }
  new Audio("tick.aac").play();
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  let seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  countdown.innerHTML = hours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    displayNewYear();
    clearInterval(currentInterval);
  }
}, 1000);