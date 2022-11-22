//Burger

let menuBtn = document.querySelector('.burger__button');
let menu = document.querySelector('.burger__body');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});