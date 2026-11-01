const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Automatically update the year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Basic contact form validation
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Form validated! A backend or email service is needed to send your message.";

    contactForm.reset();
});