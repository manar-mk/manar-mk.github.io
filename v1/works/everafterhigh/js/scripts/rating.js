$(document).ready(function() {
	var rating = $('.js-rating');
	var ratingButton = $('.js-rating-button');
	var ratingRank = rating.data('rank');
	var ratingCurrentRank;
	var ratingStars = $('.js-rating-button');
	
	redrawRating();
	if(ratingRank==0){
		ratingStars.css('cursor', 'pointer');
	}
	ratingButton.hover(function() {
		if(ratingRank==0){
			ratingCurrentRank = $(this).data('rate');
			for(var i=1;i<=ratingCurrentRank;i++){
				$(ratingStars.get(i-1)).addClass('rating__star--rated');
			}
		}
	}, function() {
		redrawRating();
	});
	ratingButton.click(function(event) {
		if(ratingRank==0){
			ratingRank=$(this).data('rate');
			rating.attr('rank', ratingRank);
			ratingStars.css('cursor', 'default');
			alert('вы выбрали '+ratingRank);
		}
	});
	function redrawRating(){
		ratingStars.removeClass('rating__star--rated');
		for(var i=1;i<=ratingRank;i++){
			console.log();
			$(ratingStars.get(i-1)).addClass('rating__star--rated')
		}
	}

});