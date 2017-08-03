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
  // Show hidden items
  $(".show-more").click(function(){
    $("#our-work .hidden").fadeIn(2000);
  });
  // Check Testimonials
  var leftArrow = $("#testimonial .fa-chevron-left");
  var rightArrow = $("#testimonial .fa-chevron-right");
  function checkClients(){
    //first
    if($(".client:first").hasClass("active")){
      leftArrow.fadeOut();
    }
    else{
      leftArrow.fadeIn();
    }
    //last
    if($(".client:last").hasClass("active")){
      rightArrow.fadeOut();
    }
    else{
      rightArrow.fadeIn();
    }
  }
  checkClients();
  // testimonial control
  $("#testimonial i").click(function(){
    if($(this).hasClass("fa-chevron-right")){
      $("#testimonial .active").fadeOut(100, function(){
        $(this).removeClass("active").next(".client").addClass("active").fadeIn();
        checkClients();
        
      });
    }
    else{
      $("#testimonial .active").fadeOut(100, function(){
        $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
        checkClients();
      });
    }
  });
  // testimonial auto
  var slider = function(){
    $("#testimonial .client").filter(".active").fadeOut(100, function(){    
      if($(this).next(".client").length){
        $(this).removeClass("active").next(".client").addClass("active").fadeIn();
        checkClients();
      }
      else{
        $(this).removeClass("active");
        $(".client:first").addClass("hidden").addClass("active").fadeIn();
        checkClients();
      }
    });
  }
  var interval = setInterval(slider, 15000);
})();