document.addEventListener("DOMContentLoaded", function () {
    const products = [
    { name: "Apple", category: "Fruits", price: 1.5, image: "https://raw.githubusercontent.com/ruubendiazz/grocery-shop/main/assets/images/apple.png" },
    { name: "Banana", category: "Fruits", price: 0.8, image: "https://raw.githubusercontent.com/ruubendiazz/grocery-shop/main/assets/images/banana.png" },
    { name: "Carrot", category: "Vegetables", price: 0.5, image: "https://raw.githubusercontent.com/ruubendiazz/grocery-shop/main/assets/images/carrot.png" },
    { name: "Potato", category: "Vegetables", price: 0.3, image: "https://raw.githubusercontent.com/ruubendiazz/grocery-shop/main/assets/images/potato.png" },
];

    const productContainer = document.getElementById("product-container");
    let filteredProducts = products.slice();

    function renderProducts() {
        productContainer.innerHTML = "";
        filteredProducts.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "col-md-3 mb-4";
            productDiv.innerHTML = `<div class="card"> <img src="${product.image}" class="card-img-top" alt="${product.name}"> <div class="card-body"> <h3 class="card-title">${product.name}</h3> <p class="card-text">Category: ${product.category}</p> <p class="card-text">Price: $${product.price.toFixed(2)}</p> </div> </div>`;

            productContainer.appendChild(productDiv);
        });
    }

    window.filterProducts = function () {
        const category = document.getElementById("category").value;
        filteredProducts = category === "" ? products.slice() : products.filter(p => p.category === category);
        renderProducts();
    };

    renderProducts();
});

