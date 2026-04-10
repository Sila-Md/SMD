const { zokou } = require("../framework/zokou");
const os = require("os");
const moment = require("moment-timezone");

const BOT_NAME = "𝐋𝐔𝐂𝐕𝐎𝐈𝐂𝐄-𝐗𝐌𝐃";
const FOOTER_TEXT = "𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐋𝐮𝐤𝐚 𝐈𝐓";

zokou({
    nomCom: "ping",
    categorie: "General",
    reaction: "🏓",
    desc: "Check bot response time"
}, async (dest, zk, commandeOptions) => {
    const { repondre } = commandeOptions;
    
    const start = Date.now();
    await repondre("🏓 *Pinging...*");
    const end = Date.now();
    
    const pingMessage = `╭─────────────────╮
│  🏓 *PONG!* 🏓      │
├─────────────────┤
│  ⚡ Response : ${end - start} ms
│  ⏰ Time      : ${moment().format('HH:mm:ss')}
│  📅 Date      : ${moment().format('DD/MM/YYYY')}
├─────────────────┤
│  ✨ ${BOT_NAME} ✨  │
╰─────────────────╯

${FOOTER_TEXT}`;

    await repondre(pingMessage);
});