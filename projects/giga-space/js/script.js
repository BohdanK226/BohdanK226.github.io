$(document).ready(function() {
	var accordion = $('#accordion >li > a');

	accordion.each(function(index, el) {
		if ($(this).hasClass('active-menu-item')) {
			$(this).next('ul').slideDown(200);
		};
	});

	accordion.click(function() {
		/* Act on the event */
		if ($(this).hasClass('active-menu-item') ) {
			$(this).removeClass('active-menu-item').next('ul').slideUp(200);
		}
		else{
			accordion.removeClass('active-menu-item').next('ul').slideUp(200);
			$(this).addClass('active-menu-item').next('ul').slideDown(300);
		 };
		return false;
	}); 
	$('.cbalink').empty();// удаление рекламы с сайта на бесплатном хостинге
});