const config = require('../config');
const fs = require('fs');
const path = require('path');

// Saari commands load karo
const commands = new Map();
const commandFiles = fs.readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.set(command.name, command);
}

async function handleMessage(sock, msg) {
    try {
        const from = msg.key.remoteJid;
        if (!from || from === 'status@broadcast') return;

        const mtype = Object.keys(msg.message)[0];
        const text = msg.message.conversation || msg.message.extendedTextMessage?.text || msg.message[mtype]?.text || '';

        if (!text) return;
        console.log(`📩 From: ${from} | Text: "${text}"`);

        // Prefix check
        if (!text.startsWith(config.prefix)) return;

        const args = text.slice(config.prefix.length).trim().split(/ +/);
        const cmdName = args.shift().toLowerCase();

        // Command execute karo
        if (commands.has(cmdName)) {
            await commands.get(cmdName).execute(sock, msg, from, args);
        } else if (cmdName === 'hi') { // Simple built-in command
            await sock.sendMessage(from, { text: '👋 Assalamu alaikum! LEGENDMD ready ✅' }, { quoted: msg });
        }

    } catch (err) {
        if (!err.message.includes('Bad MAC')) console.log('❌ Handler error:', err.message);
    }
}

module.exports = { handleMessage };
