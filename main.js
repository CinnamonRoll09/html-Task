var name = prompt("Name?");

if (name.toLowerCase() == "cinnamon roll") {
    var psswd = prompt("Password!");
    if (psswd == "1234") {

    } else {
        window.location.href = "404.html";
    }
} else {
    window.location.href = "404.html";
}
