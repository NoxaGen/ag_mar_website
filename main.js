const slider = document.querySelector('.photocopy-machine');
const h1 = document.querySelector('.photocopy-machine h1');

let counter = 1;

function changeSlide() {
    counter++;
    if (counter > 3) {
        counter = 1;
    }
    slider.style.backgroundImage = `url(./images/slider_backgrounds/${counter}.jpg)`;

    if (counter === 1) {
        h1.textContent = 'Twój punkt ksero w Koninie';
    } else if (counter === 2) {
        h1.textContent = 'Oprawianie prac dyplomowych';
    } else if (counter === 3) {
        h1.textContent = '20 lat doświadczenia w branży';
    }
};

setInterval(changeSlide, 3000);