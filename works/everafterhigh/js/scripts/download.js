$(document).ready(function() {
	$('.js-download-nav').click(function(event) {
		event.preventDefault();
		$('.js-download-page').hide('fast');
		$('.js-download-nav').removeClass('download__button--active');
		$(this).addClass('download__button--active');
		$($(this).attr('href')).show('fast');
	});
});