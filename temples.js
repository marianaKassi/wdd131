document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");
    
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});