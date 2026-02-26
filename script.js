const products = [
    {
        id: 1,
        name: "Modified Smart TV Box",
        designer: "Tech Upgrade Hub",
        category: "electronics",
        price: 4200,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&h=600&fit=crop",
        description: "Custom-configured TV box with optimized apps, streaming setup, and performance tweaks.",
        rating: 5,
        quantity: "1 configured unit",
        origin: "Nairobi tech lab",
        purity: "100% tested setup",
        inStock: true
    },
    {
        id: 2,
        name: "Custom Printed T-Shirt",
        designer: "Street Print Studio",
        category: "fashion",
        price: 1500,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
        description: "Premium cotton T-shirt with your logo, brand, event text, or custom artwork.",
        rating: 5,
        quantity: "Single print piece",
        origin: "Nairobi print workshop",
        purity: "100% print quality",
        inStock: true
    },
    {
        id: 3,
        name: "Custom Perfume Blend",
        designer: "Signature Scent Bar",
        category: "beauty",
        price: 2600,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop",
        description: "Personalized fragrance blended to your preferred scent notes for daily or event use.",
        rating: 4.5,
        quantity: "50ml bottle",
        origin: "Nairobi fragrance studio",
        purity: "100% skin-safe blend",
        inStock: true
    },
    {
        id: 4,
        name: "Custom Hoodie Print",
        designer: "Urban Stitch Lab",
        category: "fashion",
        price: 3200,
        image: "https://images.unsplash.com/photo-1556821840-3a9fbcf5f2f8?w=500&h=600&fit=crop",
        description: "Warm hoodie with front or back custom print for schools, teams, brands, and creators.",
        rating: 4.5,
        quantity: "Single print piece",
        origin: "Kenyan apparel studio",
        purity: "100% print quality",
        inStock: true
    },
    {
        id: 5,
        name: "Custom Wall Art Frame Set",
        designer: "HomeStyle Prints",
        category: "home",
        price: 3500,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=600&fit=crop",
        description: "Personalized wall art frames with your text, family names, or brand message.",
        rating: 5,
        quantity: "3-piece set",
        origin: "Local decor studio",
        purity: "100% print finish",
        inStock: true
    },
    {
        id: 6,
        name: "Custom Team Training Jersey",
        designer: "Athlete Print House",
        category: "sports",
        price: 2300,
        image: "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=500&h=600&fit=crop",
        description: "Custom sports jersey with names, numbers, club logos, and team colors.",
        rating: 4.5,
        quantity: "Single jersey",
        origin: "Sports print unit",
        purity: "100% durable print",
        inStock: true
    },
    {
        id: 7,
        name: "Modified Fitness Resistance Kit",
        designer: "Sport Gear Lab",
        category: "sports",
        price: 3100,
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=600&fit=crop",
        description: "Upgraded resistance training kit customized for home, gym, or athlete routines.",
        rating: 5,
        quantity: "Full kit",
        origin: "Performance workshop",
        purity: "100% tested quality",
        inStock: true
    },
    {
        id: 8,
        name: "Personalized Skincare Kit",
        designer: "Glow Lab Kenya",
        category: "beauty",
        price: 3200,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=600&fit=crop",
        description: "Custom skincare pack selected by skin type, goals, and daily routine.",
        rating: 4,
        quantity: "4-product kit",
        origin: "Beauty formulation lab",
        purity: "100% skin-friendly",
        inStock: true
    },
    {
        id: 9,
        name: "Modified Kitchen Organizer Rack",
        designer: "SmartHome Fixers",
        category: "home",
        price: 2800,
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&h=600&fit=crop",
        description: "Customized storage rack designed to fit your kitchen space and item sizes.",
        rating: 5,
        quantity: "1 rack set",
        origin: "Home utility workshop",
        purity: "100% durable finish",
        inStock: true
    },
    {
        id: 10,
        name: "Custom Sofa Cushion Covers",
        designer: "Interior Stitch Works",
        category: "home",
        price: 2400,
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=600&fit=crop",
        description: "Made-to-order cushion covers with your preferred fabric, color, and pattern style.",
        rating: 4.5,
        quantity: "4-piece cover set",
        origin: "Nairobi tailoring unit",
        purity: "100% tailored fit",
        inStock: true
    },
    {
        id: 11,
        name: "Custom Gaming Controller Mod",
        designer: "Console Mod Garage",
        category: "electronics",
        price: 3800,
        image: "https://images.unsplash.com/photo-1592840062661-a954f2338dad?w=500&h=600&fit=crop",
        description: "Controller customized for grip, button response, and personal gaming style.",
        rating: 4,
        quantity: "1 modified controller",
        origin: "Game hardware bench",
        purity: "100% performance tested",
        inStock: true
    },
    {
        id: 12,
        name: "Custom Cap & Jersey Bundle",
        designer: "Team Wear Pro",
        category: "fashion",
        price: 6800,
        image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=500&h=600&fit=crop",
        description: "Bundle for clubs and teams: custom printed caps and jerseys with names, numbers, and logos.",
        rating: 5,
        quantity: "4-piece custom set",
        origin: "Made in Kenya",
        purity: "100% print quality",
        inStock: true
    }
];

