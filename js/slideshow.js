$(document).ready(function() {
  var images = [
    "images/voncramm1.jpg", 
    "images/voncramm2.jpg",
    "images/voncramm3.jpg",
    "images/voncramm4.jpg", 
    "images/Voncramm5.jpg"
  ];
  var currindex = 0;

  $("#ssnext").click(function() {
    currindex += 1;

    if(currindex >= images.length) {
      currindex = 0;
    }
    $("#slideshowimg").attr("src", images[currindex]);
  });

  $("#ssback").click(function() {
    currindex -= 1;

    if(currindex <= 0) {
      currindex = 4;
    } 
    $("#slideshowimg").attr("src", images[currindex]);
  });
carousel();

function carousel() {
    if (currindex >= images.length) {
      currindex = 0
    }
    else {
      currindex++;
    }
    $("#slideshowimg").attr("src", images[currindex]);
    setTimeout(carousel, 5000);
}
});
