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

const observer = new IntersectionObserver((enteries) => {
    enteries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})

const animateContents = document.querySelectorAll(".content");
animateContents.forEach((el) => observer.observe(el));