const express = require('express');
const app = express();
const pino = require("pino");
let { toBuffer } = require("qrcode");
const path = require('path');
const fs = require("fs-extra");
const { Boom } = require("@hapi/boom");
let MESSAGE =  `
╔════◇
║ *『 Arigato Senpai ,you CHOSE MAKINO-MD 』*
║ _You completed first deployment step._
╚════════════════════════╝
╔═════◇
║       『••• MAKINO-MD •••』
║ *Channel:* _https://whatsapp.com/channel/0029VaaSaXD23n3ZEognud1V_
║ *Support GC:* _https://chat.whatsapp.com/BRDE2Yqsj9iAkTxhnuI1AL_
║ *Owner:* _https://wa.me/2347080968564_
║ *Note :*_Do not provide your SESSION_ID to_
║ _anyone otherwise that can access your data_
╚════════════════════════╝
`
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./qr');
let  code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
//app.use('/qr', server);
//app.use('/code', code);
app.use("/qrcode", async(req, res) => {
  if (fs.existsSync('./auth_info_baileys')) {
    fs.emptyDirSync(__dirname + '/auth_info_baileys');
  };
  const { default: SuhailWASocket, useMultiFileAuthState, Browsers, delay,DisconnectReason, makeInMemoryStore, } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function SUHAIL() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let Smd =SuhailWASocket({ 
        printQRInTerminal: false,
        logger: pino({ level: "silent" }), 
        browser: Browsers.baileys("Desktop"),
        auth: state 
        });


      Smd.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (qr) { res.end(await toBuffer(qr)); }


        if (connection == "open"){
          await delay(3000);
          let user = Smd.user.id;
          let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          const xeonses = await  Smd.sendMessage(user, { document: CREDS, mimetype: `application/json`, fileName: `creds.json` });
          let session_id = await smd.sendMessage(user, xeonses); 
          await Smd.sendMessage(user, session_id);
          //let msgsss = await Smd.sendMessage(user, { text:  Scan_Id });
          await Smd.sendMessage(user, { text: MESSAGE } , { quoted : msgsss });
          await delay(1000);
          try{ await fs.emptyDirSync(__dirname+'/auth_info_baileys'); }catch(e){}


        }

        Smd.ev.on('creds.update', saveCreds)

        if (connection === "close") {            
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            // console.log("Reason : ",DisconnectReason[reason])
            if (reason === DisconnectReason.connectionClosed) {
              console.log("Connection closed!")
             // SUHAIL().catch(err => console.log(err));
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server!")
            //  SUHAIL().catch(err => console.log(err));
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...")
              SUHAIL().catch(err => console.log(err));
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut!")
             // SUHAIL().catch(err => console.log(err));
            }  else {
                console.log('Connection closed with bot. Please run again.');
                console.log(reason)
              //process.exit(0)
            }
          }



      });
    } catch (err) {
        console.log(err);
       await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 
    }
  }
})
 

app.use('/pair',async (req, res, next) => {
res.sendFile(__path + '/pair.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/main.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Don't Forgot To Give Star

 Server running on http://localhost:` + PORT)
})

module.exports = app
