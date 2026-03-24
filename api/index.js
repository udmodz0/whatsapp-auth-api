/* 



██╗░░░██╗██████╗░███╗░░░███╗░█████╗░██████╗░███████╗ 
██║░░░██║██╔══██╗████╗░████║██╔══██╗██╔══██╗╚════██║ 
██║░░░██║██║░░██║██╔████╔██║██║░░██║██║░░██║░░███╔═╝ 
██║░░░██║██║░░██║██║╚██╔╝██║██║░░██║██║░░██║██╔══╝░░ 
╚██████╔╝██████╔╝██║░╚═╝░██║╚█████╔╝██████╔╝███████╗ 
░╚═════╝░╚═════╝░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚══════╝ 
By UDMODZ
DONT SELL
A FREE API
I'M UDMODZ




*/

const {
    default: makeWASocket,
    fetchLatestVersion,
    delay,
    initAuthCreds,
    BufferJSON,
    Browsers,
    makeCacheableSignalKeyStore,
    proto,
    DisconnectReason,
    generateWAMessageFromContent
} = require('noname089');
const { Curve } = require('noname089/lib/Utils');
const P = require('pino');
const { Octokit } = require('@octokit/rest');
const express = require('express');
const cors = require('cors');
const udmodzportal = express();
const port = process.env.PORT || 8080;
const gradient = require("gradient-string");
const title1 = "┈█┈┈┈┈██┈▓█████▄┈┈┈███▄┈▄███▓┈▒█████┈┈┈▓█████▄┈┈▒███████▒";
const title2 = "┈██┈┈▓██▒▒██▀┈██▌┈▓██▒▀█▀┈██▒▒██▒┈┈██▒┈▒██▀┈██▌┈▒┈▒┈▒┈▄▀░";
const title3 = "▓██┈┈▒██░░██┈┈┈█▌┈▓██┈┈┈┈▓██░▒██░┈┈██▒┈░██┈┈┈█▌┈░┈▒┈▄▀▒░┈";
const title4 = "▓▓█┈┈░██░░▓█▄┈┈┈▌┈▒██┈┈┈┈▒██┈▒██┈┈┈██░┈░▓█▄┈┈┈▌┈┈┈▄▀▒┈┈┈░";
const title5 = "▓▓█┈┈░██░░▓█▄┈┈┈▌┈▒██┈┈┈┈▒██┈▒██┈┈┈██░┈░▓█▄┈┈┈▌┈┈┈▄▀▒┈┈┈░";
const title6 = "▒▒█████▓┈░▒████▓┈┈▒██▒┈┈┈░██▒░┈████▓▒░┈░▒████▓┈┈▒███████▒";
const title7 = "░▒▓▒┈▒┈▒┈┈▒▒▓┈┈▒┈┈░┈▒░┈┈┈░┈┈░░┈▒░▒░▒░┈┈┈▒▒▓┈┈▒┈┈░▒▒┈▓░▒░▒";
const title8 = "░░▒░┈░┈░┈┈░┈▒┈┈▒┈┈░┈┈░┈┈┈┈┈┈░┈┈░┈▒┈▒░┈┈┈░┈▒┈┈▒┈┈░░▒┈▒┈░┈▒";
const title9 = "┈░░░┈░┈░┈┈░┈░┈┈░┈┈░┈┈┈┈┈┈░┈┈┈░┈░┈░┈▒┈┈┈┈░┈░┈┈░┈┈░┈░┈░┈░┈░";
const title10 = "┈░░░┈░┈░┈┈░┈░┈┈░┈┈░┈┈┈┈┈┈░┈┈┈░┈░┈░┈▒┈┈┈┈░┈░┈┈░┈┈░┈░┈░┈░┈░";
const title11 = "┈┈┈░┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈░┈░┈┈┈┈┈┈░┈┈┈┈┈┈┈░┈░┈┈┈┈";
const title12 = "┈┈┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈░┈┈┈┈┈┈┈░┈┈┈┈┈┈┈┈";
console.log('');
console.log('');
console.log('');
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title1));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title2));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title3));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title4));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title5));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title6));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title7));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title8));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title9));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title10));
console.log(gradient(["#4000ffff", "#FFFFFF", "#2f00ffff"])(title11));
console.log('');
console.log('');
console.log('');
console.log(gradient(["#ff0055ff", "#FFFFFF", "#2f00ffff"])('By UDMODZ'));
console.log(gradient(["#ff0008ff", "#FFFFFF", "#2f00ffff"])('DONT SELL'));
console.log(gradient(["#ff0026ff", "#FFFFFF", "#2f00ffff"])('A FREE API'));
console.log(gradient(["#ff0000ff", "#FFFFFF", "#2f00ffff"])('ITz UDMODZ'));
console.log('');
console.log('');
console.log('');
const fs = require('fs');
if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: './config.env' });
} else if (fs.existsSync('.env')) {
    require('dotenv').config();
}


// git credentials


