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

// const header = document.querySelector(".header");
// let prevScrollY = window.scrollY;

// window.addEventListener("scroll", () => {
//     const currentScrollY = window.scrollY;
//     const isHomePage = window.location.hash === ".hero"; // Check if you are on the home page

//     if (!isHomePage && currentScrollY > prevScrollY) {
//         // Scrolling down and not on the home page, change the background color
//         header.style.backgroundColor = "white"; /* Change to your desired color */
//     } else {
//         // Scrolling up or on the home page, keep the initial background color
//         header.style.backgroundColor = "#fff2e1"; /* Initial background color */
//     }

//     prevScrollY = currentScrollY;
// });












// window.addEventListener("scroll", () => {
//     const header = document.querySelector(".header");
//     if (window.scrollY > 50) { /* Adjust the value as needed to trigger the animation */
//         header.style.top = "0";
//     } else {
//         header.style.top = "0"; /* Hide the navbar off-screen */
//     }
// });


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
