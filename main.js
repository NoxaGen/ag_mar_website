const slider = document.querySelector('.photocopy-machine');
const h1 = document.querySelector('.photocopy-machine h1');

let counter = 1;

function changeSlide() {
    counter++;
    if (counter > 3) {
        counter = 1;
    }
    slider.style.backgroundImage = `url(./images/slider_backgrounds/${counter}.jpg)`;
};

setInterval(changeSlide, 3000);