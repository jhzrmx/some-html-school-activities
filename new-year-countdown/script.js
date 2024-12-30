const currentDate = new Date();
const isJanOne = currentDate.getMonth() === 0 && currentDate.getDate() === 1;
const nextYear = currentDate.getFullYear() + 1;
const countdown = document.getElementById("countdown");
const countDownDate = new Date("Jan 1, " + nextYear + " 00:00:00").getTime();
const bgMusic = new Audio("https://invidious.nerdvpn.de/latest_version?id=bNZ7H3n0rsM&itag=140");

document.getElementById("next-year").innerHTML = isJanOne ? (nextYear-1) : nextYear;

const displayNewYear = () => {
  const hapinyoyir = new Audio("hapinyoyir.aac");
  hapinyoyir.loop = true;
  hapinyoyir.play();
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

setTimeout(() => {
  if (confirm("Play background music?")) {
    bgMusic.loop = true;
    bgMusic.play();
  }
}, 3000);