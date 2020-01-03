$(document).ready(function() {
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
});