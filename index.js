const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Simple bot response
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Solana demo bot is running 🚀");
});

// Web server for Render
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is alive');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});