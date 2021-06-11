import Carousel from "../node_modules/hero-carousel/index";
import changePicture from "./modules/changePicture";
import './modules/map'
import hideHeader from "./modules/hideHeader";
import smoothScroll from "./modules/smoothScroll";
// import './modules/instafeed'
import './modules/hamburger'


const catalogue = document.querySelector('.header__menu :first-child')
const dropdown = document.querySelector('.dropdown')

const catDrop = [catalogue, dropdown]

catDrop.forEach(item => {
    item.addEventListener('mouseenter', () => {
        dropdown.style.display = 'flex'
        dropdown.classList.remove( 'animate__fadeOutRight', 'animate__faster')
        dropdown.classList.add('animate__fadeInRight', 'animate__faster')
    });
});


catDrop.forEach(item => {
    item.addEventListener('mouseleave', () => {
        dropdown.classList.remove('animate__fadeInRight', 'animate__faster')
        dropdown.classList.add('animate__fadeOutRight', 'animate__faster')
    });
});





new Carousel(document.querySelector(".carousel"), 5000);
changePicture('.category__item_img-wrapper', '.category__item_img');
hideHeader('header');

// smoothScroll('header__menu_link');
// smoothScroll('arrow-top');
// smoothScroll('header__side-menu-item-link');
// smoothScroll('dropdown__item_link');






