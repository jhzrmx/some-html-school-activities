let currentDate = new Date();
const isJanOne = () => currentDate.getMonth() === 0 && currentDate.getDate() === 1;
const nextYear = isJanOne() ? currentDate.getFullYear() : (currentDate.getFullYear()+1);
const countdown = document.getElementById("countdown");
const countDownDate = new Date("Jan 1, " + nextYear + " 00:00:00").getTime();
// const bgMusic = new Audio("https://invidious.nerdvpn.de/latest_version?id=bNZ7H3n0rsM&itag=140");
const bgMusic = new Audio("bg-music.m4a");
const hapinyoyir = new Audio("hapinyoyir.aac");
let tickSound = null;

document.getElementById("next-year").innerHTML = nextYear;

const playNewYearSound = () => {
  hapinyoyir.loop = true;
  hapinyoyir.play();
  new Audio("sound.aac").play();
}

const currentInterval = setInterval(() => {
  if (tickSound != null) {
    tickSound.play();
  }

  currentDate = new Date();
  let distance = countDownDate - currentDate.getTime();
  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  let seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  countdown.innerHTML = hours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    countdown.innerHTML = "Happy New Year!";
    playNewYearSound();
    clearInterval(currentInterval);
  }
}, 1000);

const createMusicPrompt = () => {
  const modal = document.createElement('div');
  modal.id = 'musicModal';
  modal.innerHTML = `
    <div>
      <p style="font-size: 1.3em;">Play background music?</p>
      <button id="playMusic">Yes</button>
      <button id="dismissMusic">No</button>
    </div>
  `;

  document.body.appendChild(modal);
  document.getElementById("playMusic").addEventListener("click", () => {
    bgMusic.loop = true;
    bgMusic.play();
    if (isJanOne()) {
      playNewYearSound();
    }
    document.body.removeChild(modal);
  });

  document.getElementById("dismissMusic").addEventListener("click", () => {
    tickSound = new Audio("tick.aac");
    if (isJanOne()) {
      playNewYearSound();
    }
    document.body.removeChild(modal);
  });
};

setTimeout(() => {
  createMusicPrompt();
}, 1500);