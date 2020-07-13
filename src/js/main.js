$(function () {

	//sliders

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

	$('.products__inner').slick({
		slidesToShow: 6,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/back-blue.svg" alt="prev arrow"></button>',
nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next-blue.svg" alt="next arrow"></button>',
	});
	
});

//accordion

$(document).ready(function() {
 $('.faq__item-title').click(function(event){
	 if($('.faq__inner').hasClass('one')){
		 $('.faq__item-title').not($(this)).removeClass('active');
		 $('.faq__item-text').not($(this).next()).slideUp(500);
	 }
  $(this).toggleClass('active').next().slideToggle(500);
 });
});

//burger menu

//scroll

//sticky header