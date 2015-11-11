$(document).ready(function() {
    $(".js-fancybox").fancybox({
        padding: 0
    });
    for (var i = 0; i < $('.js-background').length; i++) {
        $('.js-background').eq(i).css('background-image', 'url("' + $('.js-background').eq(i).data('img') + '")');
    }
    var session = $('.js-radio-wrap');
    var sessionFilter = $('.js-session-filter');

    sessionFilter.change(function(event) {
    	if($(this).val() == "all"){
    		session.removeClass('session__radio_hide')
    	}else if($(this).val() == "available"){
    		session.each(function(index, el) {
    			if($(el).children('input').is(':disabled')){
    				$(el).addClass('session__radio_hide')
    			}		
    		});
    	}
    });
    var kl = new Kalendae({
        attachTo: document.getElementById('calendar'),
        months: 2,
        mode: 'single',
        useYearNav: false
    });
    kl.subscribe('change', function(date) {
        console.log(this.getSelected());
    });
    $('.js-select-trigger').click(function(event) {
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
});
