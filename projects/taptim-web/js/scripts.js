$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault();
        location.href = "index.html"
    });
    L.mapbox.accessToken = 'pk.eyJ1IjoibWFuYXIiLCJhIjoiY2lqbGV1cmJkMDAyZ3ZhbHhiOHE1Y3hpNCJ9.NUDL-B5daGlxnZ1WC5bTxQ';
	if($('#map').length > 0){
		var map = L.mapbox.map('map', 'mapbox.streets')
    			.setView([43.2120559, -76.899596], 20);
	}

	if($('#map1').length > 0){
    	var map = L.mapbox.map('map1', 'mapbox.streets')
    		.setView([43.2120559, -76.899596], 20);
	}
	if($('#map2').length > 0){
    	var map = L.mapbox.map('map2', 'mapbox.streets')
    		.setView([43.2120559, -76.899596], 20);    
	}
	if($('#map3').length > 0){
	    var map = L.mapbox.map('map3', 'mapbox.streets')
    		.setView([43.2120559, -76.899596], 20);
    }
});
