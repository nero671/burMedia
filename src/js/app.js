/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
    isWebp,
    headerFixed,
    togglePopupWindows,
    addTouchClass,
    addLoadedClass,
    submitForm,
} from './modules';

import { accordion, accordion2, accordion3} from './helpers/elementsNodeList';

import { tabs } from "./modules/tabs.js";
import { useAccordion } from "./modules/accordion.js";
import { simpleAccordion } from "./modules/simple-accordion.js";

import BurgerMenu from './modules/BurgerMenu';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, { Navigation, Pagination } from 'swiper';
import {dropdown} from "./modules/dropdown.js";
import formValidation from "./modules/validationForm.js";
Swiper.use([Navigation]);
Swiper.use([Pagination]);

var casesSwiper = new Swiper('.cases-slider', {
    speed: 600,
    loop: true,
    slidesPerView: 1.01,
    spaceBetween: 20,
    centeredSlides: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.cases .arrow-right',
        prevEl: '.cases .arrow-left'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 1.01,
        }
    }
});

var brandsSwiper = new Swiper('.brands-slider', {
    speed: 600,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
        nextEl: '.brands .arrow-right',
        prevEl: '.brands .arrow-left'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        }
    }
});

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});





setTimeout(() => {
    const casesSlider = document.querySelectorAll('.cases-slider .swiper-slide');

    console.log(casesSlider)

    casesSlider.forEach((item) => {
        const casesSliderTabsLinks = item.querySelector('.cases-slider__tabs-links');
        const casesSliderTabsLink = item.querySelectorAll('.cases-slider__tab');
        const casesSliderTabsContentItem = item.querySelectorAll('.cases-slider__tabs-content_item');

        tabs(casesSliderTabsLinks, casesSliderTabsLink, casesSliderTabsContentItem);
    });
}, 100);




useAccordion(accordion);
simpleAccordion(accordion2);
simpleAccordion(accordion3);

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { // Если прокручено больше 50 пикселей
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

dropdown();
formValidation();
