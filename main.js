const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    menuDesk.classList.toggle('inactive'); //la opcion toggle hace que se quite o se ponga la clase inactive
}