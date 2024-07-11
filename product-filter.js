function filterProducts() {
    const category = document.querySelector('#category').value;
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        if (product.dataset.category === category || category === 'all') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.querySelector('#category').addEventListener('change', filterProducts);
