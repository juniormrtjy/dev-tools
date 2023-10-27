const moveUp = document.querySelector('.move-up')

document.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    moveUp.style.opacity = '1'
  } else {
    moveUp.style.opacity = '0'
  }
})
