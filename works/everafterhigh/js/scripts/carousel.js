$(document).ready(function() {
    var carousel = $('.js-carousel');
    var carouselCount = $('.js-carousel li').length;
    var move = 0;
    var centerThumbIndex = 1;
    var centerThumb;
    var carouselWidth = 330;
    initThumbs();
    
    if (carouselCount > 3) {
        carousel.width((carouselCount - 3) * carouselWidth + carousel.width());
    }

    $('.js-carousel-button').click(function(event) {
        event.preventDefault();
        switch ($(this).data('action')) {
            case 'prev':
                if (move < 0) {
                    move = move + carouselWidth;
                    centerThumbIndex--;
                }
                break;
            case 'next':
                if (move > -1 * (carouselCount - 3) * carouselWidth) {
                    move = move - carouselWidth;
                    centerThumbIndex++;
                }
                break;
        }
        centerIndexCorrection();
        centerThumb = $('[data-index='+(centerThumbIndex)+"]");
        thumbsOn(centerThumb);
        centralize();
        //carousel.css('left', move);
    });
    $('.js-thumb').click(function(event) {
        console.log(centerThumbIndex);
        centerThumbIndex=$(this).data('index');
        centerIndexCorrection();
        centerThumb = $('[data-index='+centerThumbIndex+"]");
        thumbsOn(centerThumb);
        centralize();
    });
    function initThumbs(){
        var thumbs=$('.js-thumb');
        centerThumb = $('[data-index='+centerThumbIndex+"]");
        thumbsOn(centerThumb);
    }
    function clearThumbs(){
        var thumbs=$('.js-thumb');
        for (var i=0; i< thumbs.length; i++){
            var thumb=$(thumbs.get(i));
            highlightThumbOff(thumb)
        }
    }
    function highlightThumbOn(thumb){
        var activeImg=thumb.children('[data-img=active]');
        var passiveImg=thumb.children('[data-img=passive]');
            
        passiveImg.hide();   
        activeImg.show();
        thumb.attr('data-state', 'active');
    }    
    function highlightThumbOff(thumb){
        var activeImg=thumb.children('[data-img=active]');
        var passiveImg=thumb.children('[data-img=passive]');
            
        passiveImg.show();   
        activeImg.hide();
        thumb.attr('data-state', 'passive');
    }
    function thumbsOn(thumb){
        clearThumbs();  
        console.log(thumb.data('index'));
        highlightThumbOn(thumb);
        highlightThumbOn(thumb.prev());
        highlightThumbOn(thumb.next());
        
    }
    function centerIndexCorrection(){
        if(centerThumbIndex==0){
            centerThumbIndex=1;
        }
        else if(centerThumbIndex==8){
            centerThumbIndex=7;
        }
    }
    function centralize(){
        move=-1*carouselWidth*(centerThumbIndex-1);
        carousel.css('left', move);
    }
});
