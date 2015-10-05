$(document).ready(function() {
	var colorControl = $('.js-colors-control');
	var colorControlItem = colorControl.children('.js-colors-button');
	var colorZoom = $('.js-zoom');

	colorControlItem.each(function(index, el) {
        $(el).css('background', $(el).data('color'));
	});
	colorControlItem.click(function(event) {
		event.preventDefault();
		$(this).parent().children('.js-colors-button').removeClass('colors__button_active');
		$(this).addClass('colors__button_active');
		$("#"+$(this).parent().data('items')).children('.js-colors-item').removeClass('colors__item_active');
		$("#"+$(this).parent().data('items')).children('.js-colors-item').eq($(this).data('slide')).addClass('colors__item_active');
		$('#'+$(this).parent().data('items')+'-zoom').data('slide', $(this).data('slide'));
	});
	colorZoom.click(function(event) {
		event.preventDefault();
		$("#"+$(this).data('items')).children('.js-colors-item').eq($(this).data('slide')).trigger('click');
	});
});