import { Clients } from "../lib/sequelize.js";
import nodemailer from "nodemailer";
console.log(process.env.service);
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.usersmpt,
    accessToken: process.env.accessToken,
}});

export const newMessage = (name, phone, email, niche, meet, sendEmail) => {
  console.log(name, phone, email, niche, meet, sendEmail);
  return Clients.create({
    name: name,
    phone: phone,
    email: email,
    niche: niche,
    meet: meet,
    sendEmail: sendEmail,
  });
};

export const emailSender = async (name, phone, email, niche, meet) => {
  const info = await transporter.sendMail({
    from: "agenciatrillion01@gmail.com",
    to: "agenciatrillion01@gmail.com",

    subject: "Nova mensagem!",
    html: `<h4>Eba, temos um novo cliente!</h4> <br><b>Nome: ${name}</b><br><b>phone: ${phone}</b><br><b>email: ${email}</b><br><b>Nicho: ${niche}</b><br><b>Onde conheceu?: ${meet}</b>`,
  });
  console.log(info.messageId);
};
