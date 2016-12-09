var nextArrowButton = "<svg class='icon icon-arrow-next slick-next'><use xlink:href='#icon-arrow-next'></use></svg>",
    prevArrowButton = "<svg class='icon icon-arrow-prev slick-prev'><use xlink:href='#icon-arrow-prev'></use></svg>";

$('.main-slider').slick({
  dots: true,
  arrows: false
});
$('.stock-slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: prevArrowButton,
  nextArrow: nextArrowButton,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
