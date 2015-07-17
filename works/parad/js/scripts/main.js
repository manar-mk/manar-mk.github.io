$(document).ready(function() {
    //buy-button
    $('.js-buy').on('click', function(event) {
        event.preventDefault();
        var cart = $('.js-cart');
        var imgtodrag = $(this).parentsUntil('.js-item').parent('.js-item');
        console.log(cart.offset().top);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.8',
                    'position': 'absolute',
                    'z-index': '100',
                    'border': '0'
                })
                .appendTo($('body'));

            imgclone.animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 0,
                'height': 0
            }, 600, function() {
                $(this).detach();
            });
        }

    });

    //product-thumbs 
    $('.js-product-thumb').first().addClass('product__thumb_current');
    $('.js-product-thumb').last().addClass('product__thumb_last');
    $('.js-product-thumb').click(function(event) {
        event.preventDefault();
        $('.js-product-thumb').removeClass('product__thumb_current');
        $(this).addClass('product__thumb_current');
        var path = $(this).children('img').attr('src');
        $('.js-product-img').attr('href', path);
        $('.js-product-img').children('img').attr('src', path);
    });

    //tabs
    $('.js-tab-button').click(function(event) {
        event.preventDefault();
        $('.js-tab-button').removeClass('tabs__button_active');
        $(this).addClass('tabs__button_active');
        $('.js-tab').removeClass('tab_active');
        $($(this).attr('href')).addClass('tab_active');
    });
    $('.js-cabinet-nav').click(function(event) {
        event.preventDefault();
        $('.js-cabinet-nav').removeClass('cabinet__nav_active');
        $(this).addClass('cabinet__nav_active');
        $('.js-cabinet-tab').removeClass('cabinet__tab_active');
        $($(this).attr('href')).addClass('cabinet__tab_active');
    });
    $('.js-order-nav').click(function(event) {
        event.preventDefault();
        $('.js-order-nav').removeClass('order__nav_active');
        $(this).addClass('order__nav_active');
        $('.js-order-tab').removeClass('order__tab_active');
        $($(this).attr('href')).addClass('order__tab_active');
    });
    $('.js-hr-nav').click(function(event) {
        event.preventDefault();
        $('.js-hr-nav').removeClass('hr__nav_active');
        $(this).addClass('hr__nav_active');
        $('.js-hr-tab').removeClass('hr__tab_active');
        $($(this).attr('href')).addClass('hr__tab_active');
    });

    //select
    $('.js-city-select').change(function(event) {
        switch($(this).val()){
            case '1':
                $('.js-tel').html("+7 727 290 90 90");
                break;
            case '2':
                $('.js-tel').html("+7 711 124 56 45");
                break;
        }
    });
    $('.js-select-button').click(function(event) {
        open($(this).prev('select'))
    });
    function open(elem) {
        if (document.createEvent) {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            elem[0].dispatchEvent(e);
        } else if (element.fireEvent) {
            elem[0].fireEvent("onmousedown");
        }
    }

    //switches
    $('.js-hidden').hide();
    $('.js-toggle').click(function(event) {
        event.preventDefault();
        $($(this).attr('href')).toggle('400');
        $(this).toggleClass('show');
        console.log('s')
    });
    $('.js-category').click(function(event) {
        $(this).toggleClass('category__trigger_active');
    });
    $('.js-history-trigger').click(function(event) {
        event.preventDefault();
        $(this).parentsUntil('.js-history-heading').parent().toggleClass('history__heading_active');
        console.log($(this).parentsUntil('.js-history-heading'));
    });

    //scroll
    $('.js-scroll').click(function(event) {
        event.preventDefault();
        scrollPage($(this).attr('href'));
    });

    function scrollPage(section) {
        $("html, body").animate({
            scrollTop: $(section).offset().top - 100
        });
    }

    //loops
    for (var i = 0; i < $('.js-no-margin').length; i++) {
        var list = $('.js-no-margin').eq(i).children('li');
        var noMargin = $('.js-no-margin').eq(i).data('child');
        for (var j = 0; j < list.length; j++) {
            if (j % noMargin == 0) {
                list.eq(j - 1).addClass('item_no-margin');
            }
        }
    }
    for (var i = 0; i < $('.js-background').length; i++) {
        $($('.js-background').get(i)).css('background-image', 'url(' + $($('.js-background').get(i)).data('img') + ')');
    }
    $(document).scroll(function(event) {
        if ($('body').scrollTop() >= 120) {
            $('.js-nav').addClass('nav__wrap_fixed');
        } else {
            $('.js-nav').removeClass('nav__wrap_fixed');
        }
    });
    //fancybox
    $('.js-fancybox').fancybox({
        padding: 0
    });
    $('.js-fancybox-close').click(function(event) {
        $.fancybox.close();
    });

    //price-slider
    if ($('.js-price-slider') == null) {
        $('.js-price-slider').noUiSlider({
            start: [1000, 3050],
            step: 10,
            range: {
                'min': [0],
                'max': [5000]
            },
            format: wNumb({
                decimals: 0
            })
        });
        $('.js-price-slider').Link('upper').to($('#price-to'));
        $('.js-price-slider').Link('lower').to($('#price-from'));
    }
    if ($('.js-price-slider').length > 0) {
        $('.js-price-slider').noUiSlider({
            start: [1000, 3050],
            step: 10,
            range: {
                'min': [0],
                'max': [5000]
            },
            format: wNumb({
                decimals: 0
            })
        });
        $('.js-price-slider').Link('upper').to($('#price-to'));
        $('.js-price-slider').Link('lower').to($('#price-from'));
    }

    // forms
    $('#orderForm').submit(function(event) {
        event.preventDefault();
        window.location.href = "thanks.html";
    });
    $('#headerSearchForm').submit(function(event) {
        event.preventDefault();
        window.location.href = "search.html";
    });
    $('#modalCallForm').submit(function(event) {
        event.preventDefault();
        $('#modalThanksLink').trigger('click');
    });
    $('#modalRegisterForm').submit(function(event) {
        event.preventDefault();
        $('#modalErrorLink').trigger('click');
    });
    $('#modalLoginForm').submit(function(event) {
        event.preventDefault();
        window.location.href = "cabinet.html";
    });

});
