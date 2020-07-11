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
		// rows: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		prevArrow: false,
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next1.svg" alt="next arrow"></button>',
	});


	
	$('.hit__inner').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/back-blue.svg" alt="prev arrow"></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next-blue.svg" alt="next arrow"></button>',
	});
});

