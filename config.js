const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lMZDBlcW82VmVtRTBMYkRGaW82ZnJTNWp5Wk96ZlpGOXc0UzFCci9Wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVhiQ0k4OE16R1VocDZHSW54YWx4cjdYNkJDYURqZ2M3bTBqR1IyRHR6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RkZuL1hCZkhPd29LWkd3M2RtQVN6SWJqUXo0QmdxWGNoTWdwRVJHdzM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjb3ZNdVNxbDg2K0VrTGhmcDJ0ZGdHOTdLZExXUXdUL09uRkZSazZwdEZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ONFNiM0tQSjZlZnhKcnJzRDVlSGF0dzEzTitWNk5RY00vSDN0UkVMMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBVL0RGVFBvT2c2Z292TkJhSksxRlZ4RVovUG41UUNoRnE3RC92Smo2WG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVB6UXIyazJjeWZ5QW9BSmdUSVJsODBRS0FQTGQwY0Uybm1oZU9WUkJtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHpsYjE3N2d2MzNBa0E2MUZ4cWxUUFRTY0c2c0FNUTJvbGFDVkFEb3Yydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InREdU5jeTAwWndYamJLcGd6MnZ0RzdEMTRLQVBoU0lyM2hmVnpabzdDSm45Vko3QnE3WnpOZC94enppSHU5SmVjMVRraDFBWlVSd1RERVptdGljNmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6ImQ5R25ZTDlXM2gyZ2RxalBzRUJXem1nOGtqaFcyUDNXUlZsdjVoWEdqRm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjM0NzM1MjQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTZGNkQ1OTIxMDZFRjRDNUYzQzIzQTAyNDExMkJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk5MzEzNDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIzNDczNTI0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzczRTM2Nzk3NzBBNzU1RDJFMDExODcyMDlDMTdEMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5OTMxMzQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJXVEZTS1FXTiIsIm1lIjp7ImlkIjoiOTIzMjM0NzM1MjQzOjE4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTA0ODIzNTkyNjQ0NzQ3OjE4QGxpZCIsIm5hbWUiOiJOaWdob29vby4uLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTJXMzJZUXo5ZVp4d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUElnOG1DNWZFcFJzMHFZYk1nR3ZjTkdqQWxyNW10bWZpVlU1alY1L0NYaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZWdvazMrQkVpSDhYT0N0Rk5Zcyt2Mm9VVk9lcjZHSFAyN013bEdUaHROWkphZytnTkhOQ24vS1oyaFErekhsK1FvWldBd1ptTy9YRjhYYmU4NzRTQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkhyUGNCcGJpVFN5bks1WWxNRlR3ZG9GY0RORjZtZG9VTUs2d0hNUEhOOS9OWEU3ZGJQS1JWdkUxYUcyaTZreXhLOC80cjdrZHBLR3MxajZSWk9MZGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjM0NzM1MjQzOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR5SVBKZ3VYeEtVYk5LbUd6SUJyM0RSb3dKYStaclpuNGxWT1kxZWZ3bDUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTkzMTM0NywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKM2cifQ==",
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
