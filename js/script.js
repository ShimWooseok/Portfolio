$(document).ready(function(){

  $(".wrapper > .top-bar > .con > .nav-box > ul > li").click(function(){

    let num = $(this).index();
    
    $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).addClass("active");
    $(".wrapper > .top-bar > .con > .nav-box > ul > li").eq(num).siblings().removeClass("active");
    


  })
  $(".circle01").circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI/2,
    // 방향 반전 여부
    reverse:true,
    // 그래프 수치
    value: 0.75,
    // 그래프 사이즈
    size: 220,
    // 그래프 모서리, 지울 시 각진 모양

    // 그래프 두께
    thickness: 30,
    // 그래프 색상
    fill: {
      gradient: ["#B9F3FC", "#7EBEE5"]
    }
  })
  $(".circle02").circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI/2,
    // 방향 반전 여부
    reverse:true,
    // 그래프 수치
    value: 0.75,
    // 그래프 사이즈
    size: 220,
    // 그래프 모서리, 지울 시 각진 모양

    // 그래프 두께
    thickness: 30,
    // 그래프 색상
    fill: {
      gradient: ["#B9F3FC", "#7EBEE5"]
    }
  })
  $(".circle03").circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI/2,
    // 방향 반전 여부
    reverse:true,
    // 그래프 수치
    value: 0.9,
    // 그래프 사이즈
    size: 220,
    // 그래프 모서리, 지울 시 각진 모양

    // 그래프 두께
    thickness: 30,
    // 그래프 색상
    fill: {
      gradient: ["#B9F3FC", "#7EBEE5"]
    }
  })
  $(".circle04").circleProgress({
    // 그래프 시작 위치
    // Math.PI = 3.14
    startAngle: -Math.PI/2,
    // 방향 반전 여부
    reverse:true,
    // 그래프 수치
    value: 0.9,
    // 그래프 사이즈
    size: 220,
    // 그래프 모서리, 지울 시 각진 모양

    // 그래프 두께
    thickness: 30,
    // 그래프 색상
    fill: {
      gradient: ["#B9F3FC", "#7EBEE5"]
    }
  })

  // 그래프 수치 출력
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .find(".percent")
      .text(parseInt(stepValue * 100) + "%");
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