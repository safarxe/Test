const header = document.getElementById("stickyHeader");
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});