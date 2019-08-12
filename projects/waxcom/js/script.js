$(document).ready(function () {
    // initialize carousel and configure
    $(".header-slider").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            mouseDrag: false,
            smartSpeed: 1000
        }
    );
    // add/remove atcive class for links
    $(".latest_projects a").click(function () {
        if (!($(this).hasClass("active"))) {
            $(".latest_projects a").each(function () {
                $(this).removeClass("active");
            });
            $(this).addClass("active")
        }
    });

    /// player conrtrol


    $('#play').click(function () {
        if ($("#media-video").get(0).paused) {
            $("#media-video").get(0).play();
            $(".video_pres .content").addClass("hide_cont").removeClass("show_cont");
            // $(".video_pres .content").css({
            //     "transition":"visibility 0s linear 2s, opacity 2s linear",
            //     "opacity":"0",
            //     "visibility":"hidden"
            // });
            $(".video_pres .pause_overlay").css("display","block");
        }
    });

    $(".video_pres .pause_overlay").click(function () {
        $("#media-video").get(0).pause();
        $(".video_pres .pause_overlay").css("display","none");
        $(".video_pres .content").removeClass("hide_cont").addClass("show_cont");
        // $(".video_pres .content").css({
        //     "transition":"visibility 0s linear 0s, opacity 2s linear",
        //     "opacity":"1",
        //     "visibility":"visible"
        // });
    });
    //
    $(".recent_posts .posts_slider").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            items: 3,
            mouseDrag: false,
            smartSpeed: 1000,
            dots: false,
            navText: ["",""],
            responsive: {
                0: {
                    items:1,
                },
                575:{
                    items:2,
                },
                767:{
                    items:3,
                }
            }
        }
    );
    // mobile menu
    $("header .mobile_menu_icon").click(function () {
        $("header .main_menu").addClass("menu_show");
        $("header").addClass('blur');
    });
    $("header .main_menu_close").click(function () {
        $("header .main_menu").removeClass("menu_show");
        $("header").removeClass('blur');
    });

    //*********** close mobile menu if window resize **********

    $(window).resize(function(){
        if (($("header .main_menu").hasClass('menu_show'))) {
            $("header .main_menu").removeClass('menu_show');
            $("header").removeClass('blur');
        }
        event.preventDefault();
    });
    
});

