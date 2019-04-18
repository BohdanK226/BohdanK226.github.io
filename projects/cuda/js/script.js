/**
 * Created by Bohdan on 01.02.2016.
 */
$(document).ready(function () {
    //rejecting old browsers
    if(
        (($.browser.name == "msie") && (($.browser.versionX)<11)) ||
        (($.browser.name == "chrome") && ($.os.name != "linux") && (($.browser.versionX)<30)) ||
        (($.browser.name == "opera") && (($.browser.versionX<12))) ||
        (($.browser.name == "firefox") && (($.browser.versionX<32)))
    ) {
        $('body>*').css('display','none');
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
    //************* main menu active link  **************
    var link_active = $('.main-menu-block a');

    link_active.click(function()
    {
        if (!($(this).hasClass('main-menu-active'))) {
            link_active.each(function(index, el) {
                 $(this).removeClass('main-menu-active');
             });
             $(this).addClass('main-menu-active');
         }
        return false;
     });

    //************* portfolio menu active link  **************
    var pf_link_active = $('.portfolio-menu-block a');

    pf_link_active.click(function()
    {
        if (!($(this).hasClass('main-menu-active'))) {
            pf_link_active.each(function(index, el) {
                $(this).removeClass('portfolio-menu-active');
            });
            $(this).addClass('portfolio-menu-active');
        }
        return false;
    });
    //*************** circle progress bar ************
    var circle_viewed = false;
    var circle_scroll = $('.circle');
    var offset = circle_scroll.offset();

    $(window).scroll(function(){
        if ((($(document).scrollTop()) > ((parseFloat(offset.top)) - parseFloat($(window).height()))) && (!(circle_viewed ))) { //если страница прокручена
            $('.circle-1').circleProgress({
                size: 160,
                startAngle: -1.55,
                value: 0.9,
                fill:{ color: "#30bae7"}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
            });

            $('.circle-2').circleProgress({
                size: 160,
                startAngle: -1.55,
                value: 0.75,
                fill:{ color: "#d74680"}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
            });

            $('.circle-3').circleProgress({
                size: 160,
                startAngle: -1.55,
                value: 0.70,
                fill:{ color: "#15c7a8"}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
            });

            $('.circle-4').circleProgress({
                size: 160,
                startAngle: -1.55,
                value: 0.85,
                fill:{ color: "#eb7d4b"}
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
            });

            circle_viewed = true;
        }
    });


    //***************** mobile menu *****************

    var menu_icon = $('.menu-mobile-icon');
    var menu_block = $('.mobile-menu');
    var menu_close = $('.mobile-icon-close');
    var main_container = $('.container-fluid');

    menu_icon.click(function () {
        menu_block.toggleClass('mobile-menu-active');
        main_container.toggleClass('blur');
        return false;
    });
    menu_close.click(function () {
        menu_block.toggleClass('mobile-menu-active');
        main_container.toggleClass('blur');
        event.preventDefault();
        return false;
    });

//*********** закрывать меню при ресайзинге окна **********

    $(window).resize(function(){
        if ((menu_block.hasClass('mobile-menu-active'))) {
            menu_block.removeClass('mobile-menu-active');
            main_container.removeClass('blur');
        }
         event.preventDefault();
     });

//********* закрывать меню при клике вне блока меню ********

     $(document).click( function(event){
        if( $(event.target).closest(menu_block).length ){
            return;
        }
         if ((menu_block.hasClass('mobile-menu-active'))) {
            menu_block.removeClass('mobile-menu-active');
            main_container.removeClass('blur');
         }
     });
	 
	 $('.cbalink').empty();// удаление рекламы с сайта на бесплатном хостинге
});