const config = {
    GITHUB_REPO_URL: process.env.GITHUB_REPO_URL || "Your github url",
    GITHUB_SECRET_KEY: process.env.GITHUB_SECRET_KEY || "your github token",
};

udmodzportal.use(cors());
udmodzportal.use(express.json());


const github = new Octokit({ auth: config.GITHUB_SECRET_KEY });
const [owner, repo] = config.GITHUB_REPO_URL.split('/').slice(-2);

const saveud0 = new Map();

async function saveudgit(sessionId, state) {
    if (!saveud0.has(sessionId)) {
        saveud0.set(sessionId, Promise.resolve());
    }

    const currentChain = saveud0.get(sessionId);
    const nextLink = currentChain.then(async () => {
        let retry = 0;
        const maxRetries = 3;
        while (retry < maxRetries) {
            try {
                const filePath = `sessions/${sessionId}.json`;
                const content = Buffer.from(JSON.stringify(state, BufferJSON.replacer, 2)).toString('base64');

                let sha = null;
                try {
                    const { data: file } = await github.repos.getContent({ owner, repo, path: filePath });
                    if (!Array.isArray(file)) sha = file.sha;
                } catch (err) { }

                await github.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: filePath,
                    message: sha ? `Update session ${sessionId}` : `Create session ${sessionId}`,
                    content,
                    sha: sha || undefined
                });
                console.log(`[GIT] Session ${sessionId} synced successfully`);
                break;
            } catch (err) {
                if (err.status === 409 || err.message.includes('sha')) {
                    retry++;
                    console.warn(`[GIT] Race condition in session ${sessionId}, retrying (${retry}/${maxRetries})...`);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } else {
                    console.error('[GIT ERR]', err.message);
                    break;
                }
            }
        }
    });

    saveud0.set(sessionId, nextLink);
    return nextLink;
}

async function loadFromGitHub(sessionId) {
    try {
        const filePath = `sessions/${sessionId}.json`;
        const { data: file } = await github.repos.getContent({ owner, repo, path: filePath });
        const content = Buffer.from(file.content, 'base64').toString('utf-8');
        return JSON.parse(content, BufferJSON.reviver);
    } catch (err) {
        return null;
    }
}

async function deleteFromGitHub(sessionId) {
    try {
        const filePath = `sessions/${sessionId}.json`;
        const { data: file } = await github.repos.getContent({ owner, repo, path: filePath });
        if (!Array.isArray(file)) {
            await github.repos.deleteFile({
                owner,
                repo,
                path: filePath,
                message: `Remove session ${sessionId}`,
                sha: file.sha
            });
        }
    } catch (err) { }
}

const connections = new Map();

async function connectUDmodzBot(phoneNumber) {
    const sessionId = `session_${phoneNumber}`;
    let sessionData = await loadFromGitHub(sessionId);

    let creds = sessionData?.creds || initAuthCreds();
    let keys = sessionData?.keys || {};

    let saveTimer = null;
    const scheduleSave = () => {
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
            saveudgit(sessionId, { creds, keys }).catch(() => { });
        }, 5000);
    };

    const state = {
        creds,
        keys: {
            get: (type, ids) => {
                const data = {};
                for (const id of ids) data[id] = keys[`${type}-${id}`];
                return data;
            },
            set: (data) => {
                for (const type in data) {
                    for (const id in data[type]) keys[`${type}-${id}`] = data[type][id];
                }
                scheduleSave();
            }
        }
    };

    const version = (typeof fetchLatestVersion === 'function')
        ? (await fetchLatestVersion().catch(() => ({ version: [2, 3100, 1015901307] }))).version
        : [2, 3100, 1015901307];
    let pairingRequested = false;
    async function connect() {
        const udmodzConnect = makeWASocket({
            logger: P({ level: "silent" }),
            printQRInTerminal: false,
            auth: state,
            version,
            connectTimeoutMs: 60000,
            defaultQueryTimeoutMs: 0,
            keepAliveIntervalMs: 10000,
            emitOwnEvents: true,
            fireInitQueries: true,
            generateHighQualityLinkPreview: true,
            syncFullHistory: false,
            markOnlineOnConnect: true,
            browser: ['Mac OS', 'Safari', '10.15.7']
        });

        connections.set(phoneNumber, { udmodzConnect, status: 'connecting', lastUpdate: Date.now() });

        udmodzConnect.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect } = update;

            if (connection && connections.has(phoneNumber)) {
                connections.get(phoneNumber).status = connection;
                connections.get(phoneNumber).lastUpdate = Date.now();
            }
        });

        udmodzConnect.ev.on('creds.update', () => {
            scheduleSave();
        });

        return udmodzConnect;
    }

    return await connect();
}




