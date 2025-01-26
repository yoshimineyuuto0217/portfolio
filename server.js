const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-mail',async(req,res) => {
    const {email, message, number} = req.body;
    const transport =nodemailer.createTransport({
        service:"Gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    // ユーザーに送信するところ
    const SendMailOptions = {
        from: 'jilingyongdou@gmail.com', //送信元のメールアドレス
        to: email, // 送信先のメールアドレス
        subject: 'お問い合わせありがとうございます。', // 件名
        text: message, // メール本文
    }
// うんえいが受け取るところ
    const ReceiveMailOptions = {
        from: email, //送信元のメールアドレス
        to:'jilingyongdou@gmail.com' , // 送信先のメールアドレス
        subject: 'ホームページからのお問い合わせ', // 件名
        text: `Email: ${email}\n\n本文: ${message} 電話番号：${number}`, // メール本文
    }
    try {
        await transport.sendMail(SendMailOptions);
        await transport.sendMail(ReceiveMailOptions);
        res.status(200).json({ message: 'メールが送信されました'});
    } catch(error){
        console.log(error);
        res.status(500).json({message:'しっぱいしてます'})
    }
})

app.listen(port, () => {
    console.log(`サーバがポート ${port} で起動しました。`)
});
