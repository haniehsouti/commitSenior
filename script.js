//********************************
//      scroll menu
//********************************
/* Show and Hide On Scrolling */
var lastScrollTop = 0;
$(window).scroll(function (event) {

    var st = $(this).scrollTop();

    if (st > 0) {
        if (st > lastScrollTop) {
            // downscroll code
            $('.header').removeClass('show');
            $('.header').addClass('hide')
            $('.main-nav').removeClass('hide');
            $('.main-nav').addClass('active');


        } else {
            // uproll code
            $('.header').removeClass('hide');
            $('.header').removeClass('show');
            $('.main-nav').removeClass('hide');
            $('.main-nav').removeClass('active');
        }
    } else {
        $('.header').removeClass('showw');
        $('.header').removeClass('hide')
        $('.main-nav').removeClass('active');
        $('.main-nav').removeClass('hide');
    }
    lastScrollTop = st;
});