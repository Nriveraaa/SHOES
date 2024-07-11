document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const products = [
        {
            id: 1,
            name: "Tiger Shoes",
            description: "Beige Lightweight walking shoes",
            price: "₱56.42",
            image: "prod1.jpg"
        },
        {
            id: 2,
            name: "High Heels",
            description: "Black and white high heels fashion shoes",
            price: "₱49.20",
            image: "prod2.jpg"
        },
        {
            id: 3,
            name: "Transformer",
            description: "Multi-color bulk shoes",
            price: "₱84.99",
            image: "prod3.jpg"
        },
        {
            id: 4,
            name: "Black Mamba",
            description: "All black lightweight shoes for men",
            price: "₱35.27",
            image: "prod5.jpg"
        },
        {
            id: 5,
            name: "Ghost Shoes",
            description: "All white women shoes",
            price: "₱66.21",
            image: "prod6.jpg"
        }
    ];

    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-price").innerText = product.price;
    }
});
