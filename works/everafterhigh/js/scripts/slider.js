$(document).ready(function() {
    var slider = $('.js-slider');
    var slidesCount = $('.js-slider li').length;
    var slideWidth = 100 / slidesCount;
    var sliderImage = $('.js-slider li');
    var sliderButton = $('.js-slider-button');
    var sliderButtonActiveClass = 'slider__button--active';
    var button;
    var currentSlide;

    slider.css('width', slidesCount + '00%');
    sliderImage.css('width', slideWidth + '%');
    
    for (var i = 0; i < slidesCount; i++) {
        currentSlide=$('[data-slide=' + i + ']');
    }

    sliderButton.click(function(event) {
        sliderButton.removeClass(sliderButtonActiveClass);
        $(this).addClass(sliderButtonActiveClass);
        button = $(this).data('button');
        slider.css('left', '-' + button * 100 + '%');

    });
    
});