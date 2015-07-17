$(document).ready(function() {
    $('.js-carousel-button').hide();
    $('.js-carousel-button').trigger('hover');
    $('.js-list-button').trigger('hover');

    $("body").queryLoader2({
        percentage:true,
        barHeight:5,
        backgroundColor:'#d31145',
        onComplete: function(){
            $(".js-wall").css('width', ($(window).width()-1000)/2-10);
            setTimeout(function(){$('.js-carousel-button').show()}, 1100);
        }
    });
    
    $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    
    $('.js-select-dropdown').click(function(event) {
        open($(this).prev('select'))
    });
    function open(elem) {
        if (document.createEvent) {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            elem[0].dispatchEvent(e);
        } else if (element.fireEvent) {
            elem[0].fireEvent("onmousedown");
        }
    }
    $('#rating_filter').change(function(){
        $value = $(this).find('option:selected').val();
        window.location.href = window.location.href.replace( /[\&#].*|$/, "&val=" + $value );
    });
    $option = GetURLParameter('val');
    $('#rating_filter').find('option').each(function(index){
       if($(this).val() == $option) $(this).attr('selected', 'selected'); 
    });
    function GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }
    $("#hidden_trigger").fancybox({minHeight:35,midWidth:300,maxWidth:1000,maxHeight:180}).trigger('click');
    $("#mainForm").submit(function (event) {
        event.preventDefault();
        var data = new FormData($('#mainForm')[0]);
        $.ajax({
          type: "POST",
          url: "http://ztest.kz/38/40.html",
          data: data,
          contentType: false,
          processData: false,
        }).done(function (html) {
            $("#results").attr('src', html);
            $('#mainForm')[0].reset();
          });
  });
});
