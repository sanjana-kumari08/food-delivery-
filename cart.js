document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Add product to the cart
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - $${productPrice}`;
            cartItemsList.appendChild(listItem);

            // Update total price
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});
