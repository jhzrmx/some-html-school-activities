const currentDate = new Date();
const isJanOne = currentDate.getMonth() === 0 && currentDate.getDate() === 1;
const nextYear = currentDate.getFullYear() + 1;
const countdown = document.getElementById("countdown");
const countDownDate = new Date("Jan 1, " + nextYear + " 00:00:00").getTime();
const bgMusic = new Audio("https://invidious.nerdvpn.de/latest_version?id=bNZ7H3n0rsM&itag=140");
let tickSound = null;

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

  if (tickSound != null) {
    tickSound.play();
  }

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
}, 333);

const createMusicPrompt = () => {
  const modal = document.createElement('div');
  modal.id = 'musicModal';
  modal.innerHTML = `
    <div>
      <p style="font-size: 1.2em;">Do you want to play background music?</p>
      <button id="playMusic">Yes</button>
      <button id="dismissMusic">No</button>
    </div>
  `;

  document.body.appendChild(modal);
  document.getElementById("playMusic").addEventListener("click", () => {
    bgMusic.loop = true;
    bgMusic.play();
    document.body.removeChild(modal);
  });

  document.getElementById("dismissMusic").addEventListener("click", () => {
    tickSound = new Audio("tick.aac");
    document.body.removeChild(modal);
  });
};

setTimeout(() => {
  createMusicPrompt();
}, 1000);