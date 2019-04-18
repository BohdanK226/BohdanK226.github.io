/**
 * Created by Bohdan on 01.02.2016.
 */
$(document).ready(function () {
    //rejecting old browsers
    if(
        (($.browser.name == "msie") && (($.browser.versionX)<8)) ||
        (($.browser.name == "chrome") && ($.os.name != "linux") && (($.browser.versionX)<25)) ||
        (($.browser.name == "opera") && (($.browser.versionX<10))) ||
        (($.browser.name == "firefox") && (($.browser.versionX<25)))
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
//************ стилизация селектов ********************
    $('#categories').styler({
        selectPlaceholder: 'All categories'
    });

    $('#recent').styler({
        selectPlaceholder: 'Most Recent'
    });
//************ убираем Label (placeholder) **********

    var search_field = $('.search-field');
    var label_search = $('.label-search');

    search_field.focus(function () {
        label_search.addClass('label-search-active');
    });

    search_field.focusout(function(){
        if ( (search_field.val() === ''))
         label_search.removeClass('label-search-active');
    });

    var email_label =  $('.email-label');
    var email_field = $('#email');

    email_field.focus(function () {
        email_label.addClass('email-label-active');
    });

    email_field.focusout(function(){
        if ( (email_field.val() === ''))
            email_label.removeClass('email-label-active');
    });
    //************* переключение активных ссылок  **************
    var main_links = $('.main-links');
    var main_menu_li = $('.main-menu-section li');
    var icon = $('.icon');
    var icon_active = $('.icon-active');

    //********* main menu icons *************************
    main_menu_li.click(function()
     {
         //******** переключение ссылок *********
         if (!(($(this).find(main_links)).hasClass('main-links-active'))) {
             main_links.each(function() {
                 $(this).removeClass('main-links-active');
             });
             ($(this).find(main_links)).addClass('main-links-active');
         }
        //********* переключение иконок ********
        if (!(($(this).find(icon)).hasClass('hide-icon'))) {
            icon.each(function () {
                $(this).removeClass('hide-icon');
            });

            icon_active.each(function () {
                $(this).addClass('hide-icon');
            });

            ($(this).find(icon)).addClass('hide-icon');
            ($(this).find(icon_active)).removeClass('hide-icon');
        }

         return false;
     });
//********************  sub menu ******************

    var sub_menu = $('.sub-menu a');
    var sub_icon = $('.sub-icon');
    var sub_icon_active = $('.sub-icon-active');

    sub_menu.click(function () {
        //******** переключение ссылок *********
        if (!($(this).hasClass('sub-menu-active'))) {
            sub_menu.each(function() {
                $(this).removeClass('sub-menu-active');
            });
            $(this).addClass('sub-menu-active');
        }

        //********* переключение иконок ********
        if (!(($(this).find(sub_icon)).hasClass('hide-icon'))) {

            sub_icon.each(function () {
                $(this).removeClass('hide-icon');
            });

            sub_icon_active.each(function () {
                $(this).addClass('hide-icon');
            });

            ($(this).find(sub_icon_active)).removeClass('hide-icon');
            ($(this).find(sub_icon)).addClass('hide-icon');
        }

        return false;
    });

    //************ filter menu *************

    var filter_menu_link = $('.filter-menu a');

    filter_menu_link.click(function () {
        if (!($(this).hasClass('filter-active'))){
            filter_menu_link.each(function () {
                $(this).removeClass('filter-active')
            });
            $(this).addClass('filter-active');
        }
    });

    //********* carousel pause ******************
    var pause = $('.pause-icon');
    var play = $('.play-icon');

    $('.pause').click(function () {
        pause.each(function () {
            $(this).toggleClass('hide');
        });
        play.each(function () {
            $(this).toggleClass('hide');
        });
        return false;
    });

    pause.click(function () {
        $('#main-slider').carousel('pause');
    });

    play.click(function () {
        $('#main-slider').carousel('cycle');
    });
	
	$('.cbalink').empty();// удаление рекламы с сайта на бесплатном хостинге
});