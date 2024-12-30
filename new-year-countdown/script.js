const nextYear = new Date().getFullYear() + 1;
const countdown = document.getElementById("countdown");
const countDownDate = new Date("Jan 1, " + nextYear + " 00:00:00").getTime();

document.getElementById("next-year").innerHTML = nextYear;

const displayNewYear = () => {
  const audio = new Audio("hapinyoyir.aac");
  audio.loop = true;
  audio.play();
  new Audio("sound.aac").play();
  countdown.innerHTML = "Happy New Year!";
}
const x = setInterval(() => {
  new Audio("tick.aac").play();
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let nowDate = new Date();
  if (nowDate.getMonth() === 0 && nowDate.getDate() === 1) {
    displayNewYear();
    return;
  }

  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  let seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  countdown.innerHTML = hours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    displayNewYear();
    clearInterval(x);
  }
}, 1000);