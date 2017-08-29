'use strict';
var boolean, moreInformation = false;

/* Инициальзация библиотек */
new WOW().init({
    offset: 10,           // расстояние до элемента при запуске анимации (по умолчанию 0)
    mobile: true,
    live:true
});
modalWindow();

$(":input").inputmask();

$('#cont_1').on('click', function() {
    var scroll_el = $(this).attr('href');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    return false;
});
$('#cont_2').on('click', function() {
    var scroll_el = $(this).attr('href');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    return false;
});
$('#cont_3').on('click', function() {
    var scroll_el = $(this).attr('href');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    return false;
});
$('#cont_4').on('click', function() {
    var scroll_el = $(this).attr('href');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    return false;
});

function modalWindow() {
    boolean = !boolean;

    if(boolean) {
        $('.modal-window').hide();
    } else {
        $('.modal-window').show();
    }
}

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