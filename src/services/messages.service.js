import { Clients } from "../lib/sequelize.js";
import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: process.env.service,
  auth: {
    type: process.env.type,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
  },
});

export const newMessage = (name, phone, email, niche, meet, sendEmail) => {
  return Clients.create({
    name: name,
    phone: phone,
    email: email,
    niche: niche,
    meet: meet,
    sendEmail: sendEmail,
  });
};

export const emailSender = (name, phone, email, niche, meet) => {
  const info = transporter.sendMail({
    auth: {
      user: process.env.usersmtp,
      refreshToken: process.env.refreshToken,
      accessToken: process.env.accessToken,
      expires: 1484314697598,
    },
    from: "agenciatrillion01@gmail.com",
    to: "agenciatrillion01@gmail.com",

    subject: "Nova mensagem!",
    html: `<h4>Eba, temos um novo cliente!</h4> <br><b>Nome: ${name}</b><br><b>phone: ${phone}</b><br><b>email: ${email}</b><br><b>Nicho: ${niche}</b><br><b>Onde conheceu?: ${meet}</b>`,
  });
  console.log(info.messageId);
};
