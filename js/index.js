window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var element = document.getElementById("navigation");

    if (scroll >= h) {
        element.classList.add("fixed-navigation");
    } else {
        element.classList.remove("fixed-navigation")
    }
});