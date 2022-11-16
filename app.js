const toggle = document.querySelector(".toggle");
const navMenuWrapper = document.querySelector(".nav-menu-wrapper");

toggle.addEventListener("click", () => {
    navMenuWrapper.classList.toggle("show")
})
