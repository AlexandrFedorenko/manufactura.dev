$(document).ready(function(){

    //main slider
    $(".main-slider").owlCarousel({
        responsiveClass: true,
        items: 1,
        loop:true,
        autoplay:true,
        dots:true
    });

    //best slider
    var best = $('.best-item');
    best.owlCarousel({
        loop:true,
        items: 3,
        autoplay:true,
        margin:60,
        dots:true,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                center: true,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

// Go to the next item
    $('.best-item-top-right-next').click(function() {
        best.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.best-item-top-right-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        best.trigger('prev.owl.carousel', [300]);
    });


    //nev slider
    var nev = $('.nev-item');
    nev.owlCarousel({
        loop:true,
        items: 3,
        autoplay:true,
        margin:60,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                center: true,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    // Go to the next item
    $('.nev-item-top-right-next').click(function() {
        nev.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.nev-item-top-right-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        nev.trigger('prev.owl.carousel', [300]);
    });

    //nev slider
    var magNev = $('.mag-nev-item');
    magNev.owlCarousel({
        loop:true,
        items: 3,
        autoplay:true,
        margin:60,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                center: true,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    // Go to the next item
    $('.nev-mag-top-right-next').click(function() {
        magNev.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.nev-mag-top-right-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        magNev.trigger('prev.owl.carousel', [300]);
    });



    //nev slider
    var topp = $('.top-item');
    topp.owlCarousel({
        loop:true,
        items: 3,
        autoplay:true,
        margin:60,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                center: true,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    // Go to the next item
    $('.top-item-top-right-next').click(function() {
        topp.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.top-item-top-right-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        topp.trigger('prev.owl.carousel', [300]);
    });



    //best-po slider
    var bes = $('.best-pod-item');
    bes.owlCarousel({
        loop:true,
        items: 3,
        autoplay:true,
        margin:60,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                center: true,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    // Go to the next item
    $('.best-pod-item-top-right-next').click(function() {
        bes.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.best-pod-item-top-right-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        bes.trigger('prev.owl.carousel', [300]);
    });





    //best-po slider
    var news = $('.news-item');
    news.owlCarousel({
        loop:true,
        items: 2,
        autoplay:true,
        margin:15,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:0,
                center: true,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

    // Go to the next item
    $('.news-item-top-right-next').click(function() {
        news.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.news-item-top-right-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        news.trigger('prev.owl.carousel', [300]);
    });





});