const SHIPPING_FEE = 300;
const PRODUCTS_PER_PAGE = 10;
let cart = [];
let currentProduct = null;
let heroSlideIndex = 0;
let heroSlideTimer = null;
let currentPage = 1;

function formatPrice(amount) {
    return `KES ${Number(amount).toLocaleString("en-KE")}`;
}

function formatRating(rating) {
    const full = Math.floor(rating);
    return `${"*".repeat(full)}${rating % 1 ? " 1/2" : ""}`;
}

document.addEventListener("DOMContentLoaded", function () {
    setupEventListeners();
    refreshProducts();
    setupHeroSlider();
    updateCart();
    console.log("Storefront loaded with nostalgia products in KES.");
});

function setupEventListeners() {
    const cartBtn = document.getElementById("cart-btn");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartClose = document.querySelector(".cart-close");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("primary-nav") || document.querySelector(".nav-menu");
    const filterToggleBtn = document.getElementById("filter-toggle-btn");
    const filterPanel = document.getElementById("shop-filters-panel");
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const priceFilter = document.getElementById("price-filter");
    const sortFilter = document.getElementById("sort-filter");
    const modalClose = document.querySelector(".modal-close");
    const productModal = document.getElementById("product-modal");
    const qtyPlus = document.getElementById("qty-plus");
    const qtyMinus = document.getElementById("qty-minus");
    const addToCartBtn = document.getElementById("add-to-cart-btn");

    const closeMobileMenu = function () {
        if (!mobileMenuBtn || !navMenu) return;
        navMenu.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
    };

    const closeFilterPanel = function () {
        if (!filterToggleBtn || !filterPanel) return;
        filterPanel.setAttribute("hidden", "");
        filterToggleBtn.setAttribute("aria-expanded", "false");
        filterToggleBtn.setAttribute("aria-label", "Open filters");
    };

    if (cartBtn) cartBtn.addEventListener("click", toggleCart);
    if (cartOverlay) cartOverlay.addEventListener("click", toggleCart);
    if (cartClose) cartClose.addEventListener("click", toggleCart);

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");
            mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) closeMobileMenu();
            });
        });
    }

    if (filterToggleBtn && filterPanel) {
        filterToggleBtn.addEventListener("click", function () {
            const isHidden = filterPanel.hasAttribute("hidden");
            if (isHidden) {
                filterPanel.removeAttribute("hidden");
                filterToggleBtn.setAttribute("aria-expanded", "true");
                filterToggleBtn.setAttribute("aria-label", "Close filters");
            } else {
                closeFilterPanel();
            }
        });
    }

    if (searchBtn) searchBtn.addEventListener("click", toggleSearch);
    if (searchInput) {
        searchInput.addEventListener("input", handleSearch);
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeSearch();
        });
    }

    document.addEventListener("click", function (event) {
        const searchModal = document.getElementById("search-modal");
        if (searchModal && searchBtn && !searchModal.contains(event.target) && !searchBtn.contains(event.target) && searchModal.classList.contains("show")) {
            closeSearch();
        }

        if (mobileMenuBtn && navMenu && navMenu.classList.contains("open")) {
            if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                closeMobileMenu();
            }
        }

        if (filterToggleBtn && filterPanel && !filterPanel.hasAttribute("hidden")) {
            if (!filterPanel.contains(event.target) && !filterToggleBtn.contains(event.target)) {
                closeFilterPanel();
            }
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMobileMenu();
            closeFilterPanel();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) closeMobileMenu();
    });

    if (categoryFilter) categoryFilter.addEventListener("change", applyFilters);
    if (priceFilter) priceFilter.addEventListener("change", applyFilters);
    if (sortFilter) sortFilter.addEventListener("change", applyFilters);

    if (modalClose) modalClose.addEventListener("click", closeProductModal);
    
    if (productModal) {
        productModal.addEventListener("click", function (event) {
            if (event.target === this) closeProductModal();
        });
    }

    if (qtyPlus) {
        qtyPlus.addEventListener("click", function () {
            const qtyInput = document.getElementById("qty-input");
            if (!qtyInput) return;
            qtyInput.value = String(parseInt(qtyInput.value || "1", 10) + 1);
        });
    }

    if (qtyMinus) {
        qtyMinus.addEventListener("click", function () {
            const qtyInput = document.getElementById("qty-input");
            if (!qtyInput) return;
            const qty = parseInt(qtyInput.value || "1", 10);
            if (qty > 1) qtyInput.value = String(qty - 1);
        });
    }

    if (addToCartBtn) addToCartBtn.addEventListener("click", addToCartFromModal);

    document.querySelectorAll(".size-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            document.querySelectorAll(".size-btn").forEach(function (item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
}

