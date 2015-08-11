$(document).ready(function() {
	var slider = $('.js-slider');
	var sliderItems = $('.js-slider-item');
	var sliderNav = $('.js-slider-nav');
	var sliderPagination = $('.js-slider-pagination');
	var sliderCurrent = 0;

	sliderItems.each(function(index, slide) {
		$(slide).css('width', 100/sliderItems.length+'%');
		$(slide).css('background-image', 'url(' + $(slide).data('img') + ')');
		var sliderTempButton = $("<li>");
		sliderTempButton.attr('data-slide', index);
		sliderTempButton.addClass('slider_button js-slider-button');
		sliderTempButton.appendTo(sliderPagination);
	});

	var sliderButton = $('.js-slider-button');
	sliderButton.eq(0).addClass('active');
	slider.css('width', sliderItems.length*100+'%');

	sliderButton.click(function(event) {
		event.preventDefault();
		sliderCurrent = $(this).data('slide');
		sliderUpdate();
	});

	sliderNav.click(function(event) {
		event.preventDefault();
		console.log(sliderItems);
		switch($(this).data('action')){
			case 'prev':
				if(sliderCurrent>0)
					sliderCurrent--;
				break;
			case 'next':
				if(sliderCurrent<sliderItems.length-1)
					sliderCurrent++;
				break;
		}
		sliderUpdate();
	});
    function sliderUpdate(){
    	sliderButton.removeClass('active');
		sliderButton.eq(sliderCurrent).addClass('active')
		slider.css('left', -100*sliderCurrent+'%');
    }
});