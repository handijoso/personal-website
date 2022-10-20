const navbarContainer = document.querySelector("#navbar-container");

function navbarBackground() {
    let windowPosition = window.scrollY;

    if (windowPosition > 150) {
        navbarContainer.classList.add("show-background")
    }
    else {
        navbarContainer.classList.remove("show-background")
    }
}
window.addEventListener("scroll", navbarBackground)