//header
var headerSearchForm = document.getElementById('headerSearchForm'),
headerSearchInput = document.getElementById('headerSearchInput');

headerSearchForm.addEventListener('click', function() {
    headerSearchInput.focus();
})

//menu (side menu)

var menuButton = document.getElementById('menuButton'),
menu = document.getElementById('Menu'), menuLinks = menu.querySelectorAll('.nav-link');

menuButton.addEventListener('click', function() {
    if (menu.classList.contains('hide-menu')) {
        openMenu();
    }
})

function openMenu() {
    menu.classList.remove('hide-menu')
    menu.classList.add('slide-in-right')
    if (menu.classList.contains('slide-out-right')) menu.classList.remove('slide-out-right')
}

function closeMenu() {
    menu.classList.add('hide-menu', 'slide-out-right')
    if (menu.classList.contains('slide-in-right')) menu.classList.remove('slide-in-right')
}

menuLinks.forEach((link) => { link.addEventListener('click', closeMenu) })