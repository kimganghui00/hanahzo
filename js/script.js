$(document).ready(function(){

  $('.hamburger-btn').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('on');
    $('.ham-bg').toggleClass('on');
  });

  $('.ham-bg').click(function(){
    $('.hamburger-btn').toggleClass('active');
    $('nav').removeClass('on');
    $(this).removeClass('on');
});

  var swiper = new Swiper(".main-slider", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
    delay: 5000,
    },
  });

  var swiper = new Swiper(".best-Swiper", {
    loopFillGroupWithBlank: true,
    breakpoints: {
      // 화면의 넓이가 0px 이상일 때
      0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
      },
      // 화면의 넓이가 768px 이상일 때
      768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
      },
      // 화면의 넓이가 1024px 이상일 때
      1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 90,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
});//end