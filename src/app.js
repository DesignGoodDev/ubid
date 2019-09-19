import 'bootstrap';
import './scss/style.scss';

// if (module.hot) {
// 	module.hot.accept()
// }

// const root = document.createElement("div")
// root.innerHTML = `<p>Hello Webpack.</p>`
// document.body.appendChild(root)

jQuery('#dealsCarousel .carousel-item').each(function () {
	var minPerSlide = 4;
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < minPerSlide; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});
