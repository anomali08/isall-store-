let cart = [];

function addToCart(diamond, price) {
    cart.push({ diamond, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Belum ada barang di keranjang.</p>';
    } else {
        let cartHtml = '<ul>';
        let total = 0;
        cart.forEach(item => {
            cartHtml += `<li>${item.diamond} - Rp ${item.price}</li>`;
            total += item.price;
        });
        cartHtml += `</ul><p>Total: Rp ${total}</p>`;
        cartItems.innerHTML = cartHtml;
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
    } else {
        alert('Pembayaran sedang diproses!');
        // Proses checkout dan pembayaran bisa disertakan di sini
    }
}

