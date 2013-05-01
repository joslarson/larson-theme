var h1Long;
var h1Short;

// Initialize Body Class
var bodyClass;

// Nav Element Widths
var logoWidth;
var h1LongWidth;
var h1ShortWidth;
var navWidth;
var followWidth;
var menuBtnWidth;
var containerWidth;
$(document).ready(function() {

	// 
	h1Long = 'Joseph Larson';
	h1Short = 'Joe Larson';

	// Initialize Body Class
	bodyClass = 'large';

	// Nav Element Widths
	logoWidth = $('header #logo').outerWidth(true);
	h1LongWidth = $('header h1').text(h1Long).outerWidth();
	h1ShortWidth = $('header h1').text(h1Short).outerWidth();
	navWidth = $('header nav').outerWidth(true);
	followWidth = $('header .dropdown').outerWidth(true);
	menuBtnWidth = $('header svg#menu_btn').outerWidth(true);

	function response(size) {
		$('body').removeClass();
		$('body').addClass(size);
		bodyClass = size;
	}

	function responsive() {
		// Check innerWidth of header .container
		containerWidth = $('header .container').innerWidth();

		if ( containerWidth >= logoWidth + h1LongWidth + navWidth + followWidth + 8 ) {
			$('header h1').text(h1Long);
			response('large');
		} else if ( containerWidth >= logoWidth + h1ShortWidth + navWidth + followWidth + 8 ) {
			$('header h1').text(h1Short);
			response('large medium');
		} else if ( containerWidth >= logoWidth + navWidth + 20 + followWidth + 8 && $('header .container').css('margin-left') == '20px' ) {
			response('large medium small');
		} else if ( containerWidth - 30 >= logoWidth + navWidth + 20 + followWidth + 8 && $('header .container').css('margin-left') == '5px' ) {
			response('large medium small');
		} else if ( containerWidth >= logoWidth + h1LongWidth + menuBtnWidth ) {
			response('large medium small mobile');
			$('header h1').text(h1Long);
		} else {
			response('large medium small mobile');
			$('header h1').text(h1Short);
		}
	}

	responsive();
	$(window).resize(function() {
	responsive();
	});
});