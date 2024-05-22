// const nodemailer = require("nodemailer")
// let transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_HOST,
//         pass: process.env.PASS_KEY
//     }
// })
// module.exports = { transport }

const nodemailer = require("nodemailer")
const sgTransport = require('nodemailer-sendgrid');
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDGRID_API_KEY;
// let transport = nodemailer.createTransport({
//     // host: 'smtp-relay.brevo.com',
//     // port: 587,
//     // // service: "gmail",
//     // secure: false,
//     // auth: {
//     //     user: process.env.EMAIL_HOST,
//     //     pass: process.env.PASS_KEY
//     // },
//     // logger: true, // Enable logging
//     // debug: true 

// })
let transport = nodemailer.createTransport(
    sgTransport({
        apiKey: process.env.SENDGRID_API_KEY
    })
)
module.exports = { transport }