const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartList = document.getElementById("cartItems");

if (cartItems.length === 0) {
  cartList.innerHTML = "<h2>Your cart is empty!</h2>";
} else {
  cartItems.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    cartList.appendChild(card);
  });
}
