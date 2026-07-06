// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { to, subject, text } = req.body;

//   if (!to || !subject || !text) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     // Create a transporter object using Gmail's SMTP server
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER, // Your Gmail address
//         pass: process.env.GMAIL_PASS, // Your Gmail app password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.GMAIL_USER, // Sender's email address
//       to,                          // Recipient's email address
//       subject,                     // Subject line
//       text,                        // Plain text body
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: 'Email sent', info });
//   } catch (error) {
//     res.status(500).json({ message: 'Error sending email', error });
//   }
// }

const mailId = "prepmedix@gmail.com";
// const password = "suhail00@@";
const password = "komd ezxa uydp sf";


// const mailId = "noreply@billio.in";
// const password = "Avilaksh@123";
// const mailId = "prepmedix@gmail.com";
// const password = "your-app-password-here";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    // Parse the request body
    const { to, subject, text } = await req.json();

    // Validate input fields
    if (!to || !subject || !text) {
      return NextResponse.json(
        { message: "Missing required fields", success: false },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      port: 465, // Use port 465 for secure connections
      host: "smtp.gmail.com",
      secure: true, // Use SSL for secure connection
      auth: {
        user: mailId,
        pass: password,
      },
    });

    // Define email options
    const mailOptions = {
      from: `"PrepMedix" <${mailId}>`, // Sender's name and email
      to, // Recipient's email address
      replyTo: mailId, // Email for replies
      subject, // Email subject
      text, // Email body in plain text
    };

    // Send the email
    console.log('0---', mailId, password);
    const info = await transporter.sendMail(mailOptions);

    console.log('info::', info);
    console.log("Email sent:", info.response);

    return NextResponse.json(
      { message: "Mail sent successfully.", success: true, info },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while sending mail:", error);
    return NextResponse.json(
      { message: "Error while sending mail", success: false, error },
      { status: 500 }
    );
  }
};
