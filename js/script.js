$(document).ready(function () {
	$('.icon__menu').click(function (event) {
		$('.icon__menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	}
	);

}
);

