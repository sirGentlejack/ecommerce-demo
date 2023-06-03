let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-icon");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

// closeCart.onclick = () => {
//     cart.classList.remove("active");
// };
