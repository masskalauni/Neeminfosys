const hamburger = document.querySelector(".hamburger-div");
const navbar = document.querySelector(".nav");
const displayClose = document.querySelector(".display-close");
const navClose = document.querySelector(".nav-close");

hamburger.addEventListener("click", (event) => {
  navbar.classList.remove("display-close");
  hamburger.classList.add("display-close");
  navClose.classList.remove("display-close");
});

navClose.addEventListener("click", (event) => {
  navClose.classList.add("display-close");
  hamburger.classList.remove("display-close");
  navbar.classList.add("display-close");
});



// const hamburgerDiv = document.getElementById("hamburgerDiv");
// const closeMenu = document.getElementById("closeMenu");
// const navBar = document.getElementById("navBar"); // Replace "navBar" with the actual ID of your navigation bar

// hamburgerDiv.addEventListener("click", () => {
//     // Toggle the classes to show/hide the menus
//     hamburgerDiv.classList.toggle("display-close");
//     closeMenu.classList.toggle("display-close");
    
//     // Toggle the visibility of the navigation bar
//     navBar.classList.toggle("display-close");
// });

// closeMenu.addEventListener("click", () => {
//     // Toggle the classes to show/hide the menus
//     hamburgerDiv.classList.toggle("display-close");
//     closeMenu.classList.toggle("display-close");
    
//     // Toggle the visibility of the navigation bar
//     navBar.classList.toggle("display-close");
// });
