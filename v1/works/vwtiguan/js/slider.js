$(document).ready(function() {
    var slider = $('.js-slider');
    var slidesCount = $('.js-slider li').length;
    var slideWidth = 100 / slidesCount;
    var sliderImage = $('.js-slider li');
    var sliderButton = $('.js-slider-button');
    var description = $('.js-description-item');
    var sliderButtonActiveClass = 'active';

    var button;
    var currentSlide;

    slider.css('width', slidesCount + '00%');
    sliderImage.css('width', slideWidth + '%');
    
    for (var i = 0; i < slidesCount; i++) {
        $(sliderImage.get(i)).css('background-image','url(img/slides/'+(i+1)+'.jpg)');
    }

    sliderButton.click(function(event) {
        sliderButton.removeClass(sliderButtonActiveClass);
        $(this).addClass(sliderButtonActiveClass);
        button = $(this).data('slide');
        description.fadeOut('fast');
        $(description.get(button-1)).fadeIn('fast');
        slider.css('left', '-' + (button-1) * 100 + '%');
    });
    
});