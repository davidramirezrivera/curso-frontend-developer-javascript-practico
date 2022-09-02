const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuIconMobile.addEventListener('click',toggleMobileMenu)

function toggleDesktopMenu(){
    menuDesk.classList.toggle('inactive'); //la opcion toggle hace que se quite o se ponga la clase inactive
}
function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}