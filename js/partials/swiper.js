// +++ FIRST SWIPER +++


var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= $breakpoint
    1000: {
      slidesPerView: 3,
      centeredSlides: true,
      allowTouchMove: false,
    },
  },

  spaceBetween: 0,
  initialSlide: 0,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// +++ SECOND SWIPER +++

var firstSlide = Math.floor(Math.random() * 7);

var swiper__alt = new Swiper('.swiper-container--alt', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= $breakpoint
    1000: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 50,
      allowTouchMove:false,
    },
  },

  spaceBetween: 0,
  initialSlide: firstSlide,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// +++ THIRD SWIPER +++

var swiper__alt_two = new Swiper('.swiper-container--alt-two', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: true,
  autoHeight:true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= $breakpoint
    1000: {
      allowTouchMove:false,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
