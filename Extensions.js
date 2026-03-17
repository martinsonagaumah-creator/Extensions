document.querySelectorAll(".card").forEach((card) => {
     card.dataset.active !== "true" && card.classList.add("inactive")

     const checkbox = card.querySelector("input[type='checkbox']");
     checkbox.checked = card.dataset.active === "true";
})

document.addEventListener("change", function (e) {
     if (e.target.type === "checkbox") {
          const card = e.target.closest(".card");
          const isActive = e.target.checked;
          card.dataset.active = isActive;
          card.classList.toggle("inactive", !isActive)
     }
})

document.addEventListener("click", function (e) {
     if (e.target.classList.contains("remove-btn")) {
          e.target.closest(".card").remove()
     }
})

function getCards() {
     return document.querySelectorAll(".card")
}

document.querySelector(".filter-all").addEventListener("click", function () {
     getCards().forEach((card) => (card.style.display = "flex"));
});

document.querySelector(".filter-active").addEventListener("click", function () {
     getCards().forEach((card) => {
     card.style.display = card.dataset.active === "true" ? "flex" : "none";
});
});

document.querySelector(".filter-inactive").addEventListener("click", function () {
     getCards().forEach((card) => {
     card.style.display = card.dataset.active === "false" ? "flex" : "none";
});
});

const toggleBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "light") {
     document.body.classList.add("light-theme");
}

toggleBtn.addEventListener("click", () => {
     document.body.classList.toggle("light-theme");

     if(document.body.classList.contains("light-theme")) {
          localStorage.setItem("theme", "light");
     } else{
          localStorage.setItem("theme", "dark");
     }
})
