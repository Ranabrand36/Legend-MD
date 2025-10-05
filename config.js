const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJ1aFNzOXdWWHo4cEloWE55V0ltOHB3M21hdTJ1Sjk3ZnZFSUdkS21YQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDNlRmorRDRUVHVvVWxQWDF1dnNMMHJ2ZUxwaXVjdmlMK2FZWnBNRGxXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRTJsU1hvTS9CSm0yOUNyYW8xbno4NkpiRmdEYjRUZU1aWFRsRitIVW1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVGxTc2FCeFJBamdocFh5TlNxSDR4S3N3MzlFRGVCcGZienFKb0dKVERrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFeHMyM2ZUZXZUVFRud2FVbm9XYXh1WUdzV2hiZ1NVTElwT2k3ZUUzVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklSYlRucEtWM2lTTzNyd3hjWEZDMmIybE9uNTkvd1VRdXJEV0F2YWg0d0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUo0eDc4QzVyaWtRK0RkRDc5bHJ2WnhHVjVQNzlBZFBjYitoT0RsREtFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjhRWVpCOTNGNTJpenRVYXYyMDNCS0ZhNzlDQjdvZ2thS3RzeEF4a1pIQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii94S3NDVlRaYThVWmMyejJPRVovYUh3UTJXUXRvK096UnZjZFVYL0NzaEU1OXFDTGk2bHB0cXZjbTJkZUloZjZ1cTdwVVNEamFSU01SYVd5elRnQ2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IlJmbDhQZVh3WElOZUhXVFpONWF6YXo2cnVlbHNITGMwUUdRSDhuWTU3UTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM5NTA3Nzg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDREU1REM3ODQ0NDU2NTA3RUVFRDgwNTc0NThFNDk3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTk2ODM4NTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzOTUwNzc4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0RFOTdFQjczQTU5NkY3NjVCOEZBMkE3RUNFRjZFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NjgzODUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDNlBBUks3MiIsIm1lIjp7ImlkIjoiOTIzMDM5NTA3Nzg4OjQ4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTYwMTIxMDk1MjAwOTc0OjQ4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnVOc3JNQkVJSEtpc2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZUVZQ1NqeWhydm4zQTlnWVpDODRWMXB2dG1EMVZyYnJSSHIyaE9waWhUMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWUovRVRoODZlYXlnL3hDRkJuM2JNekliUlBaeDBuZk1hTVB3Zlhqd1ExZWJFTGlmL0s0WHJ4RWlVUzZRcFBFclJ6VEVuM1BiWmlLeWl3OWhocXc5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkdwSGNPTW9vSXpFa0ltUnUvcGhoMEJlK1FIUHhicUxpai9xb3NkdW0yS1RKRjJJSmpMUmMzajBHSGdDSDYwaE1ta2NmTXlvSEVoOW9KWVc0UXRUQWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDM5NTA3Nzg4OjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhoR0FrbzhvYTc1OXdQWUdHUXZPRmRhYjdaZzlWYTI2MFI2OW9UcVlvVTkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTY4Mzg0NiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZhRyJ9BemFYeUNRb2ptcGVhK2huN3JzQUxpaSsvQ3pQS256RGExZkZnS1BUU3NSNGZONEFYbnoxMm43NHVBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYytkOE5KWGpBR0hxYzYrd0dxZEQrNTFkQ0dHK2RmVEVtbmxGOWZ6U292TG10V1AxQWRkRWpaaHVQbnJqUDR1ZHZWTUp0WjNQY0tiNUhHUC8veE5zaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMzk1MDc3ODg6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGhHQWtvOG9hNzU5d1BZR0dRdk9GZGFiN1pnOVZhMjYwUjY5b1RxWW9VOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NjQ4NDkxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFNhIn0=",
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
