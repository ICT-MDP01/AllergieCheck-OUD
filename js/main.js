$(document).ready(function() {

	// placeholder verwijderen on focus
	$('.searchText').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	          .attr('placeholder','');
	}).blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	});

	// mobile navigation
	$("#hamburger").click(function() {
    	$("body").toggleClass("menuOpen");
	});

	$("#menuOpenOverlay").click(function() {
    	$("body").toggleClass("menuOpen");
	});

});

