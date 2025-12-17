const nav = document.querySelector("#primary-nav");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", isOpen);
  nav.toggleAttribute("hidden", !isOpen);
});
