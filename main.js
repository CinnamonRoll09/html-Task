function button() {

    const username = document.querySelector(".username").value
    const password = document.querySelector(".password").value

    if (username.toLowerCase() == "cinnamon roll" && password == "2704") {
        window.location.href = "../Cinnamon/cinnamon.html";
    } else {
        window.location.href = "../index.html";
    }
}