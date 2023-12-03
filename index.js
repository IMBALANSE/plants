document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("navbar-burger-item").addEventListener("click",function() {
    document.querySelector("header").classList.toggle("open")
  })
})

/*let activeButtons = [];
function handleBurgerClick() {
  const navbarEl = document.getElementById("navbar");
  if (navbarEl.classList.contains("burgerView")) {
    navbarEl.classList.remove("burgerView");
  } else {
    navbarEl.classList.add("burgerView");
  }

  const burgerItemEl = document.getElementById("navbar-burger-item");
  if (burgerItemEl.classList.contains("burgerView")) {
    burgerItemEl.classList.remove("burgerView");
  } else {
    burgerItemEl.classList.add("burgerView");
  }
};*/

console.log("Самооценка своей работы\n 1. 24\n2. 24\n3. 0\n4. 2");