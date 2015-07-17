$(document).ready(function() {
    var deviceWidth = $('body').width();
    var catalogNav = $('.js-catalog-nav span');
    var catalogNavWrap = $('.js-catalog-nav-wrap');
    var catalogNavSlider = $('.js-catalog-nav');
    var catalogNavWidth = 0;
    var catalogNavMove = 0;
    var catalogNavStep = 0;
    var totalMove = 0;
    var catalogNavButton = $('.js-catalog-nav-button');
    

    for (var i = 0; i < catalogNav.length; i++) {
        catalogNavWidth += $(catalogNav.get(i)).width() + 30;
    }
    catalogNavSlider.width(catalogNavWidth);
    catalogNavSlider.addClass('g-flex');
    catalogNavButton.hide();
    
    var currentImg = 0;
    var maxImages = 3;
    var speed = 500;
    var IMG_WIDTH = catalogNavWidth / catalogNav.length - 50;

    var imgs = catalogNav;

    var swipeOptions = {
        triggerOnTouchEnd: true,
        swipeStatus: swipeStatus,
        allowPageScroll: "vertical",
        threshold: 75
    };

    catalogNavWrap.swipe(swipeOptions);
    catalogNav.click(function(event) {
        catalogNav.removeClass('active');
        $(this).addClass('active');
    });
    function swipeStatus(event, phase, direction, distance) {
        if (phase == "move" && (direction == "left" || direction == "right")) {
            var duration = 0;
            catalogNavButton.show('fast');
            if (direction == "left") {
                scrollImages((IMG_WIDTH * currentImg) + distance, duration);
            } else if (direction == "right") {
                scrollImages((IMG_WIDTH * currentImg) - distance, duration);
            }

        } else if (phase == "cancel") {
            scrollImages(IMG_WIDTH * currentImg, speed);
            catalogNavButton.hide('fast');
        } else if (phase == "end") {
            if (direction == "right") {
                previousImage();
                catalogNavButton.eq(0).hide('fast');
            } else if (direction == "left") {
                nextImage();
                catalogNavButton.eq(1).hide('fast');
            }
        }
    }

    function previousImage() {
        currentImg = 0; //Math.max(currentImg - 1, 0);
        scrollImages(IMG_WIDTH * currentImg, speed);
    }

    function nextImage() {
        currentImg = maxImages; //Math.min(currentImg + 1, maxImages - 1);
        scrollImages(IMG_WIDTH * currentImg, speed);
    }

    function scrollImages(distance, duration) {
        if (deviceWidth < catalogNavWidth) {
            imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");
            //inverse the number we set in the css
            var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
            imgs.css("transform", "translate(" + value + "px,0)");
        }
    }

    $('.js-filter-button').click(function(event) {
        $('.js-filter').toggleClass('b-filter_show');
        $(this).toggleClass('active');
    });
});
