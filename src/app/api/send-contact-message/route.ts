import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  try {
    const { name, email, phoneNo, message } = await req.json();

    if (!name || !email || !phoneNo || !message) {
      return NextResponse.json(
        { message: "All fields are required.", success: false },
        { status: 400 }
      );
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format.", success: false },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { message: "Email credentials are not configured.", success: false },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: adminEmail,
        pass: adminPassword,
      },
    });

    const mailOptions = {
      from: `"${name}" <${adminEmail}>`, // Admin email as sender
      to: adminEmail,
      replyTo: email, // User's email for replies
      subject: "Message From Website",
      text: `Name: ${name}\nPhone Number: ${phoneNo}\n\nMessage:\n${message}`,
    };    

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully.", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error while handling request:", error);

    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
};
