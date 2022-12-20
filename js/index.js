const tabsButtons = document.querySelectorAll('.advantages-btn');
const tabsItems = document.querySelectorAll('.advantages-content');

tabsButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.advantages-btn.is-active').classList.remove('is-active');
    document.querySelector('.advantages-content.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    tabsItems[index].classList.add('is-active');
  });
})

const sliderButtons = document.querySelectorAll('.slide-radio');
const sliderItems = document.querySelectorAll('.slider-item');

const sliderButtonNext = document.querySelector('.slider-next');
const sliderButtonPrev = document.querySelector('.slider-previous');

let slideIndex = 0;

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    slideIndex = index;
    evt.preventDefault();
    document.querySelector('.slide-radio.is-active').classList.remove('is-active');
    document.querySelector('.slider-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderItems[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[slideIndex].classList.remove('is-active');
  sliderItems[slideIndex].classList.remove('is-active');
  if (slideIndex === sliderButtons.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }
  sliderButtons[slideIndex].classList.add('is-active');
  sliderItems[slideIndex].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[slideIndex].classList.remove('is-active');
  sliderItems[slideIndex].classList.remove('is-active');
  if (!slideIndex) {
    slideIndex = sliderButtons.length - 1;
  } else {
    slideIndex = slideIndex - 1;
  }
  sliderButtons[slideIndex].classList.add('is-active');
  sliderItems[slideIndex].classList.add('is-active');
});


const modalOpenBtn = document.querySelector('.rare-product-btn');
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');

modalOpenBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
modal.classList.add('is-open');
});

modalCloseBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
  });

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});
