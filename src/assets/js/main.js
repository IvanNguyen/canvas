$(document).ready(function () {
    $('.auto-slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.clients__slider').slick({
        dots: true,
        customPaging: function (slider, i) {

            return '<i class="far fa-dot-circle"></i>';
        },
        arrows: false,
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    $('#button').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    
    $(window).scroll(function () {
        var windowsize = $(window).width();
    if ($(window).scrollTop() > 0 && windowsize > 992 ) {
            $('.header-container').addClass('background-color-scroll');
            $('#header-menu ul li a.nav-item').addClass('a-color-scroll');
            $('#header-search').addClass('header-icon-scroll');
            $('#header-cart').addClass('header-icon-scroll');
            $('#logo img').attr('src','assets/img/logo-dark-small.png')
            $('#logo img').attr('height','60')
          } else {
            $('.header-container').removeClass('background-color-scroll');
            $('#header-menu ul li a.nav-item').removeClass('a-color-scroll');
            $('#header-search').removeClass('header-icon-scroll');
            $('#header-cart').removeClass('header-icon-scroll');
            $('#logo img').attr('src','assets/img/white-logo.png')
            $('#logo img').attr('height','100')
        }
    });

});