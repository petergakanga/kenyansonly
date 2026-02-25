// Product Database
const products = [
    {
        id: 1,
        name: "Red Ant Colony",
        designer: "Premium Grade",
        category: "insects",
        price: 45,
        image: "download (47).jpg",
        description: "Live red ant colony with queen. Hardy species suitable for ant keeping enthusiasts.",
        rating: 5,
        quantity: "500-1000 workers",
        origin: "Brazil",
        purity: "100%",
        inStock: true
    },
    {
        id: 2,
        name: "Beetle Larvae Pack",
        designer: "Farm Fresh",
        category: "insects",
        price: 32,
        image: "images (18).jpg",
        description: "Nutritious mealworm larvae. Perfect for reptile food and fishing bait.",
        rating: 5,
        quantity: "2000 larvae",
        origin: "Netherlands",
        purity: "100%",
        inStock: true
    },
    {
        id: 3,
        name: "Organic Urine Concentrate",
        designer: "Premium Extract",
        category: "biologicals",
        price: 85,
        image: "images (19).jpg",
        description: "Concentrated organic biological concentrate. Laboratory tested and sterilized.",
        rating: 4.5,
        quantity: "1L Bottle",
        origin: "Germany",
        purity: "99.9%",
        inStock: true
    },
    {
        id: 4,
        name: "Dung Beetle Collection",
        designer: "Scarab Series",
        category: "insects",
        price: 120,
        image: "images (20).jpg",
        description: "Adult dung beetles. Excellent for composting systems and natural pest control.",
        rating: 5,
        quantity: "10 specimens",
        origin: "Africa",
        purity: "100%",
        inStock: false
    },
    {
        id: 5,
        name: "Honeybee Colony",
        designer: "Premium Hive",
        category: "insects",
        price: 165,
        image: "images (21).jpg",
        description: "Full honeybee colony with queen. Includes hive box and starter equipment.",
        rating: 5,
        quantity: "10,000 bees",
        origin: "Canada",
        purity: "100%",
        inStock: true
    },
    {
        id: 6,
        name: "Cricket Culture",
        designer: "Live Feed",
        category: "insects",
        price: 28,
        image: "https://images.unsplash.com/photo-1539533057440-7814bae64d4e?w=500&h=600&fit=crop",
        description: "Nutritious live crickets for reptile feeding. Quick delivery available.",
        rating: 4.5,
        quantity: "500 crickets",
        origin: "USA",
        purity: "100%",
        inStock: true
    },
    {
        id: 7,
        name: "Butterfly Pupae Set",
        designer: "Metamorphosis Kit",
        category: "insects",
        price: 35,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop",
        description: "Pre-pupae butterflies ready to emerge. Educational and beautiful.",
        rating: 5,
        quantity: "10 pupae",
        origin: "Costa Rica",
        purity: "100%",
        inStock: true
    },
    {
        id: 8,
        name: "Silkworm Larvae",
        designer: "Silk Production",
        category: "insects",
        price: 42,
        image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop",
        description: "Live silkworm larvae for silk production or educational purposes.",
        rating: 4.5,
        quantity: "100 larvae",
        origin: "China",
        purity: "100%",
        inStock: true
    },
    {
        id: 9,
        name: "Roach Colony",
        designer: "Madagascar Hissers",
        category: "insects",
        price: 55,
        image: "https://images.unsplash.com/photo-1596215174519-e597dc86e8b7?w=500&h=600&fit=crop",
        description: "Madagascar hissing roaches. Docile and popular for exotic pets.",
        rating: 5,
        quantity: "20 specimens",
        origin: "Madagascar",
        purity: "100%",
        inStock: true
    },
    {
        id: 10,
        name: "Biological Serum Extract",
        designer: "Lab Certified",
        category: "biologicals",
        price: 150,
        image: "https://images.unsplash.com/photo-1548690596-b8d985ab2e6d?w=500&h=600&fit=crop",
        description: "Certified biological serum. Sterile filtered, ready for use.",
        rating: 5,
        quantity: "500ml",
        origin: "Switzerland",
        purity: "99.9%",
        inStock: true
    },
    {
        id: 11,
        name: "Beetle Specimen Pack",
        designer: "Premium Collection",
        category: "insects",
        price: 95,
        image: "https://images.unsplash.com/photo-1591047990852-515e8b44e7b1?w=500&h=600&fit=crop",
        description: "Assorted premium beetle specimens. Ideal for collectors and researchers.",
        rating: 5,
        quantity: "25 specimens",
        origin: "Indonesia",
        purity: "100%",
        inStock: true
    },
    {
        id: 12,
        name: "Ant Farm Starter Kit",
        designer: "Complete Setup",
        category: "insects",
        price: 78,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=600&fit=crop",
        description: "Everything needed to start your ant farming journey. Includes habitat and culture medium.",
        rating: 5,
        quantity: "1 kit + colonies",
        origin: "Germany",
        purity: "100%",
        inStock: true
    }
];

// Shopping Cart
let cart = [];
let currentProduct = null;
let heroSlideIndex = 0;
let heroSlideTimer = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    refreshProducts();
    setupEventListeners();
    setupHeroSlider();
});

