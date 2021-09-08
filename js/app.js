//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}


const body = document.getElementById('body')
const burgerMenuButton = document.getElementById('menu-icon');
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
const burgerMenu = document.getElementById('menu-burger');

// Бургер меню ===================================================
if(burgerMenuButton) {
  burgerMenuButton.addEventListener('click', function(e) {
      burgerMenuButton.classList.toggle('active');
      body.classList.toggle('no_scroll');
      burgerMenu.classList.toggle('active');
  })
}

//navbar links

const navbar = document.querySelector("#menu-burger");
a = navbar.querySelectorAll("#burgerMenu");


a.forEach(function (element) {
  element.addEventListener("click", function () {
      for (let i = 0; i < a.length; i++) {

          a[i].classList.remove("active")
      }
      this.classList.add("active");
      burgerMenuButton.classList.remove('active');
      body.classList.remove('no_scroll');
      burgerMenu.classList.remove('active');
  })
});