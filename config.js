const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FRbGVYMDQ2OU1nWGgrQ0NVa2lTREI1bGxsaXdua1dnYWhtZktPS1Nscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWU2YnF6VjF2ZDhZY1pPM0ZEWllDS2JBSnBGbHF3bkZTMlFGT3dZMDJnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDkweXNMdmFCbWdERHJ0THZ1Zk1RMXJJMHB0OE4vQmpSNWdLUWhDdVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTXhINGZyQnhPOXo5TytpUGVCb1Y4dm5JMUZIMStBNVhpanVpZk5PWDFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGYmxBMFhnZHFhVHlZVXRwcGtMK0FYU0wzelo3SkF3bUZHMWwzb1JuV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLM3BuMDBUeVkxSmFlVDJDOUx6cW1DdCtndDUwUkNKbnhXUG9ObWl4VGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0d1N1lLUUFzMmxjak1uRWxjS3NSNW5PSnBIZGdCT1VJZWF2Q2U1YncyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2FKYVpmNENVNE9KMmg0d1NrcWJzYy9nck5GU0R0cFpWL1phdk9tTVhqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhhUGFucFg2dG5rK0tVRzJPSDNwTmhPQUZrNmowblZmUXN2Kzl2UHQwNE04OXJqT0ovcGpwbFN2Wm1RZWJKY3J0UG5tekxZNVE2NzZyZFo5eWx5a2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJzNUNSQVZ5SkcxWXlhSEEvNHIwdHcxNVZBdkUvZlBxTzBwTHhoWVVjUzhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBSjM4RDhENyIsIm1lIjp7ImlkIjoiOTIzMjM3MDQ1OTE5OjUzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFyc2xhbi1NRCBPZmZpY2lhbCIsImxpZCI6IjEzMTA2NTc0MjEyNzIzNDo1M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTUnFLd0dFSTYybzhjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRvU1VxR09jZUVHZVJpREE5TzhHMFRWVjZ2UW9CVUVmdlo2V1l6ZEQrd1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9YbUxERjk2T1UvN0lQWExnMllxbzFkdGloYTMrTGdrQkxxZmJWSGVSOVVIZ2VHTWZ0RVM2TmltdDJlV3hzWm9naXlnM00rWHRMdCtMVk5yRUdBNUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrMW5Oa2R3ZzVNbDVzZXFKSGpwY1RqSjZXUWtic2VXeDBiWGNVREpNT05pVk5nZ1ZoUit1cTBZemlVUGo4ZWZMa005WWt1OGdSSHVCK1BxSG1oQXNpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIzNzA0NTkxOTo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNkVsS2hqbkhoQm5rWWd3UFR2QnRFMVZlcjBLQVZCSDcyZWxtTTNRL3NGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjAwOTA4OTcsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVYxIn0=",
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
