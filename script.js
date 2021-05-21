var hamburguer = document.querySelector(".hamburguer");
var click = document.querySelector(".menu-link")

hamburguer.addEventListener("click", function () {
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});

click.addEventListener("click", function () {
    var sidebar = document.querySelector(".container").classList.toggle("hide-menu");
});
