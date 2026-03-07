
//const btnd = document.querySelector('#btn')
//btn.addEventListener('click', function() {
   //  block.remove()
//})
//const btnl = document.querySelector('#btn2')
//btn2.addEventListener('click', function() {
    // block2.remove()
//})
//const btnm = document.querySelector('#btn3')
//btn3.addEventListener('click', function() {
     //block3.remove()
//})
//const btnn = document.querySelector('#btn4')
//btn4.addEventListener('click', function() {
    // block4.remove()
//})
//const btna = document.querySelector('#btn5')
//btn5.addEventListener('click', function() {
   //  block5.remove()
//})
//const btnp = document.querySelector('#btn6')
//btn6.addEventListener('click', function() {
    // block6.remove()
//})
//const btnh = document.querySelector('#btn7')
//btn7.addEventListener('click', function() {
   //  block7.remove()
//})
//const btnw = document.querySelector('#btn8')
//btn8.addEventListener('click', function() {
    // block8.remove()
//})
//const btnb = document.querySelector('#btn9')
//btn9.addEventListener('click', function() {
   //  block9.remove()
//})
//const btny = document.querySelector('#btn0')
//btn0.addEventListener('click', function() {
   //  block0.remove()
//})
//const btnt = document.querySelector('#btns')
//btns.addEventListener('click', function() {
   //  blocks.remove()
//})
//const btnx = document.querySelector('#btn1')
//btn1.addEventListener('click', function() {
    // blocko.remove()
//})
//const toggleBtn = document.getElementById("theme-btn");
//toggleBtn.addEventListener("click", function() {
    //document.body.classList.toggle("light-mode");
    // if(document.body.classList.contains("light-mode")){
         // toggleBtn.textContent = "Dark Mode";
    // }else{
          //toggleBtn.textContent = "Light Mode";
   //  }
//})
document.addEventListener("change", function(e) {
     if(e.target.type === "checkbox") {
          const card = e.target.closest("div");
          const isActive = e.target.checked;

          card.dataset.active = isActive;

          card.classList.toggle("inactive", !isActive)
     }
})
const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {
    button.addEventListener("click", function() {
        const card = this.closest(".card")
        card.remove()
    })
})

const allBtn = document.querySelector(".filter-all");
const activeBtn = document.querySelector(".filter-active");
const inactiveBtn = document.querySelector(".filter-inactive")

const cards = document.querySelectorAll(".card");

allBtn.addEventListener("click", function() {
     cards.forEach(card => {
          card.style.display = "block";
     })
})

 activeBtn.addEventListener("click", function(){
     cards.forEach(card => {
          if(card.dataset.active === "true") {
               card.style.display = "block";
          } else{
               card.style.display = "none"
          }
     })
})

inactiveBtn.addEventListener("click", function(){
     cards.forEach(card => {
          if(card.dataset.active === "false") {
               card.style.display = "block";
          } else{
               card.style.display = "none"
          }
     })
})
//const toggleBtn = document.getElementById("theme-btn");

//toggleBtn.addEventListener("click", () => {
    // document.body.classList.toggle("light-theme");
//})

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
