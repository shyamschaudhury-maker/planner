// Smooth Scroll for Navigation Links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    }
  });
});

// Mobile Menu Toggle (Future-ready if you add mobile nav)
const mobileMenuBtn = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// FAQ Toggle
document.querySelectorAll(".faq-box").forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    const answer = faq.querySelector("p");
    if (faq.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0px";
    }
  });
});

// Contact Form Validation (optional enhancement)
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}
