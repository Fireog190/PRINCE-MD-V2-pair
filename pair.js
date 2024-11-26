const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Excel_Xcelsama,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function STAR_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Excel_Xcelsama = Excel_Xcelsama({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Excel_Xcelsama.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Excel_Xcelsama.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Excel_Xcelsama.ev.on('creds.update', saveCreds)
            Pair_Code_By_Excel_Xcelsama.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                /*let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Excel.sendMessage(Pair_Code_By_Excel.user.id, { text: '' + b64data });*/
               let STAR_MD_TEXT = `
╔════◇
║ *『 SESSION ID CONNECTED SUCCESSFULLY PRINCE-MD-V2 』*
║ _You completed first deployment step._
╚════════════════════════╝
╔═════◇
║       『••• PRINCE-MD-V2 •••』
║ *Channel:* _https://whatsapp.com/channel/0029VajcRr0GpLHR6PjdgN3N_
║ *Note :*_Do not provide your SESSION_ID to_
║ _anyone otherwise that can access your data_
╚════════════════════════╝`
 let CREDS = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
 const xeonses = await  Pair_Code_By_Excel_Xcelsama.sendMessage(user, { document: CREDS, mimetype: `application/json`, fileName: `creds.json` });
 let session_id = await Pair_Code_By_Excel_Xcelsama.sendMessage(user, xeonses);      //SENDING 'base64' SESSION ID TO USER NUMBER
 await Pair_Code_By_Excel_Xcelsama.sendMessage(user, session_id);
 await Pair_Code_By_Excel_Xcelsama.sendMessage(Pair_Code_By_Excel_Xcelsama.user.id,{text:STAR_MD_TEXT},{quoted:session_id})
 

        await delay(100);
        await Pair_Code_By_Excel_Xcelsama.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    STAR_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await STAR_MD_PAIR_CODE()
});
module.exports = router
