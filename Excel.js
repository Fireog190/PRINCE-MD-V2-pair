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
//let server = require('./qr');
//let  code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use("/scan", async(req, res, next) => {
res.sendFile(__path + '/qrcode.html')
})
app.use("/heroku", async(req, res, next) => {
    res.sendFile(__path + '/heroku.html')
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
