// ===== MTOOLS STORE - HACKING THEME =====

// ===== PRODUCTS DATA =====
const products = [
    // Android Products
    {
        id: 1,
        name: "Android RAT Pro",
        desc: "أداة اختبار أمني متقدمة للأندرويد مع تحكم كامل عن بعد وواجهة احترافية",
        price: 49.99,
        oldPrice: null,
        category: "android",
        icon: "fa-solid fa-mobile-screen-button",
        features: ["تحكم كامل", "تشفير متقدم", "واجهة سهلة"],
        discount: false
    },
    {
        id: 2,
        name: "Android Keylogger Suite",
        desc: "حزمة كاملة لرصد المدخلات واختبار أمان لوحة المفاتيح على أجهزة الأندرويد",
        price: 34.99,
        oldPrice: null,
        category: "android",
        icon: "fa-solid fa-keyboard",
        features: ["رصد المدخلات", "تقارير مفصلة", "خفي"],
        discount: false
    },
    {
        id: 3,
        name: "Android Network Sniffer",
        desc: "أداة تحليل حزم الشبكة واعتراض البيانات على شبكات الأندرويد",
        price: 29.99,
        oldPrice: null,
        category: "android",
        icon: "fa-solid fa-wifi",
        features: ["تحليل الشبكة", "اعتراض البيانات", "تصدير"],
        discount: false
    },
    {
        id: 4,
        name: "حزمة أندرويد الشاملة",
        desc: "جميع أدوات الأندرويد في حزمة واحدة بسعر مخفض - توفير 40%",
        price: 59.99,
        oldPrice: 99.99,
        category: "android",
        icon: "fa-solid fa-box-open",
        features: ["3 أدوات", "دعم فني", "تحديثات مجانية"],
        discount: true
    },

    // iPhone Products
    {
        id: 5,
        name: "iOS Exploit Framework",
        desc: "إطار عمل متقدم لاختبار ثغرات نظام iOS مع قاعدة بيانات محدثة",
        price: 59.99,
        oldPrice: null,
        category: "iphone",
        icon: "fa-brands fa-apple",
        features: ["ثغرات محدثة", "تقارير أمنية", "API متقدم"],
        discount: false
    },
    {
        id: 6,
        name: "iPhone Spyware Detector",
        desc: "كاشف برامج التجسس على الايفون مع حماية في الوقت الحقيقي",
        price: 39.99,
        oldPrice: null,
        category: "iphone",
        icon: "fa-solid fa-shield-halved",
        features: ["كشف فوري", "حماية مباشرة", "تنبيهات"],
        discount: false
    },
    {
        id: 7,
        name: "iCloud Penetration Kit",
        desc: "أدوات اختبار أمان حسابات iCloud والخدمات السحابية من Apple",
        price: 44.99,
        oldPrice: null,
        category: "iphone",
        icon: "fa-solid fa-cloud",
        features: ["اختبار iCloud", "تحليل أمني", "تقارير"],
        discount: false
    },
    {
        id: 8,
        name: "حزمة ايفون المتقدمة",
        desc: "جميع أدوات iOS في حزمة واحدة مع خصم حصري 35%",
        price: 79.99,
        oldPrice: 129.99,
        category: "iphone",
        icon: "fa-solid fa-gift",
        features: ["3 أدوات", "تحديثات سنة", "دعم 24/7"],
        discount: true
    },

    // Windows Products
    {
        id: 9,
        name: "Windows Backdoor Creator",
        desc: "أداة إنشاء واختبار الأبواب الخلفية على أنظمة ويندوز مع تشفير متعدد",
        price: 54.99,
        oldPrice: null,
        category: "windows",
        icon: "fa-brands fa-windows",
        features: ["تشفير AES", "تخطي الحماية", "متعدد الطبقات"],
        discount: false
    },
    {
        id: 10,
        name: "Windows Password Cracker",
        desc: "أداة كسر كلمات المرور واختبار قوتها على أنظمة ويندوز",
        price: 39.99,
        oldPrice: null,
        category: "windows",
        icon: "fa-solid fa-key",
        features: ["Dictionary", "Brute Force", "Rainbow Tables"],
        discount: false
    },
    {
        id: 11,
        name: "Windows Privilege Escalation",
        desc: "أداة تصعيد الصلاحيات واختبار نقاط الضعف في صلاحيات ويندوز",
        price: 44.99,
        oldPrice: null,
        category: "windows",
        icon: "fa-solid fa-user-shield",
        features: ["تصعيد صلاحيات", "استغلال ثغرات", "تقرير مفصل"],
        discount: false
    },
    {
        id: 12,
        name: "حزمة ويندوز الاحترافية",
        desc: "جميع أدوات ويندوز في حزمة واحدة مع خصم 45%",
        price: 69.99,
        oldPrice: 139.99,
        category: "windows",
        icon: "fa-solid fa-cubes",
        features: ["3 أدوات", "ترخيص مدى الحياة", "دعم فني VIP"],
        discount: true
    },

    // Extra discount bundles
    {
        id: 13,
        name: "الحزمة الماسية - كل الأدوات",
        desc: "جميع الأدوات لكل الأنظمة في حزمة واحدة ضخمة بخصم 50%",
        price: 149.99,
        oldPrice: 299.99,
        category: "bundle",
        icon: "fa-solid fa-gem",
        features: ["9+ أدوات", "كل الأنظمة", "VIP مدى الحياة"],
        discount: true
    },
    {
        id: 14,
        name: "حزمة المبتدئين",
        desc: "أفضل الأدوات للمبتدئين في مجال الأمن السيبراني بسعر مخفض",
        price: 29.99,
        oldPrice: 49.99,
        category: "bundle",
        icon: "fa-solid fa-graduation-cap",
        features: ["أدوات أساسية", "شروحات", "دعم مبتدئين"],
        discount: true
    }
];

