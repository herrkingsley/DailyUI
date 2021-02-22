const menuBtn = document.querySelector('.burgerMenu');
const menuShow = document.querySelector('.main-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuShow.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuShow.classList.remove('open');
    menuOpen = false;
  }
});
