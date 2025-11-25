"use strict";

// TOGGLE CLASS ACTIVE
const navBarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// LOGIC UNTUK KLIK HAMBURGER MENU
hamburgerMenu.addEventListener("click", function () {
  navBarNav.classList.toggle("active");
});

// SEARCH BAR ACTIVE TOGGLE
searchButton.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  // Make the input focus
  searchBox.focus();

  e.preventDefault();
});

// KLIK DILUAR SIDEBAR ATAU DIMANAPUN DI HALAMAN UNTUK MENGHILANGKAN MENU SIDEBAR
// KLIK DILUAR ELEMEN
document.addEventListener("click", function (e) {
  // SELAMA YANG DIKLIK BUKAN NAVBAR DAN BUKAN HAMBURGER MENU
  if (!hamburgerMenu.contains(e.target) && !navBarNav.contains(e.target)) {
    // HILANGKAN CLASS ACTIVE
    navBarNav.classList.remove("active");
  }

  // SEARCH BUTTON
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    // HILANGKAN CLASS ACTIVE
    searchForm.classList.remove("active");
  }
});
