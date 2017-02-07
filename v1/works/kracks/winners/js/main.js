var currentSlide = 0;

$(document).ready(function() {
        //hotfix flex
    for (var i = 0; i < $('.flex').length; i++) {
        if(
            !$($('.flex').get(i)).hasClass('flex-center') && 
            !$($('.flex').get(i)).hasClass('flex-end') &&
            !$($('.flex').get(i)).hasClass('flex-start')
        ){
            $($('.flex').get(i)).addClass('flex-space-between');
        }
    }

    $("body").queryLoader2({
        minimumTime: 10,
        backgroundColor: '#02592f',
        barHeight: 5,
        onComplete: function() {
            new WOW().init();
        }
    });
    $(".fancybox").fancybox();
    $('.js-carousel-button').click(function(event) {
        event.preventDefault();
        switch ($(this).data('action')) {
            case 'prev':
                if (currentSlide == 0) {
                    currentSlide = 4;
                }else{
                    currentSlide--;
                }
                break;
            case 'next':
                if (currentSlide == 4) {
                    currentSlide = 0;
                }else{
                    currentSlide++;
                }
        }
        slide();
    });

    $("#thanks-button").click(function(){
        var fio = $("input[name=FIO]").val();
        var e_mail = $("input[name=e-mail]").val();
        var message = $("textarea[name=message]").val();

        $.ajax({
            type: "POST",
            url: 'message.php',
            data: { fio: fio, e_mail: e_mail, message: message },
            success: function(data)
            {
                //console.log(data);
            }

        });
    });
	$("input[type=submit]").click(function(){
		var e_mail = $("input[type=email]").val();
		$.ajax({
            type: "POST",
            url: 'subscribe.php',
            data: { email: e_mail },
            success: function(data)
            {
				if( data == 0 ){
					$("#popup-fail").show();
				}
				else{
					$("#popup-success").show();
				}
				setTimeout(function(){$(".popup").hide();}, 3000);	
            }

        });
	});
});

function slide() {
    $('.js-slider').css('left', '-' + currentSlide * 100 + '%');
    $('.js-slider-button').removeClass('active');
    $('[data-slide="' + currentSlide + '"]').addClass('active');
}

$(document).scroll(function() {
    if ($('body').scrollTop() > 650) {
        $('header').addClass('show');
    }
    if ($('body').scrollTop() < 650) {
        $('header').removeClass('show')
    }
    $('.js-under').css('top', ($('body').scrollTop() * 0.4));
    $('.js-under').css('height', (3000 - $('body').scrollTop()));

    $('.js-below').css('top', ($('body').scrollTop() * 0.9));
    $('.js-below').css('height', (3000 - $('body').scrollTop()));
});

$('.js-scroll').click(function(event) {
    event.preventDefault();
    scrollPage($(this).attr('href'));
});


$('.js-slider-button').click(function(event) {
    event.preventDefault();
    currentSlide = $(this).data('slide');
    slide();
});

function scrollPage(section) {
    $("html, body").animate({
        scrollTop: $(section).offset().top - 100
    });
}
$('ga').on('click', function() {
    var category = $(this).data('category');
    var action = $(this).data('action');
    ga('send', 'event', category, action);
});
$('.js-city-select').change(function(event) {
    $('.js-table').hide('slow');
    $("#"+$(this).val()).show('slow');
});