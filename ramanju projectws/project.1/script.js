const products = [
  {id: 1, name: "iPhone 14", category: "electronics", price: 999, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=512&hei=512"},
  {id: 2, name: "Dell Laptop", category: "electronics", price: 750, img: "https://tse3.mm.bing.net/th/id/OIP.RxdHPL1LkQEfUSCbI9I6swHaEV?pid=Api&P=0&h=180"},
  {id: 3, name: "Sony Headphones", category: "electronics", price: 120, img: "https://tse1.mm.bing.net/th/id/OIP.VZAi-xGdK6ECIgZsgwhD1gHaHa?pid=Api&P=0&h=180"},
  {id: 4, name: "Nike T-Shirt", category: "fashion", price: 30, img: "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg"},
  {id: 5, name: "Levi's Jeans", category: "fashion", price: 55, img: "https://tse1.mm.bing.net/th/id/OIP.VPMwNbzwZtdrYQekRTJ5KwHaFE?pid=Api&P=0&h=180"},
  {id: 6, name: "Adidas Jacket", category: "fashion", price: 80, img: "https://images-na.ssl-images-amazon.com/images/I/91QcfzK3doL._AC_UL1500_.jpg"},
  {id: 7, name: "Sofa", category: "home", price: 350, img: "https://sp.yimg.com/ib/th?id=OPAC.RRGMhyM5xDPmHg474C474&o=5&pid=21.1&w=160&h=105"},
  {id: 8, name: "Dining Table", category: "home", price: 220, img: "https://tse3.mm.bing.net/th/id/OIP.S_-pX4GdvlIy-9dHu44uDgHaG9?pid=Api&P=0&h=180"},
  {id: 9, name: "Wooden Chair", category: "home", price: 90, img: "https://sp.yimg.com/ib/th?id=OPAC.vLZ8FOS1KaiaTQ474C474&o=5&pid=21.1&w=160&h=105"},
  {id: 10, name: "Bedside Lamp", category: "home", price: 40, img: "https://tse3.mm.bing.net/th/id/OIP.vRmgXQ_fJ_jbcsdfR9FcFQHaHa?pid=Api&P=0&h=180"}
];

let cart = [];

// Display Products
function displayProducts(list) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  list.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Filter Products
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

// Update Cart
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    total += item.price;
  });
  document.getElementById("cart-total").innerText = "Total: $" + total;
}

// Search Functionality
document.getElementById("searchBar").addEventListener("keyup", function () {
  const search = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(search));
  displayProducts(filtered);
});

// Initial Load
displayProducts(products);
