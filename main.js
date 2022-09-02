const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuIconCart = document.querySelector('.navbar-shopping-cart');
const menuCart = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuIconMobile.addEventListener('click',toggleMobileMenu)
menuIconCart.addEventListener('click',toggleCartMenu);

function toggleDesktopMenu(){
    if (!menuCart.classList.contains('inactive')){
        menuCart.classList.add('inactive')
    }
    menuDesk.classList.toggle('inactive'); //la opcion toggle hace que se quite o se ponga la clase inactive
}
function toggleMobileMenu(){
    if (!menuCart.classList.contains('inactive')){
        menuCart.classList.add('inactive')
    }
    menuMobile.classList.toggle('inactive');
}

function toggleCartMenu(){
    const menuMobileClose = menuMobile.classList.contains('inactive'); //pregunta si el menu esta cerrado
    const menuDeskClose = menuDesk.classList.contains('inactive');
    
    if (!menuMobileClose || !menuDeskClose){
        menuMobile.classList.add('inactive');
        menuDesk.classList.add('inactive');
    }
    menuCart.classList.toggle('inactive');
    
}
