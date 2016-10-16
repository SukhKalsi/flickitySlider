import Flickity from 'flickity';
require('flickity-as-nav-for');
require('./main.scss');

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel__content');
  const carouselThumbs = document.querySelector('.carousel__thumbs');
  
  const flkty = new Flickity( carousel, {
    draggable: true,
    wrapAround: true,
    lazyLoad: true,
    pageDots: false,
    prevNextButtons: false
  });

  const nav = new Flickity(carouselThumbs, {
    draggable: true,
    asNavFor: carousel,
    contain: true,
    pageDots: false,
    prevNextButtons: false
  });
});
