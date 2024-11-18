const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


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