$(document).ready(function(){

  $(".wrapper > .top-bar > .con > .nav-box > ul > li").click(function(){

    let num = $(this).index();
    
    $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).addClass("active");
    $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).siblings().removeClass("active");
    


  })

})
$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 100) {
      $(".wrapper >.top-bar").addClass("active");
    } else if (scrollTop < 100) {
      $(".wrapper > .top-bar").removeClass("active");
    }
  });