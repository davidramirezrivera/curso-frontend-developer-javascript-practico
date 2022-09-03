const menuEmail = document.querySelector('.navbar-email');
const menuDesk = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuIconCart = document.querySelector('.navbar-shopping-cart');
const menuCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')


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

function renderProduct(pro){
    for(product of pro){
        //se esta replicando el codigo de html pero en javascript
        const productCard = document.createElement('div'); //se crea el contenedor div
        productCard.classList.add('product-card');
    
        const productImg =document.createElement('img'); //se crea la atiqueta imagen con el src de las fotos 
        productImg.setAttribute('src', product.imagen);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
    
        const productInfoDiv = document.createElement('div');
        const productInfoPrice= document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.nombre;
        
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureCart = document.createElement('img');
        productInfoFigureCart.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productInfoFigureCart);
        productInfoDiv.append(productInfoPrice, productInfoName);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);
        cardsContainer.appendChild(productCard);
    }
}

const productList = [];
productList.push({
    nombre: 'bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    nombre: 'car',
    price: 700,
    imagen: 'https://images.pexels.com/photos/13073672/pexels-photo-13073672.jpeg?cs=srgb&dl=pexels-dhaval-damor-13073672.jpg&fm=jpg'
});

productList.push({
    nombre: 'moto',
    price: 430,
    imagen: 'https://images.pexels.com/photos/5803320/pexels-photo-5803320.jpeg?cs=srgb&dl=pexels-cottonbro-5803320.jpg&fm=jpg'
});

renderProduct(productList);

//append() --> permite agregar varios a la vez 
//appendChild() --> solo permite agregar un elemento a la vez 