const hamburger = document.getElementById("mob-hamburger");
const menu = document.getElementById("nav-mob-wrapper");
const closeBtn = document.getElementById("nav-mob-close-btn");

hamburger.addEventListener("click", () => {
  menu.classList.add("open");
  hamburger.classList.add("hidden");
  closeBtn.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  hamburger.classList.remove("hidden");
  closeBtn.classList.remove("visible");
});
