function toggleMenu() {
    const menu = document.querySelector('.sidebar');
    menu.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

function shuffleProducts() {
    const productGrid = document.getElementById('productGrid');
    const products = productGrid.querySelectorAll('.product-item');

    const productArray = Array.from(products);

    for (let i = productArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productArray[i], productArray[j]] = [productArray[j], productArray[i]];
    }

    productGrid.innerHTML = '';

    productArray.forEach(product => {
        productGrid.appendChild(product);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.logo');
    logoLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        shuffleProducts();
    });
});
