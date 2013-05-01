<!doctype html>  

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
	
<head>
	<meta charset="utf-8">
	<title><?php wp_title(''); ?></title>
	
	<!-- Google Chrome Frame for IE -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<!-- mobile meta (hooray!) -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<!--<meta name="viewport" content="width=device-width, initial-scale=1.0"/>-->
	<meta name="viewport" content="width=device-width, initial-scale=1.5, maximum-scale=1.0, user-scalable=no" />
	
	<!-- icons & favicons (for more: http://themble.com/support/adding-icons-favicons/) -->
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
			
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	
	<!-- wordpress head functions -->
	<?php wp_head(); ?>
	<!-- end of wordpress head -->
		
	<!-- drop Google Analytics Here -->
	<!-- end analytics -->
	
</head>

<body <?php body_class(); ?>>
	<header class="site-header">
		<div class="container">
			<a href="<?php echo home_url(); ?>" rel="nofollow">
				<svg id="logo" width="50px" height="50px" viewBox="0 0 68 68">
					<path fill="#d3daff" d="M33.455,59.385l-21.27-12.281V22.543l21.27-12.28l21.271,12.28v24.561L33.455,59.385z M51.915,24.165l-18.46-10.657L14.996,24.165V45.48l18.459,10.658l18.46-10.658V24.165z"/>
					
					<path fill="#3f35d6" d="M46.086,12.658v29.244h13.646v0.379v6v0.08v0.27H38.809V10.504l0.918-1.591l6.365,3.646"/>
					<defs>
						<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="7.5562" y1="48.1064" x2="48.1947" y2="15.198">
							<stop  offset="0" style="stop-color:#3f35d6"/>
							<stop  offset="1" style="stop-color:#29228a"/>
						</linearGradient>
					</defs>
					
					<path fill="url(#SVGID_1_)" d="M30.142,40.057c-3.249,5.628-6.676,9.096-10.281,10.406c-3.412,1.238-7.397,0.625-11.818-1.756v-7.07l1.945,1.124c2.793,1.612,5.214,1.968,7.263,1.067c2.049-0.902,4.241-3.375,6.576-7.418L39.701,8.913l6.357,3.646"/>
				</svg>
			</a>
			<svg id="menu_btn" width="50px" height="50px" viewBox="0 0 68 68" enable-background="new 0 0 68 68" xml:space="preserve">
				<path fill="#4B2EFF" d="M15,37h40v-5H15V37z M15,18v5h40v-5H15z M15,51h40v-5H15V51z"/>
			</svg>
	        <div class="btn-group follow">
	            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#">
	                <i class="icon-twitter"></i> <i class="icon-thumbs-up"></i> &nbsp;Follow<span class="caret"></span>
	            </a>
	            <ul class="dropdown-menu pull-right">
	            <!-- dropdown menu links -->
	            </ul>
	        </div>
			<a href="<?php echo home_url(); ?>" rel="nofollow"><h1><?php bloginfo('name'); ?></h1></a>
			<nav>
				<?php bones_main_nav(); ?>
			</nav>
		</div>
	</header>
	<script src="<?php echo get_stylesheet_directory_uri() . '/library/js/nav.js'; ?>"></script>
	<div id="container">
