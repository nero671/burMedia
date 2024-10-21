const html = document.documentElement;
const body = document.body;
const pageWrapper = document.querySelector('.page');
const header = document.querySelector('.header');
const firstScreen = document.querySelector('[data-observ]');
const burgerButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const lockPaddingElements = document.querySelectorAll('[data-lp]');

const accordion = document.querySelector('.accordion');
const accordion2 = document.querySelector('.simple-accordion-wrapper');
const accordion3 = document.querySelector('.burger-menu__accordion');


export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  accordion,
  accordion2,
  accordion3
};
