$(document).ready(function() {
  // Animation for zenithia slides
  var images = [
    "images/zenithia_0.png", 
    "images/zenithia_1.png",
    "images/zenithia_2.png",
    "images/zenithia_3.png"
  ];
  var currindex = 0;

  $("#next").click(function() {
    $("#zenithia_slides").addClass("fade");
    currindex += 1;

    if(currindex > 3) {
      currindex = 0;
    }
    $("#zenithia_slides").attr("src", images[currindex]);
    // src: https://css-tricks.com/restart-css-animation/
    var el = $("#zenithia_slides"),  
    newone = el.clone(true);        
    el.before(newone);    
    $("." + el.attr("class") + ":last").remove();
  });

  $("#back").click(function() {
    $("#zenithia_slides").addClass("fade");
    currindex -= 1;

    if(currindex < 0) {
      currindex = 3;
    } 
    $("#zenithia_slides").attr("src", images[currindex]);
    // src: https://css-tricks.com/restart-css-animation/
    var el = $("#zenithia_slides"),  
    newone = el.clone(true);        
    el.before(newone);    
    $("." + el.attr("class") + ":last").remove();
  });


  // Animation for vcalumni slides
  var vcimages = [
    "images/vcapp1.png", 
    "images/vcapp2.png",
    "images/vcapp3.png",
  ];
  var curr = 0;

  $("#next2").click(function() {
    curr += 1;
    if(curr > 2) {
      curr = 0;
    }
    $("#vcalumni_slides").attr("src", vcimages[curr]);
  });

  $("#back2").click(function() {
    curr -= 1;
    if(curr < 0) {
      curr = 2;
    } 
    $("#vcalumni_slides").attr("src", vcimages[curr]);
  });


  // Container fade-in
  // Source: https://codepen.io/annalarson/pen/GesqK
  $(window).scroll( function(){
      $('.fadein').each(function(i) {     
          var container_bottom = $(this).position().top + $(this).outerHeight();
          var window_bottom = $(window).scrollTop() + $(window).height();
          if(window_bottom > container_bottom){
              $(this).animate({'opacity':'1'}, 1200);
          }
      }); 
  });
});


