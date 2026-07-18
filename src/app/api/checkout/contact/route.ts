import { resolve4 } from 'node:dns/promises';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

async function resolveSmtpAddresses(hostname: string): Promise<string[]> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const addresses = await resolve4(hostname);

      if (addresses.length > 0) {
        return [...new Set(addresses)];
      }
    } catch (error) {
      lastError = error;
    }

    if (attempt < 3) {
      await wait(attempt * 750);
    }
  }

  if (lastError instanceof Error) {
    throw lastError;
  }

  throw new Error('SMTP hostname could not be resolved.');
}

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

    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactTo = process.env.CONTACT_TO?.trim() || smtpUser;

    const smtpHost = (
      process.env.SMTP_HOST || 'smtp.ionos.co.uk'
    ).trim();

    const smtpPort = Number(process.env.SMTP_PORT || 465);

    if (!smtpUser || !smtpPassword || !contactTo) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    if (!Number.isFinite(smtpPort)) {
      throw new Error('Invalid SMTP port.');
    }

    const smtpAddresses = await resolveSmtpAddresses(smtpHost);

    let lastSendError: unknown;

    for (const smtpAddress of smtpAddresses) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpAddress,
          port: smtpPort,
          secure: smtpPort === 465,

          auth: {
            user: smtpUser,
            pass: smtpPassword,
          },

          tls: {
            servername: smtpHost,
          },

          connectionTimeout: 20_000,
          greetingTimeout: 15_000,
          socketTimeout: 30_000,
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
        lastSendError = error;
      }
    }

    throw lastSendError || new Error('SMTP message could not be sent.');
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'The message could not be sent.' },
      { status: 500 }
    );
  }
}