$(document).ready(function () {
    // var slideToShow;
    // function checkWidth() {
    //     var windowSize = $(window).width();
    //     if (windowSize <= 992) {
    //         return 4;
    //     } else if (windowSize <= 768) {
    //         return 3;
    //     }
    //     return 5;
    // } // Execute on load
    // slideToShow = checkWidth();

    $('.auto-slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
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
        dots:true,
        arrows: false,
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});