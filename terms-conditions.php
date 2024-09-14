<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Terms & Conditions';
	$page_parent = '';
	$page_desc = 'The information and articles contained in this web site are general in nature and are not intended to provide legal advice. You should not act or fail to act on anything based on any of the material contained herein without first consulting with a lawyer.';
	$page_image = 'images/republic-law-1.jpg';
	
	include_once ( 'inc/head.php' );
?>
<body class="terms-conditions">
	<app-root _nghost-ruf-c21="" ng-version="15.2.8">
		
		<?php include_once( 'inc/preloader.php' ); ?>	
		<?php include_once( 'inc/nav.php' ); ?>
		
		<router-outlet _ngcontent-ymj-c21=""></router-outlet>
		<app-terms-conditions _nghost-ymj-c15="">
			<div _ngcontent-ymj-c15="" class="about-area pt-100">
				<div _ngcontent-ymj-c15="" class="section-title">
					<span _ngcontent-ymj-c15="">THE REPUBLIC LAW</span>
					<h2 _ngcontent-ymj-c15="">Terms and Conditions</h2>
				</div>
				<section _ngcontent-ymj-c15="" class="privacy-area pt-50">
					<div _ngcontent-ymj-c15="" class="container">
						<div _ngcontent-ymj-c15="" class="privacy-item">
							<p _ngcontent-ymj-c15=""> The information and articles contained in this web site are general in nature and are not intended to provide legal advice. You should not act or fail to act on anything based on any of the material contained herein without first consulting with a lawyer. Communication to you through this web site is not intended to create a solicitor-client relationship. You should consult a lawyer to address the specific circumstances of your matter. Any communication via the internet including e-mail communications are not secure and we, therefore, strongly discourage you from communicating confidential or sensitive information by e-mail. Any communication to our firm via e-mail will not create a solicitor-client relationship and the information sent will not be privileged unless you are already a client of our firm. In order to become a client of our firm, a formal retainer agreement must be entered into by the firm and the client. The contents of this web site are the property of The Republic Law, ©&nbsp;Copyright&nbsp;<?php echo date('Y');?>, all rights reserved. The contents cannot be reproduced, published, displayed, broadcast or retransmitted without the express written consent of Ugo Ukpabi. K.C. </p>
						</div>
					</div>
				</section>
			</div>
		</app-terms-conditions>
	<?php include_once( 'inc/footer.php' ); ?>
</body>