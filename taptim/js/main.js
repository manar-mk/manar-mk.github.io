$(document).ready(function() {
    var navActive = false;
    $('.js-scroll').click(function(event) {
        event.preventDefault();
        scrollPage($(this).attr('href'));
    });
     $(".js-fancybox").fancybox({
        padding: 0
    });
    function scrollPage(section) {
        $("html, body").animate({
            scrollTop: $(section).offset().top - 130
        });
    }
    $(document).mouseup(function (e)
    {
        var container = $('.js-nav-trigger');

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('.js-nav').removeClass('nav_show');
            $('.js-nav-trigger').removeClass('nav__trigger_active');
           navActive=false;
        }
    });
    $('.js-nav-trigger').click(function(event) {
        event.stopPropagation();
        if(!navActive){
            $('.js-nav').addClass('nav_show');
            $(this).addClass('nav__trigger_active');
            navActive = true;
        }else{
            $('.js-nav').removeClass('nav_show');
            $(this).removeClass('nav__trigger_active');
            navActive = false;
        }
    });
});
