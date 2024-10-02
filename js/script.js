// 스크롤 애니메이션
$(function () {
  $(".animate").scrolla({
    mobile: true, // 모바일버전시 활성화
    once: false, // 스크롤시 한번만 하고싶을 때 true
  });
});

// 헤더 이벤트 핸들러(fixHeader);

let scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on("scroll resize", function () {
  scrollValue = $(document).scrollTop();
  fixHeader();
});

function fixHeader() {
  if (scrollValue > 150) {
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }
}

// 슬라이드 걸기

$(function () {
  $(".visual .slide").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});
