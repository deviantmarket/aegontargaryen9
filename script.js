// =====================================================
// CONFIGURACIÓN DE LA TIENDA
// =====================================================
const PHONE_NUMBER = "18494268576";
const SERVER_NAME = "Dream Y0002 NA";
const VENDOR_NAME = "AegonTargaryen9";
const PRICE_PER_1M_LINKS = 1.00;
const STORAGE_KEY = "oh_market_cart_v1";

// =====================================================
// CATÁLOGO COMPLETO DE DEVIANTS
// =====================================================
const DEVIANTS_DATA = [
  // --- STARFALL ---
  {
    id: "medusa-polar",
    name: "Medusa Polar",
    category: "Starfall",
    price: 20,
    img: "Medusa Polar.jpeg",
    desc: "Deviant Starfall exclusivo de alto rendimiento.",
    highlight: "Top Starfall"
  },
  {
    id: "vudu",
    name: "Vudú",
    category: "Starfall",
    price: 20,
    img: "Vudú.jpeg",
    desc: "Deviant Starfall versátil para combate y control.",
    highlight: "Popular"
  },
  {
    id: "sol",
    name: "Sol",
    category: "Starfall",
    price: 20,
    img: "Sol.jpeg",
    desc: "Deviant Starfall radiante de gran potencia.",
    highlight: "Top Tier"
  },
  {
    id: "zapamandra",
    name: "Zapamandra",
    category: "Starfall",
    price: 20,
    img: "Zapamandra.jpeg",
    desc: "Deviant Starfall elemental eléctrico letal.",
    highlight: "Nuevo"
  },
  {
    id: "minicomilon-starfall",
    name: "Minicomilón",
    category: "Starfall",
    price: 20,
    img: "Minicomilón.jpeg",
    desc: "Deviant Starfall de recolección y asistencia.",
    highlight: "Destacado"
  },

  // --- LUNAR ---
  {
    id: "lobo",
    name: "Lobo",
    category: "Lunar",
    price: 15,
    img: "Lobo.jpeg",
    desc: "Deviant Lunar de agilidad y ataque veloz.",
    highlight: "Top Combate"
  },
  {
    id: "camara",
    name: "Cámara",
    category: "Lunar",
    price: 15,
    img: "Cámara.jpeg",
    desc: "Deviant Lunar de soporte estratégico y visión.",
    highlight: "Utilidad"
  },
  {
    id: "pyro-dino",
    name: "Pyro Dino",
    category: "Lunar",
    price: 15,
    img: "Pirodino.jpeg",
    desc: "Deviant Lunar con daño ígneo en área continuo.",
    highlight: "Daño Fuego"
  },
  {
    id: "hada-nieves",
    name: "Hada de las Nieves",
    category: "Lunar",
    price: 15,
    img: "Hada de las nieves.jpeg",
    desc: "Deviant Lunar con congelación y ralentización táctica.",
    highlight: "Control Frío"
  },
  {
    id: "zenopurificador",
    name: "Zenopurificador",
    category: "Lunar",
    price: 15,
    img: "Zenopurificador.jpeg",
    desc: "Deviant Lunar de purificación y soporte de territorio.",
    highlight: "Territorio"
  },
  {
    id: "mariposa-lunar",
    name: "Mariposa Lunar",
    category: "Lunar",
    price: 10,
    img: "Mariposa Lunar.jpeg",
    desc: "Deviant Lunar ágil y ligera para apoyo inicial.",
    highlight: "Económico"
  },

  // --- CAOS ---
  {
    id: "hada-caos",
    name: "Hada del Caos",
    category: "Caos",
    price: 15,
    img: "hada del caos.jpg",
    desc: "Deviant Caos con habilidades impredecibles de combate.",
    highlight: "Caos Especial"
  },
  {
    id: "mini-maravilla",
    name: "Mini Maravilla del Caos",
    category: "Caos",
    price: 15,
    img: "minimaravilla.webp",
    desc: "Deviant Caos compacto de gran poder ofensivo.",
    highlight: "Alta Potencia"
  },
  {
    id: "mr-wish-caos",
    name: "Mr. Wish del Caos",
    category: "Caos",
    price: 15,
    img: "mr_wish.jpg",
    desc: "Deviant Caos que desata proyectiles continuos.",
    highlight: "Tirador"
  },
  {
    id: "chaosaurus",
    name: "Chaosaurus",
    category: "Caos",
    price: 15,
    img: "Chaosaurus.jpeg",
    desc: "Deviant Caos prehistórico de ataque feroz.",
    highlight: "Fuerza Bruta"
  },

  // --- ABERRANTE ---
  {
    id: "rebecca-aberrante",
    name: "Rebecca Aberrante",
    category: "Aberrante",
    price: 15,
    img: "Rebecca aberrante.jpeg",
    desc: "Deviant Aberrante de élite con gran sinergia de combate.",
    highlight: "Elite"
  },
  {
    id: "dr-osito-aberrante",
    name: "Dr. Osito Aberrante",
    category: "Aberrante",
    price: 15,
    img: "Dr Osito Aberrante.jpeg",
    desc: "Deviant Aberrante con soporte de tanque y curación.",
    highlight: "Tanque/Soporte"
  },

  // --- OTROS DEVIANTS ---
  {
    id: "invocador-almas",
    name: "Invocador de Almas",
    category: "Otros",
    price: 10,
    img: "Invocador de almas.jpeg",
    desc: "Deviant místico invocador de refuerzos espirituales.",
    highlight: "Invocación"
  },
  {
    id: "begimo",
    name: "Bégimo",
    category: "Otros",
    price: 10,
    img: "begimo.jpeg",
    desc: "Deviant colosal de alta resistencia física.",
    highlight: "Defensivo"
  },
  {
    id: "caballero-plateado",
    name: "Caballero Plateado",
    category: "Otros",
    price: 10,
    img: "Caballero Plateado.jpeg",
    desc: "Deviant acorazado ideal para choque frontal.",
    highlight: "Armadura"
  },
  {
    id: "mr-wish-rex",
    name: "Mr. Wish Rex",
    category: "Otros",
    price: 10,
    img: "Mr Wish Rex.jpeg",
    desc: "Deviant clásico con bonificación de disparo y precisión.",
    highlight: "Rango"
  },
  {
    id: "george-el-valiente",
    name: "George el Valiente",
    category: "Otros",
    price: 10,
    img: "George el Valiente.jpeg",
    desc: "Deviant valeroso que potencia el daño del jugador.",
    highlight: "Buff Daño"
  },
  {
    id: "ballenato",
    name: "Ballenato",
    category: "Otros",
    price: 10,
    img: "Ballenato.jpeg",
    desc: "Deviant acuático de apoyo y utilidad en base.",
    highlight: "Utilidad"
  },
  {
    id: "lobo-radiante",
    name: "Lobo Radiante",
    category: "Otros",
    price: 10,
    img: "Lobo Radiante.jpeg",
    desc: "Deviant veloz con efectos lumínicos de asistencia.",
    highlight: "Velocidad"
  },
  {
    id: "vudu-esponjoso",
    name: "Vudú Esponjoso",
    category: "Otros",
    price: 15,
    img: "Vudú Esponjoso.jpeg",
    desc: "Deviant de mitigación de daño y resistencia aumentada.",
    highlight: "Resistencia"
  },
  {
    id: "sol-infrasonico",
    name: "Sol Infrasónico",
    category: "Otros",
    price: 15,
    img: "Sol infrasonico.jpeg",
    desc: "Deviant de ondas sónicas devastadoras en área.",
    highlight: "Daño Sónico"
  },
  {
    id: "mariposa-azul",
    name: "Mariposa Azul",
    category: "Otros",
    price: 10,
    img: "Mariposa Azul.jpeg",
    desc: "Deviant clásico de distracción y apoyo básico.",
    highlight: "Básico"
  },
  {
    id: "minicomilon-devorador",
    name: "Minicomilón - Devorador de Estrellas",
    category: "Otros",
    price: 10,
    img: "minicomilon_devorador_estrellas.jpeg",
    desc: "Deviant especial de recolección acelerada de recursos.",
    highlight: "Farmeo"
  },
  {
    id: "gel-supurante",
    name: "Gel Supurante: Estrella Marina",
    category: "Otros",
    price: 10,
    img: "Gel sulpurante estrella marina.jpeg",
    desc: "Deviant gelatinoso de cobertura y regeneración de cordura.",
    highlight: "Cordura"
  },
  {
    id: "cuenco-reconfortante",
    name: "Cuenco Reconfortante",
    category: "Otros",
    price: 10,
    img: "Cuenco reconfortante.jpeg",
    desc: "Deviant de soporte culinario y nutrición en territorio.",
    highlight: "Comida"
  },
  {
    id: "cocinosaurio-rex",
    name: "Cocinosaurio Rex",
    category: "Otros",
    price: 10,
    img: "Cocinosaurio Rex.jpeg",
    desc: "Deviant experto en cocina y buffs gastronómicos.",
    highlight: "Cocina"
  },
  {
    id: "muñeco-papel-infrasonico",
    name: "Muñeco de papel infrasonico",
    category: "Otros",
    price: 10,
    img: "Muñeco de papel infrasonico.jpeg",
    desc: "Deviant de apoyo con habilidades de resonancia infrasónica.",
    highlight: "Nuevo"
  },
  {
    id: "conejo",
    name: "Conejo",
    category: "Otros",
    price: 10,
    img: "Conejo.jpeg",
    desc: "Deviant ágil de apoyo y utilidad.",
    highlight: "Nuevo"
  },
  {
    id: "abeja",
    name: "Abeja",
    category: "Otros",
    price: 10,
    img: "Abeja.jpeg",
    desc: "Deviant de apoyo con gran movilidad.",
    highlight: "Nuevo"
  }
];

