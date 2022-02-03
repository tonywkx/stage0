
//changeImage

const allItems = document.querySelectorAll('.nav-item');
const navSolovey = document.querySelector('.solovey-item');
const image = document.querySelector('.main');
const navDrozd = document.querySelector('.drozd-item');
const navZarynka = document.querySelector('.zarynka-item');
const navJavoronok = document.querySelector('.javoronok-item');
const navSlavka = document.querySelector('.slavka-item');
const logo = document.querySelector('.logo')

navSolovey.addEventListener('click', () =>{
    image.style.backgroundImage = 'url("./assets/img/solovey.jpg")';
    let isPlay = false;
    const audio = new Audio();
    const playPauseBtn = document.querySelector('.audio-button');
    function playAudio() {
        audio.src = './assets/audio/solovey.mp3'
        audio.currentTime = 0;
        if(!isPlay){
            audio.play();
            isPlay = true;
        } else {audio.pause();
            isPlay = false;
        }
    
    navSolovey.classList.add('nav-item-active');
}
playPauseBtn.addEventListener('click', playAudio);
    
});



navDrozd.addEventListener('click', () =>{
    image.style.backgroundImage = 'url("./assets/img/drozd.jpg")';
    let isPlay = false;
    const audio = new Audio();
    const playPauseBtn = document.querySelector('.audio-button');
    function playAudio() {
        audio.src = './assets/audio/drozd.mp3'
        audio.currentTime = 0;
        if(!isPlay){
            audio.play();
            isPlay = true;
        } else {audio.pause();
            isPlay = false;
        }
}
playPauseBtn.addEventListener('click', playAudio);
});

navZarynka.addEventListener('click', () =>{
    image.style.backgroundImage = 'url("./assets/img/zarynka.jpg")';
    let isPlay = false;
    const audio = new Audio();
    const playPauseBtn = document.querySelector('.audio-button');
    function playAudio() {
        audio.src = './assets/audio/zarynka.mp3'
        audio.currentTime = 0;
        if(!isPlay){
            audio.play();
            isPlay = true;
        } else {audio.pause();
            isPlay = false;
        }
}
playPauseBtn.addEventListener('click', playAudio);
});

navJavoronok.addEventListener('click', () =>{
    image.style.backgroundImage = 'url("./assets/img/javoronok.jpg")';
    let isPlay = false;
    const audio = new Audio();
    const playPauseBtn = document.querySelector('.audio-button');
    function playAudio() {
        audio.src = './assets/audio/javoronok.mp3'
        audio.currentTime = 0;
        if(!isPlay){
            audio.play();
            isPlay = true;
        } else {audio.pause();
            isPlay = false;
        }
}
playPauseBtn.addEventListener('click', playAudio);
});

navSlavka.addEventListener('click', () =>{
    image.style.backgroundImage = 'url("./assets/img/slavka.jpg")';
    let isPlay = false;
    const audio = new Audio();
    const playPauseBtn = document.querySelector('.audio-button');
    function playAudio() {
        audio.src = './assets/audio/slavka.mp3'
        audio.currentTime = 0;
        if(!isPlay){
            audio.play();
            isPlay = true;
        } else {audio.pause();
            isPlay = false;
        }
}
playPauseBtn.addEventListener('click', playAudio);
});

logo.addEventListener('click', () =>{
    image.style.backgroundImage = 'url("./assets/img/logo.jpg")';
});



//playAudio

let isPlay = false;
const audio = new Audio();
const playPauseBtn = document.querySelector('.audio-button');

function playAudio() {
    audio.src = './assets/audio/logo.mp3'
    audio.currentTime = 0;
    if(!isPlay){
        audio.play();
        isPlay = true;
    } else {audio.pause();
        isPlay = false;
    }
}
playPauseBtn.addEventListener('click', playAudio);



//changeButtonImage


const button = document.querySelector('.audio-button');

function toggleBtn() {
  button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);






