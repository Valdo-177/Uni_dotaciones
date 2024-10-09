import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { IForm } from "../models/models.types";

const transport = createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: "keynerdelahozcontencraft@gmail.com",
    pass: "cqsi tfod rcxn gxjo",
  },
} as SMTPTransport.Options);

export type Sender = {name: string; email: string;}

export const sendEmail = async (emailData: IForm) => {
  const { contacto, detalles, email, empresa, telefono } = emailData;
  return await transport.sendMail({
    from: process.env.EMAIL_NAME,
    to: ["raulhincapie8@gmail.com"],
    html: `
    <body>
      <h4>Empresa: ${empresa}</h4>
      <h4>Correo: ${email}</h4>
      <p>Detalles: ${detalles}</p>
    </body>
    `,
  });
};
