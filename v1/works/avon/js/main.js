$(document).ready(function() {
    $('.js-scroll').click(function(event) {
        event.preventDefault();
        scrollPage($(this).attr('href'));
    });
    $('.js-fancybox').fancybox();
    $('.js-phone').mask('+7 (000) 000-00-00');
    $('.js-date').mask('00/00/00');
    function scrollPage(section) {
        $("html, body").animate({
            scrollTop: $(section).offset().top 
        });
    }
});
