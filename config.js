const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlTd2tNZHQvWVRHdG1VTkd6L0xIZjhkNjlsSW9Ib3JZTFd0K0gySEUxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYm1KeUtWcVc2dE1ITnh6QW42Q1J0V09YdmNuRXZoM3doVThMWXV3ZzBnbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRjNTUVdRRW1TRHZGN3Z2SytUbVMvTkFaNkdyVkZTNGpGNVFtVFpUajBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUFhmdEZiVHdmQ1B5YnBmb3dsWThsLzRHMWdsWS9TNkk2Qk9EU21OVzBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLMm8wcU9lL2REeDU0V2VlWW9MbncvR0VhYlVvU0hHOVpTQUR6N1NUVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZIUmhOd29uT2JTemxrb3AwRHV2cVo2SWNnK0VMVFlxOG0yMGM1aEQ3Z2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVNZCtYc2o4Z2MrNWdpTzRoalFqZ0JqbTBmK2VEajRFSmY2ZXcwckVGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFNGT2xrWkJkNDZBQUJqcE55NnNEWStzNnphTlVaUlpZMDQ1aEtMQ2xWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRuVStsSk1YcitQcjZIVEF5VXppYmpIdk14ZGNKbjd0UW9zSkR5ckNmdWZiMmR6U3c5NUUwUkM4ZXpzVnp4RllTWnlKWmZ6UzNhdWdZVmNMSWpnYmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiI5d3pwMTh6SlYxQUUwTVBHVk96aCtJUlpOSmNjOHNNbDloWnlXaGFUeVZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA2NzA4MTk2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QkU4N0M3QjM2MDI3NTI3NjdDMzA3QjVERjAwQkFCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYwMTc2MjI4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNjcwODE5NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzUyOTYxRDg1MTU4Q0Y2NEM4RDdERjkxNUUwMDU1N0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDE3NjIyOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDY3MDgxOTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQzRUJFRUY3QUI3QUZGQzcxNDNDQUUyNEUzNTBDNDFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjAxNzYyMzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA2NzA4MTk2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QUY5QTY0NTAxRjk2QTk2QjBBQ0E1NkE2MUQ3MUI3RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYwMTc2MjQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNjcwODE5NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDlCNUY2MEIzNzg5MUQwNTcwNEMyMUU3MEY2QTIzMjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDE3NjI1NH1dLCJuZXh0UHJlS2V5SWQiOjM1LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzUsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUFk5NVlaQUgiLCJtZSI6eyJpZCI6IjkyMzA2NzA4MTk2Nzo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc5ODczODg0NzIxMzI2OjVAbGlkIiwibmFtZSI6IkxlZ2VuZCBIYXNzYW4g8J+rtfCfj7vwn6ugIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdS9tTWtCRU4zUXFNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNcGpBZHNjMnJBYklaK0Z3ejhQNmpHNUVzcDVzbWNrNlAyenB6ZkxQUlVJPSIsImFjY291bnRTaWduYXR1cmUiOiJUcHdNUVRXN1Z1SjdiM3NIYmtZTk02eXBNZGhpQ0o5eWIzZDVtbVlkUUQ5MGJHdFMwMGYweXpvdmVVdERhRy9oRFpXNnhFZndEWEVOSVZGTUMrUGhBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVUl0czZLWmVoV1p1MjdUYXNVV2YvNk5wNWY1RlgxaFRJK1pyelVvK0NoWEQ5MG9hbzlCdThlN0l4RDJUTTU0VllKSDlmeUpROUs1cXlyMWtVc0RHakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNjcwODE5Njc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUS1l3SGJITnF3R3lHZmhjTS9EK294dVJMS2ViSm5KT2o5czZjM3l6MFZDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjAxNzYyMjUsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFQ4In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Legend's Boy🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lyl3vz.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Legend-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Legend-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923039507788",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Legend Hassan*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ LEGENDARY BOY❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p503qi.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Jani Active Ha No Tension 😉 ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923039507788",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
