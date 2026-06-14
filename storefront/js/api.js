// Initialize Supabase Client
const SUPABASE_URL = 'https://jsurpluwwqrujaohbatc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gBq5FXF-Q7VQ61yY9pXXDA_wR31BUwA';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Fetch all products from the Supabase database
 */
async function fetchProducts() {
    try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching products from Supabase:', error);
        return [];
    }
}

/**
 * Initialize products on the shop/home page
 */
async function loadProductsToGrid(gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    // Show loading state
    grid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Loading products...</p>';

    const products = await fetchProducts();

    if (products.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">No products found.</p>';
        return;
    }

    grid.innerHTML = ''; // Clear loading

    products.forEach(product => {
        const placeholderImg = product.image 
            ? `<img src="${product.image}" alt="${product.name}" onerror="this.src='assets/images/placeholder.jpg'">`
            : 'Image Placeholder';
        
        const cardHTML = `
            <div class="product-card">
                <a href="product.html?id=${product.id}">
                    <div class="product-img">${placeholderImg}</div>
                </a>
                <div class="product-info">
                    <a href="product.html?id=${product.id}">
                        <h3>${product.name}</h3>
                    </a>
                    <p class="product-price">₹${product.price}</p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center;">
                        <button class="btn btn-primary" style="flex: 1;" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, 1)">Add to Cart</button>
                        <button class="wishlist-btn">♡</button>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function getCart() {
    return JSON.parse(localStorage.getItem('art_craft_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('art_craft_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadges = document.querySelectorAll('.nav-icons a[href="cart.html"] span');
    cartBadges.forEach(badge => {
        badge.innerText = `(${count})`;
    });
}

function showToast(message) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none;';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.innerText = message;
    toast.style.cssText = 'background: #1E3A5F; color: white; padding: 12px 24px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); opacity: 0; transform: translateY(20px); transition: opacity 0.3s ease, transform 0.3s ease; font-family: var(--font-body, sans-serif); font-size: 0.9rem; pointer-events: auto;';
    
    toastContainer.appendChild(toast);

    // Trigger animation in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

window.addToCart = function(productId, name, price, quantity = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += parseInt(quantity);
    } else {
        cart.push({ id: productId, name: name || `Product ${productId}`, price: price || 0, quantity: parseInt(quantity) });
    }
    
    saveCart(cart);
    showToast(`${name || 'Product'} added to cart!`);
}

window.updateQuantity = function(productId, delta) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += delta;
        if (existing.quantity <= 0) {
            existing.quantity = 1; // Minimum 1, use remove to delete
        }
        saveCart(cart);
        if (typeof renderCart === 'function') renderCart();
    }
}

window.removeFromCart = function(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
}

window.renderCart = function() {
    const cartContainer = document.querySelector('.cart-items');
    const orderSummary = document.querySelector('.order-summary');
    if (!cartContainer) return;

    const cart = getCart();
    
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="padding: 2rem 0;">Your cart is currently empty.</p>';
        if (orderSummary) {
            orderSummary.querySelector('.summary-row:nth-of-type(1) span:last-child').innerText = '₹0';
            orderSummary.querySelector('.summary-total span:last-child').innerText = '₹0';
        }
    } else {
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            
            const itemHTML = `
                <div class="cart-item">
                    <div class="cart-item-img" style="background: #cbd5e1; border-radius: 4px;"></div>
                    <div class="cart-item-details">
                        <div style="display: flex; justify-content: space-between;">
                            <h3>${item.name}</h3>
                            <span style="font-weight: 600;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        </div>
                        <p style="color: #64748b; font-size: 0.85rem; margin-top: 0.25rem;">Unit Price: ₹${item.price.toLocaleString('en-IN')}</p>
                        <div class="cart-item-actions">
                            <div class="quantity-selector">
                                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                                <input type="text" value="${item.quantity}" readonly>
                                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `;
            cartContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        if (orderSummary) {
            orderSummary.querySelector('.summary-row:nth-of-type(1) span:last-child').innerText = `₹${subtotal.toLocaleString('en-IN')}`;
            orderSummary.querySelector('.summary-total span:last-child').innerText = `₹${subtotal.toLocaleString('en-IN')}`;
        }
    }

    cartContainer.insertAdjacentHTML('beforeend', '<a href="collections.html" style="display: inline-block; margin-top: 1rem; color: var(--secondary); font-weight: 500;">← Continue Shopping</a>');
}

// Run on page load if element exists
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    if (document.getElementById('shop-grid')) {
        loadProductsToGrid('shop-grid');
    } else if (document.getElementById('featured-products')) {
        loadProductsToGrid('featured-products');
    }
    
    if (document.querySelector('.cart-items')) {
        renderCart();
    }
});