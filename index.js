require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🚀 Welcome to Solana Demo Trading Bot!\n\nType /buy or /sell to simulate trades."
  );
});

bot.onText(/\/buy/, (msg) => {
  bot.sendMessage(msg.chat.id, "📈 Simulated BUY order placed on SOL!");
});

bot.onText(/\/sell/, (msg) => {
  bot.sendMessage(msg.chat.id, "📉 Simulated SELL order placed on SOL!");
});

console.log("Bot is running...");
