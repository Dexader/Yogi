//Burger

let menuBtn = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__body');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

let desktopMenu = document.querySelector('.menu__body');

function transferringContent(x) {
	if(x.matches) {
		menu.innerHTML = desktopMenu.innerHTML + menu.innerHTML;
	} else {}
}

const mediaQuery = window.matchMedia('(max-width: 767.98px)');

transferringContent(mediaQuery);

mediaQuery.addEventListener('matches', transferringContent);