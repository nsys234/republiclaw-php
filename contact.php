<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Contact Us';
	$page_parent = 'Contact Us';
	$page_desc = 'We are here to help. No matter what legal matter you are facing, we are ready to provide guidance and support. Don\'t wait until it\'s too late – take control of your situation today.';
	$page_image = 'images/attorney-consulting-in-office.webp';
	
	include_once ( 'inc/head.php' );
?>
<body class="contact">
	<app-root _nghost-ruf-c21="" ng-version="15.2.8">
		
		<?php include_once( 'inc/preloader.php' ); ?>	
		<?php include_once( 'inc/nav.php' ); ?>
		
		<router-outlet _ngcontent-ruf-c21=""></router-outlet>
		<app-contact _nghost-ruf-c16="" class="ng-star-inserted">
			<div _ngcontent-ruf-c16="" class="title-img-contact">
				<div _ngcontent-ruf-c16="" class="container-fluid" style="background-color: #1b1b1bb4; padding-top: 280px; padding-bottom: 110px;">
					<div _ngcontent-ruf-c16="" class="section-title">
						<h2 _ngcontent-ruf-c16="" style="color: white;">Schedule a Consultation</h2>
						<p _ngcontent-ruf-c16="" style="color: #ABABAB; font-size: 15px; padding-top: 15px;">We're here to help. No matter what legal matter you're facing, we're ready to provide guidance and support. <br _ngcontent-ruf-c16="">Don't wait until it's too late – take control of your situation today. </p>
					</div>
					<form _ngcontent-ruf-c16="" novalidate="" action="https://api.web3forms.com/submit" method="POST" class="ng-untouched ng-pristine ng-invalid">
						<input _ngcontent-ruf-c16="" type="hidden" name="access_key" value="formAPI">
						<div _ngcontent-ruf-c16="" class="row contact-wrap">
							<div _ngcontent-ruf-c16="" class="col-sm-6 col-lg-6">
								<div _ngcontent-ruf-c16="" class="form-group">
									<input _ngcontent-ruf-c16="" name="name" type="text" placeholder="Your Full Name" required="" minlength="2" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="2" ng-reflect-name="name" ng-reflect-model="">
									<!--bindings={"ng-reflect-ng-if": "false"}-->
								</div>
							</div>
							<div _ngcontent-ruf-c16="" class="col-sm-6 col-lg-6">
								<div _ngcontent-ruf-c16="" class="form-group">
									<input _ngcontent-ruf-c16="" name="email" type="email" placeholder="Your Email" required="" pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?" ng-reflect-name="email" ng-reflect-model="">
									<!--bindings={"ng-reflect-ng-if": "false"}-->
								</div>
							</div>
							<div _ngcontent-ruf-c16="" class="col-sm-6 col-lg-6">
								<div _ngcontent-ruf-c16="" class="form-group">
									<input _ngcontent-ruf-c16="" type="text" name="phone" id="phone" required="" data-error="Please enter a valid phone number" placeholder="Your Phone Number" minlength="10" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="10" ng-reflect-name="phone" ng-reflect-model="">
								</div>
							</div>
							<div _ngcontent-ruf-c16="" class="col-sm-6 col-lg-6">
								<div _ngcontent-ruf-c16="" class="form-group">
									<input _ngcontent-ruf-c16="" type="text" name="msg_subject" id="msg_subject" required="" data-error="Please enter your subject" placeholder="Subject" minlength="6" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="6" ng-reflect-name="msg_subject" ng-reflect-model="">
								</div>
							</div>
							<div _ngcontent-ruf-c16="" class="col-md-12 col-lg-12">
								<div _ngcontent-ruf-c16="" class="form-group">
									<textarea _ngcontent-ruf-c16="" name="message" id="message" cols="30" rows="8" required="" minlength="20" data-error="Please write your message" placeholder="Share Your Story" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="20" ng-reflect-name="message" ng-reflect-model=""></textarea>
								</div>
							</div>
							<input _ngcontent-ruf-c16="" type="checkbox" name="botcheck" class="hidden" style="display: none;">
							<div _ngcontent-ruf-c16="" class="col-md-12 col-lg-12">
								<div _ngcontent-ruf-c16="" class="text-center">
									<button _ngcontent-ruf-c16="" class="contact-btn" disabled=""> Submit
										<!--ng-container-->
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div _ngcontent-ruf-c16="" class="container-fluid" style="background-color: #ECECEC; padding: 30px;">
				<div _ngcontent-ruf-c16="" class="row">
					<div _ngcontent-ruf-c16="" class="col-4" style="display: flex; flex-direction: column; justify-content: center;">
						<h2 _ngcontent-ruf-c16="" style="padding: 20px 30px; color: #161618;">Contact Us</h2>
						<ul _ngcontent-ruf-c16="" style="list-style: none; padding: 10px 30px; font-size: 20px; color: #161618;">
							<li _ngcontent-ruf-c16="" style="padding-bottom: 20px;">
								<i _ngcontent-ruf-c16="" class="icofont-smart-phone" style="color: #CBBB7A; padding-right: 10px;"></i>
								<a _ngcontent-ruf-c16=""> Phone: 587-319-5916</a>
							</li>
							<li _ngcontent-ruf-c16="" style="padding-bottom: 20px;">
								<i _ngcontent-ruf-c16="" class="icofont-fax" style="color: #CBBB7A; padding-right: 10px;"></i>
								<a _ngcontent-ruf-c16=""> Fax: 1-877-659-9376</a>
							</li>
							<li _ngcontent-ruf-c16="" style="padding-bottom: 20px;">
								<i _ngcontent-ruf-c16="" class="icofont-email" style="color: #CBBB7A; padding-right: 10px;"></i>
								<a _ngcontent-ruf-c16=""> Email: info@republiclaw.ca</a>
							</li>
							<li _ngcontent-ruf-c16="" style="padding-bottom: 20px;">
								<i _ngcontent-ruf-c16="" class="icofont-location-pin" style="color: #CBBB7A; padding-right: 10px;"></i>
								<a _ngcontent-ruf-c16=""> Address: Suite #305, 609-14th Street NW <br _ngcontent-ruf-c16="">Calgary, AB T2N 2A1 </a>
							</li>
						</ul>
					</div>
					<div _ngcontent-ruf-c16="" class="col-8">
						<div _ngcontent-ruf-c16="" class="map-area">
							<iframe _ngcontent-ruf-c16="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.7978787667485!2d-114.0950067!3d51.05681980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716feaf904e0d9%3A0x4e3f37d81a0a02a!2s609%2014%20St%20NW%20Suite%20305%2C%20Calgary%2C%20AB%20T2N%202A1!5e0!3m2!1sen!2sca!4v1682647666523!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border: 0;"></iframe>
						</div>
					</div>
				</div>
			</div>
			<div _ngcontent-ruf-c16="" appdynamicscript="">
				<script _ngcontent-ruf-c16="" src="https://web3forms.com/client/script.js" async="" defer=""></script>
			</div>
		</app-contact>
	<?php include_once( 'inc/footer.php' ); ?>
</body>