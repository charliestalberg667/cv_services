import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const resend = new Resend("re_GaCag4pC_FshoGwwsnWbro7eXNFMY3Gun");

    const mailOptions = {
      from: "SolarInstall Contact <onboarding@resend.dev>",
      //to: process.env.BUSINESS_EMAIL as string,
      to: "spl@solarstok.be",
      reply_to: email,
      subject: `SolarInstall Contact (${name}, ${email})`,
      text: `SolarInstall Contact (${name}, ${email})\nMESSAGE UNDERNEATH THIS LINE\n-------------------------------------\n\n${message}`,
    };

    const { error } = await resend.emails.send(mailOptions);
    if (error) {
      throw error;
    }
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
