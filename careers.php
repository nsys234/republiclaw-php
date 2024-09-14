<?php
	include_once ( 'inc/config.php' );
	include_once ( 'inc/functions.php' );
	$page_name = 'Careers';
	$page_parent = '';
	$page_desc = 'At The Republic Law, we are continually seeking Students-At-Law and skilled Lawyers to join our dynamic team.';
	$page_image = 'images/republic-law-1.jpg';
	
	include_once ( 'inc/head.php' );
?>
  <body class="page">
    <app-root _nghost-ruf-c21="" ng-version="15.2.8">
      <?php include_once( 'inc/preloader.php' ); ?>
      <?php include_once( 'inc/nav.php' ); ?>
	  
      <router-outlet _ngcontent-ruf-c21=""></router-outlet>
      <app-careers _nghost-ruf-c17="" class="ng-star-inserted">
        <div _ngcontent-ruf-c17="" class="title-img-careers">
          <div _ngcontent-ruf-c17="" class="container-fluid" style="background-color: #1b1b1bb4; padding-top: 280px; padding-bottom: 110px;">
            <div _ngcontent-ruf-c17="" class="section-title">
              <h2 _ngcontent-ruf-c17="" style="color: white;">Join The Republic Law</h2>
              <p _ngcontent-ruf-c17="" style="color: #ABABAB; font-size: 15px; padding-top: 15px;">At The Republic Law, we are continually seeking Students-At-Law and skilled Lawyers to join our dynamic team. <br _ngcontent-ruf-c17="">
                <b _ngcontent-ruf-c17="">Please send your resume and cover letter to </b>
                <a _ngcontent-ruf-c17="" href="mailto:Info@republiclaw.ca">Info@republiclaw.ca</a>
                <b _ngcontent-ruf-c17=""> or fill out the form below. </b>
              </p>
            </div>
            <form _ngcontent-ruf-c17="" novalidate="" action="https://api.web3forms.com/submit" method="POST" class="ng-untouched ng-pristine ng-invalid">
              <input _ngcontent-ruf-c17="" type="hidden" name="access_key" value="formAPI">
              <div _ngcontent-ruf-c17="" class="row contact-wrap">
                <div _ngcontent-ruf-c17="" class="col-sm-6 col-lg-6">
                  <div _ngcontent-ruf-c17="" class="form-group">
                    <input _ngcontent-ruf-c17="" name="name" type="text" placeholder="Your Full Name" required="" minlength="2" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="2" ng-reflect-name="name" ng-reflect-model="">
                    <!--bindings={ "ng-reflect-ng-if": "false" }-->
                  </div>
                </div>
                <div _ngcontent-ruf-c17="" class="col-sm-6 col-lg-6">
                  <div _ngcontent-ruf-c17="" class="form-group">
                    <input _ngcontent-ruf-c17="" name="email" type="email" placeholder="Your Email" required="" pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?" ng-reflect-name="email" ng-reflect-model="">
                    <!--bindings={ "ng-reflect-ng-if": "false" }-->
                  </div>
                </div>
                <div _ngcontent-ruf-c17="" class="col-sm-6 col-lg-6">
                  <div _ngcontent-ruf-c17="" class="form-group">
                    <input _ngcontent-ruf-c17="" type="text" name="phone" id="phone" required="" data-error="Please enter a valid phone number" placeholder="Your Phone Number" minlength="10" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="10" ng-reflect-name="phone" ng-reflect-model="">
                  </div>
                </div>
                <div _ngcontent-ruf-c17="" class="col-sm-6 col-lg-6">
                  <div _ngcontent-ruf-c17="" class="form-group">
                    <input _ngcontent-ruf-c17="" type="text" name="msg_subject" id="msg_subject" required="" data-error="Please enter your subject" placeholder="Subject" minlength="6" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="6" ng-reflect-name="msg_subject" ng-reflect-model="">
                  </div>
                </div>
                <div _ngcontent-ruf-c17="" class="col-md-12 col-lg-12">
                  <div _ngcontent-ruf-c17="" class="form-group">
                    <textarea _ngcontent-ruf-c17="" name="message" id="message" cols="30" rows="8" required="" minlength="20" data-error="Please write your message" placeholder="Tell us about yourself" class="form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required="" ng-reflect-minlength="20" ng-reflect-name="message" ng-reflect-model=""></textarea>
                  </div>
                </div>
                <input _ngcontent-ruf-c17="" type="checkbox" name="botcheck" class="hidden" style="display: none;">
                <div _ngcontent-ruf-c17="" class="col-md-12 col-lg-12">
                  <div _ngcontent-ruf-c17="" class="text-center">
                    <button _ngcontent-ruf-c17="" class="contact-btn" disabled=""> Submit
                      <!--ng-container-->
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div _ngcontent-ruf-c17="" class="container-fluid" style="background-color: #ECECEC; padding: 30px;">
          <div _ngcontent-ruf-c17="" class="row">
            <div _ngcontent-ruf-c17="" class="col-4" style="display: flex; flex-direction: column; justify-content: center;">
              <h2 _ngcontent-ruf-c17="" style="padding: 20px 30px; color: #161618;">Contact Us</h2>
              <ul _ngcontent-ruf-c17="" style="list-style: none; padding: 10px 30px; font-size: 20px; color: #161618;">
                <li _ngcontent-ruf-c17="" style="padding-bottom: 20px;">
                  <i _ngcontent-ruf-c17="" class="icofont-smart-phone" style="color: #CBBB7A; padding-right: 10px;"></i>
                  <a _ngcontent-ruf-c17=""> Phone: 587-319-5916</a>
                </li>
                <li _ngcontent-ruf-c17="" style="padding-bottom: 20px;">
                  <i _ngcontent-ruf-c17="" class="icofont-fax" style="color: #CBBB7A; padding-right: 10px;"></i>
                  <a _ngcontent-ruf-c17=""> Fax: 1-877-659-9376</a>
                </li>
                <li _ngcontent-ruf-c17="" style="padding-bottom: 20px;">
                  <i _ngcontent-ruf-c17="" class="icofont-email" style="color: #CBBB7A; padding-right: 10px;"></i>
                  <a _ngcontent-ruf-c17=""> Email: info@republiclaw.ca</a>
                </li>
                <li _ngcontent-ruf-c17="" style="padding-bottom: 20px;">
                  <i _ngcontent-ruf-c17="" class="icofont-location-pin" style="color: #CBBB7A; padding-right: 10px;"></i>
                  <a _ngcontent-ruf-c17=""> Address: Suite #305, 609-14th Street NW <br _ngcontent-ruf-c17="">Calgary, AB T2N 2A1 </a>
                </li>
              </ul>
            </div>
            <div _ngcontent-ruf-c17="" class="col-8">
              <div _ngcontent-ruf-c17="" class="map-area">
                <iframe _ngcontent-ruf-c17="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.7978787667485!2d-114.0950067!3d51.05681980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716feaf904e0d9%3A0x4e3f37d81a0a02a!2s609%2014%20St%20NW%20Suite%20305%2C%20Calgary%2C%20AB%20T2N%202A1!5e0!3m2!1sen!2sca!4v1682647666523!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border: 0;"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-ruf-c17="" appdynamicscript="">
          <script _ngcontent-ruf-c17="" src="https://web3forms.com/client/script.js" async="" defer=""></script>
        </div>
      </app-careers>
	  
	  <?php include_once( 'inc/footer.php' ); ?>
  </body>