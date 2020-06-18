import "../sass/style.scss";

const cards = document.querySelectorAll("[data-card]");
const selectdPlan = document.getElementById("plan");

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
console.log("okay are you watching me");

// cards.forEach((card, index) => {
//   card.addEventListener("click", (e: Event) => {
//     removeSelected();
//     e.target.closest(".card").classList.add("active");
//     if (index === 0) {
//       selectdPlan.innerHTML = "Starter Trial &middot; 500MAUs";
//     }
//     if (index === 2) {
//       selectdPlan.innerHTML = "Enterprice &middot; All Pro featurs";
//     }
//   });
// });
