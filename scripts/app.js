'use strict';
(function(){
  //Trigger Nice Scroll Plugin
  $("html").niceScroll();
  //Change Header height
  $("header").height($(window).height());
  //Scroll to features
  $("header .arrow i").click(function(){
    $("html, body").animate({
      scrollTop: $("#features").offset().top
    }, 1000);
  });
})();