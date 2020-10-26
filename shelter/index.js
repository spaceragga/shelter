
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.responseType = 'json';
request.send();

request.onload = function () {
  var superHeroes = request.response;
  console.log(superHeroes);
  var result = superHeroes.filter(obj => {
    return obj.name === 'Jennifer';
  })
  console.log(result);
}



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    console.dir(modal)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
class Menu {
  constructor() {
    this.body = document.body
    this.wrapper = document.querySelector('.wrapper')
    this.menu = document.querySelector('.menu')
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
    this.menu.classList.toggle('active')
    this.wrapper.classList.toggle('active')
    this.headerBurgerMenu.classList.toggle('active')
    this.headerBlackout.classList.toggle('active')
    this.body.classList.toggle('scroll')
  }

  closeDroppedMenu() {
    this.menu.classList.remove('active')
    this.wrapper.classList.remove('active')
    this.headerBurgerMenu.classList.remove('active')
    this.headerBlackout.classList.remove('active')
    this.body.classList.remove('scroll')
  }
}
const main = () => {
  const menu = new Menu()
  menu.addListenersForMenu()

}
main();