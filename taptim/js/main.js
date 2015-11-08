$(document).ready(function() {
    $('.js-scroll').click(function(event) {
        event.preventDefault();
        scrollPage($(this).attr('href'));
    });
    function scrollPage(section) {
        $("html, body").animate({
            scrollTop: $(section).offset().top - 130
        });
    }
});
