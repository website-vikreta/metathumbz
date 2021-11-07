// navbar scrolling
const body = document.body;
const navbar = document.getElementById("navbar");
let previousScroll = 0;

window.addEventListener("scroll", () => {
  currentScroll = window.pageYOffset;

  //   stick to top class
  if (currentScroll == 0) {
    navbar.classList.add("stick-to-top");
  } else {
    navbar.classList.remove("stick-to-top");
  }

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
  }

  if (
    currentScroll > previousScroll &&
    !navbar.classList.contains("scroll-down")
  ) {
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  }
  if (
    currentScroll < previousScroll &&
    navbar.classList.contains("scroll-down")
  ) {
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }

  previousScroll = currentScroll;
});
