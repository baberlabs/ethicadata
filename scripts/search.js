const searchButton = document.querySelector(".principles .search-form button");
const searchInput = document.querySelector(".principles .search-form input");

searchButton.addEventListener("click", (e) => {
  const text = searchInput.value.trim();
  const errorText = `We are sorry. You searched for "${text}", however, filtering is not implemented yet.`;
  searchInput.setCustomValidity(errorText);
  searchInput.reportValidity();
});
