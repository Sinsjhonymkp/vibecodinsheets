import "./style.css";

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target)
            target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Mobile menu toggle
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("nav__toggle--open");
        navLinks.classList.toggle("nav__links--open");
        document.body.classList.toggle("menu-open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("nav__toggle--open");
            navLinks.classList.remove("nav__links--open");
            document.body.classList.remove("menu-open");
        });
    });
}

// Header scroll state
const header = document.querySelector(".header");
if (header) {
    const onScroll = () => {
        header.classList.toggle("header--scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

// Footer year
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
