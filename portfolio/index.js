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
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5/5`)



(function () {
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
} ());