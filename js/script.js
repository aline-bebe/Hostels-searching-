// Business logic
function cycleBackgrounds() {
  var index = 0;
  $imageEls = $(".containere .slide"); // Get the images to be cycled.
  setInterval(function() {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Show the next
    $imageEls.eq(index).addClass("show");
    // Hide the previous
    $imageEls.eq(index - 1).removeClass("show");
  }, 2000);
}
// Document Ready.
$(function() {
  cycleBackgrounds();
});

$("#div1").mouseover(function() {
  $("#para1").show();
});
$("#div1").mouseleave(function() {
  $("#para1").hide();
});
$("#div2").mouseover(function() {
  $("#para2").show();
});
$("#div2").mouseleave(function() {
  $("#para2").hide();
});
$("#div3").mouseover(function() {
  $("#para3").show();
});
$("#div3").mouseleave(function() {
  $("#para3").hide();
});
$("#div4").mouseover(function() {
  $("#para4").show();
});
$("#div4").mouseleave(function() {
  $("#para4").hide();
});
$("#div5").mouseover(function() {
  $("#para5").show();
});
$("#div5").mouseleave(function() {
  $("#para5").hide();
});
$("#div6").mouseover(function() {
  $("#para6").show();
});
$("#div6").mouseleave(function() {
  $("#para6").hide();
});
$("#div7").mouseover(function() {
  $("#para7").show();
});
$("#div7").mouseleave(function() {
  $("#para7").hide();
});
$("#div8").mouseover(function() {
  $("#para8").show();
});
$("#div8").mouseleave(function() {
  $("#para8").hide();
});
