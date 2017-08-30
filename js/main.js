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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

/* Плавное перемещение */
$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
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