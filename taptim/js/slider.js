$(document).ready(function() {
	var slider = $('.js-slider');
	var sliderItems = $('.js-slider-item');
	var sliderButton = $('.js-slider-button');
	var sliderCurrent = 0;

	sliderItems.each(function(index, slide) {
		$(slide).css('width', 100/sliderItems.length+'%');
	});

	slider.css('width', sliderItems.length*100+'%');

	sliderButton.click(function(event) {
		event.preventDefault();
		sliderCurrent = $(this).data('slide');
		sliderUpdate();
	});
	function sliderUpdate(){
		sliderButton.removeClass('active');
		sliderButton.eq(sliderCurrent).addClass('active');
		slider.css('left', -100*sliderCurrent+'%');
	}
	slider.swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          	if(sliderCurrent<sliderItems.length-1){
				sliderCurrent++;
				sliderUpdate()
          	}
			
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          	if(sliderCurrent>0){
				sliderCurrent--;
				sliderUpdate();
          	}
        },
    });
});