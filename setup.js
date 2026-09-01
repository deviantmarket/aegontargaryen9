#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setup() {
  console.clear();
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🛍️  ONCE HUMAN MARKET - SETUP INICIAL');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  try {
    // Verificar si .env ya existe
    const envPath = path.join(__dirname, '.env');
    let existingEnv = '';
    
    if (fs.existsSync(envPath)) {
      existingEnv = fs.readFileSync(envPath, 'utf-8');
      console.log('✅ Archivo .env encontrado.\n');
    } else {
      console.log('📝 Se creará un nuevo archivo .env\n');
    }

    console.log('📌 Para obtener tu WEBHOOK_URL de Discord:\n');
    console.log('  1. Ve a tu servidor Discord');
    console.log('  2. Configuración del servidor → Integraciones → Webhooks');
    console.log('  3. Nuevo Webhook → Copia la URL\n');

    const webhookUrl = await ask('🔗 Ingresa tu Discord Webhook URL (o presiona Enter para saltar): ');
    const port = await ask('🔌 Puerto del servidor (Enter para 3000): ') || '3000';
    const serverName = await ask('🎮 Nombre del servidor (Enter para "Dream Y0002 NA"): ') || 'Dream Y0002 NA';

    // Crear contenido .env
    const envContent = `# 🛍️ ONCE HUMAN MARKET - CONFIGURACIÓN

# Webhook de Discord para recibir pedidos
DISCORD_WEBHOOK_URL=${webhookUrl}

# Puerto del servidor
PORT=${port}

# Nombre del servidor de juego
SERVER_NAME=${serverName}

# Descomenta para modo desarrollo:
# NODE_ENV=development
`;

    // Guardar archivo .env
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ Archivo .env creado exitosamente.\n');

    // Verificar si node_modules existe
    if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
      console.log('📦 Instalando dependencias...\n');
      
      const { execSync } = require('child_process');
      try {
        execSync('npm install', { stdio: 'inherit' });
        console.log('\n✅ Dependencias instaladas.\n');
      } catch (e) {
        console.log('\n⚠️  No se pudieron instalar las dependencias automáticamente.');
        console.log('   Ejecuta manualmente: npm install\n');
      }
    } else {
      console.log('✅ Dependencias ya están instaladas.\n');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🎉 ¡Setup completado!\n');
    console.log('📌 Próximos pasos:');
    console.log('   1. npm start       → Inicia el servidor');
    console.log('   2. Abre http://localhost:' + port);
    console.log('   3. ¡Disfruta! 🚀\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (!webhookUrl) {
      console.log('⚠️  AVISO: No ingresaste un Webhook URL.');
      console.log('   Los pedidos se mostrarán en Discord, pero no se enviarán automáticamente.');
      console.log('   Puedes actualizar .env después con tu URL.\n');
    }

    rl.close();
  } catch (error) {
    console.error('❌ Error durante setup:', error.message);
    rl.close();
    process.exit(1);
  }
}

// Ejecutar setup
setup();