// ===== CART STATE =====
let cart = [];

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initMatrixRain();
    initScrollEffect();
});

// ===== RENDER PRODUCTS =====
function renderProducts() {
    renderSection('allProducts', products);
    renderSection('discountProducts', products.filter(p => p.discount));
    renderSection('androidProducts', products.filter(p => p.category === 'android'));
    renderSection('iphoneProducts', products.filter(p => p.category === 'iphone'));
    renderSection('windowsProducts', products.filter(p => p.category === 'windows'));
}

function renderSection(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const categoryLabels = {
        android: 'ANDROID',
        iphone: 'iOS',
        windows: 'WINDOWS',
        bundle: 'BUNDLE'
    };

    const isInCart = cart.some(item => item.id === product.id);

    return `
        <div class="product-card" data-id="${product.id}">
            ${product.discount ? `<span class="discount-badge"><i class="fas fa-fire"></i> خصم ${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ''}
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <div class="product-category">${categoryLabels[product.category]}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-features">
                    ${product.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
                </div>
                <div class="product-bottom">
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                        $${product.price}
                    </div>
                    <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" id="btn-${product.id}" onclick="addToCart(${product.id}, event)">
                        ${isInCart
                            ? '<i class="fas fa-check"></i> <span>تم الإضافة</span>'
                            : '<i class="fas fa-cart-plus"></i> <span>أضف للسلة</span>'
                        }
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== ADD TO CART =====
function addToCart(productId, event) {
    if (event) event.stopPropagation();

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Allow adding same product multiple times (no restrictions)
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    // Update all buttons for this product
    updateButtonState(productId);

    // Update cart count with bump animation
    updateCartCount();

    // Show the add-to-cart modal
    showAddModal(product);

    // Create particle effect from button
    if (event) {
        createParticles(event.clientX, event.clientY);
    }
}

function updateButtonState(productId) {
    const buttons = document.querySelectorAll(`#btn-${productId}`);
    buttons.forEach(btn => {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fas fa-check"></i> <span>تم الإضافة</span>';
    });
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById('cartCount');
    countEl.textContent = totalItems;
    countEl.classList.remove('bump');
    void countEl.offsetWidth;
    countEl.classList.add('bump');
}

// ===== ADD TO CART MODAL =====
function showAddModal(product) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.add-modal-overlay');
    if (existingModal) existingModal.remove();

    const categoryLabels = {
        android: 'ANDROID',
        iphone: 'iOS',
        windows: 'WINDOWS',
        bundle: 'BUNDLE'
    };

    const modal = document.createElement('div');
    modal.className = 'add-modal-overlay';
    modal.innerHTML = `
        <div class="add-modal">
            <div class="add-modal-glow"></div>
            <button class="add-modal-close" onclick="closeAddModal()"><i class="fas fa-times"></i></button>
            <div class="add-modal-header">
                <div class="add-modal-icon add-modal-check visible">
                    <i class="fas fa-check"></i>
                </div>
                <h3 class="add-modal-title">تمت الإضافة بنجاح!</h3>
                <p class="add-modal-subtitle">تمت إضافة المنتج إلى سلة المشتريات</p>
            </div>
            <div class="add-modal-product">
                <div class="add-modal-product-icon">
                    <i class="${product.icon}"></i>
                </div>
                <div class="add-modal-product-info">
                    <div class="add-modal-product-name">${product.name}</div>
                    <div class="add-modal-product-cat">${categoryLabels[product.category]}</div>
                </div>
                <div class="add-modal-product-price">$${product.price}</div>
            </div>
            <div class="add-modal-terminal">
                <span style="color: #00ff41;">root@mtools:~$</span> item_added --product="${product.name}" --status=success
            </div>
            <div class="add-modal-actions">
                <button class="add-modal-btn primary" onclick="closeAddModal(); openCart();">
                    <i class="fas fa-shopping-cart"></i> عرض السلة
                </button>
                <button class="add-modal-btn secondary" onclick="closeAddModal()">
                    <i class="fas fa-arrow-right"></i> متابعة التسوق
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Trigger animation
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAddModal();
    });
}

function closeAddModal() {
    const modal = document.querySelector('.add-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 400);
    }
}

// ===== CART MODAL =====
function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = '';
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooter');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-ghost"></i>
                <p>السلة فارغة</p>
                <span>لا توجد عناصر في سلتك بعد</span>
            </div>
        `;
        footerEl.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');

    footerEl.style.display = 'block';
    updateTotal();
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }

    updateCartCount();
    renderCartItems();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartCount();
    renderCartItems();

    // Reset button state
    const buttons = document.querySelectorAll(`#btn-${productId}`);
    buttons.forEach(btn => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fas fa-cart-plus"></i> <span>أضف للسلة</span>';
    });
}

function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    showNotification('جاري تحويلك لصفحة الدفع...');
    setTimeout(() => {
        alert('شكراً لك! سيتم التواصل معك لإتمام عملية الشراء.');
    }, 1000);
}

// ===== NOTIFICATION =====
function showNotification(text) {
    const notification = document.getElementById('notification');
    const notifText = document.getElementById('notificationText');
    notifText.textContent = text || 'تمت الإضافة للسلة بنجاح!';
    notification.classList.add('active');

    setTimeout(() => {
        notification.classList.remove('active');
    }, 2500);
}

// ===== NAVIGATION =====
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Show selected section
    const target = document.getElementById(`section-${sectionName}`);
    if (target) target.classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionName) {
            link.classList.add('active');
        }
    });

    // Re-render products to update button states
    renderProducts();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// ===== SCROLL EFFECT =====
function initScrollEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== LOGIN =====
function handleLogin(event) {
    event.preventDefault();
    showNotification('جاري تسجيل الدخول...');
}

// ===== PARTICLE EFFECTS =====
function createParticles(x, y) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 8 + 4;
        const tx = (Math.random() - 0.5) * 150;
        const ty = (Math.random() - 0.5) * 150;
        particle.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? '#ff0033' : '#00ff41'};
            border-radius: 50%;
            --tx: ${tx}px;
            --ty: ${ty}px;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

// ===== MATRIX RAIN =====
function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'MTOOLS01アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ff0033';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
