// Mobile Hamburger Menu
const mobileButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // Close mobile menu after click
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Console message for devs/recruiters who view source (nice touch)
console.log(
  "%c👋 Hi there! Thanks for checking out my portfolio source code.\nBuilt with passion by Saviour Chibuzor Ekewuba — Lagos, Nigeria 🚀\nOpen to fullstack internship opportunities!",
  "color: #10b981; font-size: 14px; font-family: monospace;",
);

// Optional: Add active class to nav on scroll (bonus pro touch)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-emerald-400", "font-medium");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-emerald-400", "font-medium");
    }
  });
});
