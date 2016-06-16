$(document).ready(function() {
//	Popup video youtube
	$('.popup-youtube').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		alignTop: true,

		fixedContentPos: false
	});
	
// Show/Hide Tabs
	$('.tabs .tabs-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
		
        $('.tab' + currentAttrValue).show();
		$('.tab:not(' + currentAttrValue + ')').hide();
      
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
	
//	Hide/show select option State
	$('#country').change(function(){
		var country = $(this).val();
		console.log('sdfk;df');
		if(country == 'usa'){
			$('#state').removeClass('hide');
			$('#label_state').removeClass('hide');
		} else {
			$('#state').addClass('hide');
			$('#label_state').addClass('hide');	
		}
	})
});