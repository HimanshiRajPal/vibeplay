const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const songList = document.querySelectorAll("#songList li");

let currentSong = 0;
let songs = Array.from(songList).map(li => li.getAttribute("data-src"));

// Play Song
function playSong(index) {
  currentSong = index;
  audio.src = songs[currentSong];
  audio.play();
}

// Event Listeners
playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  playSong(currentSong);
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  playSong(currentSong);
});

// Click on song list
songList.forEach((li, index) => {
  li.addEventListener("click", () => playSong(index));
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek song using progress bar
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
