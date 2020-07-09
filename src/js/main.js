$(function () {

	$('.slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/back.png" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next.png" alt="next arrow"></button>',
	});

	$('.offers__inner').slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 1,
		prevArrow: false,
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next1.svg" alt="next arrow"></button>',


	});
});

