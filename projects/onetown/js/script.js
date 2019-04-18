
 $(document).ready(function() {
	 var main_menu_mobile = $('#main-menu-mobile');
	 var menu_icon_open = $('#menu-icon-open');
	 var menu_icon_close = $('#menu-icon-close');

	 menu_icon_open.click(function(){
		 main_menu_mobile.slideDown(600);
		 $(this).hide(300);
		 menu_icon_close.show(300);
		 return false;
	 });

	 menu_icon_close.click(function(){
		 main_menu_mobile.slideUp(600);
		 $(this).hide(300);
		 menu_icon_open.show(300);
		 return false;
	 });

	 $(window).resize(function(){
		 main_menu_mobile.slideUp();
		 menu_icon_close.hide(300);
		 menu_icon_open.show(300);
	 });

	 $(document).click( function(event){
		 if( $(event.target).closest(main_menu_mobile).length )
			 return;
		 main_menu_mobile.slideUp();
		 menu_icon_close.hide(300);
		 menu_icon_open.show(300);
		 event.stopPropagation();
	 });

	 $('#imac-carousel li').click(function() {
		 $('#iphone-carousel').carousel($(this).index());
	 });

	 $('.carousel').hover(function() {
		 $('#iphone-carousel, #imac-carousel').carousel('pause');
	 },
		 function() {
		 $('#iphone-carousel, #imac-carousel').carousel('cycle');
	 });

	 var portfolio_menu_active = $('#portfolio-main-menu .menu-item');

	 portfolio_menu_active.click(function()
	 {
		 if (!($(this).hasClass('active'))) {
			 portfolio_menu_active.each(function(index, el) {
				 $(this).removeClass('portfolio-active-item');
			 });
			 $(this).addClass('portfolio-active-item');
		 }
	 });

	 var portfolio_work_active = $('#portfolio-work-menu li');
	 portfolio_work_active.click(function() {
		 if (!($(this).hasClass('active'))) {
			 portfolio_work_active.each(function(index, el) {
				 $(this).removeClass('portfolio-work-item');
			 });
			 $(this).addClass('portfolio-work-item');
		 }
	 });

	 $('.my-popup').magnificPopup({type:'image'});

	 $('.slider-1').slider({
		 min: 2000, max: 100000, step: 1000, value: 42000,
		 create: function(slider, ui ){
			 $('#cost-label-max').empty().append($('.slider-1').slider("value"));
		 },
		 slide: function(slider, ui ){
			 $('#cost-label-max').empty().append(ui.value);
		 }
		}
	 );

	 $('.slider-2').slider({
		 min:1, max:12, step: 1, value: 4,
		 create: function(slider, ui) {
			 $('#time-label-start').empty().append($('.slider-2').slider("value"));
			 $('#time-label-end').empty().append($('.slider-2').slider("value")+6);
		 },
		 slide: function(slider, ui ){
			 $('#time-label-start').empty().append(ui.value);
			 $('#time-label-end').empty().append(ui.value +6);
		 }
	 }
	 );

	 $('#close-estimate').click(function () {
		 $('#section-to-close').empty();
		 return false;
	 });

	 // убираем placeholder
	 //************ убираем Label (placeholder) **********

	 var text_field = $('.text-field');

	 text_field.focus(function () {
		 $(this).next('label').addClass('label-placeholder-active');
	 });

	 text_field.focusout(function(){
		 if (($(this).val().length < 1))
			 $(this).next('label').removeClass('label-placeholder-active');
	 });

	 if(
			 (($.browser.name == "msie") && (($.browser.versionX)<11)) ||
			 (($.browser.name == "chrome") && ($.os.name != "linux") && (($.browser.versionX)<30)) ||
			 (($.browser.name == "opera") && (($.browser.versionX<12))) ||
			 (($.browser.name == "firefox") && (($.browser.versionX<32)))
	 ) {
		 $('body>*').css('display','none');
		 $('#menu-icon-open').css('display','none');
		 $('body').css('background-color','#f5f5f5');
		 $('.old-browser').css('display','block');
		 if ($.os.name == "win") {
			 $('.browser-safari').css('display','none');
		 }
		 if ($.os.name == "linux") {
			 $('.browser-msie').css('display','none');
			 $('.browser-safari').css('display','none');
		 }
		 if ($.os.name == "mac") {
			 $('.browser-msie').css('display','none');
		 }
	 }

	 $('.cbalink').empty();// удаление рекламы с сайта на бесплатном хостинге
});