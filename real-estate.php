<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Real Estate';
	$page_parent = 'Practice Areas';
	$page_desc = 'At our law firm, we provide comprehensive legal services for all your real estate needs. Whether you are buying, selling, or refinancing a property, our team is here to guide you through the process with efficiency and expertise.';
	$page_image = 'images/real-estate.webp';
	
	include_once ( 'inc/head.php' );
?>
<body>
	<app-root _nghost-ruf-c21="" ng-version="15.2.8">
		
		<?php include_once( 'inc/preloader.php' ); ?>	
		<?php include_once( 'inc/nav.php' ); ?>
		
		<router-outlet _ngcontent-ruf-c21=""></router-outlet>
		<app-practice-details _nghost-ruf-c13="" class="ng-star-inserted">
			<div _ngcontent-ruf-c13="" class="page-title-area-practices" ng-reflect-ng-style="[object Object]" style="background-image: url(&quot;./images/real-estate.webp&quot;);">
				<div _ngcontent-ruf-c13="" class="d-table">
					<div _ngcontent-ruf-c13="" class="d-table-cell">
						<div _ngcontent-ruf-c13="" class="page-title-text">
							<h2 _ngcontent-ruf-c13="" style="padding-top: 80px;">Real Estate</h2>
						</div>
					</div>
				</div>
			</div>
			<div _ngcontent-ruf-c13="" class="page-title-text-responsive">
				<h2 _ngcontent-ruf-c13="" style="padding-top: 80px;">Real Estate</h2>
			</div>
			<div _ngcontent-ruf-c13="" class="practice-details-area">
				<div _ngcontent-ruf-c13="" class="container">
					<div _ngcontent-ruf-c13="" class="row">
						<div _ngcontent-ruf-c13="" class="practice-details-item">
							<div _ngcontent-ruf-c13="" class="practice-details-content">
								<div _ngcontent-ruf-c13="" class="section-title text-start">
									<h3 _ngcontent-ruf-c13="">Overview</h3>
								</div>
								<p _ngcontent-ruf-c13="" style="white-space: pre-wrap; padding-right: 20px;">At our law firm, we provide comprehensive legal services for all your real estate needs. Whether you are buying, selling, or refinancing a property, our team is here to guide you through the process with efficiency and expertise. Our team conducts contract reviews, negotiates terms, and ensures all legal requirements are met, protecting your interests throughout the process. Whether you are buying your dream home, selling a property, or refinancing, we strive to deliver a seamless experience.</p>
							</div>
						</div>
						<div _ngcontent-ruf-c13="" class="practice-details-case">
							<div _ngcontent-ruf-c13="" class="row"></div>
						</div>
						<div _ngcontent-ruf-c13="" class="blog-details-category">
							<h3 _ngcontent-ruf-c13="" style="color: #161618; padding-bottom: 10px;">Other Practices</h3>
							<!--bindings={"ng-reflect-ng-if": "false"}-->
							<!--ng-container-->
    							<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
    								<li _ngcontent-ruf-c13="">
    									<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,0,Litigation" href="<?php echo SITE_URL; ?>litigation">Litigation <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
    									</a>
    								</li>
    							</ul>
    							<!--bindings={  "ng-reflect-ng-if": "true"}-->
    							<!--ng-container-->
    							<!--ng-container-->
								<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
									<li _ngcontent-ruf-c13="">
										<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,1,Commercial Corpor" href="<?php echo SITE_URL; ?>commercial-corporate-transactions">Commercial Corporate Transactions <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
									</a>
								</li>
								</ul>
								<!--bindings={"ng-reflect-ng-if": "true"}-->
								<!--ng-container-->
								<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
									<li _ngcontent-ruf-c13="">
										<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,2,Personal Injury" href="<?php echo SITE_URL; ?>personal-injury">Personal Injury <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
										</a>
									</li>
								</ul>
								<!--bindings={"ng-reflect-ng-if": "true"}-->
								<!--ng-container-->
								<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
									<li _ngcontent-ruf-c13="">
										<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,3,Immigration" href="<?php echo SITE_URL; ?>immigration">Immigration <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
										</a>
									</li>
								</ul>
								<!--bindings={"ng-reflect-ng-if": "true"}-->
								<!--ng-container-->
								<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
									<li _ngcontent-ruf-c13="">
										<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,4,Family Law" href="<?php echo SITE_URL; ?>family-law">Family Law <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
										</a>
									</li>
								</ul>
								<!--bindings={"ng-reflect-ng-if": "true"}-->
								<!--ng-container-->
								<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
									<li _ngcontent-ruf-c13="">
										<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,5,Cyberlaw/Intellec" href="<?php echo SITE_URL; ?>cyberlaw-intellectual-property">Cyberlaw/Intellectual Property <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
										</a>
									</li>
								</ul>
							<!--bindings={"ng-reflect-ng-if": "true"}-->
							<!--ng-container-->
							<!--bindings={"ng-reflect-ng-for-of": "[object Object],[object Object"}-->
						</div>
					</div>
				</div>
			</div>
		</app-practice-details>
		<?php include_once( 'inc/footer.php' ); ?>
</body>