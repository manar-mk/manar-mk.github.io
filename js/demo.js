$(document).ready(function() {
    $('#loading').fadeOut('slow');
    $('#fullpage').fullpage({});

    // particlesJS.load('particles-top', 'js/particles.json', function() {});    
    // particlesJS.load('particles-bottom', 'js/particles.json', function() {});
    
    for (var i = 0; i < $('.js-background').length; i++) {
        $('.js-background').eq(i).css('background-image', 'url("' + $('.js-background').eq(i).data('img') + '")');
    }

    var scene = document.getElementById('scene');

    $('.js-first').clone().addClass('r m-hide').removeClass('js-first').removeClass('hidden').attr('data-depth', '0.2').appendTo(scene);
    $('.js-first').clone().addClass('g m-hide').removeClass('js-first').removeClass('hidden').attr('data-depth', '0.4').appendTo(scene);
    $('.js-first').clone().addClass('b m-hide').removeClass('js-first').removeClass('hidden').attr('data-depth', '0.6').appendTo(scene);
    $('.js-first').clone().addClass('main').removeClass('js-first').removeClass('hidden').attr('data-depth', '0.8').appendTo(scene);

    $('.js-slide-button').click(function(event) {
        $('#fullpage').fullpage.moveTo($(this).data('slide'), 0);
    });
    $('.intro').css({
        'left': (($('.js-intro-wrap').width() - $('.intro').width()) / 2) / $(window).width() * 100 + "%",
    });

    var parallax = new Parallax(scene);
});
