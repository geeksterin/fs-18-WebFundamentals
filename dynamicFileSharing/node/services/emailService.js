import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.UESR_EMAIL,
    pass: process.env.USER_PASS,
  },
});

export async function sendEmail(mailOptions) {
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
}
