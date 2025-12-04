const menuToggle = document.getElementById("menu-toggle");

const mobileMenuLinks = document.querySelectorAll(
  '#menu-mobile-links a[href^="#"]'
);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});
