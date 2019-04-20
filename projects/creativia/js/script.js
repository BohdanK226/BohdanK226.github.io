$(document).ready(function () {
    $(".ipad-slider .owl-carousel").owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOutRight',
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            mouseDrag: false,
            smartSpeed: 1500,
            autoplay: true,
            autoplayTimeout: 3000
        }
    );

    $(".clients .owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            navText: "",
            items: 1,
            mouseDrag: true,
            smartSpeed: 1500,
            autoplay: true,
            autoplayTimeout: 993000
        }
    );

    //********** -- mobile menu behaviour --------

    var mobile_menu = $('header nav ul');

    $(".mobile-menu").click(function () {
        mobile_menu.addClass('show-menu');
    });
    $(".close-icon").click(function () {
        mobile_menu.removeClass('show-menu');
    });
    $('header nav ul a').click(function () {
        if (mobile_menu.hasClass('show-menu')) {
            mobile_menu.removeClass('show-menu');
        }
    });
    $(window).resize(function () {
        if (mobile_menu.hasClass('show-menu')) {
            mobile_menu.removeClass('show-menu');
        }
    });

//**********************************************************
    //*************** circle progress bar ************
    var circle_viewed = false;
    var circle_scroll = $('.circle');
    var offset = circle_scroll.offset();

    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat(offset.top)) - parseFloat($(window).height()))) && (!(circle_viewed))) { //if page skrolling
            $('.circle-1').circleProgress({
                size: 160,
                startAngle: .3,
                value: 0.9,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
            });

            $('.circle-2').circleProgress({
                size: 160,
                startAngle: .6,
                value: 0.8,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
            });

            $('.circle-3').circleProgress({
                size: 160,
                startAngle: .9,
                value: 0.70,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
            });

            $('.circle-4').circleProgress({
                size: 160,
                startAngle: .3,
                value: 0.9,
                thickness: 3,
                fill: {color: "#ff0036"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
            });

            circle_viewed = true;
        }
    });

    var services_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.services').offset().top)) - parseFloat($(window).height()))) && (!(services_viewed))) { //if page skrolling
            $('.services').addClass('animated fadeInUp slow');
            services_viewed = true;
        }
    });
    var about_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.about .half').offset().top)) - parseFloat($(window).height()))) && (!(about_viewed))) { //if page skrolling
            $('.about .half').addClass('animated fadeInUp slow');
            about_viewed = true;
        }
    });
    var portfolio_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.portfolio').offset().top)) - parseFloat($(window).height()))) && (!(portfolio_viewed))) { //if page skrolling
            $('.portfolio').addClass('animated fadeInUp slow');
            portfolio_viewed = true;
        }
    });
    var products_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.our-products').offset().top)) - parseFloat($(window).height()))) && (!(products_viewed))) { //if page skrolling
            $('.our-products').addClass('animated fadeInUp slow');
            products_viewed = true;
        }
    });
    var clients_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.clients').offset().top)) - parseFloat($(window).height()))) && (!(clients_viewed))) { //if page skrolling
            $('.clients').addClass('animated fadeInUp slow');
            clients_viewed = true;
        }
    });
    var team_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.team').offset().top)) - parseFloat($(window).height()))) && (!(team_viewed))) { //if page skrolling
            $('.team').addClass('animated fadeInUp slow');
            team_viewed = true;
        }
    });
    var skills_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.skills').offset().top)) - parseFloat($(window).height()))) && (!(skills_viewed))) { //if page skrolling
            $('.skills').addClass('animated fadeInUp slow');
            skills_viewed = true;
        }
    });
    var plans_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.plans').offset().top)) - parseFloat($(window).height()))) && (!(plans_viewed))) { //if page skrolling
            $('.plans').addClass('animated fadeInUp slow');
            plans_viewed = true;
        }
    });
    var twitter_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.twitter').offset().top)) - parseFloat($(window).height()))) && (!(twitter_viewed))) { //if page skrolling
            $('.twitter').addClass('animated fadeInUp slow');
            twitter_viewed = true;
        }
    });
    var blog_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.blog').offset().top)) - parseFloat($(window).height()))) && (!(blog_viewed))) { //if page skrolling
            $('.blog').addClass('animated fadeInUp slow');
            blog_viewed = true;
        }
    });
    var follow_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('.follow').offset().top)) - parseFloat($(window).height()))) && (!(follow_viewed))) { //if page skrolling
            $('.follow').addClass('animated fadeInUp slow');
            follow_viewed = true;
        }
    });
    var footer_viewed = false;
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat($('footer').offset().top)) - parseFloat($(window).height()))) && (!(footer_viewed))) { //if page skrolling
            $('footer').addClass('animated fadeInUp slow');
            footer_viewed = true;
        }
    });

    var $page = $('html, body');
    $('header nav a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
        return false;
    });

    if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent))
    {$('.about .hexagon').each(function () {
        $(this).addClass('ie_edge_style');
    })}
});
