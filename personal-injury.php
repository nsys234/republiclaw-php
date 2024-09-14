<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Peronal Injury';
	$page_parent = 'Practice Areas';
	$page_desc = 'Our law firm prides itself as the go to law firm for all personal injury cases. We recognize the devastating impact personal injuries can have on individuals and their families.';
	$page_image = 'images/personal-injury.webp';
	
	include_once ( 'inc/head.php' );
?>
<body>
	<app-root _nghost-ruf-c21="" ng-version="15.2.8">
		
		<?php include_once( 'inc/preloader.php' ); ?>	
		<?php include_once( 'inc/nav.php' ); ?>
		
		<router-outlet _ngcontent-ruf-c21=""></router-outlet>
		<app-practice-details _nghost-ruf-c13="" class="ng-star-inserted">
			<div _ngcontent-ruf-c13="" class="page-title-area-practices" ng-reflect-ng-style="[object Object]" style="background-image: url(&quot;./images/personal-injury.webp&quot;);">
				<div _ngcontent-ruf-c13="" class="d-table">
					<div _ngcontent-ruf-c13="" class="d-table-cell">
						<div _ngcontent-ruf-c13="" class="page-title-text">
							<h2 _ngcontent-ruf-c13="" style="padding-top: 80px;">Personal Injury</h2>
						</div>
					</div>
				</div>
			</div>
			<div _ngcontent-ruf-c13="" class="page-title-text-responsive">
				<h2 _ngcontent-ruf-c13="" style="padding-top: 80px;">Personal Injury</h2>
			</div>
			<div _ngcontent-ruf-c13="" class="practice-details-area">
				<div _ngcontent-ruf-c13="" class="container">
					<div _ngcontent-ruf-c13="" class="row">
						<div _ngcontent-ruf-c13="" class="practice-details-item">
							<div _ngcontent-ruf-c13="" class="practice-details-content">
								<div _ngcontent-ruf-c13="" class="section-title text-start">
									<h3 _ngcontent-ruf-c13="">Overview</h3>
								</div>
								<p _ngcontent-ruf-c13="" style="white-space: pre-wrap; padding-right: 20px;">Our law firm prides itself as the go to law firm for all personal injury cases. We recognize the devastating impact personal injuries can have on individuals and their families. With a compassionate approach, we specialize in handling a wide range of personal injury cases, including slip and fall accidents, medical malpractice claims, motor vehicle accidents, and wrongful death. Our experienced team understands the complexities of these cases and works diligently to protect the rights of our clients. We conduct thorough investigations, collaborate with medical and other experts, to skillfully negotiate or litigate on behalf of our clients to secure the compensation they deserve. With unwavering dedication, we strive to bring justice and help rebuild lives affected by personal injuries.</p>
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
								<ul _ngcontent-ruf-c13="" class="ng-star-inserted">
									<li _ngcontent-ruf-c13="">
										<a _ngcontent-ruf-c13="" ng-reflect-router-link="/practices,6,Real Estate" href="<?php echo SITE_URL; ?>real-estate">Real Estate <i _ngcontent-ruf-c13="" class="icofont-arrow-right"></i>
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