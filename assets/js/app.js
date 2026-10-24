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
    id: 'number-cake',
    name: 'Number Cake',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa sablée de almendras, ddl, crema de leche y frutas frescas (precio por número).',
    longDesc: 'Number Cake artesanal personalizada sobre base de doble masa sablée de almendras crocante, rellena con dulce de leche y crema de leche. Decorada con frutas de estación.\n\n• Aclaración de valor: El precio publicado ($60.000) corresponde a un (1) número o letra individual. Si tu festejo requiere dos cifras (ej: 15, 30, 50), seleccioná 2 unidades al armar tu pedido.\n• Sabores y rellenos personalizados: Si deseás consultar por otra masa, otro sabor de torta o diferentes opciones de relleno, ¡escribinos por WhatsApp y coordinamos tu propuesta a gusto!',
    ingredients: [
      'Masa sablée de almendras',
      'Dulce de leche',
      'Crema de leche',
      'Frutas de estación'
    ],
    yield: 'Precio por número · Rinde aprox. 10 a 12 porciones por dígito',
    yieldBadge: 'Precio por número',
    storage: 'Conservar en la heladera hasta 4 días. Retirar 15 min antes de consumir.',
    image: 'assets/images/products/torta-number-cake-5.jpg',
    images: [
      {
        src: 'assets/images/products/torta-number-cake-5.jpg',
        label: 'Número 5',
        desc: 'Ejemplo de dígito individual',
        flavorDesc: 'Number Cake artesanal personalizada (ejemplo: Número 5). Masa sablée de almendras, ddl, crema de leche y frutas frescas.\n\n• El valor ($60.000) es por número individual.\n• ¿Buscás otro gusto o relleno? Consultanos por WhatsApp y armamos tu propuesta personalizada a medida.',
        flavorYield: 'Precio por número · Rinde aprox. 10 a 12 porciones por dígito'
      },
      {
        src: 'assets/images/products/torta-number-cake-0.jpg',
        label: 'Número 0',
        desc: 'Ejemplo de dígito individual',
        flavorDesc: 'Number Cake artesanal personalizada (ejemplo: Número 0). Masa sablée de almendras, ddl, crema de leche y frutas frescas.\n\n• El valor ($60.000) es por número individual.\n• ¿Buscás otro gusto o relleno? Consultanos por WhatsApp y armamos tu propuesta personalizada a medida.',
        flavorYield: 'Precio por número · Rinde aprox. 10 a 12 porciones por dígito'
      }
    ],
    badges: ['Personalizada', 'Precio x Número', '2 Fotos'],
    badgeType: 'badge-olive'
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
  leadTimeHours: 48,
  siteUrl: 'https://www.labra.com.ar'
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

// ==========================================================================
// Módulo de Ciberseguridad & Sanitización (SecDevOps)
// ==========================================================================
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeText(str, maxLen = 100) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
    .trim()
    .slice(0, maxLen);
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
  initGoogleReviewsSlider();
  initMesaDulceSimulator();
  checkSharedProposalUrlOnLoad();
});

// Guardar / Cargar pedido en localStorage con validación e integridad de datos
function saveCart() {
  try {
    const minimalCart = state.cart.map(i => ({ id: i.id, qty: i.qty }));
    localStorage.setItem('labra_order_cart', JSON.stringify(minimalCart));
  } catch (e) {
    console.warn('Storage not available', e);
  }
}

