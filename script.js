// =====================================================
// CONFIGURACIÓN DE LA TIENDA
// =====================================================
const PHONE_NUMBER = "18494268576";
const SERVER_NAME = "Dream Y0002 NA";
const VENDOR_NAME = "AegonTargaryen9";
const DISCORD_USER_ID = "AegonTargaryen9";
const DISCORD_PROFILE_URL = "https://discord.com/users/AegonTargaryen9";
// Opcional: Coloca aquí tu Webhook URL de Discord si deseas que los pedidos lleguen automáticamente a tu servidor
const DISCORD_WEBHOOK_URL = ""; 
const PRICE_PER_1M_LINKS = 1.00;
const STORAGE_KEY = "oh_market_cart_unified_v2";

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
    price: 15,
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
  }
];

// =====================================================
// ESTADO GLOBAL
// =====================================================
let currentFilter = "all";
let currentSearchQuery = "";
// Carrito unificado: almacena tanto Deviants como Energy Links
let unifiedCart = [];

// =====================================================
// UTILIDADES DE FORMATO
// =====================================================
function formatUSD(value) {
  return `$${Number(value || 0).toFixed(2)} USD`;
}

function formatNumber(num) {
  return Number(num || 0).toLocaleString('es-ES');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

// =====================================================
// PERSISTENCIA LOCALSTORAGE
// =====================================================
function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unifiedCart));
  } catch (e) {
    console.warn("No se pudo guardar el carrito:", e);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        unifiedCart = parsed;
      }
    }
  } catch (e) {
    console.warn("No se pudo cargar el carrito:", e);
    unifiedCart = [];
  }
}

// =====================================================
// CALCULADORA DE ENERGY LINKS
// =====================================================
const linkAmountInput = document.getElementById('linkAmount');
const totalPriceEl = document.getElementById('totalPrice');
const btnAddLinksToCart = document.getElementById('btnAddLinksToCart');
const btnOrderLinks = document.getElementById('btnOrderLinks');
const quickBtns = document.querySelectorAll('.btn-quick-amount');

function getCalculatedLinksPrice() {
  const amount = parseFloat(linkAmountInput?.value) || 0;
  return (amount / 1000000) * PRICE_PER_1M_LINKS;
}

function updateCalculatorDisplay() {
  if (!linkAmountInput || !totalPriceEl) return;
  const total = getCalculatedLinksPrice();
  totalPriceEl.textContent = formatUSD(total);
}

if (linkAmountInput) {
  linkAmountInput.addEventListener('input', updateCalculatorDisplay);
  updateCalculatorDisplay();
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
      updateCalculatorDisplay();
      pulseElement(linkAmountInput);
    });
  });
}

// Botón: Agregar Links al Carrito Unificado
if (btnAddLinksToCart) {
  btnAddLinksToCart.addEventListener('click', () => {
    const rawAmount = parseFloat(linkAmountInput?.value) || 0;
    if (rawAmount < 100000) {
      alert("Por favor ingresa al menos 100,000 Energy Links.");
      linkAmountInput?.focus();
      return;
    }

    addLinksToCart(rawAmount);
    openCartDrawer();
  });
}

// Botón: Pedido Rápido de Links (Directo a Discord)
if (btnOrderLinks) {
  btnOrderLinks.addEventListener('click', () => {
    const rawAmount = parseFloat(linkAmountInput?.value) || 0;
    if (rawAmount < 100000) {
      alert("Por favor ingresa al menos 100,000 Energy Links.");
      linkAmountInput?.focus();
      return;
    }

    addLinksToCart(rawAmount);
    checkoutDirectToDiscord();
  });
}

