$(document).ready(function () {

    /*************** for sticky navigation **************/
    $('.js--section-features').waypoint(function (direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    /**************scroll on buttons***************/
    $('.js--scroll-to-plans').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    /*************** scroll on navigation ****************/
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        } // End if
    });
    /*************** Animation on scroll ****************/
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });
    /* --- */
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');

    }, {
        offset: '50%'
    });
    /* --- */
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });
    /* --- */
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated shake');

    }, {
        offset: '50%'
    });

    /*************** mobile nav ****************/

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {

            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');

        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    })



});