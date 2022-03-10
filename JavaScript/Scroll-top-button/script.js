$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
// .animate()는 애니메이션 효과를 만든다.
//.animate( properties [, duration ] [, easing ] [, complete ] )
