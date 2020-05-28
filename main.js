$(document).ready(function(){
    $('.slider-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: true,
swipe: false,
infinite: true,
initialSlide: 5,
touchMove: false,
appendArrows: '.slider-nav',
fade: true,
asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.slider-for',
swipe: false,
initialSlide: 5,
touchMove: false,
infinite: true,
centerMode: true,
focusOnSelect: true
});
});
