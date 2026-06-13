function toggleMenu() {
    document.getElementById('nav')
        .classList.toggle('nav--open');

    document.getElementById('menu-toggle')
        .classList.toggle('menu-toggle--open');
}

document.getElementById('menu-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});