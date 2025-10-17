function button() {

    const username = document.querySelector(".username").value
    const password = document.querySelector(".password").value

    if (username.toLowerCase() == "cinnamon roll" && password == "2704") {
        document.querySelector(".welcome").innerHTML = "Welcome"
        document.querySelector('.pwho').innerHTML = `<a class="pwho" href="../Cinnamon/cinnamon.html">&nbsp;Cinnamon!</a>`;
    } else {
        window.location.href = "../index.html";
    }
}