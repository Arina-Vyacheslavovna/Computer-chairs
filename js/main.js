$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});

$(function () {
    $(".like").click(function () {
      $(".like").toggleClass("active");
    });
  });


$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".slide-one").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 1000,
  autoplayHoverPause: true,
  slideTransition: "linear",
  items: 1,
  nav: false,
  dots: false,

});

$(".slide-two").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    slideTransition: "linear",
    items: 2,
    nav: false,
    
    responsive: {
      0: {
        items: 1.2,
      },
      320: {
        items: 1.3,
      },
      480: {
        items: 1.4,
      },
      768: {
        items: 2.2,
      },
      1199: {
        items: 3.5,
      },
    },
  });
  

  $(".slide-three").owlCarousel({
    loop: true,
    autoplayHoverPause: true,
    slideTransition: "linear",
    items: 1,
    nav: false,
    dots: true,
  
  });