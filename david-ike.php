<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'David Ike';
	$page_parent = 'Meet Our Team';
	$page_desc = 'David Ike is presently a Student-At-Law at The Republic Law in Calgary, Alberta, and demonstrates keenness in diverse legal areas such as Trademark and copyright Law, Corporate and Commercial Transactions, Litigation, Immigration, and Personal Injury Litigation.';
	$page_image = 'images/david_ike.jpg';
	
	include_once ( 'inc/head.php' );
?>
<body>
<body>
  <app-root _nghost-ruf-c21="" ng-version="15.2.8">
    
	<?php include_once( 'inc/preloader.php' ); ?>	
	<?php include_once( 'inc/nav.php' ); ?>
	
    <router-outlet _ngcontent-ruf-c21=""></router-outlet>
    <app-lawyer-details class="ng-star-inserted">
      <div class="lawyer-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-lg-1 col-md-6">
              <div class="attor-details-item">
                <div class="attor-details-name">
                  <h1>George Akpan</h1>
                  <h3 style="color: #C8B085; padding-bottom: 0px;">Student-At-Law</h3>
                </div>
                <img alt="Details" class="lawyer-img" srcset="images/david_ike.jpg">
                <div class="attor-details-left">
                  <div class="attor-social-details" style="padding-top: 50px;">
                    <h3>Contact Info</h3>
                    <ul>
                      <li class="ng-star-inserted">
                        <i class="flaticon-call" style="padding-right: 10px;"></i>
                        <a href="tel:1-587-319-5916 Ext. 103">1-587-319-5916 Ext. 104</a>
                      </li>
                      <!--bindings={"ng-reflect-ng-if": "1-587-319-5916 Ext. 104"}-->
                      <li class="ng-star-inserted">
                        <i class="flaticon-email" style="padding-right: 10px;"></i>
                        <a href="mailto:david.ike@republiclaw.ca">david.ike@republiclaw.ca</a>
                      </li>
                      <!--bindings={"ng-reflect-ng-if": "david.ike@republiclaw.ca"}-->
                      <li class="ng-star-inserted">
                        <i style="padding-right: 10px;" class="icofont-linkedin"></i>
                        <a target="_blank" href="https://ca.linkedin.com/in/david-ike-phd-60897a7" class="ng-star-inserted">LinkedIn Profile</a>
                        <!--bindings={"ng-reflect-ng-if": "https://ca.linkedin.com/in/david-ike-phd-60897a7"}-->
                      </li>
                      <!--bindings={"ng-reflect-ng-for-of": "[object Object]"}-->
                    </ul>
                  </div>
                </div>
                <!--<div class="attor-prev">
                  <ul>
                    <li ng-reflect-ng-class="nav-prev" class="nav-prev">
                      <a ng-reflect-router-link="/meet-our-team,0,Ugo Ukpabi" href="/meet-our-team/0/Ugo%20Ukpabi">Previous</a>
                    </li>
                    <li ng-reflect-ng-class="nav-prev" class="nav-prev">
                      <a ng-reflect-router-link="/meet-our-team,2,Theodore Owar" href="/meet-our-team/2/Theodore%20Oware">Next</a>
                    </li>
                  </ul>
                </div>-->
              </div>
            </div>
            <div class="col-lg-7 col-md-6 ng-star-inserted">
				<div class="attor-details-item">
					<div class="attor-details-right">
						<div class="attor-details-name">
							<h1>David Ike</h1>
							<h3 style="color: #C8B085; padding-bottom: 0px;">Student-At-Law</h3>
						</div>
						
						<div class="accordion accordion-flush" id="accordionFlushExample">
							 <div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingOne">
									<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Biography </button>
								</h2>
								<div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										David Ike is presently a Student-At-Law at The Republic Law in Calgary, Alberta, and demonstrates keenness in diverse legal areas such as Trademark and copyright Law, Corporate and Commercial Transactions, Litigation, Immigration, and Personal Injury Litigation. David has successfully passed the National Committee on Accreditation (NCA) exams, and has established a commendable track record of delivering exceptional legal guidance, conducting thorough research, drafting legal documents, and representing clients across various legal proceedings. His meticulous attention to detail is widely recognized.<br><br>
										
										David's professional journey includes roles as a Legal Intern at Merani Law in Calgary, Senior Litigation Counsel at Advanced Chambers in Lagos, Nigeria, and an In-House Legal Counsel at Aveon Offshore Oil & Gas in London, United Kingdom.<br><br>
										
										David holds a Ph.D. in Corporate & Commercial Law from Abia State University, Nigeria, an LL.B (Hons) from Lagos State University, Nigeria, and a Master of Law (LL.M) from Queen Mary University of London. He is a member of the Chartered Institute of Arbitrators and holds PMP certification from the Project Management Institute.
									</div>
								</div>
							</div>
							  
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingTwo">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Areas of Practice</button>
								</h2>
								<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul>
											<li>Litigation</li>
											<li>Personal Injury</li>
											<li>Immigration</li>
											<li>Corporate and Commercial Transactions</li>
											<li>Intellectual Property</li>											
											<li>Privacy Law</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingThree">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Education</button>
								</h2>
								<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul>
											<li>Ph.D. in Corporate & Commercial Law from Abia State University, Nigeria</li>
											<li>LL.M from Queen Mary University of London, United Kingdom</li>
											<li>LL.B (Hons) from the Lagos State University, Nigeria</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingFour">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Admissions</button>
								</h2>
								<div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul>
											<li>Nigeria Bar, 2003</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingFive">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Membership</button>
								</h2>
								<div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul>
											<li>Law Society of Alberta</li>
											<li>Nigerian Bar Association</li>
											<li>Canadian Bar Association</li>
											<li>International Law Association, Canada</li>
											<li>Calgary Bar Association</li>											
											<li>Member of the Chartered Institute of Arbitrators</li>											
										</ul>
									</div>
								</div>
							</div>
							
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingSeven">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">Languages</button>
								</h2>
								<div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<ul>
											<li>English</li>
											<li>Igbo</li>
										</ul>
									</div>
								</div>
							</div>							
							
						</div> 
                  
					</div>
				</div>
            </div>
            <!--bindings={"ng-reflect-ng-if": "[object Object]"}-->
          </div>
        </div>
      </div>
    </app-lawyer-details>
	
    <?php include_once( 'inc/footer.php' ); ?>
</body>