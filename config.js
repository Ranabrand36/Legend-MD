const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1B3NzZvMEUwd2JXS0I2bGYrNjYvc09jMkE3VDNCK3VHQjZKeWNSMFNFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnUrSTBXSUVNV0pNYTQwTmlqWngvdDVnR0tLQmZmcDJQRXBwemJCM3ZnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UFFOM1dJU0ZhTlpOWkd6OEVrN2pEdTkxK0VObXdVT2d2OXdrSVdXSGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS2NGeGcyREt5WjNqd2NEQ1Z4VUxrWUdZRnZWay9HU051Y1FQcnYwQUh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMTis2M3pTL3I1ZVBFdEVlakxCQithaDBDTHJGMXM1ZU1FbDBwVVZrWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlyWEpxcitRTjZVdVFuR1FFY2Z3VkJrV1RFWis1TEZWZXZ3dVdnTjc4RjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENUTGcrMTBhTXd1WTZHdlJPZUoyS3I2WTZhZmdZeDVXeXdubEJlQjBIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2RoUktQaVIvUGpqQmUzQnNYaG9wN25ybXJmYVpkNERwL29vMXMrb0pYcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVUNjJ5QitFb1BvVDNCeStGTVMrU2FUd0Zaa2Fjbmd2MFlGOUZSRGN4NmpEMTVXMkg5ZkRmTUpNQ1lHUU5zeFR0c1g4M1VrU2lNQWJuSDRhcExVTWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5Ijoic1RUWXhSYm9iQzBRS0ljSHQ1V25LT1NHam1wdFFHcXVnL1FJQ3pCalBzRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNjcwODE5NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzEwMEI0MEIxQkQ3MUY0RUNGOEY2NEI4NjVGNDBBNzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDE3ODM0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDY3MDgxOTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBDMkYzQTI4MzE3NUM0QjEzM0Y5Nzc1NjczN0Q0MEMwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjAxNzgzNDR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjMzM0RIR0tHIiwibWUiOnsiaWQiOiI5MjMwNjcwODE5Njc6NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE3OTg3Mzg4NDcyMTMyNjo2QGxpZCIsIm5hbWUiOiJMZWdlbmQgSGFzc2FuIPCfq7Xwn4+78J+roCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHkvbU1rQkVLUGhxTWNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTXBqQWRzYzJyQWJJWitGd3o4UDZqRzVFc3A1c21jazZQMnpwemZMUFJVST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU1dselhDVGV4ZkErQ29nOU9UTm40REhBZWgvSms0b256NGRTcGphc2ZPZEwwbEl3cEVqdjdFTFg5U2REdUcrVXZ4V1BnTlVQQnhzQXRGZkJQeHJEQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IklKaFBKelB1ZVNWR3VZNHJ6MDJNMVd2NnppQ294c3k4c0FFNk9WWG1mNERZR2JKNmNJaFpOUWtNamNhTC9QNi9PekovZjdkSHZJemZqdzlBT3RXYWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDY3MDgxOTY3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEtZd0hiSE5xd0d5R2ZoY00vRCtveHVSTEtlYkpuSk9qOXM2YzN5ejBWQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwMTc4MzQyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlMTiJ9NjMnJBYklaK0Z3ejhQNmpHNUVzcDVzbWNrNlAyenB6ZkxQUlVJPSIsImFjY291bnRTaWduYXR1cmUiOiJUcHdNUVRXN1Z1SjdiM3NIYmtZTk02eXBNZGhpQ0o5eWIzZDVtbVlkUUQ5MGJHdFMwMGYweXpvdmVVdERhRy9oRFpXNnhFZndEWEVOSVZGTUMrUGhBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVUl0czZLWmVoV1p1MjdUYXNVV2YvNk5wNWY1RlgxaFRJK1pyelVvK0NoWEQ5MG9hbzlCdThlN0l4RDJUTTU0VllKSDlmeUpROUs1cXlyMWtVc0RHakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNjcwODE5Njc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUS1l3SGJITnF3R3lHZmhjTS9EK294dVJMS2ViSm5KT2o5czZjM3l6MFZDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjAxNzYyMjUsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFQ4In0=",
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
