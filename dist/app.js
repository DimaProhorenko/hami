const burgerBtn = document.querySelector('.burger');
const navEl = document.querySelector('.header__nav');
console.log(burgerBtn);

burgerBtn.addEventListener('click', e => {
    burgerBtn.classList.toggle('burger--active');
    navEl.classList.toggle('header__nav--active');
})