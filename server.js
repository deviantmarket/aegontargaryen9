const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// Configuración de base de datos local (JSON)
const ORDERS_DB_PATH = path.join(__dirname, 'data', 'orders.json');
const DATA_DIR = path.join(__dirname, 'data');

// Crear directorio de datos si no existe
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Funciones de base de datos
function loadOrders() {
  try {
    if (fs.existsSync(ORDERS_DB_PATH)) {
      return JSON.parse(fs.readFileSync(ORDERS_DB_PATH, 'utf-8'));
    }
  } catch (e) {
    console.warn('⚠️ No se pudo leer la base de datos de pedidos:', e.message);
  }
  return [];
}

function saveOrder(orderData) {
  try {
    const orders = loadOrders();
    const newOrder = {
      id: `ORDER-${Date.now()}`,
      ...orderData,
      createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    fs.writeFileSync(ORDERS_DB_PATH, JSON.stringify(orders, null, 2));
    return newOrder;
  } catch (e) {
    console.error('❌ Error guardando pedido:', e.message);
    return null;
  }
}

// Función para enviar a Discord
async function sendToDiscord(orderData) {
  if (!DISCORD_WEBHOOK_URL) {
    console.warn('⚠️ DISCORD_WEBHOOK_URL no está configurada');
    return false;
  }

  try {
    let itemsText = '';
    let totalPrice = 0;

    orderData.items.forEach(item => {
      if (item.type === 'links') {
        totalPrice += item.price;
        itemsText += `⚡ **${new Intl.NumberFormat('es-ES').format(item.amountLinks)} Energy Links** — $${item.price.toFixed(2)} USD\n`;
      } else {
        const subtotal = item.price * item.quantity;
        totalPrice += subtotal;
        itemsText += `🐾 **${item.quantity}x ${item.name}** (${item.category}) — $${subtotal.toFixed(2)} USD\n`;
      }
    });

    const embed = {
      title: '🛒 ¡NUEVO PEDIDO COMPLETADO!',
      description: `Se ha recibido un nuevo pedido en **${orderData.serverName}**`,
      color: 0x00f0ff,
      fields: [
        {
          name: '📍 Servidor',
          value: orderData.serverName,
          inline: true
        },
        {
          name: '⏰ Fecha',
          value: new Date().toLocaleString('es-ES'),
          inline: true
        },
        {
          name: '📦 Items del Pedido',
          value: itemsText || 'Sin items',
          inline: false
        },
        {
          name: '💰 Total a Pagar',
          value: `**$${totalPrice.toFixed(2)} USD**`,
          inline: true
        }
      ],
      footer: {
        text: '✅ Once Human Market - Pedido Completado'
      },
      timestamp: new Date().toISOString()
    };

    const payload = {
      username: '🛍️ Once Human Market Bot',
      avatar_url: 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/cart-shopping.svg',
      embeds: [embed]
    };

    const response = await axios.post(DISCORD_WEBHOOK_URL, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000
    });

    console.log('✅ Pedido enviado a Discord exitosamente');
    return true;
  } catch (error) {
    console.error('❌ Error enviando pedido a Discord:', error.message);
    return false;
  }
}

// Rutas
app.post('/api/order', async (req, res) => {
  try {
    const { items, serverName } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'El pedido debe contener al menos un item' 
      });
    }

    // Preparar datos del pedido
    const orderData = {
      items,
      serverName: serverName || 'Dream Y0002 NA',
      timestamp: new Date().toISOString()
    };

    // Guardar en base de datos local
    const savedOrder = saveOrder(orderData);

    // Enviar a Discord
    const discordSent = await sendToDiscord(orderData);

    console.log(`📦 Pedido registrado: ${savedOrder ? savedOrder.id : 'N/A'}`);

    res.json({
      success: true,
      orderId: savedOrder ? savedOrder.id : null,
      message: '✅ Pedido recibido y registrado',
      discordNotified: discordSent
    });
  } catch (error) {
    console.error('Error procesando pedido:', error);
    res.status(500).json({
      success: false,
      error: 'Error procesando el pedido'
    });
  }
});

// Endpoint para obtener historial de pedidos (opcional)
app.get('/api/orders', (req, res) => {
  try {
    const orders = loadOrders();
    res.json({
      success: true,
      totalOrders: orders.length,
      orders: orders.slice(-10) // Últimos 10 pedidos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error obteniendo pedidos'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    webhookConfigured: !!DISCORD_WEBHOOK_URL,
    ordersDatabase: fs.existsSync(ORDERS_DB_PATH)
  });
});

// Servir la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📍 Webhook Discord configurado: ${DISCORD_WEBHOOK_URL ? '✅ Sí' : '❌ No'}`);
  console.log(`📊 Base de datos de pedidos: ${fs.existsSync(ORDERS_DB_PATH) ? '✅ Activa' : '📝 Nueva'}\n`);
});
