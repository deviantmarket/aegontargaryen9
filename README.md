# 🛍️ Once Human Market - Guía de Instalación y Configuración Discord

## 📋 Requisitos Previos

- Node.js instalado (versión 14+)
- npm o yarn
- Un servidor de Discord donde eres administrador
- Permisos para crear webhooks

---

## 🚀 Paso 1: Instalar Dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará:
- **express** - Servidor web
- **cors** - Soporte para cross-origin requests
- **dotenv** - Gestión de variables de entorno
- **axios** - Cliente HTTP

---

## 🔗 Paso 2: Crear Webhook en Discord

### Opción A: Si tienes tu propio servidor Discord

1. **Abre Discord** → Ve a tu servidor
2. **Configuración del servidor** (ícono de engranaje)
3. **Integraciones** (en el menú lateral)
4. **Webhooks** → Clic en **Nuevo Webhook**
5. **Nombra el webhook**: `Once Human Market`
6. **Selecciona el canal**: Elige dónde quieres recibir los pedidos
7. **Copia la URL**: Haz clic en **Copiar URL del Webhook**
8. **Guarda cambios**

### Opción B: Si no tienes servidor Discord

1. Crea un servidor privado nuevo: https://discord.com/servers/create
2. Sigue los pasos de la Opción A

---

## 🔐 Paso 3: Configurar el Webhook URL

1. **Abre el archivo `.env`** (en la carpeta del proyecto)
2. **Pega la URL del webhook**:

```env
DISCORD_WEBHOOK_URL=https://discordapp.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
PORT=3000
SERVER_NAME=Dream Y0002 NA
```

⚠️ **IMPORTANTE**: Mantén esta URL confidencial. No la compartas publicamente.

---

## ▶️ Paso 4: Iniciar el Servidor

En la terminal, ejecuta:

```bash
npm start
```

Deberías ver:

```
🚀 Servidor corriendo en http://localhost:3000
📍 Webhook Discord configurado: ✅ Sí
```

---

## 🧪 Paso 5: Probar la Integración

1. **Abre el navegador**: http://localhost:3000
2. **Agrega algunos Deviants o Energy Links al carrito**
3. **Haz clic en "Pedido Rápido"** o **"Pedido Rápido Links"**
4. **Revisa tu Discord**: Deberías ver el pedido llegado automáticamente

---

## 🔄 Modo Desarrollo (opcional)

Para desarrollo con reinicio automático:

```bash
npm run dev
```

Esto usa **nodemon** para reiniciar el servidor automáticamente cuando cambies archivos.

---

## 📊 Formato del Mensaje en Discord

Los pedidos llegarán así:

```
🛒 ¡NUEVO PEDIDO COMPLETADO!

Se ha recibido un nuevo pedido en Dream Y0002 NA

📍 Servidor: Dream Y0002 NA
⏰ Fecha: 01/09/2026 14:30:45

📦 Items del Pedido:
⚡ 5,000,000 Energy Links — $5.00 USD
🐾 1x Medusa Polar (Starfall) — $20.00 USD

💰 Total a Pagar: $25.00 USD
```

---

## 🆘 Troubleshooting

### "Error: DISCORD_WEBHOOK_URL no está configurada"
- Verifica que el archivo `.env` tenga la URL completa
- Reinicia el servidor después de cambiar `.env`

### "Connection refused" en localhost:3000
- Verifica que el servidor está corriendo (`npm start`)
- Intenta con un puerto diferente (cambia `PORT=3000` en `.env`)

### El pedido no llega a Discord
- Revisa que la URL del webhook sea válida
- Verifica permisos del webhook en Discord
- Abre la consola del navegador (F12) y revisa errores

### Error 404 en /api/order
- Asegúrate de que el servidor está en http://localhost:3000
- Revisa que no haya errores en el puerto

---

## 💡 Características Implementadas

✅ Envío automático de pedidos a Discord  
✅ Formato profesional con embeds  
✅ Información completa del pedido (items, total, fecha)  
✅ Sincronización en tiempo real  
✅ Manejo de errores y fallback  
✅ Variables de entorno seguros  
✅ CORS habilitado para desarrollo  

---

## 🚢 Despliegue en Producción (Opcional)

Para subir a un servidor real (ej: Railway, Heroku, AWS):

1. Sube los archivos a tu repositorio Git
2. Configura variables de entorno en la plataforma
3. Actualiza `script.js` para usar la URL del servidor real en lugar de `localhost:3000`

Ejemplo en `script.js`:
```javascript
const API_URL = process.env.API_URL || 'http://localhost:3000';
const response = await fetch(`${API_URL}/api/order`, { ... });
```

---

## 📞 Soporte

Para más información o problemas:
- Discord: **AegonTargaryen9**
- Documentación de Discord Webhooks: https://discord.com/developers/docs/resources/webhook

---

**¡Listo! Tu tienda está conectada a Discord.** 🎉
