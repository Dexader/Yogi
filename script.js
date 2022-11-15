//Burger

let menuBtn = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__body');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

const mediaQuery = window.matchMedia('(max-width: 767.98px)');
let desktopMenu = document.querySelector('.menu__body');
if (mediaQuery.matches) {
	menu.innerHTML = desktopMenu.innerHTML + menu.innerHTML;
}