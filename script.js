function validateForm() {
    var un = document.loginform.usr.value;
    var pw = document.loginform.pword.value;
    var username = "user"; 
    var password = "pass";
    if ((un == username) && (pw == password)) {
        return true;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
  }