# 🚀 INICIO RÁPIDO - Once Human Market

## 3 pasos para que funcione

### ✅ Paso 1: Obtén tu Webhook URL de Discord

1. Ve a **Discord** → Tu servidor
2. **Configuración del servidor** (⚙️)
3. **Integraciones** → **Webhooks**
4. **Nuevo Webhook** → Dale nombre: `Once Human Market`
5. **Copiar URL** y guárdala

### 🔧 Paso 2: Ejecuta el Setup

```bash
npm run setup
```

Te pedirá:
- 🔗 **Webhook URL** (pega la que copiaste en Paso 1)
- 🔌 **Puerto** (Enter para 3000)
- 🎮 **Nombre servidor** (Enter para "Dream Y0002 NA")

### ▶️ Paso 3: Inicia el servidor

```bash
npm start
```

Abre: **http://localhost:3000**

---

## ✨ ¿Listo?

- 🛒 Agrega Deviants o Energy Links al carrito
- 💬 Haz clic en "Pedido Rápido"
- 📱 Los pedidos aparecerán **automáticamente en Discord**

---

## 🆘 Problemas?

| Problema | Solución |
|----------|----------|
| `npm: command not found` | Instala Node.js desde nodejs.org |
| `DISCORD_WEBHOOK_URL no está configurada` | Ejecuta `npm run setup` nuevamente |
| Puerto 3000 ocupado | Cambia PORT en `.env` o cierra la aplicación que lo usa |
| No llega a Discord | Verifica que la URL del webhook sea correcta en `.env` |

---

**¡Eso es todo! Tu tienda está lista.** 🎉
