import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, smsConsent, business, industry, interest, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email, and phone are required' }, { status: 400 });
  }

  const POSTMARK_API_KEY = process.env.POSTMARK_API_KEY;
  if (!POSTMARK_API_KEY) {
    return NextResponse.json({ error: 'Mail not configured' }, { status: 500 });
  }

  const emailBody = `
New inquiry from fourstones.ai
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

  const res = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': POSTMARK_API_KEY,
    },
    body: JSON.stringify({
      From: 'maxclaw2020@gmail.com',
      To: 'fourstonesdigital@gmail.com',
      Subject: `New inquiry: ${name}${business ? ` — ${business}` : ''} (${interest || 'General'})`,
      TextBody: emailBody,
      HtmlBody: `<pre style="font-family:sans-serif;font-size:14px;line-height:1.8;max-width:600px">${emailBody.replace(/\n/g, '<br>').replace(/━/g, '─')}</pre>`,
      ReplyTo: email,
      MessageStream: 'outbound',
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Postmark error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
