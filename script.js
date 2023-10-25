const showMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')

showMenu.addEventListener('click', () => {
  menu.classList.toggle('show')
})