function loadSavedCart() {
  try {
    const saved = localStorage.getItem('labra_order_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        state.cart = parsed
          .map(item => {
            if (!item || typeof item !== 'object') return null;
            const validProd = PRODUCTS.find(p => p.id === item.id);
            if (!validProd) return null;
            const safeQty = Math.max(1, Math.min(99, parseInt(item.qty, 10) || 1));
            return {
              id: validProd.id,
              product: validProd,
              qty: safeQty
            };
          })
          .filter(Boolean);
        return;
      }
    }
  } catch (e) {
    console.warn('Storage validation fallback', e);
  }
  state.cart = [];
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
      window.open(url, '_blank', 'noopener,noreferrer');
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
            <span class="product-yield-badge">${prod.yieldBadge ? prod.yieldBadge : (prod.category === 'cuchareables' ? 'Pote 250 cc' : (prod.category === 'tortas' || prod.category === 'keto' ? (prod.id === 'chocotorta' ? '16 x 18 cm' : 'Diámetro 22 cm') : 'Caja x 25 un.'))}</span>

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
  if (prod.id === 'number-cake') {
    const digitExample = flavorName ? ` (${flavorName})` : '';
    productLine = `• 1x ${prod.name}${digitExample} - ${prod.priceDisplay} (valor por número)\n  (Quisiera coordinar el/los números que necesito)`;
  } else if (prod.category === 'cuchareables') {
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
  window.open(url, '_blank', 'noopener,noreferrer');
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

  const safeText = escapeHtml(text);
  toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg><span>${safeText}</span>`;
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

// ==========================================================================
// Componente Oficial de Reseñas de Google (10 Mejores Reseñas Alternadas)
// ==========================================================================
const GOOGLE_REVIEWS = [
  {
    id: 'carolina-pla',
    name: 'Carolina Pla',
    initial: 'C',
    avatarBg: '#1E88E5',
    date: 'hace 3 semanas',
    stars: 5,
    text: 'Excelente sabor y muy linda presentación de todas las tortas. El lemon pie mi favorito, pero muy recomendables todas. Los vuelvo a elegir sin dudas!'
  },
  {
    id: 'laureano-albers',
    name: 'Laureano Albers',
    initial: 'L',
    avatarBg: '#00897B',
    date: 'hace 1 mes',
    stars: 5,
    text: 'Delicioso todo!!! Pedimos una variedad para el cumple de mí papá y nos quedamos fascinados con la calidad, el sabor y la prolijidad en cada preparación! Muchas Gracias! Recomendamos sin ninguna duda.'
  },
  {
    id: 'sandra-bootz',
    name: 'Sandra Bootz',
    initial: 'S',
    avatarBg: '#E65100',
    date: 'hace 1 mes',
    stars: 5,
    text: 'Super recomendable ! Espectacular presentación y sabores de Shots !!! Riquísimos!!! Muy amorosa Ayelen y su Marido cumplen en los pedidos y mercadería casera y fresca .Altamente recomendable\nGracias chicos'
  },
  {
    id: 'antonella-di-giacomo',
    name: 'Antonella Di Giacomo',
    initial: 'A',
    avatarBg: '#D81B60',
    date: 'hace 2 meses',
    stars: 5,
    text: 'Riquísimo todo! Súper recomendable! Encargué 2 tortas para mi cumple (cheesecake y chocotorta) y estaban increíbles! Todos repitieron y coincidían en lo ricas que eran! Y la atención mención aparte 1000 puntos!!!'
  },
  {
    id: 'milagros-perez-capristo',
    name: 'Milagros Pérez Capristo',
    initial: 'M',
    avatarBg: '#7E57C2',
    date: 'hace 2 semanas',
    stars: 5,
    text: 'Excelente. Riquísimo. No falla! Probé las tortas, son espectaculares, rendidoras y probé los postres individuales y realmente son muy muy ricos. Buenísima la calidad de los productos, se nota lo artesanal, lo fresco. Recomiendo!! Quedas re bien con los postres individuales para llevar a una cena o un almuerzo.'
  },
  {
    id: 'laura-bettina-yoghurtchian',
    name: 'Laura Bettina Yoghurtchian',
    initial: 'L',
    avatarBg: '#C2410C',
    date: 'hace 1 mes',
    stars: 5,
    text: 'La verdad que es la primera vez que los pedía y me sorprendieron ! Excelente producto rico, prolijo un toque dulce y elegante para compartir . 100% recomendable !\nGRACIAS LABRA ❤️'
  },
  {
    id: 'natalia-vilanova',
    name: 'Natalia Vilanova',
    initial: 'N',
    avatarBg: '#43A047',
    date: 'hace 1 mes',
    stars: 5,
    text: 'Ya van dos veces que encargo, todo excelente. La de Maracuyá es espectacular! La caja de petit four también buenísima y super rendidora. Recomiendo 100%'
  },
  {
    id: 'natali-simone',
    name: 'Natali Simone',
    initial: 'N',
    avatarBg: '#D97706',
    date: 'hace 3 semanas',
    stars: 5,
    text: 'Segunda prueba y no defrauda!! Probé los vasitos en un evento y me encantaron! Al tiempo encargué un Cheesecake y un Lemon Pie riquísimos!! Super fresco todo y de calidad, además la presentación impecable super prolija y estética. Super recomiendo! Gracias chicos, sigan así!'
  },
  {
    id: 'leticia-moralejo',
    name: 'Leticia Moralejo',
    initial: 'L',
    avatarBg: '#3949AB',
    date: 'hace 2 meses',
    stars: 5,
    text: 'Recomiendo especialmente la tarta de manzana. Se nota que los ingredientes son de primera calidad. La chocotorta también un 10. Y encima la atención de Aye y Germán hacen que la experiencia termine de ser perfecta! 100% recomendable!'
  },
  {
    id: 'marina-gando',
    name: 'Marina Gando',
    initial: 'M',
    avatarBg: '#AD1457',
    date: 'hace 2 meses',
    stars: 5,
    text: 'El mejor Rogel que comí en mi vida!!!! Un éxito. Hasta los que no comen torta, pidieron repetir!'
  }
];

// Barajado Fisher-Yates para alternar el orden de aparición dinámicamente
function shuffleReviewsList(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Expandir / contraer reseña con "Leer más"
function toggleReviewExpand(btn) {
  const card = btn.closest('.elf-card');
  if (!card) return;
  const isExpanded = card.classList.toggle('expanded');
  btn.textContent = isExpanded ? 'Leer menos' : 'Leer más';
  if (typeof window.onReviewExpandToggle === 'function') {
    window.onReviewExpandToggle(isExpanded);
  }
}

function initGoogleReviewsSlider() {
  const sliderWrap = document.getElementById('elf-reviews-slider');
  const track = document.getElementById('elf-slider-track');
  const viewport = document.getElementById('elf-slider-viewport');
  const dotsContainer = document.getElementById('elf-dots-row');
  const btnPrev = document.getElementById('elf-btn-prev');
  const btnNext = document.getElementById('elf-btn-next');

  if (!sliderWrap || !track || !viewport) return;

  // Barajar las 10 reseñas para que alternen dinámicamente en cada carga
  const activeReviews = shuffleReviewsList(GOOGLE_REVIEWS);

  const starIconSvg = '<svg viewBox="0 0 24 24" class="elf-star-icon" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
  const verifiedBadgeSvg = '<svg class="elf-verified-badge" viewBox="0 0 24 24" aria-label="Verificada" title="Reseña verificada en Google Maps"><circle cx="12" cy="12" r="10" fill="#2E6B3E"/><path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';

  // Renderizar las 10 tarjetas de reseñas
  track.innerHTML = activeReviews.map(r => {
    const starsHtml = starIconSvg.repeat(r.stars);
    const hasReadMore = r.text.length > 95;
    const readMoreHtml = hasReadMore 
      ? '<button type="button" class="elf-read-more" onclick="toggleReviewExpand(this)">Leer más</button>' 
      : '';

    return `
      <div class="elf-card" data-review-id="${r.id}">
        <div class="elf-card-header">
          <div class="elf-avatar" style="background-color: ${r.avatarBg};">${r.initial}</div>
          <div class="elf-author-info">
            <div class="elf-author-name-row">
              <span class="elf-author-name">${r.name}</span>
              ${verifiedBadgeSvg}
            </div>
            <span class="elf-card-date">${r.date}</span>
          </div>
        </div>
        <div class="elf-card-stars">
          ${starsHtml}
        </div>
        <p class="elf-card-text">${r.text}</p>
        ${readMoreHtml}
      </div>
    `;
  }).join('');

  let currentIndex = 0;
  const totalItems = activeReviews.length;
  let autoPlayTimer = null;
  const AUTOPLAY_INTERVAL = 3800; // Desplazamiento automático suave cada 3.8s
  let isPaused = false;

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, totalItems - getVisibleCount());
  }

  function renderDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    const count = maxIdx + 1;
    let dotsHtml = '';
    for (let i = 0; i < count; i++) {
      const activeClass = i === currentIndex ? ' active' : '';
      dotsHtml += `<button type="button" class="elf-dot${activeClass}" data-index="${i}" aria-label="Ir a grupo de reseñas ${i + 1}"></button>`;
    }
    dotsContainer.innerHTML = dotsHtml;

    dotsContainer.querySelectorAll('.elf-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        goToSlide(idx);
        restartAutoPlay();
      });
    });
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.elf-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    const maxIdx = getMaxIndex();
    currentIndex = Math.max(0, Math.min(index, maxIdx));

    const card = track.querySelector('.elf-card');
    if (card) {
      const gap = 16;
      const step = card.offsetWidth + gap;
      track.style.transform = `translateX(-${currentIndex * step}px)`;
    }
    updateDots();
  }

  function nextSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex >= maxIdx) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex <= 0) {
      goToSlide(maxIdx);
    } else {
      goToSlide(currentIndex - 1);
    }
  }

  // Lógica de Autoplay continuo y suave
  function startAutoPlay() {
    stopAutoPlay();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    autoPlayTimer = setInterval(() => {
      if (!isPaused && !document.hidden) {
        nextSlide();
      }
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      prevSlide();
      restartAutoPlay();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      nextSlide();
      restartAutoPlay();
    });
  }

  // Pausa cuando el cursor está sobre las reseñas para facilitar la lectura
  sliderWrap.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  sliderWrap.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  // Pausa si el usuario expande una reseña con "Leer más"
  window.onReviewExpandToggle = function(isExpanded) {
    isPaused = isExpanded;
    if (!isExpanded) {
      restartAutoPlay();
    }
  };

  // Pausar si la pestaña pasa a segundo plano
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Soporte táctil / swipe para móviles
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isPaused = true;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Deslizar izquierda -> siguiente
        nextSlide();
      } else {
        // Deslizar derecha -> anterior
        prevSlide();
      }
    }
    setTimeout(() => {
      isPaused = false;
      restartAutoPlay();
    }, 1200);
  }, { passive: true });

  // Reajustar en cambio de tamaño de pantalla
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderDots();
      goToSlide(currentIndex);
    }, 120);
  });

  // Renderizar indicadores iniciales, posicionar e iniciar auto-slide
  renderDots();
  goToSlide(0);
  startAutoPlay();
}

// ============================================================================
// SIMULADOR INTERACTIVO DE PRESUPUESTOS: "ARMÁ TU MESA DULCE"
// ============================================================================

const SIM_PRODUCTS_CONFIG = {
  tortas: {
    key: 'tortas',
    name: 'Tortas Enteras',
    singularLabel: 'Torta artesanal grande (22 cm)',
    pluralLabel: 'Tortas artesanales grandes (22 cm)',
    unitPrice: 60000,
    slicesPerUnitMin: 12,
    slicesPerUnitMax: 16,
    avgPortions: 14,
    image: 'assets/images/products/torta-rogel.jpg',
    clientDescription: 'Rinde de 12 a 16 porciones abundantes c/u. Sabores a elección (Rogel, Chocotorta, Red Velvet, Lemon Pie, Maracuyá, Cheesecake, Brownie, etc.).'
  },
  shots: {
    key: 'shots',
    name: 'Cajas de Shots / Vasitos x 25',
    singularLabel: 'Caja de 25 Shots / Vasitos dulces',
    pluralLabel: 'Cajas de 25 Shots / Vasitos dulces',
    unitPrice: 60000,
    unitsPerBox: 25,
    image: 'assets/images/products/vasito-chocotorta-solo.jpg',
    clientDescription: 'Cada caja cerrada incluye 25 vasitos individuales listos para servir (Chocotorta, Tiramisú, Lemon Pie, Mousse de Chocolate o Maracuyá).'
  },
  petit: {
    key: 'petit',
    name: 'Cajas de Petit Fours x 25',
    singularLabel: 'Caja de 25 Petit Fours',
    pluralLabel: 'Cajas de 25 Petit Fours',
    unitPrice: 60000,
    unitsPerBox: 25,
    image: 'assets/images/products/petit-four-01.jpg',
    clientDescription: 'Cada caja cerrada incluye 25 bocados de mini pastelería artesanal surtida (mini brownies, mini lemon pie, mini rogel, tartitas).'
  }
};

const SIM_TIERS_META = {
  justo: {
    key: 'justo',
    title: 'Mesa Justa y Necesaria',
    badge: 'Cálculo conservador',
    subtitle: 'Pensada para cumplir muy bien con tus invitados cuidando el presupuesto.'
  },
  clasico: {
    key: 'clasico',
    title: 'Mesa Clásica',
    badge: 'Equilibrio ideal',
    subtitle: 'El cálculo normal y más elegido: porciones generosas y variedad para que todos disfruten cómodos.'
  },
  abundante: {
    key: 'abundante',
    title: 'Mesa Abundante',
    badge: 'Generoso',
    subtitle: 'Para anfitriones que quieren estar 100% tranquilos y que todos los invitados puedan repetir de todo.'
  }
};

const simState = {
  guests: 30,
  selectedProducts: {
    tortas: true,
    shots: true,
    petit: true
  },
  activeStyle: 'clasico', // 'justo' | 'clasico' | 'abundante'
  overrides: {
    justo: null,
    clasico: null,
    abundante: null
  },
  activeShareProposal: null
};

// Calcula las cantidades sugeridas para los 3 niveles basándose en el estándar de oro de catering:
// - Lo Justo y Necesario: ~2 bocados por persona
// - Clásico (Equilibrado): ~3 bocados por persona
// - Abundante (Generoso): ~4 bocados por persona
function calculateSuggestedQuantities(guests, selectedProducts) {
  const g = Math.max(1, Math.min(500, parseInt(guests, 10) || 30));
  const hasTortas = !!selectedProducts.tortas;
  const hasShots = !!selectedProducts.shots;
  const hasPetit = !!selectedProducts.petit;

  const activeCount = (hasTortas ? 1 : 0) + (hasShots ? 1 : 0) + (hasPetit ? 1 : 0);
  if (activeCount === 0) {
    return {
      justo: { tortas: 0, shots: 0, petit: 0 },
      clasico: { tortas: 0, shots: 0, petit: 0 },
      abundante: { tortas: 0, shots: 0, petit: 0 }
    };
  }

  const TARGET_RATIOS = {
    justo: 2.0,
    clasico: 3.0,
    abundante: 4.0
  };

  const CAKE_FACTORS = {
    justo: 0.40,
    clasico: 0.55,
    abundante: 0.75
  };

  function computeTier(tierKey) {
    const targetRatio = TARGET_RATIOS[tierKey];
    const totalTargetPieces = g * targetRatio;
    let tortas = 0;
    let shots = 0;
    let petit = 0;

    // Caso 1: Los 3 productos seleccionados (Mesa Dulce Completa)
    if (hasTortas && hasShots && hasPetit) {
      // Para festejos chicos (<= 25 invitados), Lo Justo no obliga a comprar 2 cajas cerradas:
      // 1 Torta (14 porc.) + 1 Caja de Petits (25 u.) = 39 piezas cubre exactamente ~2 bocados/persona.
      if (tierKey === 'justo' && g <= 25) {
        tortas = 1;
        shots = 0;
        petit = 1;
      } else {
        const cakeRatio = CAKE_FACTORS[tierKey];
        tortas = Math.max(1, Math.round((g * cakeRatio) / 14));
        const remaining = Math.max(0, totalTargetPieces - (tortas * 14));
        shots = Math.max(1, Math.round((remaining * 0.40) / 25));
        const remPetit = Math.max(0, remaining - (shots * 25));
        petit = Math.max(1, Math.round(remPetit / 25));
      }
    }
    // Caso 2: Solo Tortas
    else if (hasTortas && !hasShots && !hasPetit) {
      const cakeCoverage = { justo: 1.0, clasico: 1.15, abundante: 1.35 }[tierKey];
      tortas = Math.max(1, Math.ceil((g * cakeCoverage) / 14));
    }
    // Caso 3: Solo Shots + Petits (sin torta)
    else if (!hasTortas && hasShots && hasPetit) {
      shots = Math.max(1, Math.round((totalTargetPieces * 0.38) / 25));
      const remP = Math.max(0, totalTargetPieces - (shots * 25));
      petit = Math.max(1, Math.ceil(remP / 25));
    }
    // Caso 4: Tortas + Shots (sin petit)
    else if (hasTortas && hasShots && !hasPetit) {
      const cakeRatio = CAKE_FACTORS[tierKey] * 1.25;
      tortas = Math.max(1, Math.round((g * cakeRatio) / 14));
      const rem = Math.max(0, totalTargetPieces - (tortas * 14));
      shots = Math.max(1, Math.ceil(rem / 25));
    }
    // Caso 5: Tortas + Petit (sin shots)
    else if (hasTortas && !hasShots && hasPetit) {
      const cakeRatio = CAKE_FACTORS[tierKey] * 1.25;
      tortas = Math.max(1, Math.round((g * cakeRatio) / 14));
      const rem = Math.max(0, totalTargetPieces - (tortas * 14));
      petit = Math.max(1, Math.ceil(rem / 25));
    }
    // Caso 6: Solo Shots
    else if (!hasTortas && hasShots && !hasPetit) {
      shots = Math.max(1, Math.ceil(totalTargetPieces / 25));
    }
    // Caso 7: Solo Petits
    else if (!hasTortas && !hasShots && hasPetit) {
      petit = Math.max(1, Math.ceil(totalTargetPieces / 25));
    }

    return { tortas, shots, petit };
  }

  const justo = computeTier('justo');
  const clasico = computeTier('clasico');
  const abundante = computeTier('abundante');

  // Escalera progresiva garantizada: asegurar que las 3 opciones sean siempre distintas y comparativas
  let totalJusto = justo.tortas + justo.shots + justo.petit;
  let totalClasico = clasico.tortas + clasico.shots + clasico.petit;

  if (totalClasico <= totalJusto) {
    if (hasPetit) {
      clasico.petit = justo.petit + 1;
    } else if (hasTortas) {
      clasico.tortas = justo.tortas + 1;
    } else if (hasShots) {
      clasico.shots = justo.shots + 1;
    }
    totalClasico = clasico.tortas + clasico.shots + clasico.petit;
  }

  // Clásico nunca tiene menos piezas que Justo
  if (clasico.tortas < justo.tortas) clasico.tortas = justo.tortas;
  if (clasico.shots < justo.shots) clasico.shots = justo.shots;
  if (clasico.petit < justo.petit) clasico.petit = justo.petit;
  totalClasico = clasico.tortas + clasico.shots + clasico.petit;

  // Abundante nunca tiene menos piezas que Clásico y siempre supera el total de Clásico
  if (abundante.tortas < clasico.tortas) abundante.tortas = clasico.tortas;
  if (abundante.shots < clasico.shots) abundante.shots = clasico.shots;
  if (abundante.petit < clasico.petit) abundante.petit = clasico.petit;

  let totalAbundante = abundante.tortas + abundante.shots + abundante.petit;
  if (totalAbundante <= totalClasico) {
    if (hasTortas && abundante.tortas === clasico.tortas) {
      abundante.tortas = clasico.tortas + 1;
    } else if (hasShots && abundante.shots === clasico.shots) {
      abundante.shots = clasico.shots + 1;
    } else if (hasPetit) {
      abundante.petit = clasico.petit + 1;
    }
  }

  return { justo, clasico, abundante };
}

function getEffectiveTierQuantities(tierKey) {
  const suggestedAll = calculateSuggestedQuantities(simState.guests, simState.selectedProducts);
  const base = suggestedAll[tierKey] || { tortas: 0, shots: 0, petit: 0 };
  const override = simState.overrides[tierKey];
  if (override) {
    return {
      tortas: override.tortas,
      shots: override.shots,
      petit: override.petit,
      isEdited: (override.tortas !== base.tortas || override.shots !== base.shots || override.petit !== base.petit)
    };
  }
  return {
    tortas: base.tortas,
    shots: base.shots,
    petit: base.petit,
    isEdited: false
  };
}

function formatYieldSummary(tortasQty, shotsQty, petitQty) {
  const parts = [];
  if (tortasQty > 0) {
    const minSlices = tortasQty * 12;
    const maxSlices = tortasQty * 16;
    parts.push(`${minSlices}-${maxSlices} porc. de torta`);
  }
  const bocados = (shotsQty * 25) + (petitQty * 25);
  if (bocados > 0) {
    parts.push(`${bocados} bocados individuales`);
  }
  if (parts.length === 0) {
    return 'Sin productos seleccionados (usá + para sumar)';
  }
  return `Rinde aprox: ${parts.join(' + ')}`;
}

function formatProductQuantityLine(productKey, qty) {
  if (productKey === 'tortas') {
    if (qty === 0) return '0 Tortas · No incluido';
    const minS = qty * 12;
    const maxS = qty * 16;
    return `${qty} ${qty === 1 ? 'Torta entera' : 'Tortas enteras'} (${minS} a ${maxS} porciones)`;
  }
  if (productKey === 'shots') {
    if (qty === 0) return '0 Cajas · No incluido';
    const units = qty * 25;
    return `${qty} ${qty === 1 ? 'Caja cerrada' : 'Cajas cerradas'} (${units} shots de 250cc/vasitos)`;
  }
  if (productKey === 'petit') {
    if (qty === 0) return '0 Cajas · No incluido';
    const units = qty * 25;
    return `${qty} ${qty === 1 ? 'Caja cerrada' : 'Cajas cerradas'} (${units} petit fours)`;
  }
  return '';
}

function buildSimulatorWhatsAppUrl(tierKey) {
  const meta = SIM_TIERS_META[tierKey];
  const q = getEffectiveTierQuantities(tierKey);
  const totalPrice =
    (q.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice) +
    (q.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice) +
    (q.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice);

  const lines = [
    `¡Hola LABRA! 👋 Estuve armando una propuesta de Mesa Dulce en la web y quiero consultar por este presupuesto:`,
    ``,
    `👥 *Cantidad de invitados:* ${simState.guests} personas`,
    `✨ *Propuesta elegida:* ${meta.title}${q.isEdited ? ' (con cantidades personalizadas)' : ''}`,
    ``,
    `🍰 *Detalle de la mesa dulce:*`
  ];

  if (q.tortas > 0) {
    const minS = q.tortas * 12;
    const maxS = q.tortas * 16;
    lines.push(`• *${q.tortas}x ${q.tortas === 1 ? 'Torta artesanal grande' : 'Tortas artesanales grandes'}* (${minS} a ${maxS} porciones) — ${formatCurrency(q.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice)}`);
  }
  if (q.shots > 0) {
    const units = q.shots * 25;
    lines.push(`• *${q.shots}x ${q.shots === 1 ? 'Caja de Shots dulces x 25 u.' : 'Cajas de Shots dulces x 25 u.'}* (${units} vasitos individuales) — ${formatCurrency(q.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice)}`);
  }
  if (q.petit > 0) {
    const units = q.petit * 25;
    lines.push(`• *${q.petit}x ${q.petit === 1 ? 'Caja de Petit Fours x 25 u.' : 'Cajas de Petit Fours x 25 u.'}* (${units} bocados dulces) — ${formatCurrency(q.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice)}`);
  }

  lines.push(``);
  lines.push(`💰 *Total estimado:* ${formatCurrency(totalPrice)}`);
  lines.push(`🔒 *Seña 50% para reservar:* ${formatCurrency(Math.round(totalPrice / 2))}`);
  lines.push(``);
  lines.push(`¿Tienen disponibilidad para mi fecha? ¡Muchas gracias!`);

  return `https://wa.me/${LABRA_CONFIG.phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function renderSimulatorProposals() {
  const grid = document.getElementById('sim-proposals-grid');
  if (!grid) return;

  const guestsSummaryEl = document.getElementById('sim-summary-guests');
  if (guestsSummaryEl) {
    guestsSummaryEl.textContent = simState.guests;
  }

  const tierOrder = ['justo', 'clasico', 'abundante'];
  let anyEdited = false;

  const cardsHtml = tierOrder.map((tierKey) => {
    const meta = SIM_TIERS_META[tierKey];
    const q = getEffectiveTierQuantities(tierKey);
    if (q.isEdited) anyEdited = true;

    const isSelected = simState.activeStyle === tierKey;
    const totalPrice =
      (q.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice) +
      (q.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice) +
      (q.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice);

    const depositPrice = Math.round(totalPrice / 2);
    const perGuestPrice = simState.guests > 0 ? Math.round(totalPrice / simState.guests) : 0;
    const yieldText = formatYieldSummary(q.tortas, q.shots, q.petit);
    const waUrl = buildSimulatorWhatsAppUrl(tierKey);
    const isEmpty = (q.tortas + q.shots + q.petit) === 0;

    const itemKeys = ['tortas', 'shots', 'petit'];
    const itemsRowsHtml = itemKeys.map((prodKey) => {
      const prodCfg = SIM_PRODUCTS_CONFIG[prodKey];
      const qty = q[prodKey];
      const detailLine = formatProductQuantityLine(prodKey, qty);

      return `
        <div class="sim-item-row ${qty === 0 ? 'is-zero' : ''}">
          <div class="sim-item-info">
            <img src="${prodCfg.image}" alt="${prodCfg.name}" class="sim-item-thumb" loading="lazy">
            <div class="sim-item-text">
              <span class="sim-item-name">${prodCfg.name}</span>
              <span class="sim-item-detail">${detailLine}</span>
            </div>
          </div>
          <div class="sim-item-stepper" aria-label="Ajustar cantidad de ${prodCfg.name}">
            <button type="button" class="sim-qty-btn" onclick="adjustProposalQty('${tierKey}', '${prodKey}', -1)" ${qty <= 0 ? 'disabled' : ''} aria-label="Restar ${prodCfg.name}">−</button>
            <span class="sim-qty-val">${qty}</span>
            <button type="button" class="sim-qty-btn" onclick="adjustProposalQty('${tierKey}', '${prodKey}', 1)" aria-label="Sumar ${prodCfg.name}">+</button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <article class="sim-proposal-card ${isSelected ? 'is-selected' : ''}" data-tier="${tierKey}">
        ${isSelected ? `<div class="sim-card-ribbon">★ Tu Estilo Seleccionado</div>` : ''}
        
        <div class="sim-card-header">
          <div class="sim-card-top-row">
            <h4 class="sim-card-title">${meta.title}</h4>
            <span class="sim-card-badge">${meta.badge}</span>
          </div>
          <p class="sim-card-subtitle">${meta.subtitle}</p>
          <div class="sim-card-yield-pill">
            <span>🍽️ ${yieldText}</span>
          </div>
        </div>

        <div class="sim-card-items">
          ${itemsRowsHtml}
        </div>

        ${q.isEdited ? `
          <button type="button" class="sim-edited-tag" onclick="resetSingleTierOverride('${tierKey}')">
            ↺ Cantidades editadas manualmente · Volver al cálculo sugerido
          </button>
        ` : ''}

        <div class="sim-price-box">
          <div class="sim-price-top">
            <span class="sim-price-label">Total Estimado</span>
            <span class="sim-price-total">${formatCurrency(totalPrice)}</span>
          </div>
          <div class="sim-price-meta">
            <span>Seña 50%: <strong>${formatCurrency(depositPrice)}</strong></span>
            <span>~${formatCurrency(perGuestPrice)} / invitado</span>
          </div>
        </div>

        <div class="sim-card-actions">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-sim-whatsapp ${isEmpty ? 'is-disabled' : ''}" onclick="trackSimulatorWhatsApp('${tierKey}', ${totalPrice})">
            <svg viewBox="0 0 24 24" width="19" height="19"><path fill="currentColor" d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.98-1.002 1.23-.226.25-.452.276-.753.125-.301-.15-1.272-.469-2.424-1.498-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.144 4.549.718.31 1.279.496 1.716.634.721.23 1.378.197 1.898.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zM12.004 2C6.48 2 2 6.48 2 12c0 1.84.5 3.565 1.372 5.044L2.05 22l5.12-1.342A9.957 9.957 0 0 0 12.004 22c5.523 0 10.004-4.48 10.004-10s-4.481-10-10.004-10zm0 18.257c-1.606 0-3.1-.476-4.364-1.3l-.313-.205-3.057.802.816-2.98-.225-.327a8.21 8.21 0 0 1-1.36-4.447c0-4.557 3.708-8.265 8.265-8.265 4.557 0 8.265 3.708 8.265 8.265 0 4.558-3.708 8.266-8.265 8.266z"/></svg>
            <span>Enviar pedido por WhatsApp</span>
          </a>

          <button type="button" class="btn-sim-copy-proposal" onclick="copyProposalTextToClipboard('${tierKey}', this)" title="Copiar presupuesto en texto para WhatsApp" ${isEmpty ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            <span>Copiar propuesta</span>
          </button>
        </div>
      </article>
    `;
  }).join('');

  grid.innerHTML = cardsHtml;

  const resetAllBtn = document.getElementById('sim-reset-all-btn');
  if (resetAllBtn) {
    resetAllBtn.style.display = anyEdited ? 'inline-block' : 'none';
  }
}

function copyProposalTextToClipboard(tierKey, btnElement) {
  const q = getEffectiveTierQuantities(tierKey);
  const totalPrice =
    (q.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice) +
    (q.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice) +
    (q.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice);
  const depositPrice = Math.round(totalPrice / 2);

  const lines = [
    `👥 Cantidad de invitados: ${simState.guests} personas`,
    ``,
    `✨ Detalle de la mesa dulce:`,
    ``
  ];

  if (q.tortas > 0) {
    const minS = q.tortas * 12;
    const maxS = q.tortas * 16;
    const label = q.tortas === 1 ? 'Torta Artesanal Grande' : 'Tortas Artesanales Grandes';
    lines.push(`🎂 ${q.tortas}x ${label} (${minS} a ${maxS} porciones) — ${formatCurrency(q.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice)}`);
  }
  if (q.shots > 0) {
    const units = q.shots * 25;
    const label = q.shots === 1 ? 'Caja de Shots / Vasitos x 25 u.' : 'Cajas de Shots / Vasitos x 25 u.';
    lines.push(`🍨 ${q.shots}x ${label} (${units} unidades) — ${formatCurrency(q.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice)}`);
  }
  if (q.petit > 0) {
    const units = q.petit * 25;
    const label = q.petit === 1 ? 'Caja de Petit Fours x 25 u.' : 'Cajas de Petit Fours x 25 u.';
    lines.push(`🧁 ${q.petit}x ${label} (${units} unidades) — ${formatCurrency(q.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice)}`);
  }

  lines.push(``);
  lines.push(`💳 Total estimado: ${formatCurrency(totalPrice)}`);
  lines.push(`🔒 Seña 50% para reservar: ${formatCurrency(depositPrice)}`);
  lines.push(``);
  lines.push(`¡Cualquier duda, avisame! 😊`);

  const textToCopy = lines.join('\n');

  function notifySuccess() {
    showToast('¡Propuesta copiada al portapapeles! Lista para pegar en WhatsApp');
    if (btnElement) {
      const origHtml = btnElement.innerHTML;
      btnElement.innerHTML = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>¡Copiado!</span>`;
      btnElement.style.color = '#1EBE5B';
      btnElement.style.borderColor = '#1EBE5B';
      setTimeout(() => {
        btnElement.innerHTML = origHtml;
        btnElement.style.color = '';
        btnElement.style.borderColor = '';
      }, 2000);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(notifySuccess).catch(() => {
      fallbackCopyToClipboard(textToCopy, notifySuccess);
    });
  } else {
    fallbackCopyToClipboard(textToCopy, notifySuccess);
  }
}

function fallbackCopyToClipboard(text, onSuccess) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  ta.style.top = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    if (onSuccess) onSuccess();
  } catch (e) {
    showToast('No se pudo copiar automáticamente');
  }
  document.body.removeChild(ta);
}

function adjustProposalQty(tierKey, productKey, delta) {
  const current = getEffectiveTierQuantities(tierKey);
  const nextVal = Math.max(0, Math.min(40, (current[productKey] || 0) + delta));

  simState.overrides[tierKey] = {
    tortas: current.tortas,
    shots: current.shots,
    petit: current.petit,
    [productKey]: nextVal
  };

  renderSimulatorProposals();
}

function resetSingleTierOverride(tierKey) {
  simState.overrides[tierKey] = null;
  renderSimulatorProposals();
  showToast('Cantidades sugeridas restauradas');
}

function resetAllSimulatorOverrides() {
  simState.overrides = { justo: null, clasico: null, abundante: null };
  renderSimulatorProposals();
  showToast('Todas las propuestas volvieron al cálculo sugerido');
}

function trackSimulatorWhatsApp(tierKey, totalPrice) {
  trackAnalyticsEvent('generate_lead', {
    currency: 'ARS',
    value: totalPrice,
    lead_type: 'whatsapp_mesa_dulce_simulator',
    proposal_tier: tierKey,
    guests: simState.guests
  });
}

// ============================================================================
// GENERADOR Y LECTOR DE PROPUESTA COMPARTIBLE PARA CLIENTES
// ============================================================================

function buildShareableProposalUrl(proposalData) {
  let baseUrl;
  if (!window.location.origin || window.location.origin === 'null' || window.location.protocol === 'file:') {
    baseUrl = (typeof LABRA_CONFIG !== 'undefined' && LABRA_CONFIG.siteUrl) 
      ? `${LABRA_CONFIG.siteUrl}/mesa-dulce.html` 
      : 'https://www.labra.com.ar/mesa-dulce.html';
  } else {
    const currentPath = window.location.pathname.replace(/\/index\.html$/, '');
    if (currentPath.endsWith('mesa-dulce.html') || currentPath.endsWith('mesa-dulce')) {
      baseUrl = window.location.origin + currentPath;
    } else {
      baseUrl = window.location.origin + '/mesa-dulce.html';
    }
  }

  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const params = new URLSearchParams();
  params.set('propuesta', '1');
  params.set('inv', String(proposalData.guests));
  params.set('estilo', proposalData.tierKey);
  params.set('t', String(proposalData.tortas));
  params.set('s', String(proposalData.shots));
  params.set('p', String(proposalData.petit));
  if (proposalData.clientName && proposalData.clientName.trim() !== '') {
    params.set('cliente', proposalData.clientName.trim());
  }
  return `${cleanBase}?${params.toString()}`;
}

function openShareProposalModal(tierKey) {
  const q = getEffectiveTierQuantities(tierKey);
  const meta = SIM_TIERS_META[tierKey];
  const totalPrice =
    (q.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice) +
    (q.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice) +
    (q.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice);

  simState.activeShareProposal = {
    tierKey,
    title: meta.title,
    guests: simState.guests,
    tortas: q.tortas,
    shots: q.shots,
    petit: q.petit,
    totalPrice,
    clientName: ''
  };

  const modal = document.getElementById('share-proposal-modal');
  const summaryPill = document.getElementById('share-modal-summary-pill');
  const clientInput = document.getElementById('share-client-name-input');
  const urlInput = document.getElementById('share-generated-url');

  if (clientInput) {
    clientInput.value = '';
  }

  if (summaryPill) {
    const parts = [];
    if (q.tortas > 0) parts.push(`${q.tortas} ${q.tortas === 1 ? 'Torta' : 'Tortas'}`);
    if (q.shots > 0) parts.push(`${q.shots} ${q.shots === 1 ? 'Caja Shots x25' : 'Cajas Shots x25'}`);
    if (q.petit > 0) parts.push(`${q.petit} ${q.petit === 1 ? 'Caja Petit Fours x25' : 'Cajas Petit Fours x25'}`);

    summaryPill.innerHTML = `
      <strong>${meta.title} (${simState.guests} invitados)</strong><br>
      Incluye: ${parts.join(' + ')} · <strong>Total: ${formatCurrency(totalPrice)}</strong>
    `;
  }

  if (urlInput) {
    urlInput.value = buildShareableProposalUrl(simState.activeShareProposal);
  }

  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

function renderClientProposalView(proposalData) {
  const bodyEl = document.getElementById('client-proposal-body');
  if (!bodyEl) return;

  const meta = SIM_TIERS_META[proposalData.tierKey] || SIM_TIERS_META.clasico;
  const totalPrice =
    (proposalData.tortas * SIM_PRODUCTS_CONFIG.tortas.unitPrice) +
    (proposalData.shots * SIM_PRODUCTS_CONFIG.shots.unitPrice) +
    (proposalData.petit * SIM_PRODUCTS_CONFIG.petit.unitPrice);
  const depositPrice = Math.round(totalPrice / 2);

  const greetingText = proposalData.clientName
    ? `Propuesta preparada para ${escapeHtml(proposalData.clientName)}`
    : `Presupuesto de Mesa Dulce · LABRA`;

  const itemsCards = [];

  if (proposalData.tortas > 0) {
    const cfg = SIM_PRODUCTS_CONFIG.tortas;
    const minS = proposalData.tortas * 12;
    const maxS = proposalData.tortas * 16;
    itemsCards.push(`
      <div class="cp-item-card">
        <img src="${cfg.image}" alt="${cfg.name}" class="cp-item-img">
        <div class="cp-item-content">
          <div class="cp-item-qty-title">${proposalData.tortas} ${proposalData.tortas === 1 ? cfg.singularLabel : cfg.pluralLabel}</div>
          <div class="cp-item-desc">
            <strong>Rinde ${minS} a ${maxS} porciones en total.</strong><br>
            ${cfg.clientDescription}
          </div>
        </div>
        <div class="cp-item-subtotal">${formatCurrency(proposalData.tortas * cfg.unitPrice)}</div>
      </div>
    `);
  }

  if (proposalData.shots > 0) {
    const cfg = SIM_PRODUCTS_CONFIG.shots;
    const units = proposalData.shots * 25;
    itemsCards.push(`
      <div class="cp-item-card">
        <img src="${cfg.image}" alt="${cfg.name}" class="cp-item-img">
        <div class="cp-item-content">
          <div class="cp-item-qty-title">${proposalData.shots} ${proposalData.shots === 1 ? cfg.singularLabel : cfg.pluralLabel}</div>
          <div class="cp-item-desc">
            <strong>Son ${units} vasitos individuales en total.</strong><br>
            ${cfg.clientDescription}
          </div>
        </div>
        <div class="cp-item-subtotal">${formatCurrency(proposalData.shots * cfg.unitPrice)}</div>
      </div>
    `);
  }

  if (proposalData.petit > 0) {
    const cfg = SIM_PRODUCTS_CONFIG.petit;
    const units = proposalData.petit * 25;
    itemsCards.push(`
      <div class="cp-item-card">
        <img src="${cfg.image}" alt="${cfg.name}" class="cp-item-img">
        <div class="cp-item-content">
          <div class="cp-item-qty-title">${proposalData.petit} ${proposalData.petit === 1 ? cfg.singularLabel : cfg.pluralLabel}</div>
          <div class="cp-item-desc">
            <strong>Son ${units} bocados dulces en total.</strong><br>
            ${cfg.clientDescription}
          </div>
        </div>
        <div class="cp-item-subtotal">${formatCurrency(proposalData.petit * cfg.unitPrice)}</div>
      </div>
    `);
  }

  // Construir link de WhatsApp de confirmación para el cliente
  const waLines = [
    `¡Hola LABRA! 👋 Vi la propuesta de Mesa Dulce que me armaron para *${proposalData.guests} invitados* (${meta.title}):`,
    ``
  ];
  if (proposalData.tortas > 0) {
    waLines.push(`• ${proposalData.tortas}x ${proposalData.tortas === 1 ? 'Torta Artesanal Grande' : 'Tortas Artesanales Grandes'} (${proposalData.tortas * 12}-${proposalData.tortas * 16} porciones)`);
  }
  if (proposalData.shots > 0) {
    waLines.push(`• ${proposalData.shots}x ${proposalData.shots === 1 ? 'Caja de 25 Shots / Vasitos' : 'Cajas de 25 Shots / Vasitos'} (${proposalData.shots * 25} u.)`);
  }
  if (proposalData.petit > 0) {
    waLines.push(`• ${proposalData.petit}x ${proposalData.petit === 1 ? 'Caja de 25 Petit Fours' : 'Cajas de 25 Petit Fours'} (${proposalData.petit * 25} u.)`);
  }
  waLines.push(``);
  waLines.push(`💰 *Total del presupuesto:* ${formatCurrency(totalPrice)}`);
  waLines.push(`Quiero avanzar con el pedido y elegir los sabores. ¡Gracias!`);

  const confirmWaUrl = `https://wa.me/${LABRA_CONFIG.phone}?text=${encodeURIComponent(waLines.join('\n'))}`;

  bodyEl.innerHTML = `
    <span class="cp-greeting-badge">✨ ${greetingText}</span>
    <h2 class="cp-main-title" id="client-proposal-title">
      Propuesta para ${proposalData.guests} invitados · ${meta.title}
    </h2>
    <p class="cp-intro-text">
      Armamos esta combinación pensada para que en tu evento de <strong>${proposalData.guests} personas</strong> todos disfruten de nuestra pastelería recién horneada.
    </p>

    <div class="cp-items-title">¿Qué incluye esta propuesta?</div>
    <div class="cp-items-list">
      ${itemsCards.join('')}
    </div>

    <div class="cp-total-box">
      <div class="cp-total-row">
        <span class="cp-total-label">Total del Presupuesto</span>
        <span class="cp-total-amount">${formatCurrency(totalPrice)}</span>
      </div>
      <div class="cp-total-details">
        <span>✅ <strong>Reserva:</strong> Se confirma con una seña del 50% (${formatCurrency(depositPrice)}) por transferencia.</span>
        <span>📍 <strong>Entrega:</strong> Retiro por Caballito (CABA) o envío coordinado a domicilio.</span>
        <span>🍰 <strong>Sabores a tu gusto:</strong> Elegís los gustos de las tortas y vasitos al confirmar por WhatsApp.</span>
        <span style="display:block;margin-top:0.35rem;font-size:0.82rem;color:var(--color-text-muted);">📋 Consulta nuestras <a href="terminos.html" target="_blank" style="color:var(--color-olive-dark);text-decoration:underline;">condiciones de seña, cancelación y retiro</a>.</span>
      </div>
    </div>

    <a href="${confirmWaUrl}" target="_blank" rel="noopener noreferrer" class="cp-cta-whatsapp">
      <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.98-1.002 1.23-.226.25-.452.276-.753.125-.301-.15-1.272-.469-2.424-1.498-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.589-.494-.509-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.144 4.549.718.31 1.279.496 1.716.634.721.23 1.378.197 1.898.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zM12.004 2C6.48 2 2 6.48 2 12c0 1.84.5 3.565 1.372 5.044L2.05 22l5.12-1.342A9.957 9.957 0 0 0 12.004 22c5.523 0 10.004-4.48 10.004-10s-4.481-10-10.004-10zm0 18.257c-1.606 0-3.1-.476-4.364-1.3l-.313-.205-3.057.802.816-2.98-.225-.327a8.21 8.21 0 0 1-1.36-4.447c0-4.557 3.708-8.265 8.265-8.265 4.557 0 8.265 3.708 8.265 8.265 0 4.558-3.708 8.266-8.265 8.266z"/></svg>
      <span>Confirmar esta propuesta por WhatsApp</span>
    </a>

    <button type="button" class="cp-secondary-btn" onclick="closeClientProposalAndGoToSimulator()">
      Quiero modificar cantidades o ver otras opciones
    </button>
  `;
}

function closeClientProposalAndGoToSimulator() {
  const clientModal = document.getElementById('client-proposal-modal');
  if (clientModal && clientModal.open) {
    clientModal.close();
  }
  const section = document.getElementById('mesa-dulce');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function checkSharedProposalUrlOnLoad() {
  let searchStr = window.location.search;
  if (!searchStr && window.location.hash.includes('?')) {
    searchStr = window.location.hash.substring(window.location.hash.indexOf('?'));
  } else if (!searchStr && window.location.hash.includes('propuesta=')) {
    searchStr = '?' + window.location.hash.replace(/^#/, '');
  }

  const params = new URLSearchParams(searchStr);
  if (params.get('propuesta') !== '1') return;

  const clientModal = document.getElementById('client-proposal-modal');
  // Si abrieron el link en la portada (index.html), redirigir fluidamente a mesa-dulce.html
  if (!clientModal && !window.location.pathname.includes('mesa-dulce')) {
    window.location.replace('mesa-dulce.html' + window.location.search + window.location.hash);
    return;
  }

  const guests = Math.max(1, Math.min(500, parseInt(params.get('inv'), 10) || 30));
  const rawTier = params.get('estilo') || 'clasico';
  const tierKey = ['justo', 'clasico', 'abundante'].includes(rawTier) ? rawTier : 'clasico';
  const tortas = Math.max(0, Math.min(50, parseInt(params.get('t'), 10) || 0));
  const shots = Math.max(0, Math.min(50, parseInt(params.get('s'), 10) || 0));
  const petit = Math.max(0, Math.min(50, parseInt(params.get('p'), 10) || 0));
  const clientName = sanitizeText(params.get('cliente') || '', 50);

  if (tortas + shots + petit === 0) return;

  // Sincronizar también el simulador de fondo con los datos del link
  simState.guests = guests;
  simState.activeStyle = tierKey;
  simState.selectedProducts = {
    tortas: tortas > 0,
    shots: shots > 0,
    petit: petit > 0
  };
  simState.overrides[tierKey] = { tortas, shots, petit };

  const guestsInput = document.getElementById('sim-guests-input');
  if (guestsInput) guestsInput.value = guests;

  renderSimulatorProposals();

  const proposalData = {
    tierKey,
    guests,
    tortas,
    shots,
    petit,
    clientName
  };

  renderClientProposalView(proposalData);
  if (clientModal) {
    setTimeout(() => {
      try {
        if (typeof clientModal.showModal === 'function') {
          if (!clientModal.open) clientModal.showModal();
        } else {
          clientModal.setAttribute('open', '');
        }
      } catch (err) {
        clientModal.setAttribute('open', '');
      }
    }, 60);
  }
}

function initMesaDulceSimulator() {
  const guestsInput = document.getElementById('sim-guests-input');
  const minusBtn = document.getElementById('sim-guests-minus');
  const plusBtn = document.getElementById('sim-guests-plus');
  const presetChips = document.querySelectorAll('.sim-preset-chip');
  const productCheckboxes = document.querySelectorAll('.sim-product-checkbox');
  const styleBtns = document.querySelectorAll('.sim-style-btn');

  if (!guestsInput) return;

  function syncPresetChips(guestsVal) {
    presetChips.forEach(chip => {
      const chipVal = parseInt(chip.dataset.guests, 10);
      chip.classList.toggle('active', chipVal === guestsVal);
    });
  }

  function updateGuestsValue(newVal) {
    const raw = parseInt(newVal, 10);
    const clamped = Math.max(1, Math.min(500, isNaN(raw) ? 30 : raw));
    simState.guests = clamped;
    guestsInput.value = clamped;
    simState.overrides = { justo: null, clasico: null, abundante: null };
    syncPresetChips(clamped);
    renderSimulatorProposals();
  }

  guestsInput.addEventListener('input', (e) => {
    const raw = parseInt(e.target.value, 10);
    if (!isNaN(raw) && raw >= 1) {
      simState.guests = Math.min(500, raw);
      simState.overrides = { justo: null, clasico: null, abundante: null };
      syncPresetChips(simState.guests);
      renderSimulatorProposals();
    }
  });

  guestsInput.addEventListener('change', (e) => {
    updateGuestsValue(e.target.value);
  });

  guestsInput.addEventListener('blur', (e) => {
    updateGuestsValue(e.target.value);
  });

  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      updateGuestsValue(simState.guests - 1);
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      updateGuestsValue(simState.guests + 1);
    });
  }

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      updateGuestsValue(chip.dataset.guests);
    });
  });

  productCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const val = e.target.value;
      const isChecked = e.target.checked;

      // Evitar que queden los 3 desmarcados al mismo tiempo
      const nextState = { ...simState.selectedProducts, [val]: isChecked };
      if (!nextState.tortas && !nextState.shots && !nextState.petit) {
        e.target.checked = true;
        showToast('Elegí al menos un producto para cotizar la mesa dulce');
        return;
      }

      simState.selectedProducts[val] = isChecked;
      const cardLabel = e.target.closest('.sim-product-check-card');
      if (cardLabel) {
        cardLabel.classList.toggle('checked', isChecked);
      }

      simState.overrides = { justo: null, clasico: null, abundante: null };
      renderSimulatorProposals();
    });
  });

  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const styleKey = btn.dataset.style || 'clasico';
      simState.activeStyle = styleKey;

      styleBtns.forEach(b => {
        const active = b.dataset.style === styleKey;
        b.classList.toggle('active', active);
        b.setAttribute('aria-checked', active ? 'true' : 'false');
      });

      renderSimulatorProposals();

      // En pantallas móviles hacer scroll suave hacia la tarjeta elegida
      if (window.innerWidth <= 992) {
        const selectedCard = document.querySelector(`.sim-proposal-card[data-tier="${styleKey}"]`);
        if (selectedCard) {
          selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });

  // Eventos de los modales de Compartir Propuesta y Vista Cliente
  const shareModal = document.getElementById('share-proposal-modal');
  const shareCloseBtn = document.getElementById('share-modal-close-btn');
  const shareClientInput = document.getElementById('share-client-name-input');
  const shareUrlInput = document.getElementById('share-generated-url');
  const copyUrlBtn = document.getElementById('btn-copy-proposal-url');
  const copyWaTextBtn = document.getElementById('btn-copy-whatsapp-text');
  const previewClientBtn = document.getElementById('btn-preview-client-view');

  if (shareCloseBtn && shareModal) {
    shareCloseBtn.addEventListener('click', () => shareModal.close());
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) shareModal.close();
    });
  }

  if (shareClientInput && shareUrlInput) {
    shareClientInput.addEventListener('input', (e) => {
      if (!simState.activeShareProposal) return;
      simState.activeShareProposal.clientName = e.target.value;
      shareUrlInput.value = buildShareableProposalUrl(simState.activeShareProposal);
    });
  }

  if (copyUrlBtn && shareUrlInput) {
    copyUrlBtn.addEventListener('click', () => {
      const urlToCopy = shareUrlInput.value;
      navigator.clipboard.writeText(urlToCopy).then(() => {
        showToast('¡Link de propuesta copiado al portapapeles!');
        copyUrlBtn.textContent = '¡Copiado! ✓';
        setTimeout(() => { copyUrlBtn.textContent = 'Copiar Link'; }, 2200);
      }).catch(() => {
        shareUrlInput.select();
        document.execCommand('copy');
        showToast('¡Link copiado!');
      });
    });
  }

  if (copyWaTextBtn && shareUrlInput) {
    copyWaTextBtn.addEventListener('click', () => {
      if (!simState.activeShareProposal) return;
      const p = simState.activeShareProposal;
      const url = shareUrlInput.value;
      const saludo = p.clientName ? `¡Hola ${p.clientName}!` : `¡Hola!`;

      const details = [];
      if (p.tortas > 0) details.push(`• ${p.tortas} ${p.tortas === 1 ? 'Torta grande (12-16 porc.)' : 'Tortas grandes (' + (p.tortas * 12) + '-' + (p.tortas * 16) + ' porc.)'}`);
      if (p.shots > 0) details.push(`• ${p.shots} ${p.shots === 1 ? 'Caja de 25 Shots dulces' : 'Cajas de 25 Shots dulces'} (${p.shots * 25} u.)`);
      if (p.petit > 0) details.push(`• ${p.petit} ${p.petit === 1 ? 'Caja de 25 Petit Fours' : 'Cajas de 25 Petit Fours'} (${p.petit * 25} u.)`);

      const msg = [
        `${saludo} 😊 Te armé esta propuesta de Mesa Dulce de *LABRA Pastelería* para *${p.guests} invitados* (${p.title}):`,
        ``,
        ...details,
        ``,
        `💰 *Total:* ${formatCurrency(p.totalPrice)}`,
        ``,
        `👉 Tocá este link para ver el presupuesto completo con fotos y detalles de forma súper clara:`,
        url
      ].join('\n');

      navigator.clipboard.writeText(msg).then(() => {
        showToast('¡Mensaje + Link copiado! Ya podés pegarlo en el WhatsApp del cliente');
      }).catch(() => {
        showToast('Copiá el link de arriba para enviarlo');
      });
    });
  }

  if (previewClientBtn) {
    previewClientBtn.addEventListener('click', () => {
      if (!simState.activeShareProposal) return;
      if (shareModal && shareModal.open) shareModal.close();
      renderClientProposalView(simState.activeShareProposal);
      const clientModal = document.getElementById('client-proposal-modal');
      if (clientModal && typeof clientModal.showModal === 'function') {
        clientModal.showModal();
      }
    });
  }

  const clientModal = document.getElementById('client-proposal-modal');
  const clientCloseBtn = document.getElementById('client-proposal-close-btn');
  if (clientCloseBtn && clientModal) {
    clientCloseBtn.addEventListener('click', () => clientModal.close());
    clientModal.addEventListener('click', (e) => {
      if (e.target === clientModal) clientModal.close();
    });
  }

  // Render inicial de las 3 propuestas
  renderSimulatorProposals();
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
window.toggleReviewExpand = toggleReviewExpand;
window.adjustProposalQty = adjustProposalQty;
window.resetSingleTierOverride = resetSingleTierOverride;
window.resetAllSimulatorOverrides = resetAllSimulatorOverrides;
window.openShareProposalModal = openShareProposalModal;
window.closeClientProposalAndGoToSimulator = closeClientProposalAndGoToSimulator;
window.trackSimulatorWhatsApp = trackSimulatorWhatsApp;
window.copyProposalTextToClipboard = copyProposalTextToClipboard;
