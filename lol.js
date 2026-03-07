const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {
    button.addEventListener("click", function() {
        const card = this.closest(".extensions-grid")
        card.remove()
    })
})
//const removeButtons = document.querySelector(".remove-btn")

//remove-btn.addEventListener('click', function() {
   // extensions-grid.remove()
//})