(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$("#page-top .navbar-right > ul").removeClass("hide");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$("#page-top .navbar-right > ul").addClass("hide");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});


//checkbox machines
$("#cutting_filter").on("click", ":checkbox", function(event){
  $(":checkbox:not(:checked)", this.form).prop("disabled", function(){
    return $(this.form).find(":checkbox:checked").length == 1;
  });
});

})(jQuery);


/*************************
About Vertical Timeline
**************************/

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

/*************************
end /About Vertical Timeline
**************************/

 

function cuttingChoose(){
	document.getElementById("orange").selected = "true";
	document.getElementById("cutting_filter").focus();
	return document.getElementById("cutting_filter").click();
	document.getElementById("orange").click();
	alert("cut");
}

