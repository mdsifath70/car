// header
const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (this.scrollY > 50) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

// menu toggle
const navMenuBtn = document.querySelector('.nav__menu-btn');
const navMenuTok = document.querySelector('.header nav .nav__tok');
navMenuBtn.addEventListener('click', function () {
    navMenuTok.classList.toggle('show');
});

// swiper
function swiperSlider() {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
swiperSlider();
