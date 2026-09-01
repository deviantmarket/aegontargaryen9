#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ORDERS_DB_PATH = path.join(__dirname, 'data', 'orders.json');

function formatPrice(price) {
  return `$${Number(price).toFixed(2)} USD`;
}

function formatNumber(num) {
  return Number(num).toLocaleString('es-ES');
}

function showOrders() {
  try {
    if (!fs.existsSync(ORDERS_DB_PATH)) {
      console.log('\n📭 No hay pedidos registrados aún.\n');
      return;
    }

    const orders = JSON.parse(fs.readFileSync(ORDERS_DB_PATH, 'utf-8'));

    if (orders.length === 0) {
      console.log('\n📭 No hay pedidos registrados aún.\n');
      return;
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📦 HISTORIAL DE PEDIDOS (${orders.length} total)\n`);

    orders.slice(-10).reverse().forEach((order, index) => {
      console.log(`${index + 1}. ${order.id}`);
      console.log(`   📅 ${new Date(order.createdAt).toLocaleString('es-ES')}`);
      console.log(`   🎮 ${order.serverName}`);
      
      let subtotal = 0;
      order.items.forEach(item => {
        if (item.type === 'links') {
          subtotal += item.price;
          console.log(`      ⚡ ${formatNumber(item.amountLinks)} Energy Links — ${formatPrice(item.price)}`);
        } else {
          const sub = item.price * item.quantity;
          subtotal += sub;
          console.log(`      🐾 ${item.quantity}x ${item.name} (${item.category}) — ${formatPrice(sub)}`);
        }
      });
      
      console.log(`   💰 Total: ${formatPrice(subtotal)}\n`);
    });

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Estadísticas
    let totalRevenue = 0;
    orders.forEach(order => {
      order.items.forEach(item => {
        totalRevenue += item.price;
      });
    });

    console.log(`📊 ESTADÍSTICAS:`);
    console.log(`   • Total de pedidos: ${orders.length}`);
    console.log(`   • Ingresos totales: ${formatPrice(totalRevenue)}`);
    console.log(`   • Promedio por pedido: ${formatPrice(totalRevenue / orders.length)}\n`);

  } catch (error) {
    console.error('\n❌ Error leyendo pedidos:', error.message);
  }
}

showOrders();
