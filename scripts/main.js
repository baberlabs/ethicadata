const navContainerMB = document.querySelector(".nav-container-mb");
const menuIcon = document.querySelector(".menu-icon");
const searchInput = document.querySelector(".search-bar > input");
const searchButton = document.querySelector(".search-bar > button");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  alert(
    `Unfortunately, the search function is not yet implemented. You searched for: "${query}"`
  );
});

menuIcon.addEventListener("click", () => {
  navContainerMB.classList.toggle("nav-open");
});