// =====================================================
// OPERACIONES DEL CARRITO UNIFICADO
// =====================================================
function addDeviantById(id) {
  const itemData = DEVIANTS_DATA.find(d => d.id === id);
  if (!itemData) return;

  const existingIndex = unifiedCart.findIndex(item => item.type === 'deviant' && item.id === id);

  if (existingIndex > -1) {
    unifiedCart[existingIndex].quantity += 1;
  } else {
    unifiedCart.push({
      type: 'deviant',
      id: itemData.id,
      name: itemData.name,
      category: itemData.category,
      price: itemData.price,
      quantity: 1,
      img: itemData.img
    });
  }

  saveCartToStorage();
  renderCart();
  showCartToast(`¡${itemData.name} añadido al carrito!`);
  pulseCartBadges();
}

function addLinksToCart(amount) {
  const price = (amount / 1000000) * PRICE_PER_1M_LINKS;
  const existingLinksIndex = unifiedCart.findIndex(item => item.type === 'links');

  if (existingLinksIndex > -1) {
    unifiedCart[existingLinksIndex].amountLinks += amount;
    unifiedCart[existingLinksIndex].price = (unifiedCart[existingLinksIndex].amountLinks / 1000000) * PRICE_PER_1M_LINKS;
  } else {
    unifiedCart.push({
      type: 'links',
      id: 'energy-links',
      name: 'Energy Links',
      category: 'Divisa',
      amountLinks: amount,
      price: price,
      quantity: 1
    });
  }

  saveCartToStorage();
  renderCart();
  showCartToast(`¡${formatNumber(amount)} Energy Links añadidos al carrito!`);
  pulseCartBadges();
}

function increaseCartItem(index) {
  if (!unifiedCart[index]) return;
  const item = unifiedCart[index];

  if (item.type === 'links') {
    item.amountLinks += 1000000;
    item.price = (item.amountLinks / 1000000) * PRICE_PER_1M_LINKS;
  } else {
    item.quantity += 1;
  }

  saveCartToStorage();
  renderCart();
}

function decreaseCartItem(index) {
  if (!unifiedCart[index]) return;
  const item = unifiedCart[index];

  if (item.type === 'links') {
    if (item.amountLinks > 1000000) {
      item.amountLinks -= 1000000;
      item.price = (item.amountLinks / 1000000) * PRICE_PER_1M_LINKS;
    } else {
      unifiedCart.splice(index, 1);
    }
  } else {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      unifiedCart.splice(index, 1);
    }
  }

  saveCartToStorage();
  renderCart();
}

function removeCartItem(index) {
  if (!unifiedCart[index]) return;
  unifiedCart.splice(index, 1);
  saveCartToStorage();
  renderCart();
}

function clearCart() {
  if (unifiedCart.length === 0) return;
  if (confirm("¿Estás seguro de que deseas vaciar todos los productos del carrito?")) {
    unifiedCart = [];
    saveCartToStorage();
    renderCart();
    showCartToast("Carrito vaciado.");
  }
}

