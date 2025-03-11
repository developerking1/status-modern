// Importando as dependências necessárias
const express = require('express');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();

// Inicializando o Express
const app = express();
const PORT = process.env.PORT || 3000;

// Inicializando o cliente do Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  // Esta opção é crucial para definir o status como mobile
  ws: {
    properties: {
      $browser: "Discord Android", // Isso faz o bot aparecer como mobile
      $device: "Discord Android"
    }
  }
});

// Evento quando o bot está pronto
client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag} com status mobile!`);
  
  // Configurando o status de atividade do bot
  client.user.setPresence({
    activities: [{ 
      name: '🧶 | /ajuda • sam-bot.xyz", "🎶 | Me adicione no seu servidor ", "📆 | Resgate o seu daily", "👤 | Estou a divertir e ajudar +70k usuários", "🫐 | Você é uma pessoa incrível", "✨️| Servidor de Suporte no Perfil", "🍇| Em 630 servidores', 
      type: ActivityType.Playing
    }],
    status: 'online'
  });
});

// Rota básica para manter o servidor ativo (útil para hospedagem como Replit ou Glitch)
app.get('/', (req, res) => {
  res.send('Bot Discord online com status de celular!');
});

// Iniciando o servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

// Login do bot no Discord
client.login(TOKEN);