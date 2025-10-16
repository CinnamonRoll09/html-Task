var name = prompt("Name?");

if (name.toLowerCase() === "cinnamon roll") {
    document.querySelector(".content").style.display = 'block';
} else {
    window.location.href = "index.html";
}