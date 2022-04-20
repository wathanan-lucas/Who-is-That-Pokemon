const btnMobile = document.querySelector('.btn-mobile')

function ToggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');  
    
}

btnMobile.addEventListener('click', ToggleMenu)