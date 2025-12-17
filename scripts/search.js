const form = document.querySelector(".principles .search-form");

form.addEventListener("submit", (e) => e.preventDefault());

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".principles");

  if (!section) return;

  const searchInput = section.querySelector("#search");
  const searchButton = section.querySelector(".search-form button");

  const cards = Array.from(section.querySelectorAll(".principle-card"));

  function normalise(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(/^sdg\s*/i, "");
  }

  function filterCards() {
    const query = normalise(searchInput.value);
    let matches = 0;

    cards.forEach((card) => {
      const titleEl = card.querySelector(".principle-title");
      const sdgEls = card.querySelectorAll(".sdg-labels span");

      const title = titleEl ? titleEl.textContent.toLowerCase() : "";

      const sdgs = Array.from(sdgEls).map((span) =>
        span.textContent.replace(/\D/g, "")
      );

      const match =
        query === "" || title.includes(query) || sdgs.includes(query);

      card.style.display = match ? "" : "none";

      if (match) matches++;
    });

    if (query && matches === 0) {
      searchInput.setCustomValidity(
        `No principles found for "${searchInput.value}".`
      );
      searchInput.reportValidity();
    } else {
      searchInput.setCustomValidity("");
    }
  }

  searchInput.addEventListener("input", filterCards);
  searchButton.addEventListener("click", filterCards);
});
