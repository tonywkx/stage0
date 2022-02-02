

/*const navSolovey = document.querySelector('.solovey-item');
const navDrozd = document.querySelector('.drozd-item');
const navZarynka = document.querySelector('zarynka-item');
const navJavoronok = document.querySelector('.javoronok-item');
const navSlavka = document.querySelector('.slavka-item');
const logo = document.querySelector('.logo')*/


navSolovey.addEventListener('click', () =>{
    mainPic.classList.add('solovey-active');
});
navDrozd.addEventListener('click', () =>{
    mainPic.classList.add('drozd-active');
});

const navLinks = document.querySelectorAll('.nav-item');
const mainPic = document.querySelector('.main');
const navList = document.querySelector('.nav-list')

const portfolioBtn = document.querySelector('.button-container');
const portfolioBtns = document.querySelectorAll('.portfolio-button');

const changeImage = function changeImage(event){
    if(event.target.classList.contains('nav-item')){
        mainPic.classList((img, index) => img.src = `assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioBtns.forEach((button) => button.classList.remove('portfolio-button-active'));
        event.target.classList.add('portfolio-button-active');
    }    
} 
portfolioBtn.addEventListener('click',  changeImage);  