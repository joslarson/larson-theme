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
var fontsize = 12.5;
function setFontSize() {
	$('body').append('<div id="567" style="width: 1000rem;">&nbsp;</div>');
	fontsize = $('#567').width() / 1000;
	$('#567').remove();
}

$(window).bind("load", function() {
	setFontSize();
	// 
	h1Long = 'Joseph Larson';
	h1Short = 'Joe Larson';
	followLong = '<i class="icon-twitter"></i> <i class="icon-facebook"></i> &nbsp;Follow Me&nbsp; <i class="icon-angle-down"></i>';
	followShort = '<i class="icon-twitter"></i> <i class="icon-facebook"></i> &nbsp;<i class="icon-angle-down"></i>';
	// Initialize Body Class
	bodyClass = 'huge';

	// Nav Element Widths
	logoWidth = px2rem( $('body > header #logo').outerWidth(true) );
	h1LongWidth = px2rem( $('body > header h1').text(h1Long).outerWidth(true) );
	h1ShortWidth = px2rem( $('body > header h1').text(h1Short).outerWidth(true) );
	navWidth = px2rem( $('body > header nav').outerWidth(true) );
	followLongWidth = px2rem( $('body > header .dropdown a').html(followLong).outerWidth(true) );
	followShortWidth = px2rem( $('body > header .dropdown a').html(followShort).outerWidth(true) );
	menuBtnWidth = px2rem( $('body > header svg#menu_btn').outerWidth(true) );

	function response(size) {
		$('html').removeClass();
		$('html').addClass(size);
		bodyClass = size;
	}

	function rem2px(rem) {
		return rem * fontsize;
	}

	function px2rem(px) {
		return px / fontsize;
	}

	function responsive() {
		setFontSize();
		// width() = inside padding; innerWidth() = inside border; outerWidth() = outside border; outerWidth(true) = outside margin;
		// Check innerWidth of header .container
		containerWidth = $('header .container').width();

		var fullsize = containerWidth > rem2px(logoWidth + h1LongWidth + navWidth + followLongWidth + 0.8);
		var break_h1_1 = containerWidth > rem2px(logoWidth + h1ShortWidth + navWidth + followLongWidth + 0.8);
		var break_follow_1 = containerWidth > rem2px(logoWidth + h1ShortWidth + navWidth + followShortWidth + 0.8);
		var break_h1_2 = containerWidth > rem2px(logoWidth + navWidth + followLongWidth + 2.3);
		var break_follow_2 = containerWidth > rem2px( logoWidth + followShortWidth + navWidth + 2.3);
		var break_margin = containerWidth > rem2px( logoWidth + followShortWidth + navWidth + 0.3 );

		if (fullsize) {
			$('body > header h1').text(h1Long);
			$('header .dropdown a').html(followLong);
			response('');
		} else if (break_h1_1) {
			$('body > header h1').text(h1Short);
			$('header .dropdown a').html(followLong);
			response('break_h1_1');
		} else if (break_follow_1 && $('body > header .container').css('margin-left') == '40px') {
			$('body > header h1').text(h1Short);
			response('break_h1_1 break_follow_1');
			$('header .dropdown a').html(followShort);
		} else if (break_h1_2) {
			console.log($('body > header .container').css('margin-left'));
			$('body > header h1').text(h1Short);
			response('break_h1_1 break_follow_1 break_h1_2');
			$('header .dropdown a').html(followLong);
		} else if (break_follow_2) {
			$('body > header h1').text(h1Short);
			response('break_h1_1 break_follow_1 break_h1_2 break_follow_2');
			$('header .dropdown a').html(followShort);
		} else {
			response('break_h1_1 break_follow_1 break_h1_2 break_follow_2 mobile');
			$('body > header h1').text(h1Long);
		}
	}

	function fixedNav() {
		intro_offset = $('.site-header .intro').offset()['top'];
		intro_height = $('.site-header .intro').height();
		if( $(window).scrollTop() >= intro_offset + intro_height + rem2px(1.2) ) {
			$('.wrapper').addClass('stuck');
		} else {
			$('.wrapper').removeClass('stuck');
		}
	}

	responsive();

	$(window).resize(function() {
		responsive();
		fixedNav();
	});

	$(window).scroll( function() {
		fixedNav();
	});

});