const hamBurger = document.querySelector(".hamburger");
const navList = document.querySelector(".navbar__list");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navList.classList.toggle("active");
});
