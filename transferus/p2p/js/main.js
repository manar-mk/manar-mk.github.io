$(document).ready(function() {
	$('.js-mask').inputmask("9{*}");
	$('.js-jump').keyup(function(event) {
		jump($(this));
	});
	$('#expireDateMonth').change(function(event) {
		$('#expireDateYear').focus();
	});
	$('#expireDateYear').change(function(event) {
		$('#cvv').focus();
	});
	$('.js-select').focus(function(event) {
		open($(this));
	});
	$('#transferForm').submit(function(event) {
		event.preventDefault();
		
		var fromCardNum="",
			toCardNum="",
			expireDateMonth="",
			expireDateYear="",
			cvv="",
			amount=0,
			result="";

		for (var i = 1; i < 5; i++) {
			fromCardNum += $('[name=fromCardNumPart'+i+']').val();
			toCardNum += $('[name=toCardNumPart'+i+']').val();
		}

		expireDateMonth = $('[name=expireDateMonth]').val();
		expireDateYear = $('[name=expireDateYear]').val();
		
		cvv = $('[name=cvv]').val();
		amount = $('[name=amount]').val();

		result += 'From Card Num: '+fromCardNum+'<br>';
		result += 'To Card Num: '+toCardNum+'<br>';
		result += 'In Amount of: '+amount+'<br>';
		result += 'From Card ExpireDate: '+expireDateMonth+'/'+expireDateYear+'<br>';
		result += 'From Card CVV: '+cvv+'<br>';
		
		$('#result').html(result);

		$.ajax({
		  type: "POST",
		  url: 'auth.jsp',
		  data: {
		  	card_no_bin : fromCardNum,
		  	card_to		: toCardNum,
		  	exp_month	: expireDateMonth,
		  	exp_year	: expireDateYear,
		  	sec_cvv2	: cvv,
		  	amount 		: amount,
		  },
		});
	});
	function jump(jumpFrom){
		var jumpTo = $("#"+jumpFrom.data('jump'));
		if(jumpFrom.val().length==jumpFrom.attr('maxlength')){
			if(jumpFrom.data('clearNext')){
				jumpTo.val('');
			}
			jumpTo.focus();
		}
	}
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