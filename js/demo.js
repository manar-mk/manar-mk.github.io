$(document).ready(function() {
    $('#particles').particleground({
        dotColor: '#aaaaaa',
        lineColor: '#aaaaaa'
    });
    
    var scene = document.getElementById('scene');
    
    $('.js-first').clone().addClass('r').removeClass('js-first').removeClass('hidden').attr('data-depth','0.2').appendTo(scene);
    $('.js-first').clone().addClass('g').removeClass('js-first').removeClass('hidden').attr('data-depth','0.4').appendTo(scene);
    $('.js-first').clone().addClass('b').removeClass('js-first').removeClass('hidden').attr('data-depth','0.6').appendTo(scene);
    $('.js-first').clone().addClass('main').removeClass('js-first').removeClass('hidden').attr('data-depth','0.8').appendTo(scene);

    $('.intro').css({
        'left': (($(window).width()-$('.intro').width())/2)/$(window).width()*100+"%",
        'top':  (($(document).height()-$('.intro').height())/2)/$(document).height()*150+"%"
    });

    var parallax = new Parallax(scene);
});
