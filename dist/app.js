const burgerBtn = document.querySelector('.burger');
const navEl = document.querySelector('.nav');

burgerBtn.addEventListener('click', e => {
    burgerBtn.classList.toggle('active');
    navEl.classList.toggle('active');
})