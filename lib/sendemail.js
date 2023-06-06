import nodemailer from "nodemailer";
require("dotenv").config();

const sendEmail = async (name, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.USER,
      subject: `Portfolio Contactme Email.`,
      html: `<h4>${email}</h4><h4>${name}</h4><p>${message}</p>`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
