/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

    /* template navigation
    -----------------------------------------------*/
    $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    });

    /* Navigation visible on Scroll */
    mainNav();
    $(window).scroll(function() {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }

    /* Caching Images */
    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }

    preloadImages(["images/coding.png", "images/contact.png", "images/home-bg-slider-img1.jpg", "images/home-bg-slider-img2.jpg", "images/home-bg-slider-img3.jpg", "images/logo_transparent.png", "images/newsletter-bg.jpg", "images/overview-img.jpg", "images/price-bg.jpg", "images/project1.jpg", "images/project2.jpg", "images/project3.jpg"]);


    /* Hide mobile menu after clicking on a link
     -----------------------------------------------*/
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });


    /*  smoothscroll
    ----------------------------------------------*/
    $(function() {
        $('.navbar-default a, #home a, #overview a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


    /* Parallax section
       -----------------------------------------------*/
    function initParallax() {
        $('#home').parallax("100%", 0.1);
        $('#overview').parallax("100%", 0.3);
        $('#trainer').parallax("100%", 0.2);
        $('#newsletter').parallax("100%", 0.3);
        $('#blog').parallax("100%", 0.1);
        $('#price').parallax("100%", 0.2);
        $('#testimonial').parallax("100%", 0.2);

    }
    initParallax();


    /* home slider section
  -----------------------------------------------*/
    $(function() {
        jQuery(document).ready(function() {
            $('#home').backstretch([
                "images/home-bg-slider-img1.jpg",
                "images/home-bg-slider-img2.jpg",
                "images/home-bg-slider-img3.jpg",
            ], { duration: 1000, fade: 2000 });
        });
    })


    /* Owl Carousel
    -----------------------------------------------*/
    $(document).ready(function() {
        $("#owl-testimonial").owlCarousel({
            autoPlay: 6000,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
        });
    });


    /* wow
    -------------------------------*/
    new WOW({ mobile: false }).init();

});

//Get the button
var mybutton = document.getElementById("btnToTheTop");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}