const MAX_BODY_LENGTH = 10000;
const MAX_PRODUCTS = 30;
const PRICE_PER_1M_LINKS = 1;

function isValidWebhookUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      (url.hostname === 'discord.com' || url.hostname === 'discordapp.com') &&
      url.pathname.startsWith('/api/webhooks/');
  } catch {
    return false;
  }
}

function formatUSD(value) {
  return `$${Number(value).toFixed(2)} USD`;
}

function isValidProduct(product) {
  return product &&
    typeof product.name === 'string' && product.name.length <= 100 &&
    typeof product.category === 'string' && product.category.length <= 50 &&
    Number.isFinite(product.price) && product.price >= 0 && product.price <= 10000 &&
    Number.isInteger(product.quantity) && product.quantity > 0 && product.quantity <= 99;
}

function buildMessage(order) {
  const serverName = typeof order.serverName === 'string' && order.serverName.length <= 100
    ? order.serverName
    : 'No especificado';

  if (order.type === 'energy-links') {
    const amount = Number(order.amount);
    if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000000) {
      return null;
    }
    const price = (amount / 1000000) * PRICE_PER_1M_LINKS;

    return [
      '⚡ NUEVO PEDIDO DE ENERGY LINKS',
      '',
      `💰 CANTIDAD: ${amount.toLocaleString('es-ES')} Energy Links`,
      `💵 PRECIO: ${formatUSD(price)}`,
      `🎮 SERVIDOR: ${serverName}`,
      `📅 FECHA: ${new Date().toLocaleString('es-ES', { timeZone: 'UTC' })} UTC`
    ].join('\n');
  }

  if (order.type === 'deviants' && Array.isArray(order.products) &&
      order.products.length > 0 && order.products.length <= MAX_PRODUCTS &&
      order.products.every(isValidProduct)) {
    const total = order.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const lines = order.products.map(product =>
      `• ${product.name} ×${product.quantity} — ${formatUSD(product.price * product.quantity)}`
    );

    return [
      '🛒 NUEVO PEDIDO DE DEVIANTS',
      '',
      '📦 PRODUCTOS:',
      ...lines,
      '',
      `💰 TOTAL: ${formatUSD(total)}`,
      `🎮 SERVIDOR: ${serverName}`,
      `📅 FECHA: ${new Date().toLocaleString('es-ES', { timeZone: 'UTC' })} UTC`
    ].join('\n');
  }

  return null;
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Método no permitido.' }) };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!isValidWebhookUrl(webhookUrl)) {
    return { statusCode: 500, body: JSON.stringify({ error: 'El webhook de Discord no está configurado.' }) };
  }

  try {
    const rawBody = event.isBase64Encoded
      ? Buffer.from(event.body || '', 'base64').toString('utf8')
      : event.body;
    const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
    if (!body || JSON.stringify(body).length > MAX_BODY_LENGTH) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Pedido inválido.' }) };
    }

    const content = buildMessage(body);
    if (!content) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Pedido inválido.' }) };
    }

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, allowed_mentions: { parse: [] } })
    });

    if (!discordResponse.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: 'Discord rechazó el pedido.' }) };
    }

    return { statusCode: 204, body: '' };
  } catch (error) {
    console.error('Error enviando pedido a Discord:', error);
    return { statusCode: 400, body: JSON.stringify({ error: 'No se pudo procesar el pedido.' }) };
  }
};
