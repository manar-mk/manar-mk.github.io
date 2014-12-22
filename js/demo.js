/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
    $('#particles').particleground({
        dotColor: '#aaaaaa',
        lineColor: '#aaaaaa'
    });
    console.log($(document).height());
    $('.intro').css({
    	'left':	(($(window).width()-$('.intro').width())/2)/$(window).width()*100+"%",
    	'top':	(($(document).height()-$('.intro').height())/2)/$(document).height()*150+"%"
    });
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
});
