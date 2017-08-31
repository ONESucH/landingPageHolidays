'use strict';
var boolean, moreInformation = false;

/* Инициальзация библиотек */
modalWindow();
$(":input").inputmask();
new WOW().init({
    offset: 0,
    mobile: true,
    live: true
});
$('.carousel').slick({
    dots: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true
});

/* Плавное перемещение */
$('.go_to').click( function() {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
    }
    return false;
});

/* Модальное окно */
function modalWindow() {
    boolean = !boolean;

    if(boolean) {
        $('.modal-window').hide();
    } else {
        $('.modal-window').fadeIn('slow', function () {
            $(this).show();
        })
    }
}

/* Больше Информации открываем */
$('.right-block button').on('click', function () {
    moreInformation = !moreInformation;

    if(moreInformation) {
        $('.show-more').slideDown('slow', function () {
            $(this).show();
        })
    } else {
        $('.show-more').slideUp('slow', function () {
            $(this).hide();
        })
    }
});