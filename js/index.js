// Spoiler
import spoiler from './modules/spoiler.js';
spoiler();

// Animation
const animationElements = document.querySelectorAll('.animation');
if (animationElements.length > 0) {
	const animate = () => {
		for (let i = 0; i < animationElements.length; i++) {
			const element = animationElements[i];
			const offsetHeight = element.offsetHeight;
			const topSetHeight = element.getBoundingClientRect().top + window.scrollY;
			let totalHeight = window.innerHeight - offsetHeight / 4;
			if (offsetHeight > window.innerHeight) {
				totalHeight = window.innerHeight - window.innerHeight / 4;
			}
			if (
				scrollY > topSetHeight - totalHeight &&
				scrollY < topSetHeight + offsetHeight
			) {
				element.classList.add('active');
			}
		}
	};
	window.addEventListener('scroll', animate);
	setTimeout(animate, 300);
}

// Menu burger
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.header-menu');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
});

menuLink.forEach(e => {
	e.addEventListener('click', () => {
		document.body.classList.remove('lock');
		menuIcon.classList.remove('active');
		menuList.classList.remove('active');
	});
});

// Header anchor
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)
	anchor.addEventListener('click', e => {
		e.preventDefault();
		document
			.querySelector(anchor.getAttribute('href'))
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});

// Show or Hide the "to top-arrow"
window.onscroll = function () {
	document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000
		? (document.querySelector('.arrow').style.display = 'block')
		: (document.querySelector('.arrow').style.display = 'none');
};

// Youtube video optimization
const youtubeEl = document.querySelector('.youtube');
const image = new Image();
const embed = youtubeEl.dataset.embed;
image.src = `https://img.youtube.com/vi/${embed}/sddefault.jpg`;
image.addEventListener('load', () => youtubeEl.appendChild(image));

youtubeEl.addEventListener('click', function () {
	const frame = document.createElement('iframe');
	frame.setAttribute('frameborder', '0');
	frame.setAttribute('allowfullscreen', '');
	frame.setAttribute(
		'src',
		`https://www.youtube.com/embed/${embed}?autoplay=1&mute=1`,
	);
	this.innerHTML = '';
	this.appendChild(frame);
});
