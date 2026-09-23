---
layout: default
title: Контакты
page_name: contacts
lang: ru
translation_key: contacts
description: Вы можете связаться со мной по электронной почте, чтобы обсудить ваш проект
permalink: /ru/contacts/
turnstile: true
---

<div class="im_breadcrums_div">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="im_pageheading">
                    <div class="im_titlediv">
                        <span class="im-left-top-border"></span>
                        <span class="im-right-bottom-border"></span>
                        <h2>Контакты</h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="/ru/">{% include i18n-string.html key="home" %}</a></li>                        
						<li class="active">
							<span>Контакты</span>
						</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clear"></div>

<div class="im_transparent_wrapper im_toppadder30 im_bottompadder80">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="email-suggestion">
                	<h2>{% include i18n-string.html key="contact_cta" %} </h2>
                	<ul>
                		<li>Почта: <a href="mailto:aramayismirzoyan@yahoo.com">aramayismirzoyan@yahoo.com</a></li>
                		<li>WhatsApp: <a href="https://wa.me/37495191644" target="_blank">+37495191644</a></li>
                	</ul>
                </div>
                <div>
                	<h2>
                		{% include i18n-string.html key="another_links" %}
                	</h2>
                	<ul>
                		<li>
                			<a href="https://github.com/aramayismirzoyan" target="_blank">GitHub</a>
                		</li>
                		<li>
                			<a href="https://medium.com/@aramayis_m" target="_blank">Medium</a>
                		</li>
                		<li>
                			<a href="https://www.linkedin.com/in/aramayis-mirzoyan/" target="_blank">LinkedIn</a>
                		</li>
                	</ul>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">            	
            	<div class="im_contact-form">
					<h3>Опишите вашу задачу</h3>
					<form id="contact-form">
						<div class="im_form">
							<div class="form-group">
								<input
			                        type="text"
			                        class="form-control"
			                        placeholder="Имя*"
			                        id="ur_name"
			                        name="name"
			                        required
            					>
							</div>
							<div class="form-group">
								<input
			                        type="email"
			                        class="form-control"
			                        placeholder="Почта*"
			                        id="ur_mail"
			                        name="email"
			                        required
			                    >
							</div>
							<div class="form-group">
								<textarea
			                        class="form-control"
			                        placeholder="Сообщение*"
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
								<button class="im_btn" type="submit" id="send_btn">связаться</button>
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
