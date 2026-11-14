// CyberLab - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    // Create mobile menu button
    if (navbar && navLinks) {
        const menuButton = document.createElement("button");

        menuButton.textContent = "☰";
        menuButton.className = "menu-toggle";
        menuButton.setAttribute("aria-label", "Toggle navigation");
        menuButton.setAttribute("aria-expanded", "false");

        navbar.insertBefore(menuButton, navLinks);

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("menu-open");

            const isOpen = navLinks.classList.contains("menu-open");
            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        // Close menu after selecting a link
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("menu-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }

    // Update copyright year automatically
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "© " + new Date().getFullYear() +
            " CyberLab. Learn. Practice. Secure.";
    }

});
