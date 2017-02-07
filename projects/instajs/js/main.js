$(document).ready(function() {
    $('.js-input').keydown(function(event) {
    	if($(this).val()!=''){
	    	var feed = new Instafeed({
	    		before: function(){
	    			$('#instafeed').html('<div class="loader">Loading...</div>');
	    		},
	    		success: function(){
	    			$('#instafeed').html('');
	    		},
		        get: 'tagged',
		        limit: 100,
		        tagName: $(this).val(),
		        clientId: '6c89931c236d4686b2dd88986c2d94db',
		        resolution: 'standard_resolution',
		        template: '<div class="col-lg-3 col-md-4 col-xs-6 thumb"><a rel="gallery" class="thumbnail js-fancybox" href="{{image}}"><img class="js-lazy img-responsive" src="{{image}}"/></a></div>'
		    });
		    $('.js-fancybox').fancybox();
		    $('.js-lazy').lazyload();
	    	feed.run();
    	}
    });	
});
