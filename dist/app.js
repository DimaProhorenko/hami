const burgerBtn = document.querySelector('.burger');
const navEl = document.querySelector('.header__nav');
const headerEl = document.querySelector('.header');
const maxScroll = 200;

burgerBtn.addEventListener('click', e => {
    burgerBtn.classList.toggle('burger--active');
    navEl.classList.toggle('header__nav--active');
})

document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= maxScroll) {
        headerEl.classList.add('header--scrolled');
    } else {
        headerEl.classList.remove('header--scrolled');
    }
})