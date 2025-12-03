const navContainerMB = document.querySelector(".nav-container-mb");
const menuIcon = document.querySelector(".menu-icon");
const searchInput = document.querySelector(".search-bar > input");
const searchButton = document.querySelector(".search-bar > button");
const tableRows = document.querySelectorAll("#practice table tbody tr");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const row1 = tableRows[0];
const row2 = tableRows[1];
const row3 = tableRows[2];
const row4 = tableRows[3];

if (searchInput && searchButton) {
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    alert(
      `Unfortunately, the search function is not yet implemented. You searched for: "${query}"`
    );
  });
}

menuIcon.addEventListener("click", () => {
  navContainerMB.classList.toggle("nav-open");
});
if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    if (row1.classList.contains("current")) {
      row1.classList.remove("current");
      row4.classList.add("current");
    } else if (row2.classList.contains("current")) {
      row2.classList.remove("current");
      row1.classList.add("current");
    } else if (row3.classList.contains("current")) {
      row3.classList.remove("current");
      row2.classList.add("current");
    } else if (row4.classList.contains("current")) {
      row4.classList.remove("current");
      row3.classList.add("current");
    }
  });

  nextButton.addEventListener("click", () => {
    if (row1.classList.contains("current")) {
      row1.classList.remove("current");
      row2.classList.add("current");
    } else if (row2.classList.contains("current")) {
      row2.classList.remove("current");
      row3.classList.add("current");
    } else if (row3.classList.contains("current")) {
      row3.classList.remove("current");
      row4.classList.add("current");
    } else if (row4.classList.contains("current")) {
      row4.classList.remove("current");
      row1.classList.add("current");
    }
  });
}
