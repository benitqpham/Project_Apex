function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Desktop
let lastScrollTop = 0;
const navbar = document.querySelector(".grid-header"); //

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.transition = 'opacity 0.5s ease-out';
    loader.style.opacity = 0;

})
