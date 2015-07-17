var currentSlide = 0;
var scrolling = true;
var stepOnePass = false,
    stepTwoPass = false;
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
        backgroundColor: '#ee6a30',
        barHeight: 5,
        onComplete: function() {
            new WOW().init();
        }
    });
    $(".js-phone").mask("+9 (999) 999 99 99");
    $(".js-phone").on("blur", function() {
        var last = $(this).val().substr($(this).val().indexOf("-") + 1);

        if (last.length == 3) {
            var move = $(this).val().substr($(this).val().indexOf("-") - 1, 1);
            var lastfour = move + last;

            var first = $(this).val().substr(0, 9);

            $(this).val(first + '-' + lastfour);
        }
    });
    $(".fancybox").fancybox();
    $('.js-stepOne').removeClass('active');

    var carousel = $('.js-carousel');
    var carouselCount = $('.js-carousel li').length;
    var move = 0;
    var caroulselWidth = 345;
    if (carouselCount > 3) {
        carousel.width((carouselCount - 3) * caroulselWidth + carousel.width());
    }

    $('.js-carousel-button').click(function(event) {
        event.preventDefault();
        switch ($(this).data('action')) {
            case 'prev':
                if (move < 0) {
                    move = move + caroulselWidth;
                }
                break;
            case 'next':
                if (move > -1 * (carouselCount - 3) * caroulselWidth) {
                    move = move - caroulselWidth;
                }
                break;
        }
        carousel.css('left', move);
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
});

function autoSlide() {
    currentSlide++;
    if (currentSlide == 5) {
        currentSlide = 0;
    }
    slide();
}

function slide() {
    $('.js-slider').css('left', '-' + currentSlide * 100 + '%');
    $('.js-slider-button').removeClass('active');
    $('[data-slide="' + currentSlide + '"]').addClass('active');
}
$('.js-phone').focus(function(event) {
    if ($(this).val() == "") {
        $(this).val("7");
    }
});

$('.js-phone').keyup(function() {
    if ($(this).val().length > 8) {
        if (!(
            ($(this).val().substring(0, 8) == "+7 (700)") ||
            ($(this).val().substring(0, 8) == "+7 (701)") ||
            ($(this).val().substring(0, 8) == "+7 (702)") ||
            ($(this).val().substring(0, 8) == "+7 (703)") ||
            ($(this).val().substring(0, 8) == "+7 (704)") ||
            ($(this).val().substring(0, 8) == "+7 (705)") ||
            ($(this).val().substring(0, 8) == "+7 (706)") ||
            ($(this).val().substring(0, 8) == "+7 (707)") ||
            ($(this).val().substring(0, 8) == "+7 (708)") ||
            ($(this).val().substring(0, 8) == "+7 (709)") ||
            ($(this).val().substring(0, 8) == "+7 (747)") ||
            ($(this).val().substring(0, 8) == "+7 (750)") ||
            ($(this).val().substring(0, 8) == "+7 (751)") ||
            ($(this).val().substring(0, 8) == "+7 (760)") ||
            ($(this).val().substring(0, 8) == "+7 (761)") ||
            ($(this).val().substring(0, 8) == "+7 (762)") ||
            ($(this).val().substring(0, 8) == "+7 (763)") ||
            ($(this).val().substring(0, 8) == "+7 (764)") ||
            ($(this).val().substring(0, 8) == "+7 (771)") ||
            ($(this).val().substring(0, 8) == "+7 (775)") ||
            ($(this).val().substring(0, 8) == "+7 (776)") ||
            ($(this).val().substring(0, 8) == "+7 (777)") ||
            ($(this).val().substring(0, 8) == "+7 (778)")
        )) {
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
    }
});
$('.js-phone').focusout(function(event) {
    if (!IsPhone()) {
        $(this).addClass('error');
    } else {
        $(this).removeClass('error');
    }
});
$('.js-email').focusout(function(event) {
    if (!IsEmail($(this).val())) {
        $(this).addClass('error');
    } else {
        $(this).removeClass('error');
    }
});
$('.js-city').focusout(function(event) {
    if (!CitySelected()) {
        $(this).parent().addClass('error');
    } else {
        $(this).parent().removeClass('error');
    }
});
$('.js-name').focusout(function(event) {
    if (!HasName()) {
        $(this).addClass('error');
    } else {
        $(this).removeClass('error');
    }
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function CitySelected() {
    return ($("#city").find(":selected").text() != "Город");
}

function IsPhone() {
    return ($('.js-phone').val().length == 18);
}

function HasName() {
    return ($('.js-name').val() != '');
}
$(document).scroll(function() {
    
    if ($('body').scrollTop() > 850 && scrolling) {
        setInterval(function() {
            autoSlide();
        }, 4000);
        scrolling = false;
    }
    if ($('body').scrollTop() > 850) {
        $('header').addClass('show');

    }
    if ($('body').scrollTop() < 850) {
        $('header').removeClass('show')
    }
    /*
    $('.js-under').css('top', ($('body').scrollTop() * 0.4));
    $('.js-under').css('height', (3000 - $('body').scrollTop()));

    $('.js-below').css('top', ($('body').scrollTop() * 0.9));
    $('.js-below').css('height', (3000 - $('body').scrollTop()));
    */
    
});

$('.js-scroll').click(function(event) {
    event.preventDefault();
    scrollPage($(this).attr('href'));
});
$('.js-radio').click(function(event) {
    stepOne();
});
$('.js-submit').click(function(event) {
    //if (IsEmail($('.js-email').val()) && (!$('.js-phone').hasClass('error'))) {
    if (formValidate()) {
        var taste = $("input[name=taste]:checked").attr('id');
        var fullname = $("input[name=fullname]").val();
        var phone = $("input[name=phone]").val();
        var email = $("input[name=email]").val();
        var city = $("#city").find(":selected").text();
        $('.js-success-trigger').trigger('click');
        $.ajax({
            type: "POST",
            url: 'register.php',
            data: { taste: taste, fullname: fullname, phone: phone, email: email, city: city },
            success: function(data)
            {
                stepTwo();

                //console.log(data);
				$.ajax({
				type: "POST",
				url: 'welcome.php',
				data: { from: email },
				success: function(data)
				{
                    $('#form').trigger("reset");
                    $('.js-phone').val("");
				}
			});
            }

        });
    }
    //}

});
$('.js-input').focus(function(event) {
    $('.js-popup').addClass('popup-show animated bounceIn');
    $('.js-popup').css('top', $(this).position().top - 25);
});
$('.js-input').focusout(function(event) {
    $('.js-popup').removeClass('popup-show animated bounceIn');
});
$('.js-taste-img').click(function(event) {
    $("#" + $(this).data('taste')).trigger('click');
});
$('.js-slider-button').click(function(event) {
    event.preventDefault();
    currentSlide = $(this).data('slide');
    slide();
});

function formValidate() {
    if (!stepOnePass) {
        scrollPage($('#tastes'));
    }
    return stepOnePass && IsEmail($('.js-email').val()) && CitySelected() && IsPhone() && HasName();
}

function stepOne() {
    $('.js-stepOne').addClass('active');
    stepOnePass = true;
    scrollPage($('#inputs'));
}

function stepTwo() {
    $('.js-stepTwo').addClass('active');
    $('.js-stepThree').addClass('active');
    scrollPage($('#carousel'));
    $('.js-popup-like').removeClass('popup-show animated bounceIn');
    $('.js-button-final').hide();
    $('.js-button-final-facebook').show();
    $('.js-button-final-facebook').addClass('animated bounceInUp');
}


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
