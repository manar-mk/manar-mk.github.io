$(document).ready(function() {
	$('.fancybox').fancybox();
	$('#creditForm').submit(function(event) {
		event.preventDefault();
		$('#creditSuccessModalLink').trigger('click')
	});	
	$('#cartForm').submit(function(event) {
		event.preventDefault();
		$('#cartSuccessModalLink').trigger('click')
	});
	$('#contactForm').submit(function(event) {
		event.preventDefault();
		$('#contactSuccessModalLink').trigger('click')
	});
});