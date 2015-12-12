$(document).ready(function() {
    var slider = $('.js-slider');
    var sliderItems = $('.js-slider-item');
    var sliderButton = $('.js-slider-button');
    var sliderCurrent = [];


    slider.each(function(index, el) {
        $(el).css('width', $(el).children().length * 100 + '%');
        $(el).children().each(function(slideIndex, slide) {
            $(slide).css('width', 100 / $(el).children().length + '%');
        });
        sliderCurrent[index] = 0;
        $(el).swipe({
            swipeLeft: function(event, direction, distance, duration, fingerCount) {
                if (sliderCurrent[index] < $(el).children().length - 1) {
                    sliderCurrent[index]++;
                    sliderUpdate(index);
                }
            },
            swipeRight: function(event, direction, distance, duration, fingerCount) {
                if (sliderCurrent[index] > 0) {
                    sliderCurrent[index]--;
                    sliderUpdate(index);
                }
            },
        });
    });

    sliderButton.click(function(event) {
        event.preventDefault();
        sliderCurrent[$(this).data('slider')] = $(this).data('slide');
        sliderUpdate($(this).data('slider'), $(this));
    });

    function sliderUpdate(sliderID) {
        buttons = sliderButton.map(function(index, elem) {
            if ($(elem).data('slider') == sliderID)
                return this;
        })
        buttons.removeClass('active');
        buttons.eq(sliderCurrent[sliderID]).addClass('active');
        slider.eq(sliderID).css('left', -100 * sliderCurrent[sliderID] + '%');
    }

});
