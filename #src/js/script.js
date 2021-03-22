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
}});