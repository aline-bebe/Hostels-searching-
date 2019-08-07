function validateForm() {
    var a = document.loginform.usr.value;
    var b = document.loginform.pwd.value;
    var username = "user"; 
    var password = "pass";
    if ((a == username) && (b == password)) {
        return true;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
  }