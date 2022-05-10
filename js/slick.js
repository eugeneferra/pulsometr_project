$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"/></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
               arrows: false,
               dots: true
              }
            }]
    })
});

  