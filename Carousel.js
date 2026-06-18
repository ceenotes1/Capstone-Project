//Instrument Filter
const instrumentFilter = document.getElementById("instrumentFilter");
const instructorCards = document.querySelectorAll(".instructor-card");

instrumentFilter.addEventListener("change", () => {
  const selectedInstrument = instrumentFilter.value;

  instructorCards.forEach(card => {
    const instruments = card.dataset.instruments
      .split(",")
      .map(item => item.trim());

    if (
      selectedInstrument === "all" ||
      instruments.includes(selectedInstrument)
    ) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});


//Carousels
document.querySelectorAll(".carousel-section").forEach(section => {
  const carousel = section.querySelector(".carousel");
  const leftBtn = section.querySelector(".left");
  const rightBtn = section.querySelector(".right");

  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });
});

// Search Bar
const searchInput = document.getElementById("search");
const instructorCard = document.querySelectorAll(".instructor-card");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  instructorCards.forEach(card => {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});