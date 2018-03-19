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




});