function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value == "") {
        alert("Please input the username");
    } else if (password.value == "") {
        alert("Please input the password");
    } else if(username.value == "ShiinaOrez" && password.value == "hjl20030119") {
        window.location.href="homepage.html"
    } else {
        alert("Please input the correct username and password!");
    }
}