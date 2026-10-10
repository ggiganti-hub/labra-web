/**
 * LABRA Pastelería Artesanal - Catálogo Interactivo & Derivador de Pedidos a WhatsApp
 * Teléfono WhatsApp: +54 9 11 7371-8584
 * Retiro: Caballito, CABA
 * Anticipación: 48 horas mínimas
 */

// Base de datos de productos oficiales (extraídos del catálogo oficial de LABRA)
const PRODUCTS = [
  {
    id: 'rogel',
    name: 'Rogel',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Finas capas de masa, ddl, frambuesas y merengue.',
    longDesc: 'Finas capas de masa, ddl, frambuesas y merengue.',
    ingredients: ['Finas capas de masa', 'Dulce de leche (ddl)', 'Frambuesas', 'Merengue'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-rogel.jpg',
    badges: ['Favorito', 'Clásico'],
    badgeType: 'badge-olive'
  },
  {
    id: 'cheesecake-clasico',
    name: 'Cheesecake',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa sucrée, crema de queso y frutos rojos.',
    longDesc: 'Masa sucrée, crema de queso y frutos rojos.',
    ingredients: ['Masa sucrée', 'Crema de queso', 'Frutos rojos'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-cheesecake.jpg',
    badges: ['Imperdible', 'Frutos Rojos'],
    badgeType: 'badge-rose'
  },
  {
    id: 'lemon-pie',
    name: 'Lemon Pie',
    category: 'tortas',
    price: 55000,
    priceDisplay: '$55.000',
    shortDesc: 'Masa sablée, crema de limón y merengue.',
    longDesc: 'Masa sablée, crema de limón y merengue.',
    ingredients: ['Masa sablée', 'Crema de limón', 'Merengue'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-lemon-pie.jpg',
    badges: ['Cítrico & Fresco'],
    badgeType: 'badge-olive'
  },
  {
    id: 'tiramisu',
    name: 'Tiramisú',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Vainillas caseras, almíbar de café y marsala, mascarpone y choco amargo.',
    longDesc: 'Vainillas caseras, almíbar de café y marsala, mascarpone y choco amargo.',
    ingredients: ['Vainillas caseras', 'Almíbar de café y marsala', 'Mascarpone', 'Chocolate amargo'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-tiramisu.jpg',
    badges: ['Café Especialidad'],
    badgeType: 'badge-olive'
  },
  {
    id: 'sablee-almendras',
    name: 'Sablée de Almendras',
    category: 'tortas',
    price: 65000,
    priceDisplay: '$65.000',
    shortDesc: 'Sablée de almendras, ddl, crema y frutos rojos.',
    longDesc: 'Sablée de almendras, ddl, crema y frutos rojos.',
    ingredients: ['Sablée de almendras', 'Dulce de leche (ddl)', 'Crema', 'Frutos rojos'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-sablee-almendras.jpg',
    badges: ['Almendras Tostadas', 'Frutos Rojos'],
    badgeType: 'badge-rose'
  },
  {
    id: 'chocotorta',
    name: 'Chocotorta',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Galletitas Chocolinas, café y crema de ddl (16x18cm).',
    longDesc: 'Galletitas Chocolinas, café y crema de ddl (16x18cm).',
    ingredients: ['Galletitas Chocolinas', 'Café', 'Crema de dulce de leche (ddl)'],
    yield: 'Formato rectangular 16 x 18 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-chocotorta.jpg',
    badges: ['Formato 16x18cm'],
    badgeType: 'badge-olive'
  },
  {
    id: 'cuchareables',
    name: 'Potes Cuchareables (250 cc)',
    category: 'cuchareables',
    price: 12000,
    priceDisplay: '$12.000',
    shortDesc: 'Potes individuales de 250 cc en 3 sabores: Chocotorta, Tiramisú y Chocolate.',
    longDesc: 'Llegó la nueva línea de postres cuchareables a LABRA. Pensados para tener siempre a mano.\nClásicos favoritos, ahora en formato 250cc en las siguientes presentaciones:\n\nChocotorta: El clásico que no falla.\nTiramisú: Con vainillas caseras, hechas por nosotros.\nChocolate: Receta especial Labra.',
    ingredients: [],
    yield: 'Formato individual de 250 cc',
    storage: 'Conservar refrigerado en heladera hasta 4 días.',
    image: 'assets/images/products/cuchareables-01-presentacion.jpg',
    images: [
      {
        src: 'assets/images/products/cuchareables-01-presentacion.jpg',
        label: 'Los 3 Sabores',
        desc: 'Trío completo (250 cc c/u)',
        flavorDesc: 'Llegó la nueva línea de postres cuchareables a LABRA. Pensados para tener siempre a mano.\nClásicos favoritos, ahora en formato 250cc en las siguientes presentaciones:\n\nChocotorta: El clásico que no falla.\nTiramisú: Con vainillas caseras, hechas por nosotros.\nChocolate: Receta especial Labra.',
        flavorIngredients: null,
        flavorYield: 'Formato individual de 250 cc'
      },
      {
        src: 'assets/images/products/cuchareables-02-chocotorta.jpg',
        label: 'Chocotorta',
        desc: 'Galletitas Chocolinas y crema de DDL (250 cc)',
        flavorDesc: 'Galletitas Chocolinas, café y crema de ddl (16x18cm).',
        flavorIngredients: [
          'Galletitas Chocolinas',
          'Café',
          'Crema de dulce de leche (ddl)'
        ],
        flavorYield: 'Pote individual de 250 cc · Sabor Chocotorta'
      },
      {
        src: 'assets/images/products/cuchareables-03-tiramisu.jpg',
        label: 'Tiramisú',
        desc: 'Vainillas, queso mascarpone y cacao (250 cc)',
        flavorDesc: 'Vainillas caseras, almíbar de café y marsala, mascarpone y choco amargo.',
        flavorIngredients: [
          'Vainillas caseras',
          'Almíbar de café y marsala',
          'Mascarpone',
          'Chocolate amargo'
        ],
        flavorYield: 'Pote individual de 250 cc · Sabor Tiramisú'
      },
      {
        src: 'assets/images/products/cuchareables-04-chocolate.jpg',
        label: 'Chocolate',
        desc: 'Bizcocho húmedo de chocolate y DDL (250 cc)',
        flavorDesc: 'Bizcocho húmedo de choco amargo y crema de ddl.',
        flavorIngredients: [
          'Bizcocho húmedo de chocolate amargo',
          'Crema de dulce de leche (ddl)',
          'Chocolate amargo'
        ],
        flavorYield: 'Pote individual de 250 cc · Sabor Chocolate'
      }
    ],
    badges: ['¡Nuevo!', '250 cc', '3 Sabores'],
    badgeType: 'badge-olive'
  },
  {
    id: 'brownie',
    name: 'Brownie',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Brownie con nueces, ddl y merengue.',
    longDesc: 'Brownie con nueces, ddl y merengue.',
    ingredients: ['Brownie con nueces', 'Dulce de leche (ddl)', 'Merengue'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-brownie.jpg',
    badges: ['Con Nueces', 'Chocolate'],
    badgeType: 'badge-olive'
  },
  {
    id: 'maracuya-pie',
    name: 'Maracuyá Pie',
    category: 'tortas',
    price: 65000,
    priceDisplay: '$65.000',
    shortDesc: 'Masa sablée, crema de maracuyá, coulis de maracuyá y merengue.',
    longDesc: 'Masa sablée, crema de maracuyá, coulis de maracuyá y merengue.',
    ingredients: ['Masa sablée', 'Crema de maracuyá', 'Coulis de maracuyá', 'Merengue'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-maracuya.jpg',
    badges: ['Tropical & Fresco'],
    badgeType: 'badge-rose'
  },
  {
    id: 'manzana-especiada',
    name: 'Manzana Especiada',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa especiada, manzanas y crumble.',
    longDesc: 'Masa especiada, manzanas y crumble.',
    ingredients: ['Masa especiada', 'Manzanas', 'Crumble'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-manzana.jpg',
    badges: ['Crumble Crocante'],
    badgeType: 'badge-olive'
  },
  {
    id: 'cheesecake-keto',
    name: 'Cheesecake Keto',
    category: 'keto',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Crema de queso y frutos rojos (sin harinas ni azúcar agregada).',
    longDesc: 'Crema de queso y frutos rojos (sin harinas ni azúcar agregada).',
    ingredients: ['Crema de queso', 'Frutos rojos (sin harinas ni azúcar agregada)'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-cheesecake-keto.jpg',
    badges: ['Sin Harinas', 'Sin Azúcar Agregada', 'Keto Friendly'],
    badgeType: 'badge-keto'
  },
  {
    id: 'vasitos-chocotorta',
    name: 'Vasitos Chocotorta (Caja x 25)',
    category: 'vasitos',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Galletitas Chocolinas, café y crema de ddl en vasitos individuales.',
    longDesc: 'Caja x 25 vasitos individuales: galletitas Chocolinas, café y crema de ddl.',
    ingredients: ['Galletitas Chocolinas', 'Café', 'Crema de dulce de leche (ddl)'],
    yield: 'Caja x 25 unidades',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/vasito-chocotorta-solo.jpg',
    images: [
      { src: 'assets/images/products/vasito-chocotorta-solo.jpg', label: 'Vasito solo', desc: 'Porción individual en vasito' },
      { src: 'assets/images/products/vasitos-chocotorta-caja.jpg', label: 'Caja x 25', desc: 'Caja cerrada armada de 25 u.' }
    ],
    badges: ['2 Fotos', '25 Unidades'],
    badgeType: 'badge-olive'
  },
  {
    id: 'vasitos-tiramisu',
    name: 'Vasitos Tiramisú (Caja x 25)',
    category: 'vasitos',
    price: 65000,
    priceDisplay: '$65.000',
    shortDesc: 'Vainillas caseras, almíbar de café y marsala, mascarpone y choco amargo.',
    longDesc: 'Caja x 25 vasitos individuales: vainillas caseras, almíbar de café y marsala, mascarpone y choco amargo.',
    ingredients: ['Vainillas caseras', 'Almíbar de café y marsala', 'Mascarpone', 'Chocolate amargo'],
    yield: 'Caja x 25 unidades',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/vasito-tiramisu-solo.jpg',
    images: [
      { src: 'assets/images/products/vasito-tiramisu-solo.jpg', label: 'Vasito solo', desc: 'Porción individual en vasito' },
      { src: 'assets/images/products/vasitos-tiramisu-caja.jpg', label: 'Caja x 25', desc: 'Caja cerrada armada de 25 u.' }
    ],
    badges: ['2 Fotos', '25 Unidades'],
    badgeType: 'badge-olive'
  },
  {
    id: 'vasitos-lemon-pie',
    name: 'Vasitos Lemon Pie (Caja x 25)',
    category: 'vasitos',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa sablée, crema de limón y merengue en vasitos individuales.',
    longDesc: 'Caja x 25 vasitos individuales: masa sablée, crema de limón y merengue.',
    ingredients: ['Masa sablée', 'Crema de limón', 'Merengue'],
    yield: 'Caja x 25 unidades',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/vasito-lemon-pie-solo.jpg',
    images: [
      { src: 'assets/images/products/vasito-lemon-pie-solo.jpg', label: 'Vasito solo', desc: 'Porción individual en vasito' },
      { src: 'assets/images/products/vasitos-lemon-pie-caja.jpg', label: 'Caja x 25', desc: 'Caja cerrada armada de 25 u.' }
    ],
    badges: ['2 Fotos', '25 Unidades'],
    badgeType: 'badge-olive'
  },
  {
    id: 'vasitos-maracuya',
    name: 'Vasitos Maracuyá Pie (Caja x 25)',
    category: 'vasitos',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa sablée, crema de maracuyá, coulis de maracuyá y merengue.',
    longDesc: 'Caja x 25 vasitos individuales: masa sablée, crema de maracuyá, coulis de maracuyá y merengue.',
    ingredients: ['Masa sablée', 'Crema de maracuyá', 'Coulis de maracuyá', 'Merengue'],
    yield: 'Caja x 25 unidades',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/vasito-maracuya-solo.jpg',
    images: [
      { src: 'assets/images/products/vasito-maracuya-solo.jpg', label: 'Vasito solo', desc: 'Porción individual en vasito' },
      { src: 'assets/images/products/vasitos-maracuya-caja.jpg', label: 'Caja x 25', desc: 'Caja cerrada armada de 25 u.' }
    ],
    badges: ['2 Fotos', '25 Unidades'],
    badgeType: 'badge-rose'
  },
  {
    id: 'caja-petit-four-25',
    name: 'Caja Petit Four x 25 Unidades',
    category: 'petitfour',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Rogel, sablée de almendras y brownie / ddl / merengue.',
    longDesc: 'Caja de 25 piezas surtidas: Rogel, Sablée de almendras y Brownie / ddl / merengue.',
    ingredients: ['Rogel', 'Sablée de almendras', 'Brownie / ddl / merengue'],
    yield: 'Caja x 25 unidades',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/petit-four-01.jpg',
    images: [
      { src: 'assets/images/products/petit-four-01.jpg', label: 'Petit 01', desc: 'Trío de variedades en detalle' },
      { src: 'assets/images/products/petit-four-02.jpg', label: 'Petit 02', desc: 'Presentación en caja cerrada de 25 u.' }
    ],
    badges: ['2 Fotos', '25 Unidades'],
    badgeType: 'badge-olive'
  }
];

// Configuración de la marca
const LABRA_CONFIG = {
  phone: '5491173718584',
  phoneDisplay: '11 7371 8584',
  instagram: 'labrapasteleria',
  instagramUrl: 'https://instagram.com/labrapasteleria',
  location: 'Caballito, CABA',
  leadTimeHours: 48
};

// ==========================================================================
// Integración Google Analytics 4 (Eventos de Conversión)
// ==========================================================================
function trackAnalyticsEvent(eventName, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch (err) {
    console.debug('Analytics dispatch error:', err);
  }
}

// Estado de la aplicación
const state = {
  cart: [], // Lista de items para armar pedido: [{ id, product, qty }]
  activeCategory: 'todos',
  searchQuery: '',
  deliveryMethod: 'Retiro por Caballito',
  targetDate: '',
  clientName: '',
  notes: ''
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  loadSavedCart();
  initEventListeners();
  renderProducts();
  updateOrderBadge();
  setupMinDate();
  initHeroSlider();
});

// Guardar / Cargar pedido en localStorage
function saveCart() {
  try {
    localStorage.setItem('labra_order_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.warn('Storage not available', e);
  }
}

function loadSavedCart() {
  try {
    const saved = localStorage.getItem('labra_order_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = [];
  }
}

// Configurar fecha mínima de pedido (hoy + 2 días = 48 hs de anticipación)
function setupMinDate() {
  const dateInput = document.getElementById('order-date-input');
  if (!dateInput) return;

  const now = new Date();
  now.setDate(now.getDate() + 2);
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
  
  // Por defecto sugerir la fecha mínima
  if (!state.targetDate) {
    state.targetDate = `${yyyy}-${mm}-${dd}`;
    dateInput.value = state.targetDate;
  }
}

// Event Listeners principales
function initEventListeners() {
  // Filtros de categoría
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category || 'todos';
      renderProducts();
    });
  });

  // Búsqueda en tiempo real
  const searchInput = document.getElementById('catalog-search-input');
  const clearBtn = document.getElementById('catalog-search-clear');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
      }
      renderProducts();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearBtn.classList.remove('visible');
      renderProducts();
      searchInput.focus();
    });
  }

  // Drawer de Pedido
  const openOrderBtns = document.querySelectorAll('.js-open-order-drawer');
  openOrderBtns.forEach(btn => btn.addEventListener('click', openOrderDrawer));

  const closeOrderBtn = document.getElementById('drawer-close-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  if (closeOrderBtn) closeOrderBtn.addEventListener('click', closeOrderDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeOrderDrawer);

  // Formulario del Drawer
  const clientNameInput = document.getElementById('order-client-name');
  if (clientNameInput) {
    clientNameInput.addEventListener('input', (e) => {
      state.clientName = e.target.value;
      updateWhatsAppPreview();
    });
  }

  const dateInput = document.getElementById('order-date-input');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      state.targetDate = e.target.value;
      updateWhatsAppPreview();
    });
  }

  const deliverySelect = document.getElementById('order-delivery-select');
  if (deliverySelect) {
    deliverySelect.addEventListener('change', (e) => {
      state.deliveryMethod = e.target.value;
      updateWhatsAppPreview();
    });
  }

  const notesInput = document.getElementById('order-notes-input');
  if (notesInput) {
    notesInput.addEventListener('input', (e) => {
      state.notes = e.target.value;
      updateWhatsAppPreview();
    });
  }

  // Botón Vaciar Pedido
  const clearOrderBtn = document.getElementById('btn-clear-order');
  if (clearOrderBtn) {
    clearOrderBtn.addEventListener('click', () => {
      if (confirm('¿Deseás vaciar tu lista de pedido?')) {
        state.cart = [];
        saveCart();
        renderOrderDrawer();
        updateOrderBadge();
        showToast('Lista de pedido vaciada');
      }
    });
  }

  // Botón Enviar WhatsApp desde Drawer
  const sendWhatsAppBtn = document.getElementById('btn-send-whatsapp-order');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (state.cart.length === 0) {
        alert('Por favor sumá al menos un producto a tu pedido.');
        return;
      }

      // Tracking GA4 de Pedido Completo por Carrito
      const total = state.cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);
      const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);

      trackAnalyticsEvent('generate_lead', {
        currency: 'ARS',
        value: total,
        lead_type: 'whatsapp_cart_order',
        items_count: totalQty
      });

      trackAnalyticsEvent('click_whatsapp_cart', {
        value: total,
        items_count: totalQty,
        items_summary: state.cart.map(i => `${i.qty}x ${i.product.name}`).join(', ')
      });

      const url = buildWhatsAppUrl();
      window.open(url, '_blank');
    });
  }

  // Modal / Dialog
  const productModal = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn && productModal) {
    modalCloseBtn.addEventListener('click', () => productModal.close());
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) productModal.close();
    });
    productModal.addEventListener('close', () => {
      productModal.classList.remove('is-cuchareables');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Menú móvil
  const mobileToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  if (mobileToggleBtn && mobileNavPanel) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileNavPanel.classList.toggle('open');
    });
    const mobileLinks = mobileNavPanel.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => mobileNavPanel.classList.remove('open'));
    });
  }

  // Medición de clics en WhatsApp y Redes para Google Analytics
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';

    if (href.includes('wa.me')) {
      if (anchor.id !== 'btn-send-whatsapp-order') {
        const linkText = anchor.innerText.trim() || 'WhatsApp Flotante';
        trackAnalyticsEvent('generate_lead', {
          lead_type: 'whatsapp_general_contact',
          link_text: linkText
        });
        trackAnalyticsEvent('click_whatsapp_contact', {
          link_url: href,
          link_text: linkText
        });
      }
    } else if (href.includes('instagram.com')) {
      trackAnalyticsEvent('click_social_instagram', {
        link_url: href
      });
    }
  });

  // Scroll Header Shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });
}

