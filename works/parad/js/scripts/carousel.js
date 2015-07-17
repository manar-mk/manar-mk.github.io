$(document).ready(function() {
    var move = 0;
    var carouselCurrentIndex = 0;
    var carousel1 = $('.js-carousel-1');
    var carouselCount1 = carousel1.children('li').length;

    var carousel2 = $('.js-carousel-2');
    var carouselCount2 = carousel2.children('li').length;

    var carouselPagesList = $(".js-carousel-pages-list");

    var carouselPagesCount = Math.ceil(Math.max(carouselCount1, carouselCount2) / 4);

    for (var i = 0; i < carouselPagesCount; i++) {
        var carouselPage = $('<li>');
        carouselPage.addClass('carousel__page');
        carouselPage.addClass('js-carousel-page');
        carouselPage.attr('data-page', i);
        carouselPage.appendTo(carouselPagesList);
    }
    $($('.js-carousel-page').get(0)).addClass('carousel__page_state_current');

    $('.js-carousel-page').click(function(event) {
        carouselCurrentIndex = $(this).data('page');
        updateCarousel();
    });

    var carouselWidth = 255;

    if (carouselCount1 > 4) {
        carousel1.width((carouselCount1 - 4) * carouselWidth + carousel1.width() + 20);
    }
    if (carouselCount2 > 4) {
        carousel2.width((carouselCount2 - 4) * carouselWidth + carousel2.width() + 20);
    }

    $('.js-carousel-button').click(function(event) {
        event.preventDefault();
        switch ($(this).data('action')) {
            case 'prev':
                if (carouselCurrentIndex > 0) {
                    carouselCurrentIndex--;
                }
                break;
            case 'next':
                if (carouselCurrentIndex < carouselPagesCount-1) {
                    carouselCurrentIndex++;
                }
                break;
        }
        updateCarousel();
    });

    function updateCarousel(){
        move = carouselCurrentIndex*carouselWidth*4*-1;
        $('.js-carousel-page').removeClass('carousel__page_state_current')
        $($('.js-carousel-page').get(carouselCurrentIndex)).addClass('carousel__page_state_current');
        carousel1.css('left', move);
        carousel2.css('left', move);
    }
});
