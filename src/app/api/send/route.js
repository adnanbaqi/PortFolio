import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing fields' },
        { status: 400 }
      );
    }

    console.log(`📨 Incoming contact form:\nFrom: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Contact Form Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