// =====================================================
// RENDERIZADO DEL CARRITO & SINCRONIZACIÓN DE UI
// =====================================================
function renderCart() {
  const navBadge = document.getElementById('navCartBadge');
  const drawerBadge = document.getElementById('drawerBadge');
  const drawerItems = document.getElementById('drawerItems');
  const drawerEmpty = document.getElementById('drawerEmpty');
  const drawerFooter = document.getElementById('drawerFooter');
  const summaryDeviantsTotal = document.getElementById('summaryDeviantsTotal');
  const summaryLinksTotal = document.getElementById('summaryLinksTotal');
  const summaryDeviantsRow = document.getElementById('summaryDeviantsRow');
  const summaryLinksRow = document.getElementById('summaryLinksRow');
  const drawerTotal = document.getElementById('drawerTotal');
  const btnDirectDiscordCheckout = document.getElementById('btnDirectDiscordCheckout');

  const quickBanner = document.getElementById('cartQuickBanner');
  const quickBannerText = document.getElementById('quickBannerText');
  const quickBannerSubtext = document.getElementById('quickBannerSubtext');
  const quickBannerTotal = document.getElementById('quickBannerTotal');

  const floatingBar = document.getElementById('floatingCartBar');
  const floatingCount = document.getElementById('floatingCartCount');
  const floatingTotal = document.getElementById('floatingCartTotal');

  // Cálculos totales
  let totalItemsCount = 0;
  let deviantsSubtotal = 0;
  let linksSubtotal = 0;

  unifiedCart.forEach(item => {
    if (item.type === 'links') {
      totalItemsCount += 1;
      linksSubtotal += item.price;
    } else {
      totalItemsCount += item.quantity;
      deviantsSubtotal += item.price * item.quantity;
    }
  });

  const grandTotal = deviantsSubtotal + linksSubtotal;

  // Actualizar badges
  if (navBadge) navBadge.textContent = totalItemsCount;
  if (drawerBadge) drawerBadge.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'items'}`;

  // Actualizar Banner rápido
  if (quickBanner && quickBannerText && quickBannerSubtext && quickBannerTotal) {
    if (totalItemsCount > 0) {
      quickBanner.style.borderColor = 'var(--primary-cyan)';
      quickBannerText.textContent = `Tu pedido tiene ${totalItemsCount} ${totalItemsCount === 1 ? 'ítem' : 'ítems'} listo(s)`;
      quickBannerSubtext.textContent = `Deviants: ${formatUSD(deviantsSubtotal)} • Links: ${formatUSD(linksSubtotal)}`;
      quickBannerTotal.textContent = formatUSD(grandTotal);
    } else {
      quickBanner.style.borderColor = '';
      quickBannerText.textContent = 'Tu carrito está listo';
      quickBannerSubtext.textContent = '0 productos seleccionados';
      quickBannerTotal.textContent = formatUSD(0);
    }
  }

  // Actualizar Barra flotante móvil
  if (floatingBar && floatingCount && floatingTotal) {
    if (totalItemsCount > 0) {
      floatingBar.classList.add('visible');
      floatingCount.textContent = `${totalItemsCount} ${totalItemsCount === 1 ? 'ítem' : 'ítems'}`;
      floatingTotal.textContent = formatUSD(grandTotal);
    } else {
      floatingBar.classList.remove('visible');
    }
  }

  // Actualizar Drawer
  if (!drawerItems || !drawerEmpty || !drawerFooter) return;

  if (unifiedCart.length === 0) {
    drawerEmpty.style.display = 'block';
    drawerItems.innerHTML = '';
    drawerFooter.style.display = 'none';
    if (btnDirectDiscordCheckout) btnDirectDiscordCheckout.disabled = true;
    return;
  }

  drawerEmpty.style.display = 'none';
  drawerFooter.style.display = 'block';
  if (btnDirectDiscordCheckout) btnDirectDiscordCheckout.disabled = false;

  // Actualizar subtotales en drawer
  if (summaryDeviantsRow && summaryDeviantsTotal) {
    summaryDeviantsRow.style.display = deviantsSubtotal > 0 ? 'flex' : 'none';
    summaryDeviantsTotal.textContent = formatUSD(deviantsSubtotal);
  }

  if (summaryLinksRow && summaryLinksTotal) {
    summaryLinksRow.style.display = linksSubtotal > 0 ? 'flex' : 'none';
    summaryLinksTotal.textContent = formatUSD(linksSubtotal);
  }

  if (drawerTotal) {
    drawerTotal.textContent = formatUSD(grandTotal);
  }

  // Renderizar items en Drawer
  drawerItems.innerHTML = unifiedCart.map((item, index) => {
    if (item.type === 'links') {
      return `
        <div class="drawer-item">
          <div class="drawer-item-title">
            <strong><i class="fa-solid fa-bolt text-cyan"></i> ${formatNumber(item.amountLinks)} Energy Links</strong>
            <div class="drawer-item-meta">
              <span class="item-badge badge-links">Energy Links</span>
              <span>Subtotal: <strong>${formatUSD(item.price)}</strong></span>
            </div>
          </div>
          <div class="drawer-item-actions">
            <button type="button" class="btn-qty" onclick="decreaseCartItem(${index})" title="Restar 1M Links" aria-label="Restar 1M Links">−</button>
            <button type="button" class="btn-qty" onclick="increaseCartItem(${index})" title="Sumar 1M Links" aria-label="Sumar 1M Links">+</button>
            <button type="button" class="btn-remove" onclick="removeCartItem(${index})" title="Eliminar Links del pedido" aria-label="Eliminar Links">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="drawer-item">
          <div class="drawer-item-title">
            <strong>${item.name}</strong>
            <div class="drawer-item-meta">
              <span class="item-badge badge-deviant">${item.category}</span>
              <span>${item.quantity} × ${formatUSD(item.price)} = <strong>${formatUSD(item.price * item.quantity)}</strong></span>
            </div>
          </div>
          <div class="drawer-item-actions">
            <button type="button" class="btn-qty" onclick="decreaseCartItem(${index})" title="Restar uno" aria-label="Restar 1">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button type="button" class="btn-qty" onclick="increaseCartItem(${index})" title="Sumar uno" aria-label="Sumar 1">+</button>
            <button type="button" class="btn-remove" onclick="removeCartItem(${index})" title="Eliminar ${item.name}" aria-label="Eliminar ${item.name}">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }
  }).join('');
}

