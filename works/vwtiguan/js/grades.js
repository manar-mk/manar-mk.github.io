$(document).ready(function() {
	var ribbon = $('.js-ribbon');
	var wrapper = $('.js-grades-parent');

	$('.js-nav').click(function(event) {
		event.preventDefault();
		var index = $(this).data('index'); 
		wrapper.css('background-image','url(img/grades/'+index+'.jpg)')
		ribbon.css('top',((index-1)*100)+"px");
		$('.js-grade').fadeOut('300');
		setTimeout(function(){
			$('[data-grade='+index+']').fadeIn('400');
		}, 500);
	});
});