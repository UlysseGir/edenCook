const menuBurger = document.getElementById("menuBurger");
const menu = document.querySelector(".menu-item");
const ingredientBtn = document.querySelector(".ingredientBtn");
const ingredients = document.querySelector(".ingredients");
// const recipe = document.querySelector(".recipe")


menuBurger.addEventListener("click", ()=>{
    menu.classList.toggle("open");
})

ingredientBtn.addEventListener("click", ()=>{
    ingredients.classList.toggle("ingredOpen")
})
