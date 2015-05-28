$(document).ready(function() {
	$('.js-modal-call').fancybox();
});
function callModal(id){
	$('#modal-link-'+id).trigger('click');
}