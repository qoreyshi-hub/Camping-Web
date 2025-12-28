const navBtn = document.querySelector(".nav__hamburger-icon");
const navMenuMobile = document.querySelector(".nav__menu-mobile");

let navOpen = false;
navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("nav__hamburger-icon-open");
    navMenuMobile.classList.remove("nav__menu-mobile--open");
    navOpen = false;
  } else {
    navBtn.classList.add("nav__hamburger-icon-open");
    navMenuMobile.classList.add("nav__menu-mobile--open");
    navOpen = true;
  }
});
