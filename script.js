// login.js

document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    errorElement.innerHTML = "";

    if (username.trim() === "" || password.trim() === "") {
        errorElement.innerHTML = "Username and password are required.";
        return;
    }

    if (username.length < 3 || password.length < 6) {
        errorElement.innerHTML = "Username must be at least 3 characters long and password must be at least 6 characters long.";
        return;
    }
});
