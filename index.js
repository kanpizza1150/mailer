const nodemailer = require('nodemailer')
const inLineCss = require('nodemailer-juice')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', //Sender's email
    pass: '', // //Sender's password
  },
})
transporter.use('compile', inLineCss())
const style = {
  container: `width:100%;height:100%;background-color:#f4f5f7;color:#000000; display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top: 10px;`,
  wrapper: `background-color:white;border-radius:10px;margin:50px;overflow:hidden; `,
  header: `background-color:#249f26; font-size:30px; height:120px;`,
  body: `padding:50px`,
}
const htmlEmail = `
<div style=${style.container}>
    <div style=${style.wrapper}>
        <div style=${style.header}>
            <h1 style="color:white;margin:0;">CEP</h1>
        </div>
        <div style=${style.body}>
            <h1 >Dear fucker!</h1>
            <p>how the fuck are you doing hah? </>
        </div>
    </div>
    <span style="text-align: center; margin-bottom:2px;>powered by your bitches</span>
</div>`

const mailOptions = {
  from: 'kanpizza1150@gmail.com',
  to: 'knokd@sertiscorp.com',
  subject: 'Test header2',
  html: htmlEmail,
  attachments: [
    { path: './att.txt' },
    {
      filename: 'Invoice.txt',
      content: 'hello world!',
      contentType: 'text/plain',
    },
  ],
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent:', info.response)
  }
})
