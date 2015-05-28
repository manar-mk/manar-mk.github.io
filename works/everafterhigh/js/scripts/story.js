$(document).ready(function() {
	var storyPages = $('.js-page');
	var currentPage = 0;
	var totalPages = storyPages.length;
	var storyButton = $('.js-story-nav');

	storyButton.click(function(event) {
		event.preventDefault();
		switch($(this).data('action')) {
			case 'prev':
				if(currentPage>0){
					$(storyPages.get(currentPage)).fadeOut('400');
					currentPage--;
				}
				break;
			case 'next':
				if(currentPage<totalPages-1){
					console.log(storyPages.get(currentPage));
					$(storyPages.get(currentPage)).fadeOut('400');
					currentPage++;
				}
				break;
		}
		$(storyPages.get(currentPage)).fadeIn('400');

	});
});