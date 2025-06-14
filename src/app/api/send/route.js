import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const dynamic = "force-dynamic"; 

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Incoming contact form:", email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject,
      html: `
        <h1>${subject}</h1>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
