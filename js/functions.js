$(function(){

// Pop up background for log in and sign up
	$('.popupbg').hide();
	$('.login').click(function(){
		$('.popupbg').show();
		$('#signupform').hide();
	});
	$('.close').click(function(){
		$('.popupbg').hide();
	});
	$('.signup').click(function(){
		$('.popupbg').show();
		$('#loginform').hide();
		$('#signupform').show();
	});

// Dropdown menu for smaller devices

	$('#menuwrapper').hide();
	$('#dropmenu').click(function(){
		$('#menuwrapper').toggle();
	});
});