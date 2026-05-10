import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return NextResponse.json({ error: 'Missing RESEND_API_KEY or FROM_EMAIL' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    from: `MyEnum Test <${fromEmail}>`,
    to: 'developer@myenum.in',
    subject: '[Test] Resend integration check',
    html: '<h2>Resend works.</h2><p>Email service connected successfully.</p>',
  });

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true, messageId: result.data?.id });
}
