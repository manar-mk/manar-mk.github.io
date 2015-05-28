$(document).ready(function() {
    $('.js-contacts-nav').click(function(event) {
        event.preventDefault();
        $(".js-contacts-nav").removeClass('contacts__nav_active');
        $(this).addClass('contacts__nav_active');
        $('.js-contacts-content').removeClass('contacts__content_show');
        $('#' + $(this).data('city')).addClass('contacts__content_show');        
        $('.js-contacts-map').removeClass('contacts__map_show');
        $('#' + $(this).data('city')+'-map').addClass('contacts__map_show');
    });       
    $('.js-phone-nav').click(function(event) {
        $(".js-phone-nav").removeClass('active');
        $(this).addClass('active');
        $('.js-phone-content').removeClass('show');
        $('#' + $(this).data('city')).addClass('show');
    });    
    $('.js-cabinet-nav').click(function(event) {
        $('.js-cabinet-top').css('top', '-'+0+'px');
        $(".js-cabinet-nav").removeClass('cabinet__nav_active');
        $(this).addClass('cabinet__nav_active');
        $('.js-cabinet-info').removeClass('cabinet__info_show');
        $('#' + $(this).data('info')).addClass('cabinet__info_show');
        $('.js-cabinet-top').css('top', '-'+$(this).position().top+'px');
    }); 
    $('.js-cabinet-top').click(function(event) {
        $(".js-cabinet-top-wrap").toggleClass('cabinet__top_show');
    });   
    $('.js-shipping-button').click(function(event) {
        event.preventDefault();
        $(".js-shipping-button").removeClass('shipping__button_active');
        $(this).addClass('shipping__button_active');
        $('.js-shipping-type').removeClass('shipping__type_show');
        $('#' + $(this).data('shipping-type')).addClass('shipping__type_show');
    });
    $('.js-product-phone-nav').click(function(event) {
        $(".js-product-phone-nav").removeClass('product__phone-nav_active');
        $(this).addClass('product__phone-nav_active');
        $('.js-product-phone-content').removeClass('show');
        $('#' + $(this).data('city')).addClass('show');
    });
    $('.js-social-nav').click(function(event) {
        event.preventDefault();
        $(".js-social-nav").removeClass('social__nav_state_active');
        $(this).addClass('social__nav_state_active');
        $('.js-social-item').removeClass('social__item_state_show');
        $('#' + $(this).data('page')).addClass('social__item_state_show');
    });
    for (var i = 0; i < $('.js-background-img').length; i++) {
        $($('.js-background-img').get(i)).css('background-image', 'url(' + $($('.js-background-img').get(i)).data('img') + ')');
    }
    $('.js-filter-list-item span').click(function(event) {
        $(this).parent().toggleClass('active');
    });
    $('.js-filter-remove').click(function(event) {
        event.preventDefault();
        $(this).parent().removeClass('active');
    });
    $('.js-show-all').click(function(event) {
        event.preventDefault();
        $(this).addClass('filter__link_hide');
        $('.js-filter-wrap').addClass('b-filter__wrap_show');
    });

    $('.js-history-show').click(function(event) {
        event.preventDefault();
        $(this).removeClass('active');
        switch($(this).data('action')) {
            case 'hide':
                $(this).parents('.js-history').removeClass('b-history__details_show')
                $(this).next('.js-history-show').addClass('active');
                break;
            case 'show':
                $(this).prev('.js-history-show').addClass('active');
                $(this).parents('.js-history').addClass('b-history__details_show')
                break;
        }
    });
    $('.js-fancybox').fancybox({
        padding:0
    });
    $('.js-fancybox-close').click(function(event) {
        $.fancybox.close();
    });
    $('.js-pay-button').click(function(event) {
        event.preventDefault();
        window.location = "thanks.html";
    });
    $('#form-help').submit(function(event) {
        event.preventDefault();
        $('#modal-help-success-link').trigger('click');
    });    
    $('#form-call').submit(function(event) {
        event.preventDefault();
        $('#modal-call-success-link').trigger('click');
    });
    $('.js-mobile-head-remove').click(function(event) {
        event.preventDefault();
        $('.js-mobile-head').hide();
    });
    $('.js-menu-button').click(function(event){
        event.preventDefault();
        $('.js-menu-button').toggleClass('nav__menu_active');
        $('.js-menu').toggleClass('nav_show');
    });
    
});
