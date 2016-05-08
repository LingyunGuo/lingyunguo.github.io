$(window).scroll(function () {
    var paragraph = $("p");
    $.each(paragraph, function (index) {
        FadeInFadeOut($(this), -30, 100);
    });
    FadeInFadeOut($('#name'), 100, 50);
});
$(document).ready(function () {
    $('.JP').hover(function () {
        $(this).text('初めまして！どうぞよろしくお願いします！');
    }, function () {
        $(this).text('Japanese');
    });
    $('.GER').hover(function () {
        $(this).text('Hallo! Nett Sie zu treffen.');
        $(this).addClass('badScript');
    }, function () {
        $(this).text('German');
        $(this).removeClass('badScript');
    });
});

function FadeInFadeOut(element, top, bottom) {
    var diffTop = $(window).scrollTop() - element.offset().top;
    var curBottom = $(window).innerHeight() + $(window).scrollTop();
    var diffBottom = curBottom - element.offset().top;
    if (diffTop > top) {
        element.css("opacity", 1 - (diffTop - top) / 50);
    }
    else if (diffBottom < bottom) {
        element.css("opacity", diffBottom / bottom);
    }
    else {
        element.css("opacity", 1);
    }
}