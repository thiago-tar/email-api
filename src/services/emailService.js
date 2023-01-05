const nodemailer = require("nodemailer");

const connectionTransport = () =>
  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user:  process.env.EMAIL_API_EMAIL,
      pass:  process.env.EMAIL_API_PASS,
    },
  });

async function wrapSendEmail(message) {
  return new Promise((resolve, reject) => {
    var transporter = connectionTransport();

    var mailOptions = {
      from: process.env.EMAIL_API_EMAIL,
      to: process.env.EMAIL_API_EMAIL,
      subject: "Job oportunity",
      html: message,
    };

    transporter
      .sendMail(mailOptions)
      .then((value) => resolve(true))
      .catch((value) => resolve(false));
  });
}

async function checkConnection() {
  return new Promise((resolve, reject) => {
    var transporter = connectionTransport();
    transporter
      .verify()
      .then((value) => resolve(true))
      .catch((value) => resolve(false));
  });
}

module.exports = { wrapSendEmail, checkConnection };
