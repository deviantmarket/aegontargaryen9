# ❓ FAQ & TROUBLESHOOTING - Once Human Market

## 🔍 Preguntas Frecuentes

### P1: ¿Dónde veo mis pedidos?
**R:** 
- En Discord: Llegarán automáticamente al canal vinculado al webhook
- En tu máquina: Ejecuta `npm run orders` para ver el historial local

### P2: ¿Es seguro compartir el webhook URL?
**R:** No. La URL del webhook permite enviar mensajes a tu canal de Discord. Si alguien la tiene, puede usarla para enviar mensajes. Mantenla en `.env` (que está en `.gitignore`).

### P3: ¿Qué pasa si el servidor se cae?
**R:** Los pedidos se guardan localmente en `data/orders.json`. Cuando reinicies, todos estarán ahí. Los pedidos completados mientras el servidor estaba offline NO se enviarán a Discord (pero sí se guardarán localmente).

### P4: ¿Puedo usar esto en un servidor web real?
**R:** Sí. Necesitas:
- Host (Heroku, Railway, AWS, Vercel)
- Actualizar la URL en `script.js` de `localhost:3000` a tu dominio real
- Configurar variables de entorno en la plataforma

### P5: ¿Cómo cambio el puerto?
**R:** Edita `.env` y cambia `PORT=3000` a tu puerto preferido (ej: `PORT=8080`)

---

## 🐛 Troubleshooting

### ❌ "Error: ENOENT: no such file or directory"
**Causa:** El archivo `.env` no existe o está en la ruta incorrecta.  
**Solución:**
```bash
npm run setup
```

### ❌ "Cannot find module 'express'"
**Causa:** Las dependencias no están instaladas.  
**Solución:**
```bash
npm install
```

### ❌ "EADDRINUSE: address already in use :::3000"
**Causa:** El puerto 3000 ya está ocupado.  
**Soluciones:**
1. Cambia el puerto en `.env`: `PORT=3001`
2. O cierra la aplicación que usa ese puerto:
   ```bash
   # macOS/Linux
   lsof -i :3000
   kill -9 <PID>
   
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

### ❌ "localhost:3000 refused to connect"
**Causa:** El servidor no está corriendo.  
**Solución:**
```bash
npm start
```

### ❌ "Los pedidos no llegan a Discord"
**Verificar:**
1. El webhook URL en `.env` es correcto
2. El webhook existe en Discord (no fue eliminado)
3. El servidor está corriendo (`npm start`)
4. Abre Developer Tools (F12) → Console y mira los errores
5. Ejecuta `curl http://localhost:3000/api/health` para verificar el servidor

### ❌ "Error en script.js: fetch fallback"
**Causa:** El servidor backend no está disponible.  
**Solución:** 
- El pedido se seguirá procesando (se abrirá Discord)
- Pero no se enviará automáticamente a Discord
- Asegúrate de que `npm start` está corriendo

---

## 📝 Logs Útiles

### Ver si el servidor está corriendo:
```bash
curl http://localhost:3000/api/health
```

Respuesta esperada:
```json
{"status":"OK","webhookConfigured":true,"ordersDatabase":true}
```

### Ver últimos 10 pedidos:
```bash
curl http://localhost:3000/api/orders
```

---

## 🔧 Configuración Avanzada

### Cambiar puerto
**Archivo:** `.env`
```env
PORT=8080
```

### Desabilitar Discord (solo guardar pedidos localmente)
**Archivo:** `.env`
```env
DISCORD_WEBHOOK_URL=
```

### Modo desarrollo con hot-reload
```bash
npm run dev
```
(Requiere `npm install nodemon` si no está instalado)

---

## 🚀 Despliegue en Producción

### Opción 1: Railway.app
1. Sube a GitHub
2. Conecta tu repositorio en railway.app
3. Configura `DISCORD_WEBHOOK_URL` en variables de entorno
4. Deploy automático

### Opción 2: Heroku
1. Instala Heroku CLI
2. `heroku create tu-app-name`
3. `heroku config:set DISCORD_WEBHOOK_URL=tu_webhook_url`
4. `git push heroku main`

### Opción 3: Docker
Crea `Dockerfile`:
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

Luego:
```bash
docker build -t once-human-market .
docker run -e DISCORD_WEBHOOK_URL=tu_url -p 3000:3000 once-human-market
```

---

## 📞 Necesitas más ayuda?

1. Verifica `npm run orders` para ver qué pedidos se registraron
2. Revisa los logs del servidor en la terminal
3. Abre Developer Tools (F12) en el navegador
4. Verifica que todas las variables de `.env` estén configuradas

---

**¡Recuerda:** Si algo funciona localmente pero quieres desplegar, la configuración dependerá de tu host elegido. 🚀
