// Get the burger menu icon and menu elements
const burgerMenuIcon = document.querySelector(".burger-menu-icon");
const burgerMenu = document.querySelector(".burger-menu");

// Add an event listener to the burger menu icon
burgerMenuIcon.addEventListener("click", () => {
  // Toggle the active class on the burger menu icon
  burgerMenuIcon.classList.toggle("active");

  // Toggle the show class on the menu
  burgerMenu.classList.toggle("show");
});
