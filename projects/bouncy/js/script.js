$(document).ready(function () {
    $(".service-slider .owl-carousel").owlCarousel({
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutDown',
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            dotsContainer: '.service .icons-menu',
            items: 1,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 1500
        }
    );

    $(".team-slider").owlCarousel({
            animateIn: 'fadeInRight',
            animateOut: 'fadeOutLeft',
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 2500
        }
    );

    $(".testimonials-slider").owlCarousel({
            animateIn: 'fadeInRight',
            animateOut: 'fadeOutLeft',
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 2500,
            autoplayHoverPause: true
        }
    );

    $(".news-slider").owlCarousel({
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutDown',
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 2500,
            autoplayHoverPause: true,
            dotsContainer: '.news .custom-dots'
        }
    );

    // function for changing active class on various menu on site
    function menu_togler(selector, clickElement) {
        if (!clickElement.hasClass('active')) {
            selector.each(function () {
                $(this).removeClass('active')
            });
            clickElement.addClass('active');
        }
    }

    $('.about .style-cst-icon').click(function () {
        menu_togler($('.about .style-cst-icon'), $(this));
    });

    $('.nav-item').click(function () {
        menu_togler($('.nav-item'), $(this));
    });

    // customize circle plugin
    var circle_viewed = false;
    var circle_scroll = $('.circle');
    var offset = circle_scroll.offset();
    var circle_size = 125;
    // if ($(window).width()<992) {
    //     circle_size = 100;
    // }
    $(window).scroll(function () {
        if ((($(document).scrollTop()) > ((parseFloat(offset.top)) - parseFloat($(window).height()))) && (!(circle_viewed))) { //if page skrolling
            $('.circle-1').circleProgress({
                size: circle_size,
                startAngle: 0,
                value: 0.8,
                thickness: 5,
                fill: {color: "#19bd9a"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
            });

            $('.circle-2').circleProgress({
                size: circle_size,
                startAngle: 0,
                value: 0.75,
                thickness: 5,
                fill: {color: "#19bd9a"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
            });

            $('.circle-3').circleProgress({
                size: circle_size,
                startAngle: 0,
                value: 0.6,
                thickness: 5,
                fill: {color: "#19bd9a"}
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
            });
            circle_viewed = true;
        }
    });
// configure masonry plugin
    $('.masonry-grid').masonry({
        // options
        itemSelector: '.masonry-item',
        columnWidth: '.persent-size',
        horizontalOrder: true,
        percentPosition: true
    });
    // code for smooth scrolling page
    var $page = $('html, body');
    $('header nav a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
        return false;
    });
});
