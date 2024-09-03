const slider = document.querySelector('.slider__container');
const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');
let currentIndex = 0;

function updateSliderPosition() {
  const slideWidth = document.querySelector('.medico_info').clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

leftButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

rightButton.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

window.addEventListener('resize', updateSliderPosition);