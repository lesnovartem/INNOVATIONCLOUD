const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'lesnovartem7@gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
           // Пожалуйста, используйте свой собственный аккаунт для рассылки
            user: 'testlesnov@mail.ru', // (замените звездочики на название вашего почтового ящика)
            pass: '11d197611d' //  (замените звездочики на пароль вашего почтового ящика)
        }
    },
    {
        from: 'Mailer Test <testlesnov@mail.ru>',
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer