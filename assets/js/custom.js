/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var internetMarketing = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- internetMarketing Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.ConutTo();
			this.ClientSlider();
			this.Chart();
			this.SearchBox();
			this.ImgZoom();
			
		},
		
		/*-------------- internetMarketing Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		
		//counter on home page
		ConutTo: function(){
		if($('.timer').length > 0){	
			  $('.timer').appear(function() {
					$(this).countTo();
				});
		}
				
		},
		ImgZoom: function(){			
			$('body').on('click', '.mfp-img, .mfp-img_zoom', function(){
				$(this).toggleClass('mfp-img_zoom');
				$(this).toggleClass('mfp-img');
			})			
		},
		//client slider on home page
		ClientSlider: function(){
		 if($('.im_client_slider .owl-carousel').length > 0){		
			 $('.im_client_slider .owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				dots:false,
				nav:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					768:{
						items:4
					},
					1000:{
						items:6
					}
				}
			});
		}
		},
		//Chart 
		Chart: function() {
			var chart = c3.generate({
				bindto: '#chart',
				data: {
					columns: [
						['data1', 300, 350, 300, 0, 0, 0],
						['data2', 130, 100, 140, 200, 150, 50]
					],
					types: {
						data1: 'area',
						data2: 'area-spline'
					}
				}
			});
		},
		//Search Box on header
		SearchBox: function(){
		if($('#top-search > a > i').length > 0){		
			(function(){
				$('body').on('click', '#top-search > a > i', function(e){
					e.preventDefault();
					
					$('.im_header_wrapper').addClass('search-toggled');
				});
				
				$('body').on('click', '#top-search-close', function(e){
					e.preventDefault();
					
					$('.im_header_wrapper').removeClass('search-toggled');
				});
			})();
			
			$(window).scroll(function() {
					if ($(this).scrollTop() > 100) {
						$(".im_header_wrapper").removeClass("search-toggled"); 
					} 
			});
		}
		
		},
		
		   
	};

	internetMarketing.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery("#sup_preloader_box").fadeOut();
		// jQuery("#sup_preloader_wrapper").delay(350).fadeOut("slow");
               //window height
		var h = window.innerHeight;
		$(".im_mainslider img").css("height", h);
		$(".im_mainslider img").css("width", "100%");
	});

	// Scroll Event
	//index2 fixed menu
	$(window).on('scroll', function () {
	     if ($(this).scrollTop() > 100) {
                $(".im_header_wrapper").addClass("im_fixed");
            } else {
                $(".im_header_wrapper").removeClass("im_fixed");
			}
	});

	$('.scroll-down-btn').on('click', function (e) {
	    e.preventDefault();

	    const headerHeight = $('.im_header_wrapper').outerHeight();
	    const targetOffset = $('#about-me-section').offset().top - headerHeight - 100;

	    $('html, body').animate({
	        scrollTop: targetOffset
	    }, 800);
	});

})(jQuery);