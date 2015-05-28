$(document).ready(function() {
    var list = $('.js-list');
    var listCount = $('.js-list li').length;
    var move = 0;
    var listHeight = 75;

    if (listCount > 3) {
        list.height((listCount - 3) * listHeight + list.height());
    }

    $('.js-list-button').click(function(event) {
        event.preventDefault();
        switch ($(this).data('action')) {
            case 'prev':
                if (move < 0) {
                    move = move + listHeight;
                }
                break;
            case 'next':
                if (move > -1 * (listCount - 3)) {
                    move = move - listHeight;
                }
                break;
        }
        list.css('top', move);
    });

});
