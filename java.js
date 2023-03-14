$(document).ready(function () {
  
  AOS.init();

  
  $(".top-btn").click(function () {
    // $("html , body").scrollTop(800)
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  // $(".wrapper > .top-bar > .con > .nav-box > ul > li").click(function () {
  //   let num = $(this).index();

  //   $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).addClass("active");
  //   $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).siblings().removeClass("active");
  // });

  // 1초 뒤 active 클래스 추가

  setTimeout(function () {
    $(".skill").addClass("active");
  }, 1000);






  // 포트폴리오 슬라이드
    var swiper = new Swiper(".swiper-box-1 .swiper", {
      spaceBetween: 48,
      slidesPerView: 3,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0:{
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        1000: {
          slidesPerView: 3
        },
      },

    });
  $(".swiper-box-1 > .swiper > .swiper-wrapper > .swiper-slide").hover(function(){

    let num = $(this).index();
    $(".swiper-box-1 > .swiper > .swiper-wrapper > .swiper-slide > .img-box > .slide-after-box").eq(num).toggleClass("active");
  });


  function SwiperBox2__init() {
    var swiper = new Swiper(".swiper-box-2 .mySwiper", {
      effect : "fade",
      fadeEffect: { 
        crossFade: true 
        },
      loopAdditionalSlides : 1,
      loop : true,
      autoHeight : true,
      autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 2500, // 시간 설정
      },
      allowTouchMove : false,
    });
  }

  // SwiperBox2__init();







  function emailFormSubmit(form) {
    form.querySelector('button[type="submit"]').innerHTML =
      "이미 발송되었습니다.";
    form.querySelector('button[type="submit"]').disabled = true;
  }

  // $(".wrapper > .top-bar > .con > button").click(function(){

  //   if( $('.nav-box').css( 'display' ) == 'none' ){
  //     $(".wrapper > .top-bar > .con > .nav-box").stop().slideDown(500);

  //   }else{
  //     $(".wrapper > .top-bar > .con > .nav-box").stop().slideUp(500);

  //   }


  // });

  // $(".wrapper > .top-bar > .con > .nav-box > ul > li > a").click(function(){
  //   $(".wrapper > .top-bar > .con > .nav-box").stop().slideUp(500);
  // });





  


});

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  console.log(scroll);

  if(scrollTop > 10000) {
    $(".skill").addClass("active");
  }

  if (scrollTop >= 100) {
    $(".wrapper >.top-bar").addClass("active");
  } else if (scrollTop < 100) {
    $(".wrapper > .top-bar").removeClass("active");
  }



  if (scrollTop >= 600) {
    $(".top-btn").addClass("active");
  } else if (scrollTop < 400) {
    $(".top-btn").removeClass("active");
  }
});
