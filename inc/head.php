<!DOCTYPE html>
<html>
  <head>
    <meta charset="<?php echo CHAR_SET; ?>">
	<base href="<?php echo SITE_URL; ?>">
    <title><?php echo $page_name . ' - ' . SITE_TITLE; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo $page_desc; ?>" />
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
	
	<meta property="og:title" content="<?php echo $page_name . ' - ' . SITE_TITLE; ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo SITE_URL . '/' . strtolower( $page_name ); ?>" />
	<meta property="og:description" content="<?php echo $page_desc; ?>" />
	<meta property="og:image" content="<?php echo $page_image; ?>" />
	<meta property="og:image:alt" content="<?php echo $page_name; ?>" />
    <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@PepublicLaw" />
	<meta name="color-scheme" content="light dark">
	
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&amp;display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="css/styles.css">
    <!--<base href="<?php echo SITE_URL . '/' . strtolower( $page_name ); ?>">-->
    
    <script>
        function showResult(str) {
          if (str.length==0) {
            document.getElementById("livesearch").innerHTML="";
            document.getElementById("livesearch").style.display="none";
            return;
          }
          var xmlhttp=new XMLHttpRequest();
          xmlhttp.onreadystatechange=function() {
            if (this.readyState==4 && this.status==200) {
              document.getElementById("livesearch").innerHTML=this.responseText;
              document.getElementById("livesearch").style.display="block";
            }
          }
          xmlhttp.open("GET","search.php?q="+str,true);
          xmlhttp.send();
        }
    </script>

  </head>