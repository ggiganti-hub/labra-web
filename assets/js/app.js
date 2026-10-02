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
    shortDesc: 'Finas capas de masa crocante casera, abundante dulce de leche repostero, frambuesas naturales y merengue italiano.',
    longDesc: 'Un emblema de la pastelería artesanal argentina en la versión distintiva de LABRA. Capas ultrafinas y crocantes de masa horneadas una a una, intercaladas con generoso dulce de leche repostero de primera línea y un toque ácido de frambuesas frescas que equilibra la dulzura. Coronada con abundantes picos de merengue italiano tostado al soplete.',
    ingredients: ['Finas capas de masa crocante', 'Dulce de leche repostero premium', 'Frambuesas naturales', 'Merengue italiano flameado'],
    yield: 'Diámetro 20-22 cm · Rinde de 10 a 14 porciones',
    storage: 'Conservar en heladera hasta 4 días. Para apreciar mejor la textura crocante, retirar 15 minutos antes de consumir.',
    image: 'assets/images/products/torta-rogel.jpg',
    badges: ['Favorito', 'Clásico'],
    badgeType: 'badge-olive'
  },
  {
    id: 'cheesecake-clasico',
    name: 'Cheesecake Tradicional',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa sucrée crocante de manteca, suave y aireada crema de queso horneada y abundante coulis con frutos rojos.',
    longDesc: 'Textura sedosa y aterciopelada lograda con una cocción lenta a temperatura controlada. Sobre una base dorada de masa sucrée casera con manteca de primera calidad, una crema de queso suavemente aromatizada y una generosa cubierta de coulis brillante elaborado con frutos rojos naturales enteros (frambuesas, moras y arándanos).',
    ingredients: ['Masa sucrée casera', 'Crema de queso horneada', 'Frutos rojos naturales seleccionados', 'Coulis casero'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Mantener siempre refrigerado entre 2°C y 6°C. Servir bien frío.',
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
    shortDesc: 'Masa sablée crocante, curd cremoso de limón con balance cítrico perfecto y delicados picos de merengue suave.',
    longDesc: 'El equilibrio exacto entre acidez cítrica y dulzura. Partimos de una base crocante de masa sablée de manteca perfumada con ralladura de limón, un relleno suntuoso cocido lentamente con jugo fresco de limones amarillos y una cobertura artesanal de picos de merengue suave y brillante tostados al punto justo.',
    ingredients: ['Masa sablée crocante', 'Curd artesanal de limones frescos', 'Merengue italiano suave'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en frío. Consumir dentro de las 72 horas para disfrutar la frescura óptima del merengue.',
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
    shortDesc: 'Vainillas caseras, almíbar de café de especialidad y licor marsala, auténtica crema de mascarpone y chocolate amargo.',
    longDesc: 'Receta fiel a la tradición con un sello de calidad artesanal. Elaboramos nuestras propias vainillas horneadas en el taller, humedecidas en un almíbar preparado con café de especialidad recién infusionado y un toque aromático de licor marsala. Capas de suntuosa crema de queso mascarpone y cacao amargo seleccionado.',
    ingredients: ['Vainillas artesanales de la casa', 'Café de especialidad', 'Licor Marsala', 'Queso Mascarpone', 'Cacao amargo puro'],
    yield: 'Diámetro 20 cm · Rinde de 10 a 12 porciones',
    storage: 'Mantener refrigerado. Requiere cadena de frío constante.',
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
    shortDesc: 'Doble masa sablée de almendras tostadas, generosos copones de dulce de leche, crema fresca y lluvia de frutos rojos.',
    longDesc: 'Una de las creaciones más celebradas de LABRA. Masa sablée enriquecida con almendras tostadas molidas en casa, que le otorgan una textura crocante y un sabor a frutos secos inconfundible. Rellena con copetes densos de dulce de leche repostero, crema chantilly fresca sedosa y una abundancia de frutos rojos frescos de estación.',
    ingredients: ['Harina de almendras tostadas', 'Masa sablée de manteca', 'Dulce de leche repostero', 'Crema fresca batida', 'Frutos rojos enteros'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 14 porciones',
    storage: 'Conservar en heladera hasta 3 días. Servir fría.',
    image: 'assets/images/products/torta-sablee-almendras.jpg',
    badges: ['Almendras Tostadas', 'Frutos Rojos'],
    badgeType: 'badge-rose'
  },
  {
    id: 'chocotorta',
    name: 'Chocotorta Especial',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Galletitas Chocolinas embebidas en café y oporto, entrelazadas con suave crema de ddl y queso (formato 16x18cm).',
    longDesc: 'El clásico argentino elevado a pastelería fina. Múltiples capas de galletitas Chocolinas humedecidas en una reducción tibia de café espresso con un toque elegante de vino oporto. Intercaladas con una crema sedosa de dulce de leche y queso crema batido al punto justo. Decorada artesanalmente con picos definidos y chips crocantes.',
    ingredients: ['Galletitas Chocolinas originales', 'Café espresso y licor oporto', 'Dulce de leche repostero', 'Queso crema'],
    yield: 'Formato rectangular 16 x 18 cm · Rinde 10 a 12 porciones',
    storage: 'Conservar en frío. Gana consistencia y cremosidad con el reposo.',
    image: 'assets/images/products/torta-chocotorta.jpg',
    badges: ['Un Clásico Único'],
    badgeType: 'badge-olive'
  },
  {
    id: 'brownie',
    name: 'Torta Brownie con DDL y Merengue',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Brownie húmedo con nueces seleccionadas, generosa capa de dulce de leche repostero y merengue italiano flameado.',
    longDesc: 'Para los apasionados del chocolate genuino. Base densa y húmeda de brownie elaborada con chocolate semiamargo y trozos crocantes de nueces tostadas. Sobre ella, una generosa montaña de dulce de leche repostero y una corona suntuosa de merengue italiano tostado al fuego vivo.',
    ingredients: ['Chocolate semiamargo', 'Nueces seleccionadas tostadas', 'Dulce de leche repostero', 'Merengue italiano'],
    yield: 'Diámetro 22 cm · Rinde de 12 a 14 porciones',
    storage: 'Se conserva en heladera o temperatura fresca. Retirar 20 minutos antes de servir para potenciar la humedad del chocolate.',
    image: 'assets/images/products/torta-brownie.jpg',
    badges: ['Super Chocolatosa'],
    badgeType: 'badge-olive'
  },
  {
    id: 'maracuya-pie',
    name: 'Maracuyá Pie',
    category: 'tortas',
    price: 65000,
    priceDisplay: '$65.000',
    shortDesc: 'Masa sablée crocante, crema de pulpa natural de maracuyá, coulis brillante con semillas y merengue decorado.',
    longDesc: 'Una explosión tropical refrescante y sofisticada. Masa sablée de manteca horneada dorada, rellena con una crema suave elaborada a partir de pulpa pura de maracuyá. Terminada con coulis con sus semillas naturales y un artístico diseño de rosas de merengue italiano.',
    ingredients: ['Masa sablée casera', 'Pulpa pura de maracuyá', 'Coulis de maracuyá con semillas', 'Merengue italiano'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Conservar en heladera entre 2°C y 6°C.',
    image: 'assets/images/products/torta-maracuya.jpg',
    badges: ['Tropical & Exótico'],
    badgeType: 'badge-rose'
  },
  {
    id: 'manzana-especiada',
    name: 'Manzana Especiada',
    category: 'tortas',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Masa tierna especiada, manzanas verdes caramelizadas y un abundante crumble crocante con almendras.',
    longDesc: 'El sabor reconfortante de la pastelería de hogar llevada a su máxima expresión. Masa especiada con canela en rama y nuez moscada, relleno abundante de manzanas verdes caramelizadas en manteca y azúcar rubia, y una capa superior dorada de crumble crocante con frutos secos.',
    ingredients: ['Masa suavemente especiada', 'Manzanas verdes caramelizadas', 'Canela de Ceilán', 'Crumble crocante de manteca y almendras'],
    yield: 'Diámetro 22 cm · Rinde de 10 a 12 porciones',
    storage: 'Excelente tanto a temperatura ambiente como tibia con una bocha de helado de crema.',
    image: 'assets/images/products/torta-manzana.jpg',
    badges: ['Canela & Crumble'],
    badgeType: 'badge-olive'
  },
  {
    id: 'cheesecake-keto',
    name: 'Cheesecake Keto (Sin Harinas ni Azúcar)',
    category: 'keto',
    price: 60000,
    priceDisplay: '$60.000',
    shortDesc: 'Crema de queso horneada estilo vasca con frutos rojos naturales. Sin harinas refinadas ni azúcar agregada.',
    longDesc: 'Diseñada para quienes priorizan un estilo de vida bajo en carbohidratos o sin azúcares agregados, sin renunciar al placer de una auténtica pieza de pastelería artesanal. Horneada estilo tarta de queso quemada/vasca en papel vegetal, con textura extra cremosa y terminación de frutos rojos naturales.',
    ingredients: ['Crema de queso primera calidad', 'Huevos frescos de campo', 'Endulzante natural', 'Frutos rojos naturales (Sin harinas añadidas)'],
    yield: 'Diámetro 20 cm · Rinde de 8 a 10 porciones',
    storage: 'Mantener en heladera. Apta para estilo de vida Low Carb / Keto.',
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
    shortDesc: 'Capas de Chocolinas humedecidas en café y oporto, con suave crema de dulce de leche y queso crema.',
    longDesc: 'Vasitos individuales de Chocotorta artesanal, pensados para mesas dulces, cumpleaños y celebraciones en porciones exactas. Múltiples capas de galletitas Chocolinas humedecidas en reducción tibia de café y licor oporto, combinadas con la cremosa receta de dulce de leche repostero y queso crema. La caja cerrada incluye 25 unidades listas para disfrutar.',
    ingredients: ['Galletitas Chocolinas originales', 'Café espresso y oporto', 'Dulce de leche repostero premium', 'Queso crema especial'],
    yield: 'Caja x 25 vasitos individuales',
    storage: 'Mantener en heladera en su caja cerrada hasta el momento de servir.',
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
    shortDesc: 'Vainillas artesanales en café de especialidad y marsala, auténtica crema de mascarpone y cacao amargo.',
    longDesc: 'El sabor tradicional italiano en formato individual de alta pastelería. Vainillas caseras elaboradas en el taller humedecidas en café de especialidad recién infusionado y licor marsala, entrelazadas con auténtica crema de queso mascarpone y espolvoreadas con chocolate amargo. La caja armada contiene 25 vasitos individuales.',
    ingredients: ['Vainillas artesanales de la casa', 'Café de especialidad', 'Licor Marsala', 'Queso Mascarpone auténtico', 'Cacao amargo puro'],
    yield: 'Caja x 25 vasitos individuales',
    storage: 'Mantener en heladera con cadena de frío constante.',
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
    shortDesc: 'Base crocante de masa sablée de manteca, curd cremoso de limones frescos y suaves picos de merengue.',
    longDesc: 'El balance cítrico perfecto en porciones individuales listas para deleitar sin necesidad de vajilla. Base dorada y crocante de masa sablée artesanal de manteca, curd suave elaborado a fuego lento con jugo fresco de limones naturales y coronado con merengue suave y perlitas crocantes. La caja armada incluye 25 unidades.',
    ingredients: ['Masa sablée crocante de manteca', 'Curd artesanal de limones frescos', 'Merengue suave flameado', 'Perlitas crocantes'],
    yield: 'Caja x 25 vasitos individuales',
    storage: 'Conservar en frío entre 2°C y 6°C.',
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
    shortDesc: 'Masa sablée crocante, cremosa mousse de pulpa natural de maracuyá, coulis con semillas y merengue.',
    longDesc: 'Explosión tropical fresca y sofisticada en formato vasito individual. Base crocante de masa sablée de manteca, cremosa mousse elaborada con pulpa pura de maracuyá sin aditivos, cubierta con coulis con sus semillas naturales y merengue italiano. La caja armada contiene 25 vasitos listos para lucir en tu mesa dulce.',
    ingredients: ['Masa sablée casera', 'Pulpa pura de maracuyá natural', 'Coulis de maracuyá con semillas', 'Merengue italiano'],
    yield: 'Caja x 25 vasitos individuales',
    storage: 'Conservar refrigerado en heladera.',
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
    shortDesc: 'Exquisito surtido fino x 25 bocados: Mini Rogel, Mini Sablée de almendras con frutos del bosque, y Mini Brownie con dulce de leche y merengue.',
    longDesc: 'Un desfile de texturas y sabores en formato miniatura. Cada caja contiene 25 bocados elaborados con la misma dedicación y precisión que nuestras tortas grandes: Mini Rogel de finas capas, Mini Sablée de almendras con copón de crema y arándanos, y cuadraditos húmedos de Brownie con dulce de leche y merengue.',
    ingredients: ['Mini Rogel crocante', 'Mini Sablée de almendras y frutos rojos', 'Mini Brownie con ddl y merengue'],
    yield: 'Caja cerrada x 25 piezas de petit four surtidas',
    storage: 'Conservar refrigerado. Servir a temperatura ambiente fresca.',
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
        <div style="font-size: 2.5rem; margin-bottom: 0.8rem;">🍰</div>
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
        <span class="card-photo-count-badge">📷 2 fotos</span>
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
            <span class="product-yield-badge">${prod.category === 'tortas' || prod.category === 'keto' ? '10 a 12 porciones' : '25 unidades'}</span>

            <div class="product-card-actions">
              <button class="btn-card-whatsapp" onclick="orderSingleProductDirectly('${prod.id}')" title="Pedir por WhatsApp">
                <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                Pedir
              </button>

              <button class="btn-card-add" onclick="addToOrder('${prod.id}', 1)" title="Sumar a mi lista de pedido">
                + Sumar
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Cambiar foto activa en la tarjeta (Vasito solo / Caja x 25)
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

  const dialog = document.getElementById('product-modal');
  const imgEl = document.getElementById('modal-img');
  const catEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const priceEl = document.getElementById('modal-price');
  const descEl = document.getElementById('modal-desc');
  const ingredientsListEl = document.getElementById('modal-ingredients-list');
  const yieldEl = document.getElementById('modal-yield');
  const storageEl = document.getElementById('modal-storage');
  const addBtn = document.getElementById('modal-btn-add');
  const directBtn = document.getElementById('modal-btn-direct');
  const thumbsContainer = document.getElementById('modal-gallery-thumbs');
  const imgBadge = document.getElementById('modal-img-badge');

  if (imgEl) {
    imgEl.src = prod.image;
    imgEl.alt = `${prod.name} - LABRA Pastelería`;
    imgEl.style.opacity = '1';
  }
  if (catEl) catEl.textContent = formatCategoryName(prod.category);
  if (titleEl) titleEl.textContent = prod.name;
  if (priceEl) priceEl.textContent = prod.priceDisplay;
  if (descEl) descEl.textContent = prod.longDesc;
  if (yieldEl) yieldEl.textContent = prod.yield;
  if (storageEl) storageEl.textContent = prod.storage;

  // Renderizado dinámico de galería si el producto tiene 2 imágenes
  if (prod.images && prod.images.length > 1) {
    if (imgBadge) {
      imgBadge.style.display = 'inline-block';
      imgBadge.textContent = `Foto: ${prod.images[0].label}`;
    }
    if (thumbsContainer) {
      thumbsContainer.style.display = 'flex';
      thumbsContainer.innerHTML = `
        <span class="dialog-thumbs-label">Vistas disponibles (hacé click para alternar):</span>
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
          thumbBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (imgEl && prod.images[idx]) {
            imgEl.style.opacity = '0.35';
            setTimeout(() => {
              imgEl.src = prod.images[idx].src;
              imgEl.alt = `${prod.name} - ${prod.images[idx].label}`;
              imgEl.style.opacity = '1';
            }, 100);
          }
          if (imgBadge && prod.images[idx]) {
            imgBadge.textContent = `Foto: ${prod.images[idx].label}`;
          }
        });
      });
    }
  } else {
    if (imgBadge) imgBadge.style.display = 'none';
    if (thumbsContainer) thumbsContainer.style.display = 'none';
  }

  if (ingredientsListEl) {
    ingredientsListEl.innerHTML = prod.ingredients.map(ing => `<li>${ing}</li>`).join('');
  }

  if (addBtn) {
    addBtn.onclick = () => {
      addToOrder(prod.id, 1);
      dialog.close();
    };
  }

  if (directBtn) {
    directBtn.onclick = () => {
      orderSingleProductDirectly(prod.id);
      dialog.close();
    };
  }

  dialog.showModal();
}

// Sumar producto al pedido
function addToOrder(productId, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

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
          <button class="qty-btn" onclick="updateOrderItemQty('${item.id}', -1)" title="Reducir">－</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateOrderItemQty('${item.id}', 1)" title="Aumentar">＋</button>
          <button class="drawer-item-delete" onclick="removeOrderItem('${item.id}')" title="Eliminar">✕</button>
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

// Generador del texto para WhatsApp
function generateOrderTextMessage() {
  let lines = [];
  lines.push('¡Hola LABRA Pastelería! 🍰');
  lines.push('Quisiera hacer una consulta / pedido con los siguientes productos:');
  lines.push('');

  let total = 0;
  state.cart.forEach(item => {
    const subtotal = item.product.price * item.qty;
    total += subtotal;
    lines.push(`• ${item.qty}x ${item.product.name} (${formatCurrency(subtotal)})`);
  });

  lines.push('');
  lines.push(`💰 Total estimado: ${formatCurrency(total)}`);

  if (state.targetDate) {
    const [y, m, d] = state.targetDate.split('-');
    lines.push(`📅 Fecha deseada: ${d}/${m}/${y}`);
  }

  lines.push(`📍 Modalidad: ${state.deliveryMethod || 'Retiro por Caballito'}`);

  if (state.clientName && state.clientName.trim()) {
    lines.push(`👤 Nombre: ${state.clientName.trim()}`);
  }

  if (state.notes && state.notes.trim()) {
    lines.push(`📝 Observaciones: ${state.notes.trim()}`);
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
function orderSingleProductDirectly(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const msg = [
    '¡Hola LABRA Pastelería! 🍰',
    `Quisiera encargar:`,
    `• 1x ${prod.name} (${prod.priceDisplay})`,
    '',
    `📍 Retiro por Caballito (con 48 hs de anticipación).`,
    '¿Tienen disponibilidad en estos días? ¡Gracias!'
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

  toast.innerHTML = `<span>✨</span><span>${text}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
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

