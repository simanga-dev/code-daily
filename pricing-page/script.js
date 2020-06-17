const cards = document.querySelectorAll("[data-card]");
const selectdPlan = document.getElementById("plan");
selectdPlan.contains;

function removeSelected() {
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].classList.contains("active"));
    if (cards[i].classList.contains("active")) {
      cards[i].classList.remove("active");
      return;
    }
  }

  return;
}

cards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    removeSelected();
    e.target.closest(".card").classList.add("active");
    if (index === 0) {
      selectdPlan.innerHTML = "Starter Trial &middot; 500MAUs";
    }
    if (index === 2) {
      selectdPlan.innerHTML = "Enterprice &middot; All Pro featurs";
    }
  });
});