// Event Listeners Setup
function setupEventListeners() {
    // Cart button
    document.getElementById('cart-btn').addEventListener('click', toggleCart);
    document.getElementById('cart-overlay').addEventListener('click', toggleCart);
    document.querySelector('.cart-close').addEventListener('click', toggleCart);

    // Search
    document.getElementById('search-btn').addEventListener('click', toggleSearch);
    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('search-input').addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSearch();
    });
    document.addEventListener('click', function(e) {
        const searchModal = document.getElementById('search-modal');
        const searchBtn = document.getElementById('search-btn');
        if (!searchModal.contains(e.target) && !searchBtn.contains(e.target) && searchModal.classList.contains('show')) {
            closeSearch();
        }
    });

    // Filters
    document.getElementById('category-filter').addEventListener('change', applyFilters);
    document.getElementById('price-filter').addEventListener('change', applyFilters);
    document.getElementById('sort-filter').addEventListener('change', applyFilters);

    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeProductModal);
    document.getElementById('product-modal').addEventListener('click', function(e) {
        if (e.target === this) closeProductModal();
    });

    // Quantity controls
    document.getElementById('qty-plus').addEventListener('click', function() {
        document.getElementById('qty-input').value = parseInt(document.getElementById('qty-input').value) + 1;
    });

    document.getElementById('qty-minus').addEventListener('click', function() {
        let qty = parseInt(document.getElementById('qty-input').value);
        if (qty > 1) document.getElementById('qty-input').value = qty - 1;
    });

    // Add to cart from modal
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCartFromModal);

    // Size selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Hero Slider
function setupHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    heroSlideTimer = setInterval(() => {
        heroSlideIndex = (heroSlideIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${heroSlideIndex * 100}%)`;
    }, 4500);
}

// Toggle Cart Sidebar
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('hidden');
}

// Toggle Search
function toggleSearch() {
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');

    searchModal.classList.toggle('show');
    if (searchModal.classList.contains('show')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        refreshProducts();
    }
}

// Close Search
function closeSearch() {
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');

    searchModal.classList.remove('show');
    searchInput.value = '';
    refreshProducts();
}

// Load Products
function loadProducts(productsToLoad) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    productsToLoad.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    const stockStatus = product.inStock ? '<span class="stock-badge in-stock">In Stock</span>' : '<span class="stock-badge out-stock">Out of Stock</span>';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${stockStatus}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-designer">${product.designer}</div>
            <div class="product-specs">
                <div class="spec"><strong>Qty:</strong> ${product.quantity}</div>
                <div class="spec"><strong>Origin:</strong> ${product.origin}</div>
                <div class="spec"><strong>Purity:</strong> ${product.purity}</div>
            </div>
            <div class="product-price">$${product.price.toLocaleString()}</div>
            <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</div>
        </div>
    `;
    
    card.addEventListener('click', () => openProductModal(product));
    return card;
}

// Open Product Modal
function openProductModal(product) {
    currentProduct = product;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-designer').textContent = product.designer;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-price').textContent = `$${product.price.toLocaleString()}`;
    document.getElementById('modal-product-rating').textContent = '★'.repeat(Math.floor(product.rating));
    
    // Set product specs
    document.getElementById('modal-spec-quantity').textContent = product.quantity;
    document.getElementById('modal-spec-origin').textContent = product.origin;
    document.getElementById('modal-spec-purity').textContent = product.purity;
    document.getElementById('modal-spec-stock').textContent = product.inStock ? '✓ In Stock' : 'Out of Stock';
    
    document.getElementById('qty-input').value = 1;
    document.getElementById('product-modal').classList.remove('hidden');
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.size-btn').classList.add('active');
}

// Close Product Modal
function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
}

// Add to Cart from Modal
function addToCartFromModal() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('qty-input').value);
    const size = document.querySelector('.size-btn.active')?.textContent || 'M';
    
    addToCart(currentProduct, quantity, size);
    closeProductModal();
}

// Add to Cart
function addToCart(product, quantity, size) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            size: size
        });
    }
    
    updateCart();
    toggleCart();
}

// Update Cart Display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        cartCount.textContent = '0';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                    <div class="cart-item-qty">Size: ${item.size} | Qty: ${item.quantity}</div>
                    <div class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</div>
                </div>
            </div>
        `).join('');
        
        cartCount.textContent = cart.length;
    }
    
    updateCartTotals();
}

// Remove from Cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCart();
}

// Update Cart Totals
function updateCartTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 50 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Return products matching search + filters + sort
function getFilteredProducts() {
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const sortBy = document.getElementById('sort-filter').value;
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    
    let filtered = products.filter(product => {
        const categoryMatch = category === 'all' || product.category === category;
        let priceMatch = true;
        const searchMatch =
            searchTerm === '' ||
            product.name.toLowerCase().includes(searchTerm) ||
            product.designer.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        if (priceRange !== 'all') {
            if (priceRange === '0-500') priceMatch = product.price <= 500;
            else if (priceRange === '500-1000') priceMatch = product.price > 500 && product.price <= 1000;
            else if (priceRange === '1000-5000') priceMatch = product.price > 1000 && product.price <= 5000;
            else if (priceRange === '5000+') priceMatch = product.price > 5000;
        }
        
        return categoryMatch && priceMatch && searchMatch;
    });
    
    // Sort
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
}

// Apply Filters
function applyFilters() {
    refreshProducts();
}

function refreshProducts() {
    loadProducts(getFilteredProducts());
}

// Search Handler
function handleSearch() {
    refreshProducts();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Order Summary\n\nItems: ${cart.length}\nTotal: $${total.toLocaleString()}\n\nThank you for shopping at KENYANSONLY!\n\nProceeding to secure checkout...`);
    
    // Clear cart after checkout
    cart = [];
    updateCart();
    toggleCart();
}


