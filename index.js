const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// intro
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".nav-bar", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".para", { opacity: 0 }, { opacity: 1, duration: 0.7 });
// end intro

// video slider
// const btns = document.querySelectorAll(".nav-btn");

// var sliderNav = function (manual) {
//   btns.forEach((btn) => {
//     btn.classList.remove("active");
//   });

//   btns[manual].classList.add("active");
// };

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     sliderNav(i);
//   });
// });
// end video slider
