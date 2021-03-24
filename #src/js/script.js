$(document).ready(function () {{

	//burger
	function toggleMainMenu() {
		$('.burger, .burger__span, .header__overlay, .header__actions').toggleClass('active');
		$('body').toggleClass('lock');
	}

	$('.burger').on('click', function (event) {
		toggleMainMenu();
	});

	$(document).on('click', '.header__overlay.active', function (event) {
		toggleMainMenu();
	});

	@@include('slick.min.js');

	//slider reviews
	$('.reviews__slider').slick({
		slidesToShow: 3,
		arrows: false,
		dots: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1185.98,
				settings: {
					slidesToShow: 2,
					centerPadding: '10%',
					centerMode: true
				}
			},
			{
				breakpoint: 980.98,
				settings: {
					centerPadding: '0',
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768.98,
				settings: {
					centerMode: true,
					centerPadding: '21%',
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 600.98,
				settings: {
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1
				}
			}
		]
	});

	//content tabs
	$('.tabs__item').on('click', function() {
		$('.tabs__item').removeClass('tabs__item_active');
		$(this).addClass('tabs__item_active');
		$('.tabs__text').hide().eq($(this).index()).fadeIn()
		.eq(0).addClass('tabs__text_active');
	})
}});