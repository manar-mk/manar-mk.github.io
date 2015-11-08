$(document).ready(function() {
    var carousel = $('.js-carousel');
    var carouselItems = $('.js-carousel-item');
    var carouselButton = $('.js-carousel-button');
    var carouselCurrent = 0;

    carouselItems.each(function(index, slide) {
        $(slide).css('width', 100/carouselItems.length+'%');
    });

    carousel.css('width', carouselItems.length*100+'%');

    carouselButton.click(function(event) {
        event.preventDefault();
        carouselCurrent = $(this).data('slide');
        carouselUpdate();
    });
    function carouselUpdate(){
        carouselButton.removeClass('active');
        carouselButton.eq(carouselCurrent).addClass('active');
        carousel.css('left', -100*carouselCurrent+'%');
    }
    carousel.swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if(carouselCurrent<carouselItems.length-1){
                carouselCurrent++;
                carouselUpdate()
            }
            
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            if(carouselCurrent>0){
                carouselCurrent--;
                carouselUpdate();
            }
        },
    });
});