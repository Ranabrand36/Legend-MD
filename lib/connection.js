const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, Browsers, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const P = require('pino');
const fs = require('fs');
const config = require('../config');
const { handleMessage } = require('./handler');

async function startConnection() {
    const { state, saveCreds } = await useMultiFileAuthState(config.sessionName);
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        auth: state,
        browser: Browsers.ubuntu('Chrome'),
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        markOnlineOnConnect: false,
    });

    sock.ev.on('creds.update', saveCreds);

    let pairingRequested = false;

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr && !sock.authState.creds.registered && !pairingRequested) {
            pairingRequested = true;
            setTimeout(async () => {
                try {
                    const code = await sock.requestPairingCode(config.ownerNumber, 'LEGENDMD');
                    console.log('\n====================================');
                    console.log('🔑 LEGENDMD PAIRING CODE:', code);
                    console.log('====================================\n');
                } catch (err) {
                    console.log('❌ Pairing error:', err.message);
                    pairingRequested = false;
                }
            }, 3000);
        }

        if (connection === 'open') {
            console.log('✅ LEGENDMD CONNECTED SUCCESSFULLY!');
        }

        if (connection === 'close') {
            const code = lastDisconnect?.error?.output?.statusCode;
            if (code === DisconnectReason.loggedOut) {
                console.log('❌ Logout. auth_info delete karein.');
                try { fs.rmSync(config.sessionName, { recursive: true, force: true }); } catch {}
                process.exit(1);
            } else {
                console.log('🔄 Reconnecting...');
                setTimeout(startConnection, 3000);
            }
        }
    });

    sock.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type !== 'notify' && type !== 'append') return;
        for (const msg of messages) {
            if (msg.message) await handleMessage(sock, msg);
        }
    });
}

module.exports = { startConnection };
