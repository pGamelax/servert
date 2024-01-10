import { Clients } from "../lib/sequelize.js";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "agenciatrillion01@gmail.com",
    pass: "Rmfsq21bla6@",
    clientId:
      "971863165434-opakb0t0vm6lp0tg449hlpfsdeat668k.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04hKkW3G6H80qCgYIARAAGAQSNwF-L9IrnFNt9lRW3_S5PbE4csrn-NIbKTMb51KRwSuzuQmgT_g5c4sEHinz_f5NAWPpPZyDBO0",
  },
});

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
