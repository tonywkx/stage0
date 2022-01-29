console.log(`Вёрстка валидная 10/10\n 
Вёрстка семантическая 20/20\n 
В коде странице присутствуют следующие элементы\n<header>, <main>, <footer>, 2/2\n
шесть элементов <section> (по количеству секций) 2/2</section>\n
только один заголовок <h1> 2/2\n
пять заголовков <h2>  2/2\n
один элемент <nav> (панель навигации) 2/2\n
два списка ul > li > a (панель навигации, ссылки на соцсети) 2/2\n
десять кнопок <button> +2два инпута: <input type="email"> и <input type="tel"> 2/2\n
один элемент <textarea> 2/2\n
три атрибута placeholder 2/2\n
Вёрстка соответствует макету 48/48\n
блок <header> +6/6\n
секция hero +6/6\n
секция skills +6/6\n
секция portfolio +6/6\n
секция video +6/6\n
секция price +6/6\n
секция contacts +6/6\n
блок <footer> +6/6\n
Требования к css + 12/12\n
для построения сетки используются флексы или гриды +2/2\n
при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2/2\n
фоновый цвет тянется на всю ширину страницы +2/2\n
иконки добавлены в формате .svg. SVG может быть добавлен любым способом. +2/2\n
изображения добавлены в формате .jpg +2/2\n
есть favicon +2/2\n
Интерактивность, реализуемая через css +20/20\n
плавная прокрутка по якорям +5/5\n
ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5/5\n
интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5/5\n
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5/5
Вёрстка соответствует макету. Ширина экрана 768px +48/47\n
блок <header> +6/5\n
секция hero +6/6\n
секция skills +6/6\n
секция portfolio +6/6\n
секция video +6/6\n
секция price +6/6\n
секция contacts +6/6\n
блок <footer> +6/6\n
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15/15\n
нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5/5\n
нет полосы прокрутки при ширине страницы от 768рх до 480рх +5/5\n
нет полосы прокрутки при ширине страницы от 480рх до 320рх +5/5\n
На ширине экрана 768рх и меньше реализовано адаптивное меню +22/22\n
при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2/2\n
при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4/4\n
высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4/4\n
при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4/4\n
бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2/2\n
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2/2\n
при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4/4\n total 74/75`)


//бургер

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header-nav-close');
const menuLinks = document.querySelectorAll('.header__link');
burgerItem.addEventListener('click', () =>{
    menu.classList.add('header-nav-active');
});
menuCloseItem.addEventListener('click', () =>{
    menu.classList.remove('header-nav-active');
});
if (window.innerWidth <= 768){
    for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () =>{
            menu.classList.remove('header-nav-active');
        });    
    };
};


//смена фото

const portfolioImages = document.querySelectorAll('.portfolio-photo-pic');
const portfolioBtn = document.querySelector('.button-container');
const portfolioBtns = document.querySelectorAll('.portfolio-button');
const changeImage = function changeImage(event){
    if(event.target.classList.contains('portfolio-button')){
        portfolioImages.forEach((img, index) => img.src = `assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioBtns.forEach((button) => button.classList.remove('portfolio-button-active'));
        event.target.classList.add('portfolio-button-active');
    }    
} 
portfolioBtn.addEventListener('click',  changeImage);    



//кэширование

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      seasons.forEach(() => img.src = `./assets/img/${seasons[i]}/${i}.jpg`);
    }
  }
  preloadImages();


//language//  

import i18Obj from './translate.js';

const ruLanguage = document.querySelector('.ru');
const enLanguage = document.querySelector('.en');
const languageBtns = document.querySelectorAll('.language-button');

function getTranslate (language) {
    const data = document.querySelectorAll("[data-i18]");
    data.forEach((element) => {
        element.textContent = i18Obj[language][element.dataset.i18];
    });
    languageBtns.forEach((element) => element.classList.add('language-button-active'));
    
    const currentElement = document.querySelectorAll('.form-input');
    if (currentElement.placeholder) {
        currentElement.placeholder = i18Obj[language][element.dataset.i18];
        currentElement.textContent = '';
      }
}
ruLanguage.addEventListener('click', () => {getTranslate('ru')});
enLanguage.addEventListener('click', () => {getTranslate('en')});



//смена темы

const themeBtn = document.querySelector('.theme-button');
const themePic = document.querySelector('.theme-pic');

themeBtn.addEventListener('click', () => {
   themePic.src = "./assets/svg/carbon_sun.svg";
   if(themePic.src = "./assets/svg/carbon_sun.svg"){
    themeBtn.addEventListener('click', () => {
        themePic.src = "./assets/svg/Vector.svg"});
   }
});




