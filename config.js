const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK04xWGEvQ0VWNDJVYjJocjdQTXlkVTRKZHd2S0lWZCtNeWNmclVNVllWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk44cVBZV1JKZXFQUjgxbHAveFBLN1JRN21iNkUzM1dyNzY0M1dNQU9Cdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ2NtNmdhUWZUWWtLUWhjbjV5bnBndUExejR0TnhsQm44YnljVXE1dEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMEZnQVRYRjlrd2R5Wk9meTRCdE1qTVlCVWpLWGpXUzRMemJONU8xNmw0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHK3dKSFF1Y1BLcnRWMkRKdEJqUDVobWxnbnFFTURBZ2w0Q08rd3NFbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFOWWl1YVd4MXptaFVjY21PaitiY2FXR0JMUE1HUnJKb1docDQvY0NxbmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5GNFNHYk9TMjJXQS9ZQXJIdFZuckx6QkpVOGZadGNFNVlkenVQK0tVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1V6akJNNVNUZXFabDc2WHFIMDRDS2RaSjI3TE1vMXFGMlpDWG8zSXZDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Qc1ZMQXZvZ1hIVmN2eEJGQi9jWlFPT1J4R0pxTnlKN1E5SGhjRCt5QlRvajdZK1lndElzODFyMTJMYUQydHJLWGhNUkRLdUhaY2hGejY4MlhEcUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6ImdGM1QwemJkS2JmTTdFbkZYbkdDNThvWVVvZEFiaEhCdzc0VnlPRnlNTWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjM4RjU3SDg4IiwibWUiOnsiaWQiOiI5MjMwMzk1MDc3ODg6NDlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjAxMjEwOTUyMDA5NzQ6NDlAbGlkIiwibmFtZSI6IkzqmbJl6pmyZ+qZsmXqmbJu6pmyZOqZsiBI6pmyYeqZsnPqmbJz6pmyYeqZsm7qmbIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p5TnNyTUJFSmlKbDhjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVFWUNTanlocnZuM0E5Z1laQzg0VjFwdnRtRDFWcmJyUkhyMmhPcGloVDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhIMThCWU9LNjRsMy8walhUdFM5S0pmWFFnYUVqTm5RWWlkeWIwbHl2bjUra3JkSlJzYy9MYWsrM0FEcmhXd2ZPcVpYV3VtZXVUTEt2T2tDa3g3UkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvSDNhdGtVbjBReG5DVjBaMmNMQWl3VWpZbHlyYzc4cmFrMXJiRUwyclNHYmNTcmVHTWxJS1hNYmFjMGFSNVFqZXJ6THNTQlhMbWlHUEtYOGthdVRCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAzOTUwNzc4ODo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYaEdBa284b2E3NTl3UFlHR1F2T0ZkYWI3Wmc5VmEyNjBSNjlvVHFZb1U5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk4ODg1MzksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLS1cifQ==",
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
