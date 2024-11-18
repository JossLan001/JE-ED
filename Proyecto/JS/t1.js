const video = document.getElementById('myVideo');
const sources = video.querySelectorAll('source');
let currentSourceIndex = 0;

video.addEventListener('ended', () => {
  currentSourceIndex++;
  if (currentSourceIndex < sources.length) {
    video.src = sources[currentSourceIndex].src;
    video.load();
    video.play();
  }
});