$(document).ready(function() {
    var deviceWidth = $('body').width();
    var carouselWrap = $('.js-carousel-wrap');
    var itemMargin = ($('body').width() - 235) / 2;
    $('.js-item').css('margin-left', itemMargin);
    $('.js-item').css('margin-right', itemMargin);

    var move = 0;
    var carouselCurrentIndex = 0;
    var carousel1 = $('.js-carousel-1');
    var carouselCount1 = carousel1.children('li').length;

    var carousel2 = $('.js-carousel-2');
    var carouselCount2 = carousel2.children('li').length;

    var carousel3 = $('.js-carousel-3');
    var carouselCount3 = carousel3.children('li').length;

    var carousel4 = $('.js-carousel-4');
    var carouselCount4 = carousel4.children('li').length;

    var carouselPagesList = $(".js-carousel-pages-list");

    var carouselPagesCount = Math.ceil(Math.max(carouselCount1, carouselCount2, carouselCount3, carouselCount4));

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

    var carouselWidth = $('body').width();

    if (carouselCount1 > 1) {
        carousel1.width(carouselCount1 * carouselWidth + carousel1.width() + itemMargin);
    }
    if (carouselCount2 > 1) {
        carousel2.width(carouselCount2 * carouselWidth + carousel2.width() + itemMargin);
    }
    if (carouselCount3 > 1) {
        carousel3.width(carouselCount3 * carouselWidth + carousel3.width() + itemMargin);
    }
    if (carouselCount4 > 1) {
        carousel4.width(carouselCount4 * carouselWidth + carousel4.width() + itemMargin);
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
                if (carouselCurrentIndex < carouselPagesCount - 1) {
                    carouselCurrentIndex++;
                }
                break;
        }
        updateCarousel();
    });

    function updateCarousel() {
        move = carouselCurrentIndex * carouselWidth * -1;
        $('.js-carousel-page').removeClass('carousel__page_state_current')
        $($('.js-carousel-page').get(carouselCurrentIndex)).addClass('carousel__page_state_current');
        carousel1.css('left', move);
        carousel2.css('left', move);
        carousel3.css('left', move);
        carousel4.css('left', move);
    }

    carouselWrap.swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "left") {
                carouselNext();
            } else if (direction == "right") {
                carouselPrev();
            }
        },
        allowPageScroll: 'vertical'
    });
    function carouselNext() {
        if (carouselCurrentIndex < carouselPagesCount - 1) {
            carouselCurrentIndex++;
        }
        updateCarousel();
    }

    function carouselPrev() {
        if (carouselCurrentIndex > 0) {
            carouselCurrentIndex--;
        }
        updateCarousel();
    }
});
