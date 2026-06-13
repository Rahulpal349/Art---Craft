const fs = require('fs');
const path = 'client/css/style.css';

let content = fs.readFileSync(path, 'utf8');

const search_str = `.checkout-steps .step.active {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.5rem;
}`;

const missing_css = `

.checkout-form .form-group {
    margin-bottom: 1.5rem;
}

.checkout-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.checkout-form label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
}

.checkout-form input[type="text"],
.checkout-form input[type="email"],
.checkout-form input[type="tel"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #cbd5e1;
    border-radius: var(--radius);
    font-family: var(--font-body);
}

.payment-method {
    border: 1px solid #cbd5e1;
    border-radius: var(--radius);
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
    .navbar { flex-wrap: wrap; }
    .nav-links { 
        display: flex; 
        width: 100%; 
        order: 3; 
        margin-top: 1rem; 
        overflow-x: auto; 
        padding-bottom: 0.5rem; 
        justify-content: flex-start;
        -webkit-overflow-scrolling: touch;
    }
    .nav-links::-webkit-scrollbar { display: none; }
    .hero h1 { font-size: 2.5rem; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .usp-section { flex-direction: column; gap: 2rem; }
    
    .shop-layout { grid-template-columns: 1fr; gap: 2rem; }
    .product-detail-layout { grid-template-columns: 1fr; gap: 2rem; }
    .product-gallery .main-image { height: 350px; }
    .cart-layout { grid-template-columns: 1fr; gap: 2rem; }
    .checkout-form .form-row { grid-template-columns: 1fr; gap: 0; }
}

/* =========================================
   AUTHENTICATION PAGES
   ========================================= */

.auth-wrapper {
    min-height: 100vh;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
}

.auth-logo-text {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--text);
    text-decoration: none;
    margin-bottom: 3rem;
}

.auth-card {
    background: var(--white);
    width: 100%;
    max-width: 440px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(30, 58, 95, 0.05);
    padding: 3rem 2.5rem;
    position: relative;
}

.auth-card-header {
    text-align: center;
    margin-bottom: 2.5rem;
}`;

// Normalise
content = content.replace(/\r\n/g, '\n');
const searchNormal = search_str.replace(/\r\n/g, '\n');
const missingNormal = missing_css.replace(/\r\n/g, '\n');

if (content.includes(searchNormal)) {
    content = content.replace(searchNormal, searchNormal + missingNormal);
    fs.writeFileSync(path, content, 'utf8');
    console.log("FIXED");
} else {
    console.log("COULD NOT FIND SEARCH STRING");
}