// =====================================================
// ESTADO GLOBAL
// =====================================================
let currentFilter = "all";
let currentSearchQuery = "";
let deviantsCart = [];

// =====================================================
// UTILIDADES DE FORMATO
// =====================================================
function formatUSD(value) {
  return `$${Number(value).toFixed(2)} USD`;
}

function formatNumber(num) {
  return Number(num).toLocaleString('es-ES');
}

// =====================================================
// PERSISTENCIA LOCALSTORAGE
// =====================================================
function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deviantsCart));
  } catch (e) {
    console.warn("No se pudo guardar el carrito en localStorage:", e);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        deviantsCart = parsed;
      }
    }
  } catch (e) {
    console.warn("No se pudo cargar el carrito:", e);
    deviantsCart = [];
  }
}

// =====================================================
// CALCULADORA DE ENERGY LINKS
// =====================================================
const linkAmountInput = document.getElementById('linkAmount');
const totalPriceEl = document.getElementById('totalPrice');
const btnOrderLinks = document.getElementById('btnOrderLinks');
const quickBtns = document.querySelectorAll('.btn-quick-amount');

function calculatePrice() {
  if (!linkAmountInput || !totalPriceEl) return;

  const amount = parseFloat(linkAmountInput.value) || 0;
  const total = (amount / 1000000) * PRICE_PER_1M_LINKS;

  totalPriceEl.textContent = formatUSD(total);
}

