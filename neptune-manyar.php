<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Neptune Manyar';
	$page_parent = 'Meet Our Team';
	$page_desc = 'Neptune Manyar is a Student-At-Law at The Republic Law. Her primary interests are in the areas of Corporate and Commercial Law, Litigation, Intellectual Property Law, Personal Injury Law, Immigration Law and Employment Law.';
	$page_image = 'images/neptune_manyar.jpg';
	
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
                <img alt="Details" class="lawyer-img" srcset="images/neptune_manyar.jpg">
                <div class="attor-details-left">
                  <div class="attor-social-details" style="padding-top: 50px;">
                    <h3>Contact Info</h3>
                    <ul>
                      <li class="ng-star-inserted">
                        <i class="flaticon-call" style="padding-right: 10px;"></i>
                        <a href="tel:1-587-319-5916 Ext. 103">1-587-319-5916</a>
                      </li>
                      <!--bindings={"ng-reflect-ng-if": "1-587-319-5916"}-->
                      <li class="ng-star-inserted">
                        <i class="flaticon-email" style="padding-right: 10px;"></i>
                        <a href="mailto:neptune.manyar@republiclaw.ca">neptune.manyar@republiclaw.ca</a>
                      </li>
                      <!--bindings={"ng-reflect-ng-if": "neptune.manyar@republiclaw.ca"}-->
                      <li class="ng-star-inserted">
                        <i style="padding-right: 10px;" class="icofont-linkedin"></i>
                        <a target="_blank" href="https://www.linkedin.com/in/neptune-manyar-4944629a/en-us" class="ng-star-inserted">LinkedIn Profile</a>
                        <!--bindings={"ng-reflect-ng-if": "https://www.linkedin.com/in/neptune-manyar-4944629a/en-us"}-->
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
										Neptune Manyar is a Student-At-Law at The Republic Law. Her primary interests are in the areas of Corporate and Commercial Law, Litigation, Intellectual Property Law, Personal Injury Law, Immigration Law and Employment Law.<br><br>
										Neptune has dual qualifications in Civil Law and Common Law. She completed her law degrees in France. She has a dual master’s degree in International Public Law from the University of Lorraine, and another master’s degree in Intellectual Property and New Technologies from the University of Strasbourg, France. In Canada, she completed the Foreign Trained Lawyer Program at the University of Calgary.<br><br>
										
										Neptune's professional journey is both unique and rich, marked by exceptional international experiences. She began her career as a legal assistant at the United Nations in New York, an opportunity that paved the way for a series of other prestigious roles. Subsequently, she worked as a solicitor at an Intellectual Property Law firm in Lyon and Paris. Her path then led her to a position as Legal Advisor with the National Security Council of Afghanistan. Thereafter, Neptune worked as a Legal Advisor and International Relations Officer for the Minister of Foreign Affairs in Kabul, Afghanistan.<br><br>
										
										These experiences have equipped Neptune with the ability to work confidently with clients from all walks of life, understanding and addressing their unique legal needs with sensitivity and empathy. Her international exposure has made her adept at bridging cultural and linguistic differences, ensuring that her clients feel supported and understood, regardless of their background. 
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
											<li>Corporate and Commercial Transactions</li>
											<li>Employment</li>
											<li>Personal Injury</li>
											<li>Intellectual Property</li>											
											<li>Immigration</li>
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
											<li>LL.M from University of Strasbourg, Strasbourg, France</li>
											<li>LL.M (Hons) from University of Lorraine, Nancy, France </li>
											<li>LL.B from the University of Lorraine, Nancy, France</li>
											<li>Foreign Trained Lawyer Program from the University of Calgary, Canada</li>
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
											<li>Association des juristes d’expression française de l’Alberta (AJEFA) </li>
											<li>Association of Women Lawyers Calgary </li>											
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
											<li>French</li>
											<li>Farsi/Dari</li>
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