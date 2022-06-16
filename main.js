/* 
Author: Joe Marcotte
Date: 6/15/2022
Sunnyside Agency Landing Page
*/

const toggleButton = document.querySelector(".hamburger-menu");
const navBarLinks = document.querySelector(".nav-btns");

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active");
  });
  navBarLinks.classList.toggle("hidden");
});
