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



function cuttingChoose(){
	document.getElementById("orange").selected = "true";
	document.getElementById("cutting_filter").focus();
	return document.getElementById("cutting_filter").click();
	document.getElementById("orange").click();
	alert("cut");
}
