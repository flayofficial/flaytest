//base by DGXeon (Xeon Bot Inc.)
// HALO TERIMA TELAH MENGGUNAKAN BOT HAKARI MD. SUPPORT FALL SELALU YA. 

// TERIMAKASIH JUGA KEPADA 
// - FallXdz
// - LORENZO & CHEEMS 
// - DAN PENYEDIA REST API 
// - SERTA PARA SUBSCRIBE DAN FOLL SALURAN WHATSAPP KU. 

// LINK CH : https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D

// ---------- CREDIT JANGAN DIHAPUS -------- //


// Require
const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia
} = require("./File/language");

/*--------------------------------------------*/

// Owner
global.ytname = "YT: FallZx-Features" //ur yt chanel name
global.socialm = "GitHub: FallEzz" //ur github or insta name
global.location = "Markas Ultraman" //ur location

/*--------------------------------------------*/

// Information
global.botname = '𝑯𝒂𝒌𝒂𝒓𝒊𝑴𝒅𝒛' //ur bot name
global.ownernumber = '6285813708397' //ur owner number
global.ownername = '𝑯𝒂𝒌𝒂𝒓𝒊𝑴𝒅𝒛' //ur owner name
global.websitex = "https://youtube.com/@Fallzx-Features"
global.wagc = "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D"
global.themeemoji = '💌'
global.wm = "𝑯𝒂𝒌𝒂𝒓𝒊𝑴𝒅𝒛"
global.botscript = 'https://youtu.be/6UaTnCjzeOQ?si=E2lG7KiU0civWjVp' //script link
global.packname = "Sticker By Fall"
global.author = "FallZx-Features"
global.creator = "6285813708397@s.whatsapp.net"

/*--------------------------------------------*/

// Telegram
global.OWNER = ["𝑯𝒂𝒌𝒂𝒓𝒊𝑴𝒅𝒛"]
global.OWNER_NAME = "𝑯𝒂𝒌𝒂𝒓𝒊𝑴𝒅𝒛"
global.BOT_TOKEN = '-'
global.APIKeys = {
   'https://api.zeeoneofc.my.id': '-',
}   
global.BOT_NAME = "𝑯𝒂𝒌𝒂𝒓𝒊𝑴𝒅𝒛"   
global.THUMBNAIL = "./File/image/lol.jpg"
global.DONASI = "./File/image/donasi.jpg"
global.language = indonesia
global.lang = language //don't change

/*--------------------------------------------*/

// APIs
global.apiId = {
 smm: '-',
 lapak: '-',
 litensi: '-'
}

// Apikey
global.api = {
 smm: '-',
 lapak: '-',
 litensi: '-',
 atlantic: '-',
 osu: '-'
}

global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id',
   smm: "https://smmnusantara.id",
   lapak: "https://panel.lapaksosmed.com",
   atlantic: "https://atlantich2h.com/layanan/price_list"
   }

/*--------------------------------------------*/

// Prefix & Premium
global.xprefix = '.'
global.premium = ["6285813708397"] // Premium User
global.hituet = 0

/*--------------------------------------------*/

// Pterodactyl
global.domain = 'https://lorenzxz.com' // Isi Domain Lu
global.apikey = 'ptla_' // Isi Apikey Plta Lu
global.capikey = 'ptlc_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location


/*--------------------------------------------*/    

// Type
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!',
    owner: 'Only owner can do that!',
    bugrespon: 'Success!'
}

/*--------------------------------------------*/

// Thumbnail
global.thumb = fs.readFileSync('./File/theme/hakari.jpg')

/*--------------------------------------------*/

// Bug Text
global.xbugtex = {
xtxt: '🚨Lorenzxz🚨',
}
global.bimg = '-'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})