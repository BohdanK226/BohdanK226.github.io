/**
 * Created by Bohdan on 25.01.2016.
 */
$(document).ready(function () {
    // Выезжающее описание работ
    $('.article-wrapper').hover(function () {
        $('.work-description', this).slideDown(200)
    },
        function () {
            $('.work-description', this).slideUp(200);
        }
    );

    // плавная прокрутка

    var linkNav = document.querySelectorAll('[href^="#"]'),
        V = 0.5;  // скорость, может иметь дробное значение через точку
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) {
            e.preventDefault();
            var w = window.pageYOffset,  // прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  //функция анимации
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash; // URL с хэшем
                }
            }
        }, false);
    }

    //********* подгонка размеров скриншотов под родительсткий блок ****************
    function fix_size() {
        var images = $('.article-wrapper > img');
        images.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.article-wrapper');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('auto');
                    img.height('100%');
                    return;
                }
                img.height('auto');
                img.width('100%');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();

});


 $(window).load(function() {
        var preloader = $('.preloader');
        preloader.delay(350).fadeOut('slow');
        $('html').css('overflow-y', 'scroll');
        $('.work-container').addClass('animate');
        $('.welcome').addClass('animate');
        $('.fly-in').addClass('animate');
        $('.fly-in span').addClass('animate');
});