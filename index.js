const TelegramBot = require('node-telegram-bot-api');

const token = '8535590371:AAHZmdLj3cELh3_lrdo01wiBmG5Oe5ifHNI';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Bot is working!');
});