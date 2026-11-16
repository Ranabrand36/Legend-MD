
module.exports = {
    name: 'ping',
    execute: async (sock, msg, from) => {
        const start = Date.now();
        await sock.sendMessage(from, { text: `🏓 Pong! ${Date.now() - start}ms` }, { quoted: msg });
    }
};
