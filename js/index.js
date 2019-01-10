$('.navbox').hide();

$(window).scroll(function () {
	if($(this).scrollTop() < 614) {
		$('.navbox').hide()
	} else {
		$('.navbox').show()
	}
});

$(".nav > li > a").click( function() {
	$('.collapse').attr("aria-expanded",false);
	$('.collapse').removeClass("in");
	let pageX = $(this).attr('href');
	switch (pageX) {
		case '#' :
			$('html,body').animate({scrollTop: 0}, 300);
			break;
		case '#page1' :
			$('html,body').animate({scrollTop: 667}, 300);
			break;
		case '#page2' :
			$('html,body').animate({scrollTop: 1206}, 300);
			break;
		case '#page3' :
			$('html,body').animate({scrollTop: 1910}, 300);
			break;
		case '#page4' :
			$('html,body').animate({scrollTop: 2739}, 300);
			break;
		default:

	}
});