function setupHeroSlider() {
    const slider = document.querySelector(".hero-slider");
    if (!slider) return;

    const slides = slider.querySelectorAll(".hero-slide");
    if (slides.length <= 1) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    heroSlideTimer = setInterval(function () {
        heroSlideIndex = (heroSlideIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${heroSlideIndex * 100}%)`;
    }, 4500);
}

function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle("open");
    overlay.classList.toggle("hidden");
}

function openCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");
    if (!sidebar || !overlay) return;
    sidebar.classList.add("open");
    overlay.classList.remove("hidden");
}

function closeCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");
    if (!sidebar || !overlay) return;
    sidebar.classList.remove("open");
    overlay.classList.add("hidden");
}

function toggleSearch() {
    const searchModal = document.getElementById("search-modal");
    const searchInput = document.getElementById("search-input");
    if (!searchModal || !searchInput) return;

    searchModal.classList.toggle("show");
    if (searchModal.classList.contains("show")) {
        searchInput.focus();
    } else {
        searchInput.value = "";
        currentPage = 1;
        refreshProducts();
    }
}

function closeSearch() {
    const searchModal = document.getElementById("search-modal");
    const searchInput = document.getElementById("search-input");
    if (!searchModal || !searchInput) return;
    searchModal.classList.remove("show");
    searchInput.value = "";
    currentPage = 1;
    refreshProducts();
}

function loadProducts(productsToLoad) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";
    if (productsToLoad.length === 0) {
        grid.innerHTML = '<div class="cart-empty">No memories match your filters.</div>';
        return;
    }

    productsToLoad.forEach(function (product) {
        grid.appendChild(createProductCard(product));
    });
}

function getVisiblePageNumbers(totalPages, activePage) {
    const pages = [];
    let start = Math.max(1, activePage - 2);
    let end = Math.min(totalPages, start + 4);
    start = Math.max(1, end - 4);

    for (let page = start; page <= end; page += 1) {
        pages.push(page);
    }
    return pages;
}

function renderPagination(totalItems) {
    const pagination = document.getElementById("products-pagination");
    if (!pagination) return;

    const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);
    if (totalPages <= 1) {
        pagination.innerHTML = "";
        return;
    }

    const pageButtons = getVisiblePageNumbers(totalPages, currentPage).map(function (page) {
        const activeClass = page === currentPage ? " active" : "";
        const currentAttr = page === currentPage ? ' aria-current="page"' : "";
        return `<button class="pagination-btn${activeClass}" data-page="${page}" aria-label="Page ${page}"${currentAttr}>${page}</button>`;
    }).join("");

    pagination.innerHTML = `
        <button class="pagination-btn" data-action="prev" aria-label="Previous page" ${currentPage === 1 ? "disabled" : ""}>Prev</button>
        ${pageButtons}
        <button class="pagination-btn" data-action="next" aria-label="Next page" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    `;

    pagination.querySelectorAll(".pagination-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            if (this.disabled) return;

            const action = this.dataset.action;
            if (action === "prev") {
                currentPage = Math.max(1, currentPage - 1);
            } else if (action === "next") {
                currentPage = Math.min(totalPages, currentPage + 1);
            } else {
                currentPage = Number(this.dataset.page) || 1;
            }

            refreshProducts();
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    const stockStatus = product.inStock
        ? '<span class="stock-badge in-stock">In Stock</span>'
        : '<span class="stock-badge out-stock">Out of Stock</span>';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${stockStatus}
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-hint">Tap to view details</div>
        </div>
    `;

    card.addEventListener("click", function () {
        openProductModal(product);
    });

    return card;
}

function openProductModal(product) {
    const modal = document.getElementById("product-modal");
    if (!modal) return;

    currentProduct = product;
    const image = document.getElementById("modal-product-image");
    const name = document.getElementById("modal-product-name");
    const designer = document.getElementById("modal-product-designer");
    const description = document.getElementById("modal-product-description");
    const price = document.getElementById("modal-product-price");
    const rating = document.getElementById("modal-product-rating");
    const stock = document.getElementById("modal-spec-stock");
    const qtyInput = document.getElementById("qty-input");

    if (image) image.src = product.image;
    if (name) name.textContent = product.name;
    if (designer) designer.textContent = product.designer;
    if (description) description.textContent = product.description;
    if (price) price.textContent = formatPrice(product.price);
    if (rating) rating.textContent = formatRating(product.rating);
    if (stock) stock.textContent = product.inStock ? "In Stock" : "Out of Stock";
    if (qtyInput) qtyInput.value = "1";

    modal.classList.remove("hidden");
    document.querySelectorAll(".size-btn").forEach(function (button) {
        button.classList.remove("active");
    });
    const firstPackage = document.querySelector(".size-btn");
    if (firstPackage) firstPackage.classList.add("active");
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    if (modal) modal.classList.add("hidden");
}

function addToCartFromModal() {
    if (!currentProduct) return;
    if (!currentProduct.inStock) {
        alert("This memory pack is currently out of stock.");
        return;
    }

    const qtyInput = document.getElementById("qty-input");
    const quantity = qtyInput ? parseInt(qtyInput.value || "1", 10) : 1;
    const packageType = document.querySelector(".size-btn.active")?.textContent || "Single";
    addToCart(currentProduct, quantity, packageType);
    closeProductModal();
}

function addToCart(product, quantity, packageType) {
    const existingItem = cart.find(function (item) {
        return item.id === product.id && item.packageType === packageType;
    });

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity,
            packageType
        });
    }

    updateCart();
    openCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    if (!cartItemsContainer || !cartCount) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        cartCount.textContent = "0";
    } else {
        cartItemsContainer.innerHTML = cart.map(function (item) {
            return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-qty">Package: ${item.packageType} | Qty: ${item.quantity}</div>
                        <button class="cart-item-remove" data-id="${item.id}" data-package="${item.packageType}">Remove</button>
                    </div>
                </div>
            `;
        }).join("");

        cartItemsContainer.querySelectorAll(".cart-item-remove").forEach(function (button) {
            button.addEventListener("click", function () {
                const id = Number(this.getAttribute("data-id"));
                const packageType = this.getAttribute("data-package") || "Single";
                removeFromCart(id, packageType);
            });
        });

        const totalItems = cart.reduce(function (sum, item) {
            return sum + item.quantity;
        }, 0);
        cartCount.textContent = String(totalItems);
    }

    updateCartTotals();
}

function removeFromCart(productId, packageType) {
    cart = cart.filter(function (item) {
        return !(item.id === productId && item.packageType === packageType);
    });
    updateCart();
}

function updateCartTotals() {
    const subtotal = cart.reduce(function (total, item) {
        return total + (item.price * item.quantity);
    }, 0);
    const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;

    const subtotalEl = document.getElementById("subtotal");
    const shippingEl = document.getElementById("shipping");
    const totalEl = document.getElementById("total");

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = formatPrice(shipping);
    if (totalEl) totalEl.textContent = formatPrice(total);
}

function getFilteredProducts() {
    const category = document.getElementById("category-filter")?.value || "all";
    const priceRange = document.getElementById("price-filter")?.value || "all";
    const sortBy = document.getElementById("sort-filter")?.value || "newest";
    const searchTerm = (document.getElementById("search-input")?.value || "").trim().toLowerCase();

    let filtered = products.filter(function (product) {
        const categoryMatch = category === "all" || product.category === category;
        const searchMatch =
            searchTerm === "" ||
            product.name.toLowerCase().includes(searchTerm) ||
            product.designer.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);

        let priceMatch = true;
        if (priceRange === "0-1000") priceMatch = product.price <= 1000;
        else if (priceRange === "1000-3000") priceMatch = product.price > 1000 && product.price <= 3000;
        else if (priceRange === "3000-6000") priceMatch = product.price > 3000 && product.price <= 6000;
        else if (priceRange === "6000+") priceMatch = product.price > 6000;

        return categoryMatch && priceMatch && searchMatch;
    });

    if (sortBy === "price-low") {
        filtered.sort(function (a, b) { return a.price - b.price; });
    } else if (sortBy === "price-high") {
        filtered.sort(function (a, b) { return b.price - a.price; });
    } else if (sortBy === "popular") {
        filtered.sort(function (a, b) { return b.rating - a.rating; });
    } else {
        filtered.sort(function (a, b) { return b.id - a.id; });
    }

    return filtered;
}

function applyFilters() {
    currentPage = 1;
    refreshProducts();
}

function refreshProducts() {
    const filteredProducts = getFilteredProducts();
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const visibleProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    loadProducts(visibleProducts);
    renderPagination(filteredProducts.length);
    generateProductStructuredData(filteredProducts);
}

function handleSearch() {
    currentPage = 1;
    refreshProducts();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const subtotal = cart.reduce(function (sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);
    const shipping = SHIPPING_FEE;
    const total = subtotal + shipping;

    alert(
        `Order Summary\n\nItems: ${cart.length}\nSubtotal: ${formatPrice(subtotal)}\nShipping: ${formatPrice(shipping)}\nTotal: ${formatPrice(total)}\n\nThank you for shopping memories at KENYANSONLY.`
    );

    cart = [];
    updateCart();
    closeCart();
}

function generateProductStructuredData(filteredProducts) {
    const items = (filteredProducts || []).map(function (product, index) {
        return {
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://kenyansonly.com/#product-${product.id}`,
            "name": product.name
        };
    });

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Featured Memories",
        "url": "https://kenyansonly.com/#shop",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": items,
            "numberOfItems": items.length
        }
    };

    let scriptTag = document.querySelector('script[data-type="collection-data"]');
    if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        scriptTag.setAttribute("data-type", "collection-data");
        document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
}

// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("back-to-top");
    
    if (!backToTopBtn) return;

    // Show button when user scrolls down
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
