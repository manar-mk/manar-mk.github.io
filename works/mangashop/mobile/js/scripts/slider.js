$(document).ready(function() {
    var slider = $('.js-slider');
    var slidesCount = $('.js-slider li').length;
    var slideWidth = 100 / slidesCount;
    var sliderImage = $('.js-slider li');
    var sliderButton = $('.js-slider-button');
    var sliderButtonActiveClass = 'current';
    var button = 0;
    var currentSlide;

    slider.css('width', slidesCount + '00%');
    sliderImage.css('width', slideWidth + '%');

    sliderButton.click(function(event) {
        sliderButton.removeClass(sliderButtonActiveClass);
        $(this).addClass(sliderButtonActiveClass);
        button = $(this).data('button');
        slider.css('left', '-' + button * 100 + '%');
    });
    slider.swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "left") {
                sliderNext();
            } else if (direction == "right") {
                sliderPrev();
            }
        },
        allowPageScroll: 'vertical'
    });
    function sliderNext() {
        if (button < slidesCount) {
            $(sliderButton.get(button + 1)).trigger('click');
        }
    }

    function sliderPrev() {
        if (button > 0) {
            $(sliderButton.get(button - 1)).trigger('click');
        }
    }

});
