"use strict";

// TOGGLE CLASS ACTIVE
const navBarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  // TOGGLE BISA UNTUK MEMBUKA DAN TUTUP
  // navBarNav.classList.toggle("active");
  // ADD HANYA UNTUK MEMBUKA
  navBarNav.classList.add("active");
  navBarNav.classList.add("overlay");
});

// KLIK DILUAR SIDEBAR ATAU DIMANAPUN DI HALAMAN
// UNTUK MENGHILANGKAN MENU SIDEBAR
document.addEventListener("click", function (e) {
  // SELAMA YANG DIKLIK BUKAN NAVBAR DAN BUKAN HAMBURGER MENU
  if (!hamburgerMenu.contains(e.target) && !navBarNav.contains(e.target)) {
    // HILANGKAN CLASS ACTIVE
    navBarNav.classList.remove("active");
    navBarNav.classList.remove("overlay");
  }
});
