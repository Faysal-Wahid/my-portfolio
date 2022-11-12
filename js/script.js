var typed = new Typed(".auto-type", {
	strings: ["Web Developer", "Web Designer", "Researcher", "Musician"],
	typeSpeed: 80,
	backSpeed: 60,
	loop: true
})

var typed2 = new Typed(".auto-type2", {
	strings: ["Web Developer", "Web Designer", "Researcher", "Musician"],
	typeSpeed: 80,
	backSpeed: 60,
	loop: true
})

var typed3 = new Typed(".auto-type3", {
	strings: ["Web Developer", "Web Designer", "Researcher", "Musician"],
	typeSpeed: 80,
	backSpeed: 60,
	loop: true
})

const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};