"use strict";

// TOGGLE CLASS ACTIVE
const navBarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// LOGIC UNTUK KLIK HAMBURGER MENU
hamburgerMenu.addEventListener("click", function () {
  navBarNav.classList.toggle("active");
});

// KLIK DILUAR SIDEBAR ATAU DIMANAPUN DI HALAMAN UNTUK MENGHILANGKAN MENU SIDEBAR
document.addEventListener("click", function (e) {
  // SELAMA YANG DIKLIK BUKAN NAVBAR DAN BUKAN HAMBURGER MENU
  if (!hamburgerMenu.contains(e.target) && !navBarNav.contains(e.target)) {
    // HILANGKAN CLASS ACTIVE
    navBarNav.classList.remove("active");
  }
});
