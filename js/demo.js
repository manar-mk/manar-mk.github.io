$(document).ready(function() {
    $('#fullpage').fullpage({});
    $("body").queryLoader2({
        minimumTime: 5,
        backgroundColor: '#000',
        barHeight: 5
    });
    for (var i = 0; i < $('.js-particles').length; i++) {
        $('.js-particles').eq(i).particleground({
            dotColor: $('.js-particles').eq(i).data('color'),
            lineColor: $('.js-particles').eq(i).data('color')
        });    
    }
   
    for (var i = 0; i < $('.js-background').length; i++) {
        $('.js-background').eq(i).css('background-image','url("'+$('.js-background').eq(i).data('img')+'")');
    }

    var scene = document.getElementById('scene');
    
    $('.js-first').clone().addClass('r').removeClass('js-first').removeClass('hidden').attr('data-depth','0.2').appendTo(scene);
    $('.js-first').clone().addClass('g').removeClass('js-first').removeClass('hidden').attr('data-depth','0.4').appendTo(scene);
    $('.js-first').clone().addClass('b').removeClass('js-first').removeClass('hidden').attr('data-depth','0.6').appendTo(scene);
    $('.js-first').clone().addClass('main').removeClass('js-first').removeClass('hidden').attr('data-depth','0.8').appendTo(scene);

    $('.js-slide-button').click(function(event) {
         $('#fullpage').fullpage.moveTo($(this).data('slide'),0);
    });
    $('.intro').css({
        'left': (($('.js-intro-wrap').width()-$('.intro').width())/2)/$(window).width()*100+"%",
        //'top':  (($('#particles').height()-$('.intro').height())/2)/$(document).height()*100+"%"
    });

    var parallax = new Parallax(scene);
});
