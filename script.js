function validateForm() {
    var a = document.loginform.usr.value;
    var b = document.loginform.pwd.value;
    var username = "user"; 
    var password = "pass";
    if ((a == username) && (b == password)) {
        return true;
    }
    else {
        alert (" unsuccessful, please check your username and password");
        return false;
    }
  }


function cycleBackgrounds() {
var index = 0;
$imageEls = $('.containere .slide'); // Get the images to be cycled.
setInterval(function () {
   // Get the next index.  If at end, restart to the beginning.
   index = index + 1 < $imageEls.length ? index + 1 : 0;
   // Show the next
   $imageEls.eq(index).addClass('show');
   // Hide the previous
   $imageEls.eq(index - 1).removeClass('show');
}, 8000);
};
// Document Ready.
$(function () {
cycleBackgrounds();
});