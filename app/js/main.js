const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.body;

burgerBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  burgerBtn.classList.toggle('burger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  document.body.classList.toggle('overlay');
});

