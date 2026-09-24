---
layout: default
title: Contacts
page_name: contacts
lang: en
translation_key: contacts
description: You can contact me by email to discuss your project
permalink: /contacts/
turnstile: true
notification_modal: true
---

<div class="im_breadcrums_div">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="im_pageheading">
                    <div class="im_titlediv">
                        <span class="im-left-top-border"></span>
                        <span class="im-right-bottom-border"></span>
                        <h2>Contacts</h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>                        
						<li class="active">
							<span>Contacts</span>
						</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>

<div class="im_transparent_wrapper im_toppadder50 im_bottompadder80">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">                
                <div class="email-suggestion">
                	<h2>How can we help your business? </h2>
                	<ul>
                		<li>Email: <a href="mailto:aramayismirzoyan@yahoo.com">aramayismirzoyan@yahoo.com</a></li>
                		<li>WhatsApp: <a href="https://wa.me/37495191644" target="_blank">+37495191644</a></li>
                	</ul>
                </div>               
                <div class="contact-another-links">
                	<h2>
                		Another links
                	</h2>
                	<ul>
                		<li>
                			<a href="https://x.com/aramayis_m" target="_blank">X</a>
                		</li>
                		<li>
                			<a href="https://github.com/aramayismirzoyan" target="_blank">GitHub</a>
                		</li>
                		<li>
                			<a href="https://medium.com/@aramayis_m" target="_blank">Medium</a>
                		</li>
                		<li>
                			<a href="https://www.linkedin.com/in/aramayis-mirzoyan/" target="_blank">LinkedIn</a>
                		</li>
                		<li>
                			<a href="https://www.freelancer.com/u/aramayismirzoyan" target="_blank">Freelancer.com</a>
                		</li>
                		<li>
                			<a href="https://www.fiverr.com/aramayism" target="_blank">Fiverr</a>
                		</li>
                	</ul>
                </div>                                  
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">            	
            	<div class="im_contact-form">
					<h3>Describe your issue</h3>
					<form id="contact-form">
						<div class="im_form">
							<div class="form-group">
								<input
			                        type="text"
			                        class="form-control"
			                        placeholder="Name*"
			                        id="ur_name"
			                        name="name"
			                        required
            					>
							</div>
							<div class="form-group">
								<input
			                        type="email"
			                        class="form-control"
			                        placeholder="Email*"
			                        id="ur_mail"
			                        name="email"
			                        required
			                    >
							</div>
							<div class="form-group">
								<input
			                        type="text"
			                        class="form-control"
			                        placeholder="WhatsApp(optional)"
			                        id="ur_phone"
			                        name="whatsapp"
			                    >
							</div>
							<div class="form-group">
								<textarea
			                        class="form-control"
			                        placeholder="Message*"
			                        rows="5"
			                        id="msg"
			                        name="message"
			                        required
			                    ></textarea>
							</div>
								<input
						        type="text"
						        name="website"
						        tabindex="-1"
						        autocomplete="off"
						        class="honeypot"
						    >
						    <div
						        class="cf-turnstile"
						        data-sitekey="0x4AAAAAAE_WXRymJslkGbZJ">
						    </div>
							<div class="im_btndiv">
								<button class="im_btn" type="submit" id="send_btn">contact me</button>
								<p id="err"></p>
							</div>
						</div>
					</form>
					<div class="clear"></div>
				</div>
            </div>
        </div>
    </div>
</div>
{% include notification-modal.html message="Your request has been sent successfully. I will review your message and get back to you shortly." %}