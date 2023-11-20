import nodemailer from "nodemailer";
import config from "../config";

export const sendMail = async (to, token) => {
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    auth: {
      user: config.SMTP_USERNAME,
      pass: config.SMTP_PASSWORD,
    },
  });
  let info = await transporter.sendMail({
    from: `"Aplikacja Treningowo-zywieniowa" <${config.SMTP_USERNAME}>`,
    to,
    subject: "Password reset",
    text: `Twoje hasło do resetu ${"localhost:3001/reset/" + token}`,
  });
};
