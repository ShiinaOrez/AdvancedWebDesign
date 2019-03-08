"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;
exports.signup = signup;

exports.setItem = async function (key, value) {
    var item = JSON.stringify({
        v: value
    });
    return await _reactNative.AsyncStorage.setItem(key, item);
};

exports.getItem = async function (key) {
    var item = await _reactNative.AsyncStorage.getItem(key);
    if (!item) {
        return null;
    }
    return JSON.parse(item).v || null;
};

function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value == "") {
        alert("Please input the username");
    } else if (password.value == "") {
        alert("Please input the password");
    } else {
        if (getItem(username) == null) {
            alert("Please sign up at first!");
        } else if (getItem(username) != password) {
            alert("Invalid password!");
        } else {
            window.location.href = "../html/homepage.html";
        }
    }
    return 0;
}

function signup() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (getItem(username) != null) {
        alert("Username existed!");
    } else {
        setItem(username, password);
        alert("Sign up Successful!");
        window.location.href = "../html/homepage.html";
    }

    return 0;
}
