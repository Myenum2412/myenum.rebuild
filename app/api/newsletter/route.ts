import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  source: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = newsletterSchema.parse(body);

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials');
      // Still return success to avoid showing errors to users
      return NextResponse.json(
        { message: 'Lead captured successfully' },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Helper function to escape HTML
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const isWhatsApp = validatedData.source === 'whatsapp_widget';
    const sourceLabel = isWhatsApp ? 'WhatsApp Inquiry' : (validatedData.source || 'Newsletter Signup');
    const accentColor = isWhatsApp ? '#10b981' : '#22c55e'; // Emerald for WhatsApp

    // Email content
    const mailOptions = {
      from: `"MyEnum Notification" <${process.env.EMAIL_USER}>`,
      to: 'developer@myenum.in',
      replyTo: validatedData.email,
      subject: `[Lead] ${sourceLabel} from ${validatedData.name || 'Visitor'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f7f6;">
          <div style="background: linear-gradient(135deg, ${accentColor} 0%, #064e3b 100%); padding: 40px 20px; border-radius: 16px 16px 0 0; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: 1px;">New Lead Captured</h1>
            <p style="color: rgba(255,255,255,0.8); margin-top: 10px; font-size: 14px;">${sourceLabel}</p>
          </div>
          
          <div style="background-color: white; padding: 35px; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0; border-top: none; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 30px;">
              <h2 style="color: ${accentColor}; font-size: 18px; margin-top: 0; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">User Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${escapeHtml(validatedData.name || 'Not provided')}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${validatedData.email}" style="color: ${accentColor}; text-decoration: none; font-weight: 600;">${escapeHtml(validatedData.email)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Source:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><span style="background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${escapeHtml(sourceLabel)}</span></td>
                </tr>
              </table>
            </div>

            ${validatedData.message ? `
            <div style="margin-top: 30px;">
              <h2 style="color: ${accentColor}; font-size: 18px; margin-top: 0; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Message / Inquiry</h2>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid ${accentColor}; margin-top: 15px;">
                <p style="margin: 0; color: #334155; white-space: pre-wrap; font-style: italic;">"${escapeHtml(validatedData.message)}"</p>
              </div>
            </div>
            ` : ''}

            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${validatedData.email}" style="background-color: ${accentColor}; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block; transition: all 0.3s ease;">Reply to Lead</a>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; color: #94a3b8; font-size: 11px; letter-spacing: 0.5px;">
            <p>© ${new Date().getFullYear()} MyEnum Agency Automation System</p>
            <p>This is an automated notification from your website's interaction widget.</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Lead captured and email sent' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter/WhatsApp lead error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}