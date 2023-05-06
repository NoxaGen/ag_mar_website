const slider = document.querySelector('.photocopy-machine');
const h1 = document.querySelector('.photocopy-machine h1');

let counter = 1;

function changeSlide() {
    counter++;
    if (counter > 3) {
        counter = 1;
    }

    if (counter === 1) {
        h1.textContent = 'Twój punkt ksero w Koninie';
    } else if (counter === 2) {
        h1.innerHTML = ' <a href="https://www.google.com/maps/dir//Kolska+8,+62-500+Konin/@52.2042904,18.1861445,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471b316a6f586ecb:0xe16da4fc2ed547c6!2m2!1d18.2561843!2d52.2043128"><i class="fas fa-map-marker-alt"></i> Adres: Kolska 8, Stary Konin</a>';
    } else if (counter === 3) {
        h1.textContent = '20 lat doświadczenia w branży';
    }
    if (screen.width < 1198) {
        slider.style.backgroundImage = `url(./images/slider_backgrounds/${counter}.jpg)`;
    } else if (screen.width >= 1198) {
        slider.style.backgroundImage = `url(./images/slider_backgrounds_big_reso/${counter}.jpg)`;
    }
};

setInterval(changeSlide, 5000);

const button = document.querySelector('.show-hours button');
    const showHours = document.querySelector('.show-hours');
    const buttonIcon = button.querySelector('i');

    button.addEventListener('click', () => {
      showHours.classList.toggle('hours-active');

      if (showHours.classList.contains('hours-active')) {
        buttonIcon.className = 'fas fa-times-circle';
      } else {
        buttonIcon.className = 'fas fa-house-user';
      }
    });