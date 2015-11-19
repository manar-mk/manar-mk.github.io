$(document).ready(function() {
	var tabs = $('.js-tab');
	var tabButton = $('.js-tabs-button');
	
	tabButton.click(function(event) {
		tabButton.removeClass('tabs__nav_active');
		$(this).addClass('tabs__nav_active');
		tabs.removeClass('tabs__item_active');
		$("#"+$(this).data('tab')).addClass('tabs__item_active');
		$('.js-functions').removeClass('functions_green');
		$('.js-functions').removeClass('functions_red');
		$('.js-functions').removeClass('functions_orange');
		$('.js-functions').removeClass('functions_violet');
		$('.js-functions').addClass('functions_'+$(this).data('color'))
		location.hash = $(this).data('hash');
	});
	switch(location.hash){
		case '#events':
			tabButton.eq(1).trigger('click');
			break;
		case '#parents':
			tabButton.eq(2).trigger('click');
			break;
		case '#corporate':
			tabButton.eq(3).trigger('click');
			break;
	}
});