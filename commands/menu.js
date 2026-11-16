
const config = require('../config');

module.exports = {
    name: 'menu',
    execute: async (sock, msg, from) => {
        const text = `*╭────〔 ${config.botName} 〕────╮*\n\n` +
                     `*│* ⚡ *${config.prefix}ping*\n` +
                     `*│* 👋 *${config.prefix}hi*\n` +
                     `*│* 📋 *${config.prefix}menu*\n\n` +
                     `*╰──────────────────────╯*`;
        await sock.sendMessage(from, { text }, { quoted: msg });
    }
};