udmodzportal.get('/pair', async (req, res) => {
    const number = req.query.number?.replace(/[^0-9]/g, '');
    if (!number) return res.status(400).json({ error: 'Number required' });

    try {
        const udmodzConnect = await connectUDmodzBot(number);
        await delay(5000);

        if (!udmodzConnect.authState.creds.registered) {
            const code = await udmodzConnect.requestPairingCode(number);
            res.json({ status: 'success', code });
        } else {
            res.json({ status: 'already_authenticated', message: 'This bot is already paired to api.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


udmodzportal.get('/manage', async (req, res) => {
    const { number, action } = req.query;
    const cleanNumber = number?.replace(/[^0-9]/g, '');
    if (!cleanNumber) return res.status(400).json({ error: 'Number required' });

    if (action === 'delete') {
        const bot = connections.get(cleanNumber);
        if (bot) {
            try { bot.udmodzConnect.logout(); } catch (e) { }
            connections.delete(cleanNumber);
        }
        await deleteFromGitHub(`session_${cleanNumber}`);
        return res.json({ status: 'success', message: `Bot ${cleanNumber} deleted.` });
    }

    res.status(400).json({ error: 'Invalid action' });
});


udmodzportal.get('/send', async (req, res) => {
    const { text, msg, botNumber, receiver, otp } = req.query;
    const messageContent = text || msg;
    const cleanedbotud = botNumber?.replace(/[^0-9]/g, '');
    const cleanedreciud = receiver?.replace(/[^0-9]/g, '');

    if (!messageContent || !cleanedbotud || !cleanedreciud) {
        return res.status(400).json({ error: 'text / msg, botNumber, and receiver arent given properly' });
    }

    const receiverJid = cleanedreciud + '@s.whatsapp.net';

    let bot = connections.get(cleanedbotud);

    if (!bot || bot.status !== 'open') {
        const sessionId = `session_${cleanedbotud}`;
        const sessionExists = await loadFromGitHub(sessionId);
        if (sessionExists) {
            if (bot && bot.udmodzConnect) {
                try { bot.udmodzConnect.end(undefined); } catch (e) { }
            }
            await connectUDmodzBot(cleanedbotud);
            let attempts = 0;
            while (attempts < 10) {
                bot = connections.get(cleanedbotud);
                if (bot && bot.status === 'open') break;
                await delay(2000);
                attempts++;
            }
        }
    }

    if (bot && (bot.status === 'open' || bot.status === 'connected')) {
        try {
            if (otp) {
                const interactive = generateWAMessageFromContent(receiverJid, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                header: { hasMediaAttachment: false },
                                body: { text: messageContent },
                                footer: { text: "Powered BY UDMODZ" },
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "📋 Copy OTP",
                                                id: "copy_code",
                                                copy_code: otp
                                            })
                                        }
                                    ]
                                }
                            })
                        }
                    }
                }, { userJid: bot.udmodzConnect.user.id });

                await bot.udmodzConnect.relayMessage(receiverJid, interactive.message, {
                    messageId: interactive.key.id
                });
            } else {
                await bot.udmodzConnect.sendMessage(receiverJid, { text: messageContent });
            }
            res.json({ status: 'success', message: 'Message sent' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to send message:- ' + err.message });
        }
    } else {
        res.status(404).json({ error: 'Bot is offline or not found. Wait for reconnection...' });
    }
});


udmodzportal.get('/health', async (req, res) => {
    const list = [];
    connections.forEach((val, key) => {
        list.push({
            number: key,
            status: val.status,
            lastUpdate: new Date(val.lastUpdate).toISOString()
        });
    });

    try {
        const { data: files } = await github.repos.getContent({ owner, repo, path: 'sessions' });
        for (const file of files) {
            const num = file.name.replace('session_', '').replace('.json', '');
            if (!connections.has(num)) {
                list.push({ number: num, status: 'offline', lastUpdate: 'N/A' });
            }
        }
    } catch (e) { }

    res.json({ status: 'ok', bots: list });
});


const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL || process.env.CLEVER_CLOUD;

async function init() {
    console.log('Searching botz on GitHub');
    try {
        const { data: files } = await github.repos.getContent({ owner, repo, path: 'sessions' });
        for (const file of files) {
            if (file.name.endsWith('.json')) {
                const num = file.name.replace('session_', '').replace('.json', '');
                console.log(`Connecting to paired botz: ${num}`);
                await connectUDmodzBot(num);
            }
        }
    } catch (e) {
        console.error('Fail loading sessions:-', e.message);
    }
}

if (isProduction) {

    udmodzportal.listen(port, async () => {
        console.log(`OTP API Server running on port ${port}`);
        await init();
    });
} else {

    const https = require('https');
    const selfsigned = require('selfsigned');
    const attrs = [{ name: 'commonName', value: 'localhost' }];
    const pems = selfsigned.generate(attrs, { days: 365 });

    const httpsServer = https.createServer({
        key: pems.private,
        cert: pems.cert
    }, udmodzportal);

    httpsServer.listen(port, async () => {
        console.log(`OTP API Server running on port ${port}`);
        console.log(`URL: https://localhost:${port}`);
        await init();
    });
}


module.exports = udmodzportal;
