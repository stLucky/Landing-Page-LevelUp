'use strict';

const buttonForward = document.querySelector('.slider__button--forward');
const buttonBack = document.querySelector('.slider__button--back');

let slideIndex = 1;


const showSlides = (n) => {
  const slides = document.querySelectorAll('.slider__item');

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slider__item--current');
  }

  slides[slideIndex - 1].classList.add('slider__item--current');
}

const showNextSlide = () => {
  showSlides(slideIndex += 1);
}

const showBackSlide = () => {
  showSlides(slideIndex -= 1);
}

buttonForward.addEventListener('click', (evt) => {
  evt.preventDefault();

  showNextSlide();
});

buttonBack.addEventListener('click', (evt) => {
  evt.preventDefault();

  showBackSlide();
});
