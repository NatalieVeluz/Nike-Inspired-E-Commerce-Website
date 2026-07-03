function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        let sizeInfo = item.size ? `<p>Size: ${item.size}</p>` : ''; // Check if the product has a size

        cartItem.innerHTML = `
            <div class="product-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-details">
                <p>${item.name}</p>
                ${sizeInfo}
                <p>${item.quantity} x ₱${item.price.toFixed(2)}</p>
                <button onclick="removeItem('${item.name}')">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}
