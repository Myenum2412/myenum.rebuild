import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().min(1, 'Country is required'),
  state: z.string().min(1, 'State is required'),
  city: z.string().optional(),
  phoneCountryCode: z.string().min(1, 'Phone country code is required'),
  phone: z.string().min(7, 'Phone must be at least 7 digits'),
  service: z.string().min(1, 'Please select a service'),
  dateRange: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const d = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error('Missing Resend config:', { hasKey: !!apiKey, hasFrom: !!fromEmail });
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const location = [d.city, d.state, d.country].filter(Boolean).join(', ');
    const fullPhone = `${d.phoneCountryCode} ${d.phone}`;

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;line-height:1.6;color:#1a1a1a;max-width:650px;margin:0 auto;padding:20px;background-color:#f4f7f6;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#10b981 0%,#064e3b 100%);padding:35px 25px;border-radius:16px 16px 0 0;text-align:center;">
    <h1 style="color:white;margin:0;font-size:26px;letter-spacing:1px;">📩 New Contact Lead</h1>
    <p style="color:rgba(255,255,255,0.85);margin-top:8px;font-size:13px;">Received via MyEnum Contact Form • ${new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}</p>
  </div>

  <div style="background-color:white;padding:30px 35px;border-radius:0 0 16px 16px;border:1px solid #e2e8f0;border-top:none;">

    <!-- Client Info -->
    <div style="margin-bottom:28px;">
      <h2 style="color:#10b981;font-size:16px;margin:0 0 12px;border-bottom:2px solid #10b981;padding-bottom:8px;text-transform:uppercase;letter-spacing:1px;">👤 Client Information</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#64748b;width:130px;font-weight:600;">Name:</td><td style="padding:6px 0;color:#1e293b;font-weight:700;font-size:15px;">${escapeHtml(d.name)}</td></tr>
        <tr style="background:#f8fafc;"><td style="padding:6px 0;color:#64748b;font-weight:600;">Email:</td><td style="padding:6px 0;"><a href="mailto:${d.email}" style="color:#10b981;text-decoration:none;font-weight:600;">${escapeHtml(d.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-weight:600;">Phone:</td><td style="padding:6px 0;"><a href="tel:${fullPhone.replace(/\s/g, '')}" style="color:#10b981;text-decoration:none;font-weight:600;">${escapeHtml(fullPhone)}</a></td></tr>
        <tr style="background:#f8fafc;"><td style="padding:6px 0;color:#64748b;font-weight:600;">Location:</td><td style="padding:6px 0;color:#1e293b;">${escapeHtml(location)}</td></tr>
      </table>
    </div>

    <!-- Service Details -->
    <div style="margin-bottom:28px;">
      <h2 style="color:#10b981;font-size:16px;margin:0 0 12px;border-bottom:2px solid #10b981;padding-bottom:8px;text-transform:uppercase;letter-spacing:1px;">🛠 Service Details</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#64748b;width:130px;font-weight:600;">Service:</td><td style="padding:6px 0;color:#1e293b;font-weight:700;">${escapeHtml(d.service)}</td></tr>
        ${d.dateRange ? `<tr style="background:#f8fafc;"><td style="padding:6px 0;color:#64748b;font-weight:600;">Preferred Date:</td><td style="padding:6px 0;color:#1e293b;">${escapeHtml(d.dateRange)}</td></tr>` : ''}
        <tr style="${d.dateRange ? '' : 'background:#f8fafc;'}"><td style="padding:6px 0;color:#64748b;font-weight:600;">Submitted:</td><td style="padding:6px 0;color:#1e293b;">${new Date().toLocaleString('en-IN')}</td></tr>
      </table>
    </div>

    <!-- Message -->
    <div style="margin-bottom:28px;">
      <h2 style="color:#10b981;font-size:16px;margin:0 0 12px;border-bottom:2px solid #10b981;padding-bottom:8px;text-transform:uppercase;letter-spacing:1px;">💬 Message</h2>
      <div style="background-color:#f8fafc;padding:18px;border-radius:10px;border-left:4px solid #10b981;">
        <p style="margin:0;color:#334155;white-space:pre-wrap;font-style:italic;line-height:1.7;">"${escapeHtml(d.message)}"</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <div style="text-align:center;padding-top:10px;border-top:1px solid #e2e8f0;">
      <a href="mailto:${d.email}" style="background-color:#10b981;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:13px;display:inline-block;margin:4px;">✉️ Reply to Client</a>
      <a href="tel:${fullPhone.replace(/\s/g, '')}" style="background-color:#064e3b;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:13px;display:inline-block;margin:4px;">📞 Call Client</a>
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align:center;margin-top:25px;color:#94a3b8;font-size:11px;letter-spacing:0.5px;">
    <p>© ${new Date().getFullYear()} MyEnum Agency — Lead Management System</p>
    <p>Auto-generated from contact form at myenum.in</p>
  </div>
</body></html>`;

    const result = await resend.emails.send({
      from: `MyEnum Website <${fromEmail}>`,
      to: 'developer@myenum.in',
      replyTo: d.email,
      subject: `[Lead] ${d.service} — ${d.name} (${d.country})`,
      html,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('Contact email sent:', result.data?.id);
    return NextResponse.json({ message: 'Email sent successfully', messageId: result.data?.id }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
