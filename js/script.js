$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    const typed = new Typed(".typed", {
        strings: ['SOFTWARE ENGINEER', 'WEB DEVELOPER', 'NIT SILCHAR'],
        typeSpeed: 50,
        startDelay: 500,
        loop: true,
        showCursor: false
        //backDelay: 700,
        // fadeOut: false,
        // fadeOutClass: 'typed-fade-out',
        // fadeOutDelay: 500,

    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:90,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        slideBy: 2,
        dots: true,
        dotsEach: true,
        lazyLoad: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            850:{
                items:2
            },
            1100:{
                items:3
            }
        }
    })

});
