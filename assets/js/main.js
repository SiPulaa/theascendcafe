// Shared small interactions for the Home and Shop pages.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "×" : "☰";
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // The search filters the product cards currently displayed on the Shop page.
  const searchInput = document.getElementById("productSearch");
  if (searchInput) {
    const cards = [...document.querySelectorAll(".product-card")];
    const sections = [...document.querySelectorAll(".product-section")];
    const noResults = document.getElementById("noResults");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach(card => {
        const matches = card.dataset.name.toLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visibleCount++;
      });

      sections.forEach(section => {
        const hasVisibleCard = [...section.querySelectorAll(".product-card")]
          .some(card => !card.hidden);
        section.hidden = !hasVisibleCard;
      });

      if (noResults) noResults.hidden = visibleCount !== 0;
    });
  }
});

 document.querySelectorAll(".current-year").forEach(el => el.textContent = new Date().getFullYear());
