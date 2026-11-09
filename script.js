// accordion
// variables
const accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
  function revealAccordion() {
    this.classList.toggle("active");
  }
  accordion[i].addEventListener("click", revealAccordion);
}

// mobile toggle
// ===== mobile menu =====
const menuBtn = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

const toggleMenu = () => {
  // if the menu is hidden, show it
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  }
  // if it is showing, hide it again
  else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  }
};

menuBtn.addEventListener("click", toggleMenu);
