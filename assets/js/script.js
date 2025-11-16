// Smooth Scroll (for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Mobile Navbar Toggle (future-safe)
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// Add Active Page Highlighting
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Contact Form Submission (Demo Only)
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Your message has been sent! I will get back to you shortly.");
        contactForm.reset();
    });
}
