

// var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

// var hamburgers = document.querySelectorAll(".hamburger");
// if (hamburgers.length > 0) {
//   forEach(hamburgers, function(hamburger) {
//     hamburger.addEventListener("click", function() {
//       this.classList.toggle("is-active");
//     }, false);
//   });
// }


class Menu {
  constructor() {
      this.body = document.body
      this.headerInner = document.querySelector('.header__inner')
      this.headerMenu = document.querySelector('.header__menu')
      this.headerBurgerMenu = document.querySelector('.header__burger-menu')
      this.headerBlackout = document.querySelector('.header__blackout')
  }

  addListenersForMenu() {
      this.headerBurgerMenu.addEventListener('click', this.toggleDroppedMenu.bind(this))
      this.headerBlackout.addEventListener('click', this.toggleDroppedMenu.bind(this))
      window.addEventListener('resize', (event) => {
          if (event.target.innerWidth > 767) this.closeDroppedMenu()
      })
  }

  toggleDroppedMenu() {
      this.headerInner.classList.toggle('active')
      this.headerMenu.classList.toggle('active')
      this.headerBurgerMenu.classList.toggle('active')
      this.headerBlackout.classList.toggle('active')
      this.body.classList.toggle('scroll')
  }

  closeDroppedMenu() {
      this.headerInner.classList.remove('active')
      this.headerMenu.classList.remove('active')
      this.headerBurgerMenu.classList.remove('active')
      this.headerBlackout.classList.remove('active')
      this.body.classList.remove('scroll')
  }
}