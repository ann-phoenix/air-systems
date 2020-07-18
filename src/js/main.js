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
		vertical: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					vertical: true,
				}
			},
		]

	});


	$('.hit__inner').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/back-blue.svg" alt="prev arrow"></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next-blue.svg" alt="next arrow"></button>',
		responsive: [
			{
				breakpoint: 1665,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,

				}
			},
			{
				breakpoint: 796,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
			}
		]
	});

	$('.products__inner').slick({
		slidesToShow: 6,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/back-blue.svg" alt="prev arrow"></button>',
nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/next-blue.svg" alt="next arrow"></button>',

responsive: [
	{
		breakpoint: 1680,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: false,
		}
	},
	{
		breakpoint: 1170,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,

		}
	},
	{
		breakpoint: 930,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,

		}
	},
	{
		breakpoint: 570,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	}
]
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