if (linkAmountInput) {
  linkAmountInput.addEventListener('input', calculatePrice);
  calculatePrice();
}

if (quickBtns.length > 0) {
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const addVal = parseInt(btn.dataset.amount, 10) || 0;
      if (btn.dataset.mode === "set") {
        linkAmountInput.value = addVal;
      } else {
        const currentVal = parseInt(linkAmountInput.value, 10) || 0;
        linkAmountInput.value = currentVal + addVal;
      }
      calculatePrice();
      pulseElement(linkAmountInput);
    });
  });
}

if (btnOrderLinks) {
  btnOrderLinks.addEventListener('click', () => {
    const rawVal = parseFloat(linkAmountInput?.value) || 0;
    const price = totalPriceEl ? totalPriceEl.textContent : "$0.00 USD";

    if (rawVal <= 0) {
      alert("Por favor ingresa una cantidad válida de Energy Links.");
      linkAmountInput?.focus();
      return;
    }

    const formattedAmount = formatNumber(rawVal);
    const message =
      `Hola ${VENDOR_NAME}, quiero comprar ${formattedAmount} Energy Links en el servidor ${SERVER_NAME}. Precio estimado: ${price}. ¿Tienes disponibilidad para entrega inmediata?`;

    const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  });
}

// =====================================================
// RENDERIZADO DEL CATÁLOGO DE DEVIANTS
// =====================================================
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchDeviants');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCountEl = document.getElementById('resultsCount');

