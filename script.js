document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burgerMenu");
    const navOptions = document.querySelector(".navOptions");
  
    burgerMenu.addEventListener("click", function () {
      navOptions.classList.toggle("show");
    });
  });
  