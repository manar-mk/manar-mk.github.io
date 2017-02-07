$(document).ready(function() {
    $(".js-fancybox").fancybox({
        padding: 0
    });

    $(".js-phone").mask("+9 (999) 999-99-99");
    
    $('.js-scroll').click(function(event) {
        event.preventDefault();
        scrollPage($(this).attr('href'));
    });
    $('.js-product-show').click(function(event) {
        event.preventDefault();
        $($(this).attr('href')).addClass('product_active');
    });    
    $('.js-product-hide').click(function(event) {
        event.preventDefault();
        $($(this).attr('href')).removeClass('product_active');
    });
    $('.js-form').submit(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $.fancybox.close();
        swal("Спасибо!", "Ваша заявка принята, мы скоро с вами свяжемся", "success");
        //ошибка
        //swal("Ошибка!", "Что-то пошло не так, попробуйте еще раз", "error");
    });
    function scrollPage(section) {
        $("html, body").animate({
            scrollTop: $(section).offset().top - 130
        });
    }
   
});
