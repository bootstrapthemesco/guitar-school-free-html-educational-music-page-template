"use strict";


jQuery(document).ready(function ($) {
// pre loader

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_home_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.main_testimonial_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });




// main-menu-scroll

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 300;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//    $('#menu').slicknav();








    //End
});




$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});



