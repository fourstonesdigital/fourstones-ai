import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, business, industry, interest, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
  }

  const POSTMARK_API_KEY = process.env.POSTMARK_API_KEY;
  if (!POSTMARK_API_KEY) {
    return NextResponse.json({ error: 'Mail not configured' }, { status: 500 });
  }

  const emailBody = `
New contact form submission from fourstones.ai

Name: ${name}
Email: ${email}
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
      Subject: `New inquiry from ${name}${business ? ` — ${business}` : ''} via fourstones.ai`,
      TextBody: emailBody,
      HtmlBody: `<pre style="font-family:sans-serif;font-size:14px;line-height:1.6">${emailBody.replace(/\n/g, '<br>')}</pre>`,
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
