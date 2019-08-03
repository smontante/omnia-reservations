const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shaunmontante@gmail.com',
    pass: 'Asscracc1o37!!!'
  }
});

const mailOptions = {
  from: 'shaunmontante@gmail.com',
  to: 'shaunmontante@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});