const navToggleBtn = document.querySelector('.nav_toggle_btn');
const navToggleBtnIcon = document.querySelector('.nav_toggle_btn i');
const dropDownMenu = document.querySelector('.dropddown_menu');

navToggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open')

    navToggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}