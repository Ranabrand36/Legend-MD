const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1B5amhzdW1GdXAyZzVua2FxWVBvakt3WTl6eENvWS9UeWpsRzlHWVZVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGo5bUhsUzdrV1ZBTThMaFc5Y21lVi9WZGk1MWY1VDA0SEVQTUJONjkxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUEtMMGRPS2hScHBrMU0xcGhESisxS0xnaGVqRW9mMUxac3JUM2czRDNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVd0MyNEoyUVZkTGZsZVlNejQ3dzA4ZE9mSXNUajV2aGFseUpaSXVzL0NRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdLQk96a2tnRXlEcGNLY29zUk9TMERsWUM0MXVkSmdZWStWenkzbm1Vbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRDWm1ybjNyMnZsY05jYmhFK0ZnLzRRNStzNFNXZVhqeHBwMFNMNW1FQ3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5jazN3RHdXeGdKZWRORXlmUUVTdkNwVGMwRUw2Z0U4WERYRUJVMDVVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUs4M1VBZGx5MnFRTGUrdWF3T20wWmVWYmZwZ0hMOSt6QzBtM3hodW9qST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFNEU4b1A5VGlkS25CT2FNSDk5ZEdESlhUUmtIYm9CR1I3Y3BHbmptZGw5bXJ2bzMrcnk5ZHBxV0ppc1A2bVM2aWhzbUpHSjRUUmNSbFdsbEFIVEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6InNKckpUd2wyMElvTldYa2VsQytjNFVvNG5MckJwclpIZ0w5SmNKNk5sUmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDY3MDgxOTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyMzcwMDQ2QUU3MTlDNzgyN0NENjM3OTE4OEE3QTYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk5MjkwMTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA2NzA4MTk2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0OEM5MEZDNUY0QzJBRjZDQUMyNTRBRDUzQjBCOUYxMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5OTI5MDE4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJOWVFINUxZNyIsIm1lIjp7ImlkIjoiOTIzMDY3MDgxOTY3OjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNzk4NzM4ODQ3MjEzMjY6M0BsaWQiLCJuYW1lIjoiTGVnZW5kIEhhc3NhbiDwn6u18J+Pu/Cfq6AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BtL21Na0JFTFBGbWNjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1wakFkc2MyckFiSVorRnd6OFA2akc1RXNwNXNtY2s2UDJ6cHpmTFBSVUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhqMXBwTENzL2RJWlFHdS8vZmtSMU1PZUR1ZmNZUHJzbU41WlB0anJWbHkrQmgzYnh6cDFrUk54dHZ1NUR5ekEzaHRaWXg5VXlrVUpDMzEyWkdHT0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3TTc1b1JveGM0Wk9SaXJVdUNWMFlOMG5nVzM5ajcxZG8rNDVCOEhDSS9lMUk3ZldpS2t4SjVvWkxvYWVwbGExdUlYaGdDWStQNG1tV1Z4a050S3ZBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA2NzA4MTk2NzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRLWXdIYkhOcXdHeUdmaGNNL0Qrb3h1UkxLZWJKbkpPajlzNmMzeXowVkMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTkyOTAxNSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLK1IifQ==",
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
