if ($('.slider__body').length > 0) {
  $('.slider__body').slick({
    //infinite: false;
    autoplay: true,
    // speed:1000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed: 6000,
    accessibility: false,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {}
      }]
  });
}



