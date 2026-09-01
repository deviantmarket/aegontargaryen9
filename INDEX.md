# 📚 ÍNDICE DE DOCUMENTACIÓN - Once Human Market

## 🚀 Empezar Aquí

| Archivo | Propósito | Tiempo |
|---------|-----------|--------|
| **[QUICK_START.md](QUICK_START.md)** | Primeros 3 pasos | 2 min |
| **[INSTALLATION_SUMMARY.md](INSTALLATION_SUMMARY.md)** | Resumen completo de la instalación | 5 min |
| **[README.md](README.md)** | Guía completa y detallada | 15 min |

---

## 🔍 Documentación por Tema

### 📦 Instalación y Setup
- [QUICK_START.md](QUICK_START.md) - Los 3 pasos clave
- [setup.js](setup.js) - Script interactivo de configuración
- [INSTALLATION_SUMMARY.md](INSTALLATION_SUMMARY.md) - Qué se hizo y cómo

### 🐛 Problemas y Soluciones
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - FAQ y soluciones comunes
- [README.md#Troubleshooting](README.md) - Solución de problemas detallada

### 💻 Desarrollo
- [server.js](server.js) - Backend Node.js
- [script.js](script.js) - Frontend JavaScript
- [package.json](package.json) - Dependencias y scripts

### 🔐 Configuración
- [.env.example](.env.example) - Plantilla de configuración
- [.gitignore](.gitignore) - Archivo que protege tu `.env`

### 📊 Gestión de Pedidos
- [orders.js](orders.js) - Ver historial de pedidos (ejecutar con `npm run orders`)
- [data/orders.json](data/orders.json) - Base de datos local de pedidos

---

## 📋 Lista de Verificación Rápida

- [ ] ¿Instalaste Node.js? (nodejs.org)
- [ ] ¿Creaste el Webhook en Discord?
- [ ] ¿Ejecutaste `npm run setup`?
- [ ] ¿Ejecutaste `npm start`?
- [ ] ¿Abriste http://localhost:3000?
- [ ] ¿Hiciste una prueba de pedido?
- [ ] ¿Llegó a Discord? ✅

---

## 🔑 Comandos Principales

```bash
# Instalación
npm install              # Instalar dependencias
npm run setup           # Configuración interactiva

# Ejecución
npm start               # Inicia el servidor
npm run dev             # Inicia con auto-reinicio

# Información
npm run orders          # Ver historial de pedidos
curl http://localhost:3000/api/health  # Verificar servidor
```

---

## 📞 Soluciones Rápidas

| Problema | Solución |
|----------|----------|
| "npm: command not found" | Instala Node.js |
| Webhook no funciona | Ejecuta `npm run setup` nuevamente |
| Puerto 3000 ocupado | Cambia `PORT` en `.env` |
| No llega a Discord | Verifica Webhook URL en `.env` |

→ **Más información en [TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

---

## 🏗️ Estructura del Proyecto

```
once-human-market/
├── 🖥️  Frontend (HTML/CSS/JS)
│   ├── index.html              Página principal
│   ├── style.css               Estilos Cyberpunk
│   └── script.js               Lógica del cliente
│
├── 🔧 Backend (Node.js)
│   ├── server.js               Servidor Express
│   ├── package.json            Dependencias
│   └── setup.js                Setup interactivo
│
├── 💾 Datos
│   └── data/orders.json        Base de datos de pedidos
│
├── 🔐 Configuración
│   ├── .env                    Variables de entorno (SECRETO)
│   ├── .env.example            Plantilla de ejemplo
│   └── .gitignore              Protege archivos sensibles
│
└── 📚 Documentación
    ├── README.md               Guía completa
    ├── QUICK_START.md          Inicio rápido
    ├── TROUBLESHOOTING.md      Soluciones
    ├── INSTALLATION_SUMMARY.md Resumen de instalación
    └── INDEX.md                Este archivo
```

---

## 🎯 Flujo de Compra (Cómo Funciona)

```
1. CLIENTE
   └─ Agrega Deviants/Energy Links al carrito
   └─ Hace clic en "Pedido Rápido"

2. FRONTEND (script.js)
   └─ Copia el pedido al portapapeles
   └─ Envía POST a /api/order

3. BACKEND (server.js)
   └─ Recibe y valida el pedido
   └─ Guarda en data/orders.json
   └─ Envía a Discord Webhook

4. DISCORD
   └─ ¡Mensaje con el pedido llega automáticamente!

5. CLIENTE
   └─ Abre Discord en el navegador
   └─ Coordina entrega y pago
```

---

## 💡 Características Principales

✅ **Carrito Unificado** - Deviants + Energy Links en un solo pedido  
✅ **Discord Automático** - Los pedidos llegan sin intervención manual  
✅ **Base de Datos Local** - Historial de todos los pedidos  
✅ **Interfaz Moderna** - Diseño Cyberpunk profesional  
✅ **Responsivo** - Funciona en móvil y desktop  
✅ **Seguro** - Variables de entorno protegidas  
✅ **Fácil de Configurar** - Setup interactivo  

---

## 🚀 Próximos Pasos Opcionales

- 📈 Agregar análisis/estadísticas de ventas
- 🗄️ Migrar a base de datos (MongoDB, PostgreSQL)
- 🔐 Agregar autenticación de usuarios
- 💳 Integrar sistema de pagos (Stripe, PayPal)
- 🌐 Desplegar en servidor real (Railway, Heroku, AWS)
- 📱 Crear aplicación móvil
- 🤖 Agregar un bot de Discord para comandos

---

## 📞 Contacto y Soporte

**Discord:** AegonTargaryen9  
**Servidor:** Dream Y0002 NA  
**Email:** [Tu correo aquí]

---

## 📝 Notas Importantes

1. **El archivo `.env` es SECRETO** - Nunca lo compartas ni lo subas a Git
2. **Backup tus pedidos** - `data/orders.json` contiene tu historial
3. **Reinicia el servidor** después de cambiar `.env`
4. **Revisa los logs** - La terminal del servidor muestra qué está pasando

---

**¡Bienvenido a Once Human Market! 🛍️🚀**

*Versión 1.0.0 - Completa y lista para usar*
