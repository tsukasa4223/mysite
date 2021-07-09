$(function() {
  // ジャンプスクロールの処理
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 50;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

  $(function() {
    // マウスオーバーでの画像エフェクトの処理
    $(".work-img").hover(function() {
      $(this).stop().animate({
        "width":"350px",
        "height":"250px",
        "marginTop":"-32px"
      }, "fast");
    },function () {
      $(this).stop().animate({
        "width":"300px",
        "height":"200px",
        "marginTop":"0px"
      },"fast");
    });
  });