function getFilteredDeviants() {
  return DEVIANTS_DATA.filter(item => {
    // Filtro de categoría
    const matchesCategory = currentFilter === "all" || item.category.toLowerCase() === currentFilter.toLowerCase();

    // Filtro de búsqueda por texto
    const query = currentSearchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      (item.highlight && item.highlight.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

function renderCatalog() {
  if (!cardsGrid) return;

  const filtered = getFilteredDeviants();

  if (resultsCountEl) {
    resultsCountEl.textContent = `${filtered.length} Deviants disponibles`;
  }

  if (filtered.length === 0) {
    cardsGrid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>No se encontraron Deviants</h3>
        <p>No hay coincidencias para "<strong>${escapeHtml(currentSearchQuery)}</strong>" en esta categoría.</p>
        <button type="button" class="btn-clear-search" onclick="resetFilters()">Mostrar todos</button>
      </div>
    `;
    return;
  }

  cardsGrid.innerHTML = filtered.map(deviant => `
    <div class="card" data-id="${deviant.id}" data-category="${deviant.category}">
      <div class="card-tag tag-${deviant.category.toLowerCase()}">${deviant.category}</div>
      <div class="card-img-wrapper">
        ${deviant.img ? `
          <img 
            loading="lazy" 
            class="deviant-img" 
            src="${deviant.img}" 
            alt="${deviant.name}" 
            data-title="${deviant.name}"
          >
        ` : ''}
        ${deviant.highlight ? `<span class="card-badge-feat">${deviant.highlight}</span>` : ''}
      </div>
      <h3>${deviant.name}</h3>
      <p class="stats"><i class="fa-solid fa-bolt"></i> ${deviant.category} • Disponible</p>
      <p class="desc">${deviant.desc}</p>
      <div class="card-footer">
        <span class="price">${formatUSD(deviant.price)}</span>
        <button 
          type="button" 
          class="btn-card-add" 
          onclick="addDeviantById('${deviant.id}')"
          aria-label="Agregar ${deviant.name} al pedido"
        >
          <i class="fa-solid fa-cart-plus"></i> Agregar
        </button>
      </div>
    </div>
  `).join('');

  // Re-enlazar eventos de imágenes para el modal
  attachImageModalEvents();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

function resetFilters() {
  currentFilter = "all";
  currentSearchQuery = "";
  if (searchInput) searchInput.value = "";
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === "all");
  });
  renderCatalog();
}

// Eventos de Búsqueda y Filtros
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    renderCatalog();
  });
}

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.category || "all";
      renderCatalog();
    });
  });
}

// =====================================================
// CARRITO DE COMPRAS Y PEDIDOS
// =====================================================
function addDeviantById(id) {
  const itemData = DEVIANTS_DATA.find(d => d.id === id);
  if (!itemData) return;

  const existing = deviantsCart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    deviantsCart.push({
      id: itemData.id,
      name: itemData.name,
      category: itemData.category,
      price: itemData.price,
      quantity: 1
    });
  }

  saveCartToStorage();
  renderCart();
  showCartToast(`¡${itemData.name} añadido al pedido!`);
  pulseCartBadge();
}

function addToCart(button, deviantName) {
  const item = DEVIANTS_DATA.find(d => d.name === deviantName) || DEVIANTS_DATA.find(d => d.name.toLowerCase() === (deviantName || "").toLowerCase());
  if (item) {
    addDeviantById(item.id);
  }
}

function increaseCartItem(index) {
  if (!deviantsCart[index]) return;
  deviantsCart[index].quantity += 1;
  saveCartToStorage();
  renderCart();
  pulseCartBadge();
}

function decreaseCartItem(index) {
  if (!deviantsCart[index]) return;
  if (deviantsCart[index].quantity > 1) {
    deviantsCart[index].quantity -= 1;
  } else {
    deviantsCart.splice(index, 1);
  }
  saveCartToStorage();
  renderCart();
  pulseCartBadge();
}

function removeCartItem(index) {
  if (!deviantsCart[index]) return;
  deviantsCart.splice(index, 1);
  saveCartToStorage();
  renderCart();
  pulseCartBadge();
}

function clearCart() {
  if (deviantsCart.length === 0) return;
  if (confirm("¿Deseas vaciar todos los Deviants seleccionados?")) {
    deviantsCart = [];
    saveCartToStorage();
    renderCart();
    pulseCartBadge();
  }
}

function renderCart() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const cartBadge = document.getElementById('cartBadge');
  const cartTotalEl = document.getElementById('cartTotal');
  const sendCartBtn = document.getElementById('btnSendCart');
  const floatingCartBar = document.getElementById('floatingCartBar');
  const floatingCount = document.getElementById('floatingCartCount');
  const floatingTotal = document.getElementById('floatingCartTotal');

  const totalItems = deviantsCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = deviantsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Actualizar barra flotante móvil
  if (floatingCartBar && floatingCount && floatingTotal) {
    if (totalItems > 0) {
      floatingCartBar.classList.add('visible');
      floatingCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
      floatingTotal.textContent = formatUSD(totalPrice);
    } else {
      floatingCartBar.classList.remove('visible');
    }
  }

  if (!cartItemsEl || !cartEmptyEl || !cartBadge || !cartTotalEl || !sendCartBtn) {
    return;
  }

  cartItemsEl.innerHTML = '';

  if (deviantsCart.length === 0) {
    cartEmptyEl.style.display = 'block';
    sendCartBtn.disabled = true;
    cartBadge.textContent = '0 seleccionados';
    cartTotalEl.textContent = formatUSD(0);
    return;
  }

  cartEmptyEl.style.display = 'none';
  cartBadge.textContent = `${totalItems} ${totalItems === 1 ? 'seleccionado' : 'seleccionados'}`;

  deviantsCart.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <div class="cart-item-title">
        <strong>${item.name}</strong>
        <div class="cart-item-meta">
          <span class="cart-item-tag">${item.category}</span>
          <span>${item.quantity} × ${formatUSD(item.price)} = <strong>${formatUSD(item.price * item.quantity)}</strong></span>
        </div>
      </div>
      <div class="cart-item-actions">
        <button type="button" class="btn-qty" onclick="decreaseCartItem(${index})" title="Restar uno" aria-label="Restar 1">−</button>
        <span class="cart-item-qty">${item.quantity}</span>
        <button type="button" class="btn-qty" onclick="increaseCartItem(${index})" title="Añadir uno" aria-label="Sumar 1">+</button>
        <button type="button" class="btn-remove" onclick="removeCartItem(${index})" title="Eliminar del pedido" aria-label="Eliminar ${item.name}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    cartItemsEl.appendChild(itemEl);
  });

  cartTotalEl.textContent = formatUSD(totalPrice);
  sendCartBtn.disabled = false;
}

function sendCartWhatsApp() {
  if (deviantsCart.length === 0) return;

  const totalItems = deviantsCart.reduce((sum, item) => sum + item.quantity, 0);
  const total = deviantsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartLines = deviantsCart.map(item =>
    `▪ ${item.quantity}x ${item.name} (${item.category}) — ${formatUSD(item.price * item.quantity)}`
  );

  const message =
    `¡Hola ${VENDOR_NAME}! Quiero realizar el siguiente pedido de Deviants en el servidor *${SERVER_NAME}*:\n\n` +
    `${cartLines.join('\n')}\n\n` +
    `📦 Total de Deviants: ${totalItems}\n` +
    `💰 Monto Total: *${formatUSD(total)}*\n\n` +
    `¿Los tienes listos para transferir in-game?`;

  const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// =====================================================
// TOAST Y NOTIFICACIONES
// =====================================================
let toastTimeout;
function showCartToast(message) {
  const toast = document.getElementById('cartToast');
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add('visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2200);
}

function pulseCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.classList.remove('pop');
    void badge.offsetWidth;
    badge.classList.add('pop');
  }
}

function pulseElement(el) {
  if (!el) return;
  el.style.transform = 'scale(1.02)';
  setTimeout(() => {
    el.style.transform = '';
  }, 180);
}

// =====================================================
// MODAL DE IMÁGENES
// =====================================================
const imageModal = document.getElementById('imageModal');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalCaption = document.getElementById('imageModalCaption');
const imageModalClose = document.getElementById('imageModalClose');
const imageModalBackdrop = document.getElementById('imageModalBackdrop');

function openImageModal(src, title) {
  if (!imageModal || !imageModalImg || !imageModalCaption) return;

  imageModalImg.src = src;
  imageModalImg.alt = title || '';
  imageModalCaption.textContent = title || '';
  imageModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  if (!imageModal) return;
  imageModal.setAttribute('aria-hidden', 'true');
  if (imageModalImg) imageModalImg.src = '';
  if (imageModalCaption) imageModalCaption.textContent = '';
  document.body.style.overflow = '';
}

function attachImageModalEvents() {
  document.querySelectorAll('.deviant-img').forEach(img => {
    img.removeEventListener('click', img._modalHandler);
    img._modalHandler = () => {
      openImageModal(img.src, img.dataset.title || img.alt);
    };
    img.addEventListener('click', img._modalHandler);

    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    }
  });
}

if (imageModalClose) imageModalClose.addEventListener('click', closeImageModal);
if (imageModalBackdrop) imageModalBackdrop.addEventListener('click', closeImageModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeImageModal();
});

// =====================================================
// ANIMACIÓN DE PARTÍCULAS EN CANVAS (Optimizado)
// =====================================================
const canvas = document.getElementById('particlesCanvas');

if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  let animationFrameId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }

  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(resizeCanvas, 200);
  });

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.size = Math.random() * 2 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -(Math.random() * 0.5 + 0.2);
      this.color = Math.random() > 0.4 ? '#00f0ff' : '#ff0055';
      this.opacity = Math.random() * 0.6 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset(false);
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 75);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  animateParticles();
}

// =====================================================
// SMOOTH SCROLL PARA ANCLAS
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.length > 1 && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// =====================================================
// INICIALIZACIÓN GLOBAL
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderCatalog();
  renderCart();

  const sendCartBtn = document.getElementById('btnSendCart');
  if (sendCartBtn) {
    sendCartBtn.addEventListener('click', sendCartWhatsApp);
  }

  const clearCartBtn = document.getElementById('btnClearCart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }
});