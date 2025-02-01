document.addEventListener("DOMContentLoaded", function () {
    // Image Carousel
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;

    function updateCarousel() {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    nextButton.addEventListener("click", function () {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    updateCarousel(); // Initialize carousel

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:max.kraus607@gmail.com?subject=Contact Form Submission&body=Name: ${fullName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
});
