$(document).ready(function() {
	var tabs = $('.js-tab');
	var tabButton = $('.js-tabs-button');

	tabButton.click(function(event) {
		tabButton.removeClass('tabs__nav_active');
		$(this).addClass('tabs__nav_active');
		tabs.removeClass('tabs__item_active');
		$("#"+$(this).data('tab')).addClass('tabs__item_active');
	});
});