$(document).ready(function(){
  $('.about-slider').slick({
    infinite: true,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  });
});

$(document).ready(function(){
    $('.create-section__slider').slick({
        infinite: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
});

$(document).ready(function(){
    $('.about__types-slider').slick({
        infinite: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
});