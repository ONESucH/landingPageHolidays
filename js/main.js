'use strict';
var boolean, moreInformation = false;

/* Инициальзация библиотек */
modalWindow();
$(':input').inputmask();
new WOW().init({
    offset: 0,
    mobile: true,
    live: true
});
$('.carousel').slick({
    dots: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true
});
$('.content-pages').fullpage({
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: true, // подгоняет под экран
    fitToSectionDelay: 700,
    scrollBar: false,
    easing: 'easeInOutCubic',
    normalScrollElements: '#element1, #element2, #element2_2, #element3, #element3_2, #element4'
});

/* Плавное перемещение */
$('.go_to').click( function() {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
    }
    return false;
});

$(document).ready(function () {
    var sizeWindow = document.innerWidth;
    if (a) {
        // data-slick='{"slidesToShow": 3, "slidesToScroll": 2}'
    }
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

/* Отправк email */
$('#mail').on('submit', function (e) {
    e.preventDefault();
    var dataUser = $(this).serialize();

   console.log('dataUser', dataUser);

   $.ajax({
       method: 'POST',
       url: '/mail.php',
       data: dataUser,
       success: function () {
           console.log('Отправлены данные');
           $('.modal-window').hide();
       },
       error: function () {
           $('.modal-window').hide();
           console.log('Ошибка отправки');
       }
   }).done(function (data) {
       console.log('Полученные данные', data);
   })
});