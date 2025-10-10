const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVB4YzhGcjByYXcvcFZQZkVMVWlkTXd0TXlnK3UwUnUvcXcrUVYwSXpHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHZhTlNQNERYUmF3RFhETlV1NjQrTmVOMGx5cGQ0dHppbWVMeXhSNEMyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTjhMV0EyR1J3dnhMMVlncFpSZ3ZWM0RxTjlqUHhLSFhrNUJhMXUwaVdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJacncvTWZES0YrMTJDZjBDSW1mVFJrcmw5MFF6NlNtMWVWbzk0dkV2ZnlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ONUFOQksxOUNnWmpGSUJTM2R4cC9nZzFBY2I3eG53RWY5VjZBQnJTblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ZOWZIb1h2aU16Z0xXQVE0N2VYa1U4Rzd0T3ZZQnVSbFl3R3QyQjMvaWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtmS3BHTFpZNjFCR3Rid0UxYnZnWVdialcrK1labEhua0h1TXpXR1BYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dlNGVnbTlGMkpjNlhteTJtMWZSMFdIVzkxSkZHd3Fwd2l3UDRtYkVsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9xdGhwbXNLcU9sTmlsdlZNMnlqdzJ3K2FMRm1FTlBoSTNjYmNiRk44Mks1Nm1HWGRIMXlkSjJyOXpmcS91aHY1cXRndWJINkhaNm5vSFd2NXRZRUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiaXQyeFJ0M0JOVmpLUUlQMVZ5QjFxeXNoekhGQ2l6MlJMaFpoRlE4bVYyVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSEtSQk5CSEsiLCJtZSI6eyJpZCI6IjkyMzIzNzA0NTkxOTo1NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBcnNsYW4tTUQgT2ZmaWNpYWwiLCJsaWQiOiIxMzEwNjU3NDIxMjcyMzQ6NTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV1JxS3dHRUtmYnBjY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUb1NVcUdPY2VFR2VSaURBOU84RzBUVlY2dlFvQlVFZnZaNldZemREK3dVPSIsImFjY291bnRTaWduYXR1cmUiOiJ6ZytzbjJ4czdxMytzTWlVQzVNUXh6MUJ5SzhxY0VsVDk4WW5SNXEyM2U0eVE2QVNsUFhpQTdtd0tvMVd3WjQwcEFHWGd2MVloOEZFS2FkMVhWd3NEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWENIcnVFNVczUjRzaWkxMVFzbHd3ejNZcUJPK2hMd2tiS2cxS2lCdDUwY2p4YmtjdHJQVld6bENwSzVjWnFseWJHZk1yMGxCbFh3Tkc0M2FldGRyQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMzcwNDU5MTk6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTZFbEtoam5IaEJua1lnd1BUdkJ0RTFWZXIwS0FWQkg3MmVsbU0zUS9zRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwMTI4NDI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5PUCIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
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
