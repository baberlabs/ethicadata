const navContainerMB = document.querySelector(".nav-container-mb");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  navContainerMB.classList.toggle("nav-open");
});
