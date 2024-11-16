document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const mask = document.querySelector(".mask");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const toggleMenu = () => {
        navbar.classList.toggle("open");
        mask.classList.toggle("open");
    }

    const closeMenu = () => {
        navbar.classList.remove("open");
        mask.classList.remove("open");
    }

    menuToggle.addEventListener("click", toggleMenu);
    mask.addEventListener("click", toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    })
})