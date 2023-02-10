$(document).ready(function(){

    $(".wrapper > .top-bar > .con > .nav-box > ul > li").click(function () {
      let num = $(this).index();
  
      $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).addClass("active");
      $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).siblings().removeClass("active");
    });
  
  
  // 1초 뒤 active 클래스 추가

setTimeout(function () {
  $(".skill").addClass("active");
}, 1000);

  
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2.5,
      spaceBetween: 50,
      freeMode: true,
    });


  })
  
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 100) {
      $(".wrapper >.top-bar").addClass("active");
    } else if (scrollTop < 100) {
      $(".wrapper > .top-bar").removeClass("active");
    }
  });
  