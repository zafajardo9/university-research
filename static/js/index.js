const menuButton = document.getElementById("menu-button");
const menuDiv = document.getElementById("menu-div");


menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("hidden");
});



// EWAN

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});