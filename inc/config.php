<?php
	/**
	  * APP CONSTANTS
	**/
	$host = $_SERVER['HTTP_HOST'];
	if ( $host == 'localhost' ){
		define ( 'SITE_FOLDER', '/dw/republiclaw/' );
		define ( 'SITE_HOST', 'http://localhost' );
		$devSiteURL = SITE_HOST . SITE_FOLDER;
		define ( 'SITE_URL', $devSiteURL );
	} elseif ( $host == 'demovalley.com' ) {
		define( 'SITE_URL', 'https://demovalley.com/republiclaw/' ); 
		define( 'BASE_URL', 'https://demovalley.com/republiclaw/' ); 
	} elseif ( $host == 'republiclaw-php-app-uimk4.ondigitalocean.app' ) {
		define( 'SITE_URL', 'https://republiclaw-php-app-uimk4.ondigitalocean.app/' ); 
		define( 'BASE_URL', 'https://republiclaw-php-app-uimk4.ondigitalocean.app/' ); 
	} elseif ( $host == 'new.republiclaw.ca' ){
		define( 'SITE_URL', 'https:/new.republiclaw.ca/' ); 
		define( 'BASE_URL', 'https://new.republiclaw.ca/' ); 
	} else {
		define( 'SITE_URL', 'https://republiclaw.ca/' ); 
		define( 'BASE_URL', 'https://republiclaw.ca/' ); 
	}
		
	define( 'SITE_TITLE', 'The Republic Law' ); 
	define( 'CHAR_SET', 'utf-8' );
?>