// =====================================================
// CONTROL DEL DRAWER LATERAL
// =====================================================
const cartDrawer = document.getElementById('cartDrawer');
const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
const btnDrawerClose = document.getElementById('btnDrawerClose');
const btnOpenCartNav = document.getElementById('btnOpenCartNav');
const btnClearDrawer = document.getElementById('btnClearDrawer');

function openCartDrawer() {
  if (!cartDrawer) return;
  renderCart();
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  if (!cartDrawer) return;
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (btnOpenCartNav) btnOpenCartNav.addEventListener('click', openCartDrawer);
if (btnDrawerClose) btnDrawerClose.addEventListener('click', closeCartDrawer);
if (cartDrawerBackdrop) cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
if (btnClearDrawer) btnClearDrawer.addEventListener('click', clearCart);

// =====================================================
// ENVÍO DIRECTO A DISCORD (SIN FORMULARIOS NI DATOS EXIGIDOS)
// =====================================================

// Generador de Mensaje de Pedido para Discord
function buildDiscordOrderMessage() {
  let grandTotal = 0;
  let totalDeviantsCount = 0;
  let totalLinksAmount = 0;

  const lines = unifiedCart.map(item => {
    if (item.type === 'links') {
      totalLinksAmount += item.amountLinks;
      grandTotal += item.price;
      return `▪ ⚡ ${formatNumber(item.amountLinks)} Energy Links — ${formatUSD(item.price)}`;
    } else {
      totalDeviantsCount += item.quantity;
      const sub = item.price * item.quantity;
      grandTotal += sub;
      return `▪ 🐾 ${item.quantity}x ${item.name} (${item.category}) — ${formatUSD(sub)}`;
    }
  });

  const now = new Date().toLocaleString('es-ES');

  return (
    `🛒 **NUEVO PEDIDO — ONCE HUMAN MARKET**\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📍 **Servidor:** ${SERVER_NAME}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📦 **ITEMS DEL PEDIDO:**\n` +
    `${lines.join('\n')}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 **TOTAL A PAGAR:** **${formatUSD(grandTotal)}**\n` +
    `🕒 **Fecha:** ${now}\n\n` +
    `¡Hola ${VENDOR_NAME}! Deseo coordinar la entrega y el pago in-game de este pedido en *${SERVER_NAME}*. ¿Tienes disponibilidad?`
  );
}

// Copiar texto al portapapeles con compatibilidad amplia
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      textArea.remove();
      return success;
    }
  } catch (err) {
    console.warn("Error copiando al portapapeles:", err);
    return false;
  }
}

