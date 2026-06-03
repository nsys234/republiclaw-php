<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Harriet Igwe';
	$page_parent = 'Meet Our Team';
	$page_desc = 'Harriet is a dual-qualified lawyer admitted to practice in Canada and Nigeria and is currently an Associate at The Republic Law in Alberta. She brings over seven years of experience spanning legal practice, policy advisory, and international development.';
	$page_image = 'images/dummy.jpg';
	
	include_once ( 'inc/head.php' );
?>
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
                  <h1>Harriet Igwe</h1>
                  <h3 style="color: #C8B085; padding-bottom: 0px;">Student-At-Law</h3>
                </div>
                <img alt="Details" class="lawyer-img" srcset="images/dummy.png">
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
                        <a href="mailto:harriet.igwe@republiclaw.ca">harriet.igwe@republiclaw.ca</a>
                      </li>
                      <!--bindings={"ng-reflect-ng-if": "harriet.igwe@republiclaw.ca"}-->
                      <li class="ng-star-inserted">
                        <i style="padding-right: 10px;" class="icofont-linkedin"></i>
                       <!-- <a target="_blank" href="https://ca.linkedin.com/in/david-ike-phd-60897a7" class="ng-star-inserted">LinkedIn Profile</a>-->
                        <!--bindings={"ng-reflect-ng-if": "https://ca.linkedin.com/in/david-ike-phd-60897a7"}-->
                      </li>
                      <!--bindings={"ng-reflect-ng-for-of": "[object Object]"}-->
                    </ul>
                  </div>
                </div>
                <!--<div class="attor-prev">
                  <ul>
                    <li ng-reflect-ng-class="nav-prev" class="nav-prev">
                      <a ng-reflect-router-link="/meet-our-team,4,Harriet Igwe" href="/meet-our-team/0/Ugo%20Ukpabi">Previous</a>
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
							<h1>Harriet Igwe</h1>
							<h3 style="color: #C8B085; padding-bottom: 0px;">Student-At-Law</h3>
						</div>
						
						<div class="accordion accordion-flush" id="accordionFlushExample">
							 <div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingOne">
									<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Biography </button>
								</h2>
								<div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">
										<p>Harriet is a dual-qualified lawyer admitted to practice in Canada and Nigeria and is currently an Associate at The Republic Law in Alberta. She brings over seven years of experience spanning legal practice, policy advisory, and international development. Harriet holds an LL.B. from the University of Hull and an LL.M. in International Corporate Finance from the University of Reading, United Kingdom. Her practice focuses on litigation, regulatory matters, corporate advisory work, and complex multi-jurisdictional projects.</p>
										
										<p>Alongside her domestic legal practice, Harriet has worked extensively with the World Bank Group as a Legal Consultant, Safeguards Specialist, and Operations Specialist. She has supported development projects valued at over USD 1 billion across Fragile, Conflict, and Violence (FCV) settings, providing legal, policy, and governance advice on institutional strengthening, investment climate reforms, sustainable infrastructure, and climate resilience initiatives. Her work has involved legal and policy review, safeguards compliance, stakeholder engagement, and coordination among governments, development partners, and private-sector stakeholders.</p>
										
										<p>Across her career, Harriet has developed expertise in international investment frameworks, sovereign project financing, regulatory reform, governance, and stakeholder engagement. She has contributed to significant development initiatives, including Nigeria's sovereign green bond program—the first in Africa and the third globally—ECOWAS investment climate reform projects, and legislative reforms relating to Special Economic Zones across Sub-Saharan Africa. She has also supported the introduction of innovative project monitoring technologies, including GIS mapping and remote supervision tools in FCV environments. Harriet has been part of World Bank teams recognized with a Vice Presidential Unit (VPU) Team Award for excellence in delivering high-impact development outcomes. Recognized for her strategic insight and collaborative approach, she is committed to delivering practical legal solutions that advance good governance, sustainable development, and economic growth in both domestic and international contexts.</p>
									</div>
								</div>
							</div>
							<!--  
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
							-->
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
