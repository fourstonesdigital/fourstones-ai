import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, smsConsent, business, industry, interest, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email, and phone are required' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fourstonesdigital@gmail.com',
      pass: process.env.FOURSTONES_GMAIL_APP_PASSWORD,
    },
  });

  const emailBody = `
New customer inquiry — fourstones.ai contact form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     ${name}
Email:    ${email}
Phone:    ${phone}
SMS OK:   ${smsConsent ? 'Yes — consented to SMS' : 'No — did not consent to SMS'}

Business: ${business || 'Not provided'}
Industry: ${industry || 'Not provided'}
Interest: ${interest || 'Not provided'}

Message:
${message || '(no message)'}
  `.trim();

  try {
    await transporter.sendMail({
      from: '"Four Stones AI" <fourstonesdigital@gmail.com>',
      to: 'fourstonesdigital@gmail.com',
      replyTo: email,
      subject: `[fourstones.ai] New inquiry: ${name}${business ? ` — ${business}` : ''} (${interest || 'General'})`,
      text: emailBody,
    });
  } catch (err) {
    console.error('Gmail send error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