// Envío al servidor backend (que a su vez envía a Discord)
async function sendOrderToServer() {
  if (unifiedCart.length === 0) return false;

  try {
    // Preparar datos del pedido
    const orderData = {
      items: unifiedCart.map(item => ({
        type: item.type,
        id: item.id,
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        amountLinks: item.amountLinks,
        price: item.price
      })),
      serverName: SERVER_NAME,
      timestamp: new Date().toISOString()
    };

    // Intentar enviar al servidor local primero
    const response = await fetch('http://localhost:3000/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Pedido enviado al servidor:', result);
      return true;
    }
  } catch (err) {
    console.warn('⚠️ No se pudo conectar al servidor backend:', err.message);
    // El pedido se puede seguir procesando incluso sin conexión al servidor
    return false;
  }
}

// Envío Directo en 1 Clic a Discord
async function checkoutDirectToDiscord() {
  if (unifiedCart.length === 0) {
    alert("Tu carrito está vacío. Agrega Deviants o Energy Links antes de pedir.");
    return;
  }

  // 1. Mostrar feedback inicial
  showCartToast("📤 Enviando pedido a Discord...");

  // 2. Enviar al servidor backend
  const serverResponse = await sendOrderToServer();

  // 3. Generar mensaje para portapapeles (como backup)
  const messageText = buildDiscordOrderMessage();
  const copied = await copyToClipboard(messageText);

  // 4. Feedback visual
  if (serverResponse) {
    showCartToast("✅ ¡Pedido enviado a Discord exitosamente!");
  } else if (copied) {
    showCartToast("✅ ¡Pedido copiado al portapapeles! Abriendo Discord...");
  } else {
    showCartToast("⚠️ Abriendo Discord para completar el pedido...");
  }

  // 5. Cerrar drawer y abrir Discord de AegonTargaryen9
  closeCartDrawer();
  setTimeout(() => {
    window.open(DISCORD_PROFILE_URL, '_blank');
  }, 500);

  // 6. Limpiar el carrito después de 2 segundos
  setTimeout(() => {
    unifiedCart = [];
    saveCartToStorage();
    renderCart();
  }, 2000);
}

// =====================================================
// RENDERIZADO DEL CATÁLOGO DE DEVIANTS
// =====================================================
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchDeviants');
const btnClearSearch = document.getElementById('btnClearSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultsCountEl = document.getElementById('resultsCount');

function getFilteredDeviants() {
  return DEVIANTS_DATA.filter(item => {
    const matchesCategory = currentFilter === "all" || item.category.toLowerCase() === currentFilter.toLowerCase();
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
        <img 
          loading="lazy" 
          class="deviant-img" 
          src="${deviant.img}" 
          alt="${deviant.name}" 
          data-title="${deviant.name}"
        >
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

  attachImageModalEvents();
}

function resetFilters() {
  currentFilter = "all";
  currentSearchQuery = "";
  if (searchInput) searchInput.value = "";
  if (btnClearSearch) btnClearSearch.style.display = 'none';
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === "all");
  });
  renderCatalog();
}

// Búsqueda en tiempo real
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    if (btnClearSearch) {
      btnClearSearch.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
    }
    renderCatalog();
  });
}

if (btnClearSearch) {
  btnClearSearch.addEventListener('click', () => {
    if (searchInput) searchInput.value = "";
    currentSearchQuery = "";
    btnClearSearch.style.display = 'none';
    renderCatalog();
    searchInput?.focus();
  });
}

// Filtro de pestañas
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
  }, 2400);
}

function pulseCartBadges() {
  const navBadge = document.getElementById('navCartBadge');
  if (navBadge) {
    navBadge.classList.remove('pop');
    void navBadge.offsetWidth;
    navBadge.classList.add('pop');
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

// Atajo Teclado Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal();
    closeCartDrawer();
  }
});

// =====================================================
// ANIMACIÓN DE PARTÍCULAS EN CANVAS (Optimizado)
// =====================================================
const canvas = document.getElementById('particlesCanvas');

if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  let animationFrameId;
  let isRunning = true;

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
    if (!isRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(animateParticles);
  }

  // Pausar animación cuando la pestaña está en segundo plano para ahorrar batería/CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isRunning = true;
      animateParticles();
    }
  });

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
});