// Renderizado del Catálogo de Productos
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  const filtered = PRODUCTS.filter(prod => {
    // Filtro por categoría
    const matchesCategory = 
      state.activeCategory === 'todos' ||
      (state.activeCategory === 'cuchareables' && prod.category === 'cuchareables') ||
      (state.activeCategory === 'tortas' && (prod.category === 'tortas' || prod.category === 'keto')) ||
      (state.activeCategory === 'vasitos' && prod.category === 'vasitos') ||
      (state.activeCategory === 'petitfour' && prod.category === 'petitfour') ||
      (state.activeCategory === 'keto' && prod.category === 'keto');

    // Filtro por búsqueda
    const query = state.searchQuery;
    const matchesSearch = !query || 
      prod.name.toLowerCase().includes(query) ||
      prod.shortDesc.toLowerCase().includes(query) ||
      prod.ingredients.some(ing => ing.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${PRODUCTS.length} productos`;
  }

  // Sincronizar contadores en las píldoras de filtro
  const categoryCounts = {
    todos: PRODUCTS.length,
    cuchareables: PRODUCTS.filter(p => p.category === 'cuchareables').length,
    tortas: PRODUCTS.filter(p => p.category === 'tortas' || p.category === 'keto').length,
    vasitos: PRODUCTS.filter(p => p.category === 'vasitos').length,
    petitfour: PRODUCTS.filter(p => p.category === 'petitfour').length,
    keto: PRODUCTS.filter(p => p.category === 'keto').length
  };
  document.querySelectorAll('.filter-pill').forEach(pill => {
    const cat = pill.dataset.category;
    const countSpan = pill.querySelector('.filter-pill-count');
    if (countSpan && categoryCounts[cat] !== undefined) {
      countSpan.textContent = categoryCounts[cat];
    }
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--color-surface); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
        <div style="margin-bottom: 1rem; display: flex; justify-content: center; color: var(--color-olive); opacity: 0.65;"><svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-olive-dark); margin-bottom: 0.5rem;">No encontramos coincidencias</h3>
        <p style="color: var(--color-text-secondary); max-width: 400px; margin: 0 auto 1.5rem;">Probá buscando con otros ingredientes (ej: dulce de leche, frutos rojos, limón, chocolate) o restablecé los filtros.</p>
        <button class="btn-primary" onclick="resetFilters()">Ver todos los productos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const isKeto = prod.category === 'keto';
    const tagHtml = isKeto ? '<span class="card-minimal-tag">Keto · Sin Azúcar</span>' : '';

    // Selector de fotos para productos con múltiples imágenes (Vasitos, Petit Four)
    let multiImgHtml = '';
    if (prod.images && prod.images.length > 1) {
      multiImgHtml = `
        <span class="card-photo-count-badge"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>${prod.images.length} fotos</span>
        <div class="card-multi-img-pills" onclick="event.stopPropagation();">
          ${prod.images.map((img, idx) => `
            <button type="button" class="card-img-pill ${idx === 0 ? 'active' : ''}" onclick="switchCardPhoto(event, '${prod.id}', ${idx})" title="Ver ${img.label}">${img.label}</button>
          `).join('')}
        </div>
      `;
    }

    return `
      <article class="product-card" data-product-id="${prod.id}">
        <div class="product-card-media" onclick="openProductModal('${prod.id}')" title="Ver fotos y detalles de ${prod.name}">
          <img src="${prod.image}" alt="${prod.name} - LABRA Pastelería" class="product-card-img" id="card-img-${prod.id}" loading="lazy">
          ${tagHtml}
          ${multiImgHtml}
        </div>

        <div class="product-card-body">
          <div class="product-header-row">
            <h3 class="product-card-title" onclick="openProductModal('${prod.id}')">${prod.name}</h3>
            <span class="product-card-price">${prod.priceDisplay}</span>
          </div>

          <p class="product-card-desc">${prod.shortDesc}</p>

          <div class="product-card-footer">
            <span class="product-yield-badge">${prod.category === 'cuchareables' ? 'Pote 250 cc' : (prod.category === 'tortas' || prod.category === 'keto' ? (prod.id === 'chocotorta' ? '16 x 18 cm' : 'Diámetro 22 cm') : 'Caja x 25 un.')}</span>

            <div class="product-card-actions">
              <button class="btn-card-whatsapp" onclick="orderSingleProductDirectly('${prod.id}')" title="Pedir ${prod.name} por WhatsApp" aria-label="Pedir ${prod.name} por WhatsApp">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.98-1.002 1.23-.226.25-.452.276-.753.125-.301-.15-1.272-.469-2.424-1.498-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.144 4.549.718.31 1.279.496 1.716.634.721.23 1.378.197 1.898.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zM12.004 2C6.48 2 2 6.48 2 12c0 1.84.5 3.565 1.372 5.044L2.05 22l5.12-1.342A9.957 9.957 0 0 0 12.004 22c5.523 0 10.004-4.48 10.004-10s-4.481-10-10.004-10zm0 18.257c-1.606 0-3.1-.476-4.364-1.3l-.313-.205-3.057.802.816-2.98-.225-.327a8.21 8.21 0 0 1-1.36-4.447c0-4.557 3.708-8.265 8.265-8.265 4.557 0 8.265 3.708 8.265 8.265 0 4.558-3.708 8.266-8.265 8.266z"/></svg>
              </button>

              <button class="btn-card-add" onclick="addToOrder('${prod.id}', 1)" title="Sumar a mi lista de pedido">+&nbsp;Sumar</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Cambiar foto activa en la tarjeta (Vasito solo / Caja x 25 / Cuchareables)
function switchCardPhoto(e, productId, imgIdx) {
  if (e) e.stopPropagation();
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod || !prod.images || !prod.images[imgIdx]) return;

  const imgEl = document.getElementById(`card-img-${productId}`);
  if (imgEl) {
    imgEl.style.opacity = '0.4';
    setTimeout(() => {
      imgEl.src = prod.images[imgIdx].src;
      imgEl.alt = `${prod.name} - ${prod.images[imgIdx].label}`;
      imgEl.style.opacity = '1';
    }, 120);
  }

  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    const pills = card.querySelectorAll('.card-img-pill');
    pills.forEach((p, idx) => {
      p.classList.toggle('active', idx === imgIdx);
    });
  }
}

function formatCategoryName(cat) {
  switch (cat) {
    case 'cuchareables': return 'Pote Cuchareable';
    case 'tortas': return 'Torta Artesanal';
    case 'vasitos': return 'Caja de Vasitos x 25';
    case 'petitfour': return 'Petit Four x 25';
    case 'keto': return 'Línea Especial Keto';
    default: return 'Pastelería';
  }
}

function resetFilters() {
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
  state.searchQuery = '';
  state.activeCategory = 'todos';

  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(p => {
    p.classList.toggle('active', p.dataset.category === 'todos');
  });

  renderProducts();
}

// Modal / Dialog de Producto con Galería Multitoma
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  // Medición GA4: Ver Producto
  trackAnalyticsEvent('view_item', {
    currency: 'ARS',
    value: prod.price,
    items: [{
      item_id: prod.id,
      item_name: prod.name,
      item_category: prod.category,
      price: prod.price
    }]
  });

  const dialog = document.getElementById('product-modal');
  const imgEl = document.getElementById('modal-img');
  const catEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const priceEl = document.getElementById('modal-price');
  const descEl = document.getElementById('modal-desc');
  const ingredientsSection = document.getElementById('modal-ingredients-section') || (document.getElementById('modal-ingredients-list') ? document.getElementById('modal-ingredients-list').closest('.dialog-section-block') : null);
  const ingredientsListEl = document.getElementById('modal-ingredients-list');
  const yieldEl = document.getElementById('modal-yield');
  const storageEl = document.getElementById('modal-storage');
  const addBtn = document.getElementById('modal-btn-add');
  const directBtn = document.getElementById('modal-btn-direct');
  const thumbsContainer = document.getElementById('modal-gallery-thumbs');
  const imgBadge = document.getElementById('modal-img-badge');
  let activeImageIdx = 0;

  if (dialog) {
    dialog.classList.toggle('is-cuchareables', prod.category === 'cuchareables');
  }

  if (imgEl) {
    imgEl.src = prod.image;
    imgEl.alt = `${prod.name} - LABRA Pastelería`;
    imgEl.style.opacity = '1';
  }
  if (catEl) catEl.textContent = formatCategoryName(prod.category);
  if (titleEl) titleEl.textContent = prod.name;
  if (priceEl) priceEl.textContent = prod.priceDisplay;

  const initialImg = (prod.images && prod.images[0]) || null;
  if (descEl) {
    descEl.style.opacity = '1';
    descEl.textContent = (initialImg && initialImg.flavorDesc) ? initialImg.flavorDesc : prod.longDesc;
  }
  if (yieldEl) {
    yieldEl.textContent = (initialImg && initialImg.flavorYield) ? initialImg.flavorYield : prod.yield;
  }
  if (storageEl) storageEl.textContent = prod.storage;

  const initialIngs = (initialImg && initialImg.flavorIngredients !== undefined)
    ? initialImg.flavorIngredients
    : prod.ingredients;

  if (ingredientsSection) {
    if (initialIngs && initialIngs.length > 0) {
      ingredientsSection.style.display = 'block';
      if (ingredientsListEl) {
        ingredientsListEl.style.opacity = '1';
        ingredientsListEl.innerHTML = initialIngs.map(ing => `<li>${ing}</li>`).join('');
      }
    } else {
      ingredientsSection.style.display = 'none';
      if (ingredientsListEl) ingredientsListEl.innerHTML = '';
    }
  }

  // Renderizado dinámico de galería si el producto tiene 2 imágenes
  if (prod.images && prod.images.length > 1) {
    const isFlavorProduct = prod.category === 'cuchareables';
    if (imgBadge) {
      imgBadge.style.display = 'inline-block';
      imgBadge.textContent = isFlavorProduct ? `Sabor: ${prod.images[0].label}` : `Foto: ${prod.images[0].label}`;
    }
    if (thumbsContainer) {
      thumbsContainer.style.display = 'flex';
      const labelText = isFlavorProduct
        ? 'Elegí el gusto para ver su detalle e ingredientes:'
        : 'Vistas disponibles (hacé click para alternar):';
      thumbsContainer.innerHTML = `
        <span class="dialog-thumbs-label">${labelText}</span>
        <div class="dialog-thumbs-row">
          ${prod.images.map((img, idx) => `
            <button type="button" class="dialog-thumb-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
              <img src="${img.src}" alt="${img.label}" class="dialog-thumb-img">
              <div class="dialog-thumb-info">
                <span class="dialog-thumb-name">${img.label}</span>
                <span class="dialog-thumb-caption">${img.desc || ''}</span>
              </div>
            </button>
          `).join('')}
        </div>
      `;

      const thumbBtns = thumbsContainer.querySelectorAll('.dialog-thumb-btn');
      thumbBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx, 10);
          activeImageIdx = idx;
          thumbBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const imgObj = prod.images[idx];
          if (imgEl && imgObj) {
            imgEl.style.opacity = '0.35';
            setTimeout(() => {
              imgEl.src = imgObj.src;
              imgEl.alt = `${prod.name} - ${imgObj.label}`;
              imgEl.style.opacity = '1';
            }, 90);
          }
          if (imgBadge && imgObj) {
            imgBadge.textContent = isFlavorProduct ? `Sabor: ${imgObj.label}` : `Foto: ${imgObj.label}`;
          }

          // Diferenciar descripción e ingredientes al clickear cada gusto
          if (imgObj) {
            if (descEl) {
              descEl.style.opacity = '0.35';
              setTimeout(() => {
                descEl.textContent = imgObj.flavorDesc || prod.longDesc;
                descEl.style.opacity = '1';
              }, 70);
            }

            const currentIngs = imgObj.flavorIngredients !== undefined ? imgObj.flavorIngredients : prod.ingredients;
            if (ingredientsSection) {
              if (currentIngs && currentIngs.length > 0) {
                ingredientsSection.style.display = 'block';
                if (ingredientsListEl) {
                  ingredientsListEl.style.opacity = '0.35';
                  setTimeout(() => {
                    ingredientsListEl.innerHTML = currentIngs.map(i => `<li>${i}</li>`).join('');
                    ingredientsListEl.style.opacity = '1';
                  }, 70);
                }
              } else {
                ingredientsSection.style.display = 'none';
                if (ingredientsListEl) ingredientsListEl.innerHTML = '';
              }
            }

            if (yieldEl) {
              yieldEl.textContent = imgObj.flavorYield || prod.yield;
            }
          }
        });
      });
    }
  } else {
    if (imgBadge) imgBadge.style.display = 'none';
    if (thumbsContainer) thumbsContainer.style.display = 'none';
  }

  if (addBtn) {
    addBtn.onclick = () => {
      addToOrder(prod.id, 1);
      dialog.close();
    };
  }

  if (directBtn) {
    directBtn.onclick = () => {
      const selectedFlavor = (prod.images && prod.images[activeImageIdx]) ? prod.images[activeImageIdx].label : null;
      orderSingleProductDirectly(prod.id, selectedFlavor);
      dialog.close();
    };
  }

  dialog.showModal();
}

// Sumar producto al pedido
function addToOrder(productId, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  // Medición GA4: Agregar al Carrito
  trackAnalyticsEvent('add_to_cart', {
    currency: 'ARS',
    value: prod.price * qty,
    items: [{
      item_id: prod.id,
      item_name: prod.name,
      item_category: prod.category,
      price: prod.price,
      quantity: qty
    }]
  });

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: productId,
      product: prod,
      qty: qty
    });
  }

  saveCart();
  updateOrderBadge();
  renderOrderDrawer();
  showToast(`¡Sumaste ${prod.name} a tu lista de pedido!`);
}

function updateOrderItemQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateOrderBadge();
  renderOrderDrawer();
}

function removeOrderItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateOrderBadge();
  renderOrderDrawer();
}

// Actualizar contadores visuales de pedidos
function updateOrderBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  const headerBadges = document.querySelectorAll('.js-order-count-badge');
  headerBadges.forEach(badge => {
    badge.textContent = totalCount;
  });

  const fabOrder = document.getElementById('fab-order-pill');
  if (fabOrder) {
    fabOrder.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }
}

// Drawer de Pedido
function openOrderDrawer() {
  const drawer = document.getElementById('order-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  renderOrderDrawer();
  if (drawer) drawer.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderDrawer() {
  const drawer = document.getElementById('order-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// Recomendaciones en el estado vacío del Drawer
function toggleDrawerRecommendation(productId) {
  const existingIdx = state.cart.findIndex(i => i.id === productId);
  if (existingIdx >= 0) {
    state.cart.splice(existingIdx, 1);
    showToast('Producto quitado de tu lista');
  } else {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (prod) {
      state.cart.push({
        id: prod.id,
        product: prod,
        qty: 1
      });
      showToast(`¡Sumaste ${prod.name} a tu lista!`);
      if (typeof trackAnalyticsEvent === 'function') {
        trackAnalyticsEvent('add_to_cart', {
          currency: 'ARS',
          value: prod.price,
          items: [{ item_id: prod.id, item_name: prod.name, price: prod.price, quantity: 1 }]
        });
      }
    }
  }

  saveCart();
  updateOrderBadge();
  updateDrawerRecommendationsUI();
}

function updateDrawerRecommendationsUI() {
  const recCards = document.querySelectorAll('.js-rec-card');
  let checkedCount = 0;
  let totalAmount = 0;

  recCards.forEach(card => {
    const prodId = card.getAttribute('data-product-id');
    const isChecked = state.cart.some(i => i.id === prodId);
    const checkbox = card.querySelector('.drawer-rec-checkbox');
    if (isChecked) {
      card.classList.add('checked');
      if (checkbox) checkbox.setAttribute('aria-checked', 'true');
      checkedCount++;
      const item = state.cart.find(i => i.id === prodId);
      if (item && item.product) {
        totalAmount += item.product.price * item.qty;
      }
    } else {
      card.classList.remove('checked');
      if (checkbox) checkbox.setAttribute('aria-checked', 'false');
    }
  });

  const continueBtn = document.getElementById('drawer-btn-continue-order');
  const totalValEl = document.getElementById('drawer-total-val');

  if (continueBtn) {
    if (checkedCount > 0) {
      continueBtn.classList.add('visible');
      continueBtn.innerHTML = `<span>Avanzar con mi pedido (${formatCurrency(totalAmount)})</span> <span>→</span>`;
    } else {
      continueBtn.classList.remove('visible');
    }
  }

  if (totalValEl) {
    totalValEl.textContent = formatCurrency(totalAmount);
  }
}

function proceedFromEmptyStateToOrder() {
  const emptyEl = document.getElementById('drawer-empty-state');
  const contentEl = document.getElementById('drawer-content-box');
  if (emptyEl) emptyEl.style.display = 'none';
  if (contentEl) contentEl.style.display = 'block';
  renderOrderDrawer();
}

function goToCatalogFromDrawer() {
  closeOrderDrawer();
  const catalogEl = document.getElementById('catalogo');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderOrderDrawer() {
  const listEl = document.getElementById('drawer-items-list');
  const emptyEl = document.getElementById('drawer-empty-state');
  const contentEl = document.getElementById('drawer-content-box');
  const totalValEl = document.getElementById('drawer-total-val');

  if (!listEl) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  if (state.cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    if (contentEl) contentEl.style.display = 'none';
    if (totalValEl) totalValEl.textContent = '$0';
    updateDrawerRecommendationsUI();
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (contentEl) contentEl.style.display = 'block';

  let totalAmount = 0;

  listEl.innerHTML = state.cart.map(item => {
    const itemSubtotal = item.product.price * item.qty;
    totalAmount += itemSubtotal;

    return `
      <div class="drawer-item">
        <img src="${item.product.image}" alt="${item.product.name}" class="drawer-item-img">
        <div class="drawer-item-info">
          <h5>${item.product.name}</h5>
          <div class="drawer-item-price">${item.product.priceDisplay} c/u</div>
        </div>
        <div class="drawer-item-controls">
          <button class="qty-btn" onclick="updateOrderItemQty('${item.id}', -1)" title="Reducir" aria-label="Reducir cantidad">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateOrderItemQty('${item.id}', 1)" title="Aumentar" aria-label="Aumentar cantidad">+</button>
          <button class="drawer-item-delete" onclick="removeOrderItem('${item.id}')" title="Eliminar" aria-label="Eliminar producto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalValEl) {
    totalValEl.textContent = formatCurrency(totalAmount);
  }

  updateWhatsAppPreview();
}

function formatCurrency(num) {
  return '$' + num.toLocaleString('es-AR');
}

// Vista previa en vivo del mensaje de WhatsApp
function updateWhatsAppPreview() {
  const previewEl = document.getElementById('whatsapp-preview-text');
  const sendBtn = document.getElementById('btn-send-whatsapp-order');

  if (state.cart.length === 0) {
    if (previewEl) previewEl.textContent = 'Seleccioná productos en el catálogo para ver el mensaje aquí.';
    if (sendBtn) sendBtn.href = '#';
    return;
  }

  const message = generateOrderTextMessage();
  if (previewEl) previewEl.textContent = message;
  if (sendBtn) sendBtn.href = buildWhatsAppUrl();
}

// Generador del texto para WhatsApp (limpio y natural)
function generateOrderTextMessage() {
  let lines = [];
  lines.push('¡Hola LABRA Pastelería!');
  lines.push('Quisiera hacer un pedido con los siguientes productos:');
  lines.push('');

  let total = 0;
  state.cart.forEach(item => {
    const subtotal = item.product.price * item.qty;
    total += subtotal;
    lines.push(`• ${item.qty}x ${item.product.name} (${formatCurrency(subtotal)})`);
  });

  lines.push('');
  lines.push(`Total estimado: ${formatCurrency(total)}`);

  if (state.targetDate) {
    const [y, m, d] = state.targetDate.split('-');
    lines.push(`Fecha deseada: ${d}/${m}/${y}`);
  }

  lines.push(`Modalidad: ${state.deliveryMethod || 'Retiro por Caballito'}`);

  if (state.clientName && state.clientName.trim()) {
    lines.push(`Nombre: ${state.clientName.trim()}`);
  }

  if (state.notes && state.notes.trim()) {
    lines.push(`Observaciones: ${state.notes.trim()}`);
  }

  lines.push('');
  lines.push('¿Tienen disponibilidad para esa fecha? ¡Muchas gracias!');

  return lines.join('\n');
}

function buildWhatsAppUrl() {
  const text = generateOrderTextMessage();
  return `https://wa.me/${LABRA_CONFIG.phone}?text=${encodeURIComponent(text)}`;
}

// Pedido 1-click directo de un solo producto
function orderSingleProductDirectly(productId, flavorName = null) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  // Medición GA4: Lead directo de WhatsApp por producto
  trackAnalyticsEvent('generate_lead', {
    currency: 'ARS',
    value: prod.price,
    lead_type: 'whatsapp_single_product',
    item_id: prod.id,
    item_name: prod.name
  });

  trackAnalyticsEvent('click_whatsapp_direct', {
    product_id: prod.id,
    product_name: prod.name,
    price: prod.price
  });

  let productLine = `• 1x ${prod.name} (${prod.priceDisplay})`;
  if (prod.category === 'cuchareables') {
    if (flavorName && flavorName !== 'Los 3 Sabores') {
      productLine = `• 1x ${prod.name} - Sabor ${flavorName} (${prod.priceDisplay})`;
    } else if (flavorName === 'Los 3 Sabores') {
      productLine = `• 1x ${prod.name} (${prod.priceDisplay})\n  (Variedades: Chocotorta, Tiramisú o Chocolate)`;
    } else {
      productLine = `• 1x ${prod.name} (${prod.priceDisplay})\n  (Sabor a elección: Chocotorta, Tiramisú o Chocolate)`;
    }
  }

  const msg = [
    '¡Hola LABRA Pastelería!',
    `Quisiera encargar:`,
    productLine,
    '',
    `Retiro por Caballito (con 48 hs de anticipación).`,
    '¿Tienen disponibilidad en estos días? ¡Muchas gracias!'
  ].join('\n');

  const url = `https://wa.me/${LABRA_CONFIG.phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Toast flotante
function showToast(text) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg><span>${text}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ==========================================================================
// Slider Rotativo de Imágenes en el Hero (4 Creaciones Principales)
// ==========================================================================
function initHeroSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots = slider.querySelectorAll('.hero-dot');
  const badgeText = document.getElementById('hero-badge-text');
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentIndex = 0;
  let timer = null;
  const INTERVAL = 3000; // 3 segundos por imagen
  let isHovered = false;

  function updateHeroSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;

    slides.forEach((slide, idx) => {
      const isActive = idx === currentIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', !isActive);
    });

    dots.forEach((dot, idx) => {
      const isActive = idx === currentIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    const activeSlide = slides[currentIndex];
    if (activeSlide && badgeText) {
      badgeText.textContent = activeSlide.dataset.name || '';
    }
  }

  function startAutoplay() {
    if (timer) clearInterval(timer);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    timer = setInterval(() => {
      if (!isHovered && !document.hidden) {
        updateHeroSlide(currentIndex + 1);
      }
    }, INTERVAL);
  }

  function pauseAutoplay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function restartAutoplay() {
    pauseAutoplay();
    startAutoplay();
  }

  // Clic en dots
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateHeroSlide(idx);
      restartAutoplay();
    });
  });

  // Pausa en hover / focus
  slider.addEventListener('mouseenter', () => {
    isHovered = true;
    pauseAutoplay();
  });

  slider.addEventListener('mouseleave', () => {
    isHovered = false;
    startAutoplay();
  });

  // Pausa si la pestaña se oculta
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseAutoplay();
    } else if (!isHovered) {
      startAutoplay();
    }
  });

  // Gesto táctil swipe en móviles
  const imgWrap = slider.querySelector('.hero-card-img-wrap');
  if (imgWrap) {
    let touchStartX = 0;
    let touchStartY = 0;

    imgWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      pauseAutoplay();
    }, { passive: true });

    imgWrap.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX > 0) {
          updateHeroSlide(currentIndex + 1);
        } else {
          updateHeroSlide(currentIndex - 1);
        }
      }
      startAutoplay();
    }, { passive: true });
  }

  // Inicializar en primera diapositiva y reproducir
  updateHeroSlide(0);
  startAutoplay();
}

// Navegar directamente a la categoría Cuchareables desde el Hero Banner
function goToCuchareablesCatalog() {
  if (typeof trackAnalyticsEvent === 'function') {
    trackAnalyticsEvent('click_hero_launch_banner', {
      banner: 'Nuevos Postres Cuchareables',
      action: 'ver_sabores'
    });
  }

  const catalogEl = document.getElementById('catalogo');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }

  // Activar filtro de categoría cuchareables
  state.activeCategory = 'cuchareables';
  state.searchQuery = '';
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(p => {
    p.classList.toggle('active', p.dataset.category === 'cuchareables');
  });

  renderProducts();

  // Enfocar suavemente la tarjeta de cuchareables
  setTimeout(() => {
    const card = document.querySelector('.product-card[data-product-id="cuchareables"]');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.transition = 'box-shadow 0.35s ease, transform 0.35s ease';
      card.style.boxShadow = '0 0 0 3px var(--color-olive), 0 8px 24px rgba(70, 84, 61, 0.2)';
      card.style.transform = 'translateY(-3px)';
      setTimeout(() => {
        card.style.boxShadow = '';
        card.style.transform = '';
      }, 1500);
    }
  }, 450);
}

// Exponer funciones en el ámbito global para eventos en línea
window.openProductModal = openProductModal;
window.orderSingleProductDirectly = orderSingleProductDirectly;
window.addToOrder = addToOrder;
window.updateOrderItemQty = updateOrderItemQty;
window.removeOrderItem = removeOrderItem;
window.openOrderDrawer = openOrderDrawer;
window.closeOrderDrawer = closeOrderDrawer;
window.resetFilters = resetFilters;
window.goToCuchareablesCatalog = goToCuchareablesCatalog;

