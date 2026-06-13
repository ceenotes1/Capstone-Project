const desktopMenuBtn = document.getElementById('desktop-menu-toggle')
const mobileMenuBtn = document.getElementById('mobile-menu-toggle')
const popUpMenu = document.getElementById('pop-up-menu')

function toggleMenu () {
  popUpMenu.classList.toggle('open')
}

if (desktopMenuBtn) {
  desktopMenuBtn.addEventListener('click', toggleMenu)
};

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('click', event => {
  if (
    !popUpMenu.contains(event.target) &&
    !desktopMenuBtn.contains(event.target) &&
    !mobileMenuBtn.contains(event.target)
  ) {
    popUpMenu.classList.remove('open')
  }
})
