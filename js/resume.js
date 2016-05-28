$(document).ready(function () {
    $('.project_carousel').slick({
        infinite: true,
        dots: true,
        speed: 300,
        arrows:true,
        slidesToShow: 1,
        centerMode:true
    });
});
$(window).scroll(function () {
    var paragraph = $("p");
    $.each(paragraph, function (index) {
        FadeInFadeOut($(this), -30, 100);
    });
    FadeInFadeOut($('#name'), 100, 50);
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