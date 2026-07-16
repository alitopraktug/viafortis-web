import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Please complete all fields.' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactTo = process.env.CONTACT_TO || smtpUser;

    if (!smtpUser || !smtpPassword || !contactTo) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ionos.co.uk',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `"Via Fortis Website" <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New Website Enquiry - ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'The message could not be sent.' },
      { status: 500 }
    );
  }
}