import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  source: z.string().optional(),
  message: z.string().optional(),
});

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const d = newsletterSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error('Missing Resend config');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const isWhatsApp = d.source === 'whatsapp_widget';
    const sourceLabel = isWhatsApp ? '💬 WhatsApp Inquiry' : (d.source || '📧 Newsletter Signup');
    const accentColor = isWhatsApp ? '#10b981' : '#22c55e';

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;line-height:1.6;color:#1a1a1a;max-width:600px;margin:0 auto;padding:20px;background-color:#f4f7f6;">

  <div style="background:linear-gradient(135deg,${accentColor} 0%,#064e3b 100%);padding:35px 25px;border-radius:16px 16px 0 0;text-align:center;">
    <h1 style="color:white;margin:0;font-size:26px;letter-spacing:1px;">🎯 New Lead Captured</h1>
    <p style="color:rgba(255,255,255,0.85);margin-top:8px;font-size:13px;">${sourceLabel} • ${new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</p>
  </div>

  <div style="background-color:white;padding:30px 35px;border-radius:0 0 16px 16px;border:1px solid #e2e8f0;border-top:none;">

    <div style="margin-bottom:25px;">
      <h2 style="color:${accentColor};font-size:16px;margin:0 0 12px;border-bottom:2px solid ${accentColor};padding-bottom:8px;text-transform:uppercase;letter-spacing:1px;">👤 Lead Information</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#64748b;width:120px;font-weight:600;">Name:</td><td style="padding:6px 0;color:#1e293b;font-weight:700;">${escapeHtml(d.name || 'Not provided')}</td></tr>
        <tr style="background:#f8fafc;"><td style="padding:6px 0;color:#64748b;font-weight:600;">Email:</td><td style="padding:6px 0;"><a href="mailto:${d.email}" style="color:${accentColor};text-decoration:none;font-weight:600;">${escapeHtml(d.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-weight:600;">Source:</td><td style="padding:6px 0;"><span style="background-color:#f1f5f9;padding:4px 10px;border-radius:5px;font-size:12px;font-weight:600;color:#475569;">${escapeHtml(sourceLabel)}</span></td></tr>
      </table>
    </div>

    ${d.message ? `
    <div style="margin-bottom:25px;">
      <h2 style="color:${accentColor};font-size:16px;margin:0 0 12px;border-bottom:2px solid ${accentColor};padding-bottom:8px;text-transform:uppercase;letter-spacing:1px;">💬 Message / Inquiry</h2>
      <div style="background-color:#f8fafc;padding:18px;border-radius:10px;border-left:4px solid ${accentColor};">
        <p style="margin:0;color:#334155;white-space:pre-wrap;font-style:italic;line-height:1.7;">"${escapeHtml(d.message)}"</p>
      </div>
    </div>` : ''}

    <div style="text-align:center;padding-top:10px;border-top:1px solid #e2e8f0;">
      <a href="mailto:${d.email}" style="background-color:${accentColor};color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:13px;display:inline-block;margin:4px;">✉️ Reply to Lead</a>
    </div>
  </div>

  <div style="text-align:center;margin-top:25px;color:#94a3b8;font-size:11px;letter-spacing:0.5px;">
    <p>© ${new Date().getFullYear()} MyEnum Agency — Automation System</p>
    <p>Auto-generated from ${isWhatsApp ? 'WhatsApp widget' : 'newsletter form'} at myenum.in</p>
  </div>
</body></html>`;

    const result = await resend.emails.send({
      from: `MyEnum Notification <${fromEmail}>`,
      to: 'developer@myenum.in',
      replyTo: d.email,
      subject: `[Lead] ${sourceLabel} — ${d.name || 'Visitor'} (${new Date().toLocaleDateString('en-IN')})`,
      html,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Lead captured and email sent' }, { status: 200 });

  } catch (error) {
    console.error('Newsletter/WhatsApp lead error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
