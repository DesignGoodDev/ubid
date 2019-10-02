import 'bootstrap';
import './scss/style.scss';

// https://www.codeply.com/go/zjZsn1ly29
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
