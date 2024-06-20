function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Desktop
let lastScrollTop = 0;
const navbar = document.querySelector(".grid-header");

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Mobile
let lastScrollTop_2 = 0;
const navbar_2 = document.querySelector(".hamburger-navigation");

window.addEventListener('scroll', function() {
    let scrollTop_2 = window.pageYOffset || document.documentElement.scrollTop_2;

    if (scrollTop_2 > lastScrollTop_2) {
        navbar_2.classList.add('hidden');
    } else {
        navbar_2.classList.remove('hidden');
    }
    lastScrollTop_2 = scrollTop_2;
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.transition = 'opacity 0.5s ease-out';
    loader.style.opacity = 0;
    loader.addEventListener('transitionend', function() {
        loader.style.display = 'none'; // This ensures it's not interactable after it fades out
    });
})