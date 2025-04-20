import 'dotenv/config';
import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
    try {
        // Extract form data from the request body
        const { name, prenom, email, phone, address } = await req.json();

        // Validate required fields
        if (!name || !prenom || !email || !phone || !address) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Initialize Resend with your API key
        const resend = new Resend("re_GaCag4pC_FshoGwwsnWbro7eXNFMY3Gun");

        // Define email options
        const mailOptions = {
            from: 'SolarInstall Contact <onboarding@resend.dev>',
            to: 'spl@solarstock.be',
            reply_to: email,
            subject: `SolarInstall Appointment Request (${name})`,
            text: `
SolarInstall Appointment Request

Name: ${name}
Prenom: ${prenom}
Email: ${email}
Phone: ${phone}
Address: ${address}
      `,
            html: `
<h2>SolarInstall Appointment Request</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Prenom:</strong> ${prenom}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Address:</strong> ${address}</p>
      `,
        };

        // Send the email using Resend
        const response = await resend.emails.send(mailOptions);

        // Handle errors from Resend
        if (response.error) {
            return NextResponse.json(
                { message: response.error.message },
                { status: 500 }
            );
        }

        // Return success response
        return NextResponse.json(
            { message: 'Appointment request sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        // Log and handle errors
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: 'Failed to send appointment request' },
            { status: 500 }
        );
    }
}