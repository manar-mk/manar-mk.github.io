$(document).ready(function() {
	var carousel = $('.js-carousel');
	var carouselButton = $('.js-carousel-button');
	var carouselItemWidth = $('.container').width()+75;

	carousel.each(function(index, el) {
		$(el).width(carouselItemWidth*$(el).children().length-75);
	});
	carouselButton.click(function(event) {
		event.preventDefault();
		carousel.eq($(this).data('carousel')).css('left', -1*carouselItemWidth*$(this).data('slide'));
		carousel.eq($(this).data('carousel')).children('.js-carousel-product').removeClass('product_focus');
		carousel.eq($(this).data('carousel')).children('.js-carousel-product').removeClass('product_active');
		$($(this).attr('href')).addClass('product_focus');
		$(this).parent().children('.js-carousel-button').removeClass('active');
		$(this).addClass('active